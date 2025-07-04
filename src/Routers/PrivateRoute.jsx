import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({children}) {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

  return <Navigate to={'/login'} state={{from : location}} replace></Navigate>
}
