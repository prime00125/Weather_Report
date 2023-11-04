import HomePageImage from '../asset/weather-homepage.jpg'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homelogo from  '../asset/Homelogo.png'
import { NavLink , Link} from'react-router-dom';




function HomePage() {
  return (
    <div className="App">
      <img src={HomePageImage} alt="Image" />
      <div className='body'>
       <Link to="/LoginPage"> <img src={Homelogo} alt="HomelogoImage" className='logo' /></Link>
        <p className='Heading'>Welcome to <br/> Weather Application</p>
        <NavLink
  to="/LoginPage"
  className={({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "Please wait its loading....",
      isActive ? "active" : "Ur Page is ready",
      isTransitioning ? "transitioning" : "Loading",
    ].join(" ")
  }
>
<button className='btnHome' >Let's Go </button>
</NavLink>

    </div>

    </div>
  );
}

export default HomePage;
