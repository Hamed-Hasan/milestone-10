import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../../firebase.init";
import Spinner from "../../../components/Spinner/Spinner";
import VerifyMail from "../VerifyMail/VerifyMail";
const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  const location = useLocation();
  const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
  if (loading) {
    return <Spinner />;
  }

// main
  // if (user) {
  //   return children;
  // } else {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }
  if (!user) {
 
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // verify mail 
  if(!user.emailVerified){
    return <VerifyMail/>
  
  }
  return children;

  // user.providerData[0]?.providerId ==='password' &&  


};

export default RequireAuth;
