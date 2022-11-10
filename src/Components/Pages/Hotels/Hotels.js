import HeaderComponent from '../../Shared/header/HeaderComponent';
import './hotels.scss';
//// Header Data ////

import headerimg from "../../../assets/header/hotelHeader.png"
import Vcart from '../../Shared/cards/Vcard';
import { getHotels, getHotelsByRate, getCities, getHotelsByCityName, getHotelByName, getHotelByPrice } from '../../../services/hotelsServ'
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ServiceSection from '../../Shared/serviceSection/ServiceSection';
import SlideBar from '../../Shared/slideBar/Slidebar';

const headerTitle = <>Select Your Home </>
const headerParagraph = <> Ana B7b bety Gdan , msh hadar aseebo laaaaaaaaaaa</>

const Hotels = () => {

    const [hotels, setHotels] = useState([])
    const [cities, setCities] = useState([])
    const [city, setCity] = useState('')
    const [search, setSearch] = useState('')
    const [price, setPrice] = useState(null)
    const serviceSection = <>
        <div className="hotelDetails">

            <div className='hotelDetails_hotel'>
                <input type="search" name='hotel' placeholder='Find Your Hotel' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => filterHotels('name')}> find</button>
            </div>
            <div className='hotelDetails_price'>
                <input type="number" onChange={(e) => setPrice(e.target.value)} />
                <button onClick={() => filterHotels('price')}> find</button>
            </div>
            <Dropdown
                onSelect={(e) => {
                    setCity(e)
                    console.log("c" + city);
                    console.log(e);

                }}>
                <Dropdown.Toggle variant="warning m-2" id="dropdown-basic" >
                    Select City
                </Dropdown.Toggle>
                <button onClick={() => filterHotels('city')}>search</button>

                <Dropdown.Menu>
                    {
                        cities && (
                            cities.map((city, i) => (
                                <Dropdown.Item eventKey={city.City_Name} key={i} onSelect={(e) => { setCity(e.target.value) }}> {city.City_Name}</Dropdown.Item>
                            ))
                        )
                    }

                </Dropdown.Menu>
            </Dropdown>


        </div>

    </>
    const serviceFilter = <>
        {/* <button onClick={(e) => filterHotels('getHotelsByRate')}>search by rate more than 5</button> */}
        <span>Stars</span>
        <div className='serviceFilter_stars'>
            <input type="radio" name="starFilter" id="fiveStars" />
            <label for="fiveStars">
               <span>5 Stars</span> 
            </label>
            <input type="radio" name="starFilter" id="fourStars" />
            <label for="fourStars">
            <span>4 Stars</span> 
            </label>
            <input type="radio" name="starFilter" id="threeStars" />
            <label for="threeStars">
            <span>3 Stars</span> 
            </label>
            <input type="radio" name="starFilter" id="twoStars" />
            <label for="twoStars">
            <span>2 Stars</span> 
            </label>
            <input type="radio" name="starFilter" id="oneStar" />
            <label for="oneStar">
            <span>1 Star</span> 
            </label>
            
        </div>
       

    </>


    const filterHotels = (filter) => {
        switch (filter) {
            case "getHotelsByRate":
                getHotelsByRate(5).then(res => setHotels(res))
                break;

            case "city":
                getHotelsByCityName(city).then(res => setHotels(res))
                break;
            case "name":
                getHotelByName(search).then(res => setHotels(res))
                break;
            case "price":
                getHotelByPrice(price).then(res => setHotels(res))
                break;

            default:
                getHotels().then(res => setHotels(res))

                break;
        }
    }

    useEffect(() => {
        getCities().then(res => setCities(res))

        getHotels().then(res => setHotels(res))
    }, [])


    return (
       <>
              <HeaderComponent img={headerimg} title={headerTitle} paragraph={headerParagraph}/>
              <ServiceSection serviceSection={serviceSection} />
               
              <section className='hotelcomponent'>
                <div className='row'>
                    <section className=' col-md-3 '>
                        <SlideBar  serviceFilter={serviceFilter}/>
                    </section>
                    <section className='cardsArea col-md-8 '>

                        {(hotels) && (
                            hotels.map((hotel, i) => (
                                <Vcart key={i} title={hotel.HotelName} city={hotel.City.City_Name} Evaluation={hotel.Evaluation} Price={hotel.Price} description={hotel.Description} />
                            ))
                        )
                        }
                    </section>
                </div>
            </section>
        </>
    );
};

export default Hotels;