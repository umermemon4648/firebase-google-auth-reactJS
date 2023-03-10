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
    useEffect(() => {
      console.log(user)
  }, []);
  return (
    <>
      <button onClick={googleLoginHandler} type="submit">Google</button>
      <button onClick={facebookLoginHandler} type="submit">Facebook</button>
    </>
  )
}

export default Signin
