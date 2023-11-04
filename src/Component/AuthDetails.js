import { onAuthStateChanged, signOut } from "firebase/auth";
import {React, useEffect, useState} from 'react'
import {auth} from '../Component/firebaseAuth'
import { NavLink, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import './Weather.css'

const AuthDetails = () =>{
    const [authUser, setAuthUser] = useState(null);
    const nav = useNavigate();
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) =>{
          
            if(user)
             setAuthUser(user);
            else
             setAuthUser(null);

        });
        
        return ()=>{
            listen();
        }
    },[]);
    
    const userSignOut = ()=>{
        signOut(auth)
            .then(()=>{
                console.log("User signed out Successfully")
                nav('/');
                toast.success('WOW! You signed out successfully')
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    // style={{
    //     border:'2px solid ',
    //     display:'flex',
    //     justifyContent: 'space-around',
    //     position : 'relative',
    //     top:'10px',
    //     borderRadius : '10px',
    //     width:'40%',
    //     alignItems: 'center',
    //     left: '30%',
    //     color:'white',
    //     backgroundImage: 'linear-gradient(to right,red,purple,blue,red)',
    //     boxShadow: '2px 3px 10px blue',
    //     height: '5vh',
        
        
    // }} 


    return(
        <div  id="signOut">
        {authUser ? (
        <>
        
            <h5> {` ${authUser.email}`}</h5>
            <button onClick={userSignOut} className="btnHome" style={{
                height: '5vh',
            }}>Sign out</button>
            </>) :(
            <h2>signed out</h2>)}
        </div>
    )

}
export default AuthDetails;