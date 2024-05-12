import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {LayoutAnimation, Platform, UIManager} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

interface UseDataHookResult {
  eventData: Message[] | null;
  modalData: Message | undefined;
  setModalDataPressHandler: (data: Message | undefined) => void;
  joinPressHandler: (uid: string) => void;
}

interface Message {
  address: string;
  description: string;
  id: string;
  lat: number;
  lng: number;
  name: string;
  status: number;
  type: string;
  volunteersAskAmount: number;
  createdAt: string;
  uid: string;
  volunteers: any;
}
export const id = auth().currentUser?.uid;

export default function useDataHook(): UseDataHookResult {
  const [eventData, setEventData] = useState<Message[] | null>(null);
  const [modalData, setModalData] = useState<Message | undefined>(undefined);

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  function setModalDataPressHandler(props: Message | undefined) {
    LayoutAnimation.configureNext(springAnimationConfig);
    setModalData(props);
  }

  async function joinPressHandler(props: string) {
    console.log(modalData);
    if (props) {
      if (modalData?.volunteers[id]) {
        await database().ref(`/events/${props}/volunteers/${id}`).set(null);
      } else {
        await database().ref(`/events/${props}/volunteers/${id}`).set(true);
      }

      if (modalData?.uid) {
        const snapshot = await database().ref(`/events/${props}`).once('value');
        const data = snapshot.val();
        setModalData({uid: props, ...data});
      }
    }
  }
  const springAnimationConfig = {
    duration: 700,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {type: LayoutAnimation.Types.spring, springDamping: 0.8},
  };

  useEffect(() => {
    const onValueChange = database()
      .ref(`/events`)
      .on('value', async snapshot => {
        try {
          const data = snapshot.val();

          if (typeof data === 'undefined') {
            setEventData(null);
          } else {
            const dataArray = Object.entries<Message>(data).map(
              ([uid, item]) => ({
                uid,
                ...item,
              }),
            );

            const storedData = await AsyncStorage.getItem('Deleted');
            const parsedData = storedData ? JSON.parse(storedData) : [];

            const filteredData = dataArray.filter(
              item => !parsedData.includes(item.uid),
            );

            setEventData(filteredData);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setEventData(null);
        }
      });

    return () => database().ref(`/events`).off('value', onValueChange);
  }, []);

  return {eventData, modalData, joinPressHandler, setModalDataPressHandler};
}
