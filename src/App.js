import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
// import Header from './components/Header'
// import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Login from './components/Login'


// import firebase from 'firebase/app';
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // Your Firebase project configuration
  apiKey: "AIzaSyDcrmUwmhzjpdXdzdVDQkMUjdTnPiLLfso",
  authDomain: "birthdayapp-abfa4.firebaseapp.com",
  databaseURL: "https://birthdayapp-abfa4-default-rtdb.firebaseio.com",
  projectId: "birthdayapp-abfa4",
  storageBucket: "birthdayapp-abfa4.appspot.com",
  messagingSenderId: "774991028845",
  appId: "1:774991028845:web:93306785443bb584859564",
  measurementId: "G-W86RL9XMQ8"
};

firebase.initializeApp(firebaseConfig);



const App = () => {
  return (

    <Router>
      {/* <Header /> */}
      <main className='py-3'>
        <Container>
        <Route path='/' component={Login} exact />
          <Route path='/home' component={HomeScreen} exact />
          <Route path='/wishes' component={ProductScreen} />
        </Container>
      </main>
      {/* <Footer /> */}
    </Router>

  )
}

export default App
