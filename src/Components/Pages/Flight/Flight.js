import './Flight.scss';



// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import HeaderComponent from '../../Shared/header/HeaderComponent';
////// For Header //////
import headerImg from "../../../assets/header/transportationHeader.png"
import FlightCard from '../../Shared/cards/FlightCard';
import ServiceSection from '../../Shared/serviceSection/ServiceSection';
import SlideBar from '../../Shared/slideBar/Slidebar';

const headerTitle = <> Find your Tayara</>
const headerParagraph = <> ana b7b masr gdn msh adaer asafr laaaa</>


const serviceSection = <>
<div className='flightDetails'>
    <div className='row'>

        <div className='flightDetails_country'>
            <div>
                <input list="country" name="country" placeholder='From' id="countryFrom" />
                <i className="fa-solid fa-map-location-dot"></i>
                <datalist id="country">
                    <option value="Cairo" />
                    <option value="Roma" />
                    <option value="UAE" />
                    <option value="USA" />
                    <option value="Paris" />
                </datalist>

            </div>

            <div className=''>
                <input list="country" name="country" placeholder='To' id="countryTo" />
                <i className="fa-solid fa-map-location"></i>
                <datalist id="country">
                    <option value="Cairo" />
                    <option value="Roma" />
                    <option value="UAE" />
                    <option value="USA" />
                    <option value="Paris" />
                </datalist>

            </div>



        </div>
        <div className=''>


            <div className='flightDetails_date'>
                <input type={'date'} name="date" placeholder='From' id="dateFrom" />

                <input type={'date'} name="date" placeholder='To' id="dateTo" />

            </div>
        </div>
    </div>
</div>
</>
const serviceFilter = <>
<span>Class</span>
<div>
    <input type="radio" name="classFilter" id="economy" />
    <label htmlFor="economy">
        Economy Class
    </label>
</div>
<div>
    <input type="radio" name="classFilter" id="business" />
    <label htmlFor="business">
        Business Class
    </label>
</div>
<div>
    <input type="radio" name="classFilter" id="first" />
    <label htmlFor="first">
        First Class
    </label>
</div>

</>
const Flight = () => {

    return (

        <>
            <HeaderComponent title={headerTitle} paragraph={headerParagraph} img={headerImg} />
            <ServiceSection serviceSection={serviceSection} />

            {/* ////////////////////// */}
            <section className='flightcomponent'>
                <div className='row'>
                    <section className=' col-md-3 '>
                        <SlideBar serviceFilter={serviceFilter} />
                    </section>
                    <section className='cardsArea col-md-8 '>
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                    </section>
                </div>
            </section>
        </>
    )
};

export default Flight;
