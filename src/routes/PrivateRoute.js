import React from 'react'
import { useUserContext } from '../stores/AppState';
import { Navigate } from 'react-router';
import Loading from '../components/Loading';
export default function PrivateRoute({ children , route, check_user, check_admin}) {
    
    const {user,authloading, isAdmin, adminLoading} = useUserContext();
    console.log('Adminnn'+isAdmin);
    if(authloading){
        return <Loading loading={authloading}/>
    }
    if(check_user===true){
        if(check_admin==false){
            return user ? children : <Navigate to={route} />;
        }
        else{
            if(user){
                return isAdmin ? children : <Navigate to='/'/>
            }
            else{
                return (<Navigate to={route} />)
            }
        }
    }
    else{
        return user===null ? children : <Navigate to={route} />;
    }
  }
