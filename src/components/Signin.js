import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInUserWithGoogle, signInUserWithFacebook, logOutUser } from '../actions/authAction'

const Signin = () => {
    const {user, isLoading, isAuthenticate, error} = useSelector((state)=> state.auth)
    const dispatch = useDispatch()

    const googleLoginHandler = () =>{
        dispatch(signInUserWithGoogle())
        
        // alert("google")
    }
    
    const facebookLoginHandler = () =>{
        dispatch(signInUserWithFacebook())
        // alert("fb")
    }
    const signOutHandler = () =>{
      dispatch(logOutUser())
      // alert("fb")
  }
    useEffect(() => {
      console.log(user)
      googleLoginHandler()
      facebookLoginHandler()
      signOutHandler()
  }, [dispatch]);
  return (
    <>
{!isAuthenticate? (
  <>
    <button onClick={googleLoginHandler} type="submit">Google</button>
    <button onClick={facebookLoginHandler} type="submit">Facebook</button>
  </>
) : (
  <button onClick={signOutHandler} type="submit">SignOut</button>
)}
      
    </>
  )
}

export default Signin
