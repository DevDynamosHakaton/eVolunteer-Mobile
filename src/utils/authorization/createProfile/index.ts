import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

interface Props {
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  userId: string | undefined;
  email: string | null;
  mobileNumber: string | null;
  avatarUrl: string | null;
  nationality: string | null;
  city: string | null;
  birthDate: string;
  qualification: string | undefined;
  role: string | undefined;
  sex: string | undefined;
  status: string | undefined;
}

export default function createProfile({
  firstName,
  lastName,
  middleName,
  userId,
  email,
  mobileNumber,
  avatarUrl,
  nationality,
  city,
  birthDate,
  qualification,
  role,
  sex,
  status,
}: Props) {
  const newData = {
    firstName,
    lastName,
    middleName,
    userId,
    email,
    mobileNumber,
    avatarUrl,
    nationality,
    city,
    birthDate,
    qualification,
    role,
    sex,
    status,
  };

  database()
    .ref(`users/${userId}`)
    .once('value')
    .then(snapshot => {
      if (!snapshot.exists()) {
        database().ref(`users/${userId}`).update(newData);
      }
    })
    .catch(() => {
      auth().signOut();
    });
}
