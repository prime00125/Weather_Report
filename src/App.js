
import './App.css'; 
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import SignUpPage from './Component/SignUpPage';
import HomePage from './Component/HomePage';
import Weather from './Component/Weather_App'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  return (
    <div className="App">
     <ToastContainer/>

      <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route path="LoginPage" element={<LoginPage />} />
        <Route path="SignUpPage" element={<SignUpPage />} />
        <Route path="Weather_App" element={<Weather />} />
     </Routes>
     
    </div>
  );
}

export default App;
