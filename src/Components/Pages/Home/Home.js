import './home.scss';

import FlightCard from '../../Shared/cards/FlightCard';
import Vcart from '../../Shared/cards/Vcard';
import Carousel from 'react-bootstrap/Carousel';
import testslider from '../../../assets/card/dummy-image.jpg';
import flightImg from '../../../assets/header/flight.png';
import { useSelector } from 'react-redux';

const Home = () => {
  let { isLoggedIn, user } = useSelector(({ AuthReducer }) => AuthReducer);
  let { message } = useSelector((MessageReducer) => MessageReducer);
  console.log('Message =>', message);
  return (
    <>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block "
            src={testslider}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block"
            src={testslider}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={testslider}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="home_FlightContainer">
        <article className="flightContainer_article">
          <p>Explore Wonderful Experience</p>
          <h3>Visite popular Destinations</h3>
          <span>In The World</span>
        </article>
        <div className="flightContainer_discover">
          <div className="discover_cards">
            <Vcart></Vcart>
            <Vcart></Vcart>
            <Vcart></Vcart>
          </div>
          <button className="orangeBtn">Discover Now</button>
          <div className="discover_img">
            <img src={flightImg}></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
