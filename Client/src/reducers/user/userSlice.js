import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userLogin, userLogout, userSignup, userCompletion, userVerification  } from "./userService";
import jwt_decode from "jwt-decode";

// Get user from localStorage
let user = JSON.parse(localStorage.getItem('user'));
if(user) {
  const decode = jwt_decode(user.token);
  if(decode.exp < new Date().getTime()/1000) {user = null;};
}


//initial state
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}
//signup
export const signup = createAsyncThunk(
    "user/signup", 
    async(user, thunkAPI) => {
      try{
        return await userSignup(user);
      }
      catch(error){
        let message = error.response.data.message;
  
        return thunkAPI.rejectWithValue(message);
      }
  })
//login
export const login = createAsyncThunk(
  "user/login", 
  async(user, thunkAPI) => {
    try{
      return await userLogin(user);
    }
    catch(error){
      let message = error.response.data.message;

      return thunkAPI.rejectWithValue(message);
    }
})

//complete profile
export const completeProfile = createAsyncThunk(
  "user/complete", 
  async(userdata, thunkAPI) => {
    try{
      const token =  thunkAPI.getState().user.user.token;
      const role =  thunkAPI.getState().user.role.token;
      return await userCompletion(userdata, role, token);
    }
    catch(error){
      let message = error.response.data.message;

      return thunkAPI.rejectWithValue(message);
    }
})

//email verification
export const emailVerification = createAsyncThunk(
  "user/emailVerification", 
  async(token, thunkAPI) => {
    try{
      return await userVerification(token);
    }
    catch(error){
      let message = error.response.data.message;

      return thunkAPI.rejectWithValue(message);
    }
})

export const logout = createAsyncThunk(
  "user/logout",
  () => userLogout()
)


//Creating Slice
const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
     reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
     }
    },
    extraReducers: (builder) => {
      builder
        .addCase(signup.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
        })
        .addCase(signup.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.isError = false;
            state.isLoading = false;
            state.user = action.payload;

        })
        .addCase(signup.rejected, (state, action)=> {
            state.isError = true;
            state.message = action.payload;
            state.isLoading = false;
            state.user = null;

        })
        .addCase(login.pending, (state) => {
          state.isLoading = true;
          state.isSuccess = false;
          state.isError = false;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isSuccess = true;
          state.isError = false;
          state.isLoading = false;
          state.user = action.payload;

        })
        .addCase(login.rejected, (state, action)=> {
          state.isError = true;
          state.message = action.payload;
          state.isLoading = false;
          state.user = null;

        })
        .addCase(completeProfile.pending, (state) => {
          state.isLoading = true;
          state.isSuccess = false;
          state.isError = false;
        })
        .addCase(completeProfile.fulfilled, (state, action) => {
          state.isSuccess = true;
          state.isError = false;
          state.isLoading = false;
          state.user.isCompleted = true;

        })
        .addCase(completeProfile.rejected, (state, action)=> {
          state.isError = true;
          state.message = action.payload;
          state.isLoading = false;
          state.user = null;

        })
        .addCase(logout.fulfilled, (state)=> {
          state.user = null;
        })
    }
  })
  
  // Extract the action creators object and the reducer
  const { actions, reducer } = authSlice
  // Extract and export each action creator by name
  export const { reset } = actions
  // Export the reducer, either as a default or named export
  export default reducer
