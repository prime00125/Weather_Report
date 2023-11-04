import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../Component/loginPage.css'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Component/firebaseAuth'
import { NavLink, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';





  





function LoginPage() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  
const nav=useNavigate();

const login =(e) =>{
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      nav('/Weather_App ')
      
      
      toast.success('Login suceesfull', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    })
    .catch((error)=>{
      let mute = document.querySelector('#dis');
      let passMute = document.querySelector('#dis2');
      passMute.innerHTML = 'Please enter your password correctly';
      mute.innerHTML = 'Please Enter A Correct Email';
      toast.error('there is an error occred', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    })
}








//  


  return (
    <div className='loginCard'>
    <Card style={{  boxShadow:'3px 10px 50px black' }}className='card'>
    <Card.Body>
      <Card.Title style={{textAlign:'left'}}>Login</Card.Title>
      <Card.Subtitle className="mb-2 text-muted" style={{textAlign:'left'}}>Use Your crendentials </Card.Subtitle>
      

      <Form  onSubmit={login}>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign:'left'}}>
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <Form.Text className="text-muted" id="dis">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign:'left'}}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
        <Form.Text className="text-muted" id="dis2">
          
        </Form.Text>
      </Form.Group>
     


     
      <Button variant="primary" type="submit" className='btnLogin'>
        Log IN
      </Button>
      <section className="signipSection"><br/>
      <pd className='signuptext'>If you dont have account, please create a accont </pd>
     <NavLink to="/SignUpPage">
      
       <Button variant="primary" type="submit" className='btnSignup'>
        Sing UP
      </Button>
      </NavLink>
      </section>

    </Form>




      
     
      
    </Card.Body>
  </Card>
  
  </div>
      
  )
}

export default LoginPage