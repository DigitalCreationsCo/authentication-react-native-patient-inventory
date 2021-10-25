import React from 'react'
import CustomButton from '../CustomButton';

export default function SocialSignInButtons() {

  const onSignInFacebook = () => {
    console.warn("Sign In Facebook");
  };

  const onSignInGoogle = () => {
    console.warn("Sign In Google");
  };

  const onSignInApple = () => {
    console.warn("Sign In Apple");
  };
  return (
    <>
      <CustomButton 
        fgColor="#4765A9"
        bgColor="#E7EAF4"
        text="Sign in with Facebook" onPress={onSignInFacebook} />
        <CustomButton 
        fgColor="#DD4D44"
        bgColor="#FAE9EA"
        text="Sign in with Google" onPress={onSignInGoogle} />
        <CustomButton 
        fgColor="#363636"
        bgColor="#e3e3e3"
        text="Sign in with AppleID" onPress={onSignInApple} />
    </>
  )
}
