import './home.css';
import "mapbox-gl/dist/mapbox-gl.css"
import Map from '../components/Map';
import user from './img/user.jpg'
import breakdown from './img/breakdown.png'
import reserve from './img/reserve.png'
import logo from './img/mech-logo.PNG'
import  {Link } from 'react-router-dom'





function Home() {
  

  

  return (
    <div className="Home">
       <div className="wrapper">
       <Map />
      
      
      <div className="actionItems">
      <div className="logo-name">
      <div className="logo"></div>
      <div className="profile">
        <div className="name">Ayo Badejo</div>
        <img src={user} alt="" className="userimg" />
      </div>
      </div>
      <div className="actionbuttons">
        <Link to='/search'>
          <div className="actionbutton"><img src={breakdown} alt="/" /> Breakdown</div>
        </Link>
        <Link>
        <div className="actionbutton"><img src='https://img.freepik.com/free-vector/car-service-abstract-concept-illustration_335657-3737.jpg?w=740' alt="/" /> Check-up</div>
        </Link>
        <Link>
          <div className="actionbutton"><img src={reserve} alt="/" /> Reserve</div>
        </Link>
        
      </div>
      <div className="inputbutton">
        Location?
      </div>
    </div>
    </div>
      </div>
  );
}

export default Home;
