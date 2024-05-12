import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ProfileData {
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
  role: number | undefined;
  sex: string | undefined;
  status: number | undefined;
}

const initialState: ProfileData = {
  firstName: '',
  lastName: '',
  middleName: '',
  userId: '',
  email: '',
  mobileNumber: '',
  avatarUrl: '',
  nationality: '',
  city: '',
  birthDate: '',
  qualification: '',
  role: 0,
  sex: '',
  status: 0,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Partial<ProfileData>>) => {
      return {...state, ...action.payload};
    },
  },
});

export const {setProfileData} = profileSlice.actions;
export default profileSlice.reducer;
