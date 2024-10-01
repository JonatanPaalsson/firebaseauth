import firebase from "firebase/compat/app";
import React, { useEffect, useState } from "react";
type Props = {
    children: React.ReactNode;
  }

const LoginContext =  React.createContext({
    loggedIn: false,
    setLoggedIn: (value: boolean) => {},
    loading: true,
}
)

const LoginProvider = (props: Props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setLoggedIn(!!user);
            setLoading(false)
        });
        return () => unregisterAuthObserver();
      }, []);

    return (<LoginContext.Provider value={{loggedIn, setLoggedIn, loading}}>
                {props.children}
            </LoginContext.Provider>)
}

export { LoginContext, LoginProvider }