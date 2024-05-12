import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UseDataHookResult {
  eventData: Message[] | null;
  deleteAllPressHandler: () => void;
  deleteCurrentItem: (uid: string) => void;
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
}

export default function useDataHook(): UseDataHookResult {
  const [eventData, setEventData] = useState<Message[] | null>(null);
  const [deletedData, setDeletedData] = useState<any>();

  async function deleteAllPressHandler() {
    const data = eventData?.map(item => item.uid);

    const storedData = await AsyncStorage.getItem('Deleted');

    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);

      const isAlreadyIncluded = parsedData.some(
        (item: any) => JSON.stringify(item) === JSON.stringify(data),
      );

      if (!isAlreadyIncluded) {
        const serializedData = JSON.stringify(parsedData.concat(data));
        await AsyncStorage.setItem('Deleted', serializedData);
      }
    } else {
      const serializedData = JSON.stringify(data);
      await AsyncStorage.setItem('Deleted', serializedData);
    }
    setDeletedData(data);
  }

  async function deleteCurrentItem(params: string) {
    const data = [params];

    const storedData = await AsyncStorage.getItem('Deleted');

    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);

      const isAlreadyIncluded = parsedData.some(
        (item: any) => JSON.stringify(item) === JSON.stringify(data),
      );

      if (!isAlreadyIncluded) {
        const serializedData = JSON.stringify(parsedData.concat(data));
        await AsyncStorage.setItem('Deleted', serializedData);
      }
    } else {
      const serializedData = JSON.stringify(data);
      await AsyncStorage.setItem('Deleted', serializedData);
    }
    setDeletedData(data);
  }

  useEffect(() => {
    const onValueChange = database()
      .ref(`/events`)
      .on('value', async snapshot => {
        try {
          const data = snapshot.val();

          if (typeof data === 'undefined') {
            // If data is undefined, set eventData to null
            setEventData(null);
          } else {
            const dataArray = Object.entries<Message>(data).map(
              ([uid, item]) => ({
                uid,
                ...item,
              }),
            );

            // Fetch deleted items from AsyncStorage
            const storedData = await AsyncStorage.getItem('Deleted');
            const parsedData = storedData ? JSON.parse(storedData) : [];

            // Filter out deleted items
            const filteredData = dataArray.filter(
              item => !parsedData.includes(item.uid),
            );

            setEventData(filteredData);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setEventData(null); // Set eventData to null in case of error
        }
      });

    return () => database().ref(`/events`).off('value', onValueChange);
  }, [deletedData]);

  return {eventData, deleteAllPressHandler, deleteCurrentItem};
}
