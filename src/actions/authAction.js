import auth from "../config/firebaseAuth";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { loginRequest, loginFailure, loginSuccess, logout } from "../store/authSlice";
// import { async } from "@firebase/util";

// const provider = new GoogleAuthProvider()
// const {user} = await signInWithPopup(provider)
export const signInUserWithGoogle = ()=> async(dispatch)=>{
    dispatch(loginRequest())

    try{
        const provider = new GoogleAuthProvider()
        const {user} = await signInWithPopup(auth,provider)
        // const provider = new firebase.auth.GoogleAuthProvider()
        // const {user} = await firebase.auth().signInWithPopup(provider)
        dispatch(loginSuccess(user))
    }
    catch(error){
        dispatch(loginFailure(error.message))
    }

}

export const signInUserWithFacebook = ()=> async(dispatch)=>{
    dispatch(loginRequest())
    try{

        const provider = new FacebookAuthProvider()
        const {user} = await signInWithPopup(provider)
        // const provider = new firebase.auth.GoogleAuthProvider()
        // const {user} = await firebase.auth().signInWithPopup(provider)

        dispatch(loginSuccess(user))
    }
    catch(error){
        dispatch(loginFailure(error.message))
    }
}
// export const logOutUser = () => async(dispatch)=>{
//          await signOut(auth)
//     // await firebase.auth().signOut()
//     dispatch(logout())
// }

export const logOutUser = () => async(dispatch)=>{
      auth.auth().signOut()
        dispatch(logout())
        console.log("Logout")
// await firebase.auth().signOut()
}