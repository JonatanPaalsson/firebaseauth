import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import SignIn from './SignIn';
import config from "./firebaseconfig.json"
import 'firebase/compat/auth';
import './App.css';

firebase.initializeApp(config);

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver();
  }, []);

  if (!isSignedIn) {
    return (
      <SignIn />
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>{firebase.auth().currentUser?.displayName} is sign in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>

      </header>
    </div>
  );
}

export default App;
