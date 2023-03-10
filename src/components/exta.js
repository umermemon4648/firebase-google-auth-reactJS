import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config goes here
};

firebase.initializeApp(firebaseConfig);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setLoading, setError, setUser, clearUser } = authSlice.actions;

export const signInWithGoogle = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const signInWithFacebook = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const signOut = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await firebase.auth().signOut();
    dispatch(clearUser());
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const selectUser = (state) => state.auth.user;
export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
