import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {

    const {user} = useContext(AuthContext);

    if(user){
        return children;
    }

  return <Navigate to={'/login'}></Navigate>
}
