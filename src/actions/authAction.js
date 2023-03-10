import auth from "../config/firebaseAuth";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { loginRequest, loginFailure, loginSuccess, logout } from "../store/authSlice";
import { async } from "@firebase/util";

// const provider = new GoogleAuthProvider()
// const {user} = await signInWithPopup(provider)
export const signInWithGoogle = ()=> async(dispatch)=>{
    dispatch(loginRequest())

    try{
        const provider = new GoogleAuthProvider()
        const {user} = await signInWithPopup(provider)
        dispatch(loginSuccess(user))
    }
    catch(error){
        dispatch(loginFailure(error))
    }

}

export const signInWithFacebook = ()=> async(dispatch)=>{
    dispatch(loginRequest())
    try{

        const provider = new FacebookAuthProvider()
        const {user} = await signInWithPopup(provider)
        dispatch(loginSuccess(user))
    }
    catch(error){
        dispatch(loginFailure(error))
    }
}
export const logOutUser = () => async(dispatch)=>{
    await signOut()
    dispatch(logout())
}