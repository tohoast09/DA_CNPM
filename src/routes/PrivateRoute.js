import React from 'react'
import { useUserContext } from '../stores/AppState';
import { Navigate } from 'react-router';
import Loading from '../components/Loading';
export default function PrivateRoute({ children , route, check_user}) {
    
    const {user,authloading} = useUserContext();
    if(authloading){
        return <Loading loading={authloading}/>
    }
    if(check_user===true){
        return user ? children : <Navigate to={route} />;
    }
    else{
        return user===null ? children : <Navigate to={route} />;
    }
  }
