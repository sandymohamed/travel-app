import { useEffect, useState } from 'react';
import './hotelDetails.scss';
import {getHotelById} from '../../../services/hotelsServ'
import AOS from 'aos';
import "aos/dist/aos.css"

const HotelDetails = ({hotelId}) => {

console.log(hotelId)
    const [hotel, setHotel]=useState({})

    useEffect(()=> {
        AOS.init();
        getHotelById(`${hotelId}`).then((res)=>setHotel(res))
    },[])

    return (
        <>
<div className='det-container' data-aos="fade-out" data-aos-delay="400">
  {  (hotel)&&(
    <>
        <h1>{hotel.HotelName}</h1>
        {(hotel.City)&& (<h3>{hotel.City.City_Name }</h3>)}
        <p>{hotel.Evaluation} stars</p>
        <p>Price: {hotel.Price}$</p>
        <p>{hotel.Description}</p>
        <hr />

       <div className="mapouter">
            <div className="gmap_canvas">
            {(hotel.City)&&(
                <iframe
                    title='map'
                    id="gmap_canvas" 
                  src={`https://maps.google.com/maps?q=${hotel.HotelName},${hotel.City.City_Name}&t=&z=13&ie=UTF8&iwloc=&output=embed` }
                 
                 frameBorder="0"
                    scrolling="no"
                    marginHeight="0" 
                    marginWidth="0">
                </iframe>
            )}
                    </div>
                    </div> 


    </>
    )}

</div>
        </>
    );
};

export default HotelDetails;