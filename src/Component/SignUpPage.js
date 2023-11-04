import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../Component/loginPage.css'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebaseAuth';
import { NavLink,Link } from 'react-router-dom';
import {  toast } from 'react-toastify';










function SignUp() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  


const signup =(e) =>{
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      toast.success('sign in successfully', {
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
      console.log(error);
      let mute = document.querySelector('#dis');
      mute.innerHTML = 'Please Enter A Correct Email';
      toast.error('An error as occured', {
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











  return (
    <div className='loginCard'>
    <Card style={{   boxShadow:'3px 10px 50px black' }} class='card'>
    <Card.Body>
      <Card.Title style={{textAlign:'left'}}>Sign Up</Card.Title>
      <Card.Subtitle className="mb-2 text-muted" style={{textAlign:'left'}}>Create Your crendentials </Card.Subtitle>
      

      <Form  onSubmit={signup}>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign:'left'}}>
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <Form.Text className="text-muted" id="dis" tyle={{textAlign:'left'}}>
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign:'left'}}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
        <Form.Text className="text-muted" style={{textAlign:'left'}}>
          Password Length should be atleast 6
        </Form.Text>
      </Form.Group>
     
      
     
      <Button variant="primary" type="submit" className='btnLogin'>
        Sign UP
      </Button>
      <section className="signipSection"><br/>
      <pd className='signuptext'>If you have account, please Log in to your Account  </pd>
     <NavLink to="/LoginPage">
      
       <Button variant="primary" type="submit" className='btnSignup'>
        Log IN
      </Button>
      </NavLink>
      </section>




    </Form>




      
     
      
    </Card.Body>
  </Card>
  </div>
  )
}

export default SignUp; 