import React, { useContext } from 'react';
import { AuthContext } from '../../Contextes/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => { 


    const {user, loading} = useContext(AuthContext);

    const location = useLocation()

    if(loading){
           return <p>Loading...</p>
    }


    if(!user?.uid){
          return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }


    return  children;

};

export default PrivateRoute;