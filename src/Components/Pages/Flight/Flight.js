import './Flight.scss';



// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
///////////////////////////////

////////////////////////////////
import HeaderComponent from '../../Shared/header/HeaderComponent';
////// For Header //////
import headerImg from "../../../assets/header/transportationHeader.png"
import MultiRangeSlider from '../../Shared/range/MultiRangeSlider';
import FlightCard from '../../Shared/cards/FlightCard';

const headerTitle = <> Find your Tayara</>
const headerParagraph = <> ana b7b masr gdn msh adaer asafr laaaa</>

const Flight = () => {

    return (

        <>
            <HeaderComponent title={headerTitle} paragraph={headerParagraph} img={headerImg} />
            <section id="flight">
                <div className='flight_container'>
                    <section className='services'>
                        <div className='services_flights'>
                            <div className='icon'>
                                <i class="fa-solid fa-plane"></i>
                            </div>
                            <span>Flights</span>
                        </div>
                        <div className='services_hotels'>
                            <div className='icon'>
                                <i class="fa-solid fa-hotel"></i>
                            </div>
                            <span>Hotels</span>
                        </div>


                        <div className='services_holiday'>
                            <div className='icon'>
                                <i class="fa-solid fa-suitcase-rolling"></i>                            </div>
                            <span>Holiday</span>
                        </div>


                        <div className='services_tourGuide'>
                            <div className='icon'>
                                <i class="fa-solid fa-language"></i>
                            </div>
                            <span>Tour Guide</span>
                        </div>


                    </section>
                    <div className='flightDetails'>
                        <div className='row'>
                            <div className='  '>
                                <div className='flightDetails_country'>
                                    <div>
                                        <input list="country" name="country" placeholder='From' id="countryFrom" />
                                        <i class="fa-solid fa-map-location-dot"></i>
                                        <datalist id="country">
                                            <option value="Cairo" />
                                            <option value="Roma" />
                                            <option value="UAE" />
                                            <option value="USA" />
                                            <option value="Paris" />
                                        </datalist>

                                    </div>
                                    {/* <span>- - - - -<i class="fa-solid fa-plane"></i>
                               - - - - -</span> */}
                                    <div className=''>
                                        <input list="country" name="country" placeholder='To' id="countryTo" />
                                        <i class="fa-solid fa-map-location"></i>
                                        <datalist id="country">
                                            <option value="Cairo" />
                                            <option value="Roma" />
                                            <option value="UAE" />
                                            <option value="USA" />
                                            <option value="Paris" />
                                        </datalist>

                                    </div>

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


                </div>

            </section>
            {/* ////////////////////// */}
            <section>
                <div className='row'>
                    <section className='slidebar col-md-2 col-sm-12'>
                        <h4>Filters</h4>
                        <div className='slidebar_container'>
                            <section className='filter priceFilter'>

                                <span>Price</span>

                                <MultiRangeSlider
                                    min={0}
                                    max={10000}
                                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                />

                                <div>
                                    <input type="radio" name="priceFilter" id="priceFilter1" />
                                    <label for="priceFilter1">
                                        0- 2500 <small>L.E</small>
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="priceFilter" id="priceFilter2" />
                                    <label for="priceFilter2">
                                        0- 2500 <small>L.E</small>
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="priceFilter" id="priceFilter3" />
                                    <label for="priceFilter3">
                                        0- 2500 <small>L.E</small>
                                    </label>
                                </div>

                            </section>
                            <section className='filter classFilter'>
                                <span>Class</span>
                                <div>
                                    <input type="radio" name="classFilter" id="economy" />
                                    <label for="economy">
                                        Economy Class
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="classFilter" id="business" />
                                    <label for="business">
                                        Business Class
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="classFilter" id="first" />
                                    <label for="first">
                                        First Class
                                    </label>
                                </div>

                            </section>
                        </div>
                    </section>
                    <section className='cardsArea col-md-6 '>
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />

                    </section>
                </div>
            </section>
        </>
    )};

export default Flight;
