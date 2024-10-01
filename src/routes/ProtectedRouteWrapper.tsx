import firebase from "firebase/compat/app";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../LoginContext";
import { useContext } from "react";

type Props = {
    children: React.ReactNode;
  }


const ProtectedRouteWrapper = (props: Props) => {
    const { loggedIn, loading } = useContext(LoginContext);

    if (loading) {
        
        return <div>loading</div>
    }

    if (!loggedIn) {
        return (<div>
            <Navigate to="/" replace />;
            </div>)
    }
    return (
        <div>
            {props.children}
        </div>)

}

export default ProtectedRouteWrapper;