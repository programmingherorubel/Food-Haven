import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const {user,loading} = useContext(AuthContext)
   

   if(loading){
    return <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}><div class="spinner-grow text-danger" style={{fontSize:'100px'}} role="status"></div></div>
   
   }

   if(user){
    return children
   }

   return <Navigate to='/login' state={{from:location}}  replace></Navigate>
};

export default PrivateRoute;