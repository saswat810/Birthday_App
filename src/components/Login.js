import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {useHistory} from 'react-router-dom';
import { Container } from 'react-bootstrap'
import "./login.css";

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = async () => {
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { displayName, email } = result.user;
      // Do something with the user data
      console.log("hhhhhh", displayName, email)
     goBack()

    } catch (error) {
      console.log(error);
    }
  };

  let history = useHistory();
	const goBack = () => {
    history.push('/home')
	}


  return (
    <Container className="vertical-center bg">
          <div className='text-center col-sm-12 my-auto'>
        <h4 >Welcome buddy's
        <span role="img" aria-label="emoji">🤗</span></h4>
        <h5 style={{ marginTop : "2%"}}>Happy to have you here</h5>
        <button onClick={handleSignIn} style={{margin : "3%", fontSize:"15px"}}>Click here to Sign In with Google</button>
    </div>
  </Container>

  );
};

export default Login;
