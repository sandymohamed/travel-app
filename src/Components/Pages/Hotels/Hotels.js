import HeaderComponent from '../../Shared/header/HeaderComponent';
import './hotels.scss';
//// Header Data ////
import headerimg from "../../../assets/header/hotelHeader.png"
import Vcart from '../../Shared/cards/Vcard';
import FlightCard from '../../Shared/cards/FlightCard';
// import {getHotels} from '../../../services/hotelsServ'
import axios from 'axios'
// import {ENDPOINTS} from '../../../utils/endPoints' 
import { useEffect, useState } from 'react';

const headerTitle =<>Select Your Home </>
const headerParagraph = <> Ana B7b bety Gdan , msh hadar aseebo laaaaaaaaaaa</>

const Hotels = () => {


// const hotels = getHotels()
// console.log(hotels.data)

const [hotels, setHotels] = useState([])

// const getHotels = () => {
//     return axios.get(`http://localhost:8080/hotel/`)
//     .then(res => {
//         setHotels(res)
//     console.log("d"+hotels)})
//     .catch(err => console.log(err))
// }


useEffect(() => {
    // get all movies
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
        
}, [])


    return (
       <>
              <HeaderComponent img={headerimg} title={headerTitle} paragraph={headerParagraph}/>

                <div>
                    nav bar 
                    & select city & date
                    & search

                </div>

                <div className='d-flex'>
                    <div>right filters
                        <div>price...................................................</div>
                        <div>stars</div>
                    </div>
                    <div>left cards
{/* 
                    {
                        hotels.map((hotel,i)=>(
                            <Vcart key={i}  />

                        ))
                    } */}
                    </div>
                </div>
       </>
    );
};

export default Hotels;