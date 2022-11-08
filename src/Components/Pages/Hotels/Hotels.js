import HeaderComponent from '../../Shared/header/HeaderComponent';
import './hotels.scss';
//// Header Data ////

import headerimg from "../../../assets/header/hotelHeader.png"
import Vcart from '../../Shared/cards/Vcard';
import {getHotels, getHotelsByRate, getCities, getHotelsByCityName, getHotelByName, getHotelByPrice} from '../../../services/hotelsServ'
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const headerTitle =<>Select Your Home </>
const headerParagraph = <> Ana B7b bety Gdan , msh hadar aseebo laaaaaaaaaaa</>

const Hotels = () => {

const [hotels, setHotels] = useState([])
const [cities, setCities] = useState([])
const [city, setCity] = useState('')
const [search, setSearch] = useState('')
const [price, setPrice] = useState(null)


const filterHotels = (filter)=> {
    switch (filter) {
        case "getHotelsByRate":
            getHotelsByRate(5).then(res=> setHotels(res))
            break;

        case "city":
            getHotelsByCityName(city).then(res=> setHotels(res))
            break;
        case "name":
            getHotelByName(search).then(res=> setHotels(res))
            break;
        case "price":
        getHotelByPrice(price).then(res=> setHotels(res))
        break;

        default:
            getHotels().then(res=> setHotels(res))

            break;
    }
}


useEffect(() => {
    getCities().then(res => setCities(res) )
     
    getHotels().then(res=> setHotels(res))
}, [])


    return (
       <>
              <HeaderComponent img={headerimg} title={headerTitle} paragraph={headerParagraph}/>

                <div className="w-100">

                    nav bar 
                    & select city & date
                    & search


<input type="search" onChange={(e)=> setSearch(e.target.value) } />
<button onClick={()=>filterHotels('name') }> find</button>


<input type="number" onChange={(e)=> setPrice(e.target.value) } />
<button onClick={()=>filterHotels('price') }> find</button>

     <Dropdown 
     onSelect={(e)=> {
        setCity(e)
        console.log("c" + city);    
        console.log(e);    

    }  }>
      <Dropdown.Toggle variant="warning m-2" id="dropdown-basic" >
        Select City
      </Dropdown.Toggle>
      <button  onClick={()=>filterHotels('city') }>search</button>

      <Dropdown.Menu>
 

{
    cities &&(
    cities.map((city, i) => (
        <Dropdown.Item eventKey={city.City_Name} key={i} onSelect={(e)=> {setCity(e.target.value)}}> {city.City_Name}</Dropdown.Item>
        )    )
    )
}
     
      </Dropdown.Menu>
    </Dropdown>

                </div>
                <button  onClick={(e)=>filterHotels('getHotelsByRate') }>search by rate more than 5</button>

                <div className='d-flex w-100'>
                    <div >right filters
                        <div>price...................................................</div>
                        <div>stars</div>
                    </div>
                    <div >left cards

{/* {title,city ,description, Evaluation,Price} */}
                    {(hotels) && (
                        hotels.map((hotel,i)=>(
                            <Vcart key={i} title={hotel.HotelName} city={hotel.City.City_Name} Evaluation={hotel.Evaluation} Price={hotel.Price} description={hotel.Description}/>

                        ))
                        )
                    }
                    </div>
                </div>
       </>
    );
};

export default Hotels;