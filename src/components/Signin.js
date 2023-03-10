import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Signin = () => {


    const googleLoginHandler = () =>{
        alert("google")
    }

    const facebookLoginHandler = () =>{
        alert("fb")

    }
  return (
    <>
      <button onClick={googleLoginHandler} type="submit">Google</button>
      <button onClick={facebookLoginHandler} type="submit">Facebook</button>
    </>
  )
}

export default Signin
