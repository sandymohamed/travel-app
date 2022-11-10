

import "./serviceSection.scss"
import { Link ,NavLink } from "react-router-dom"


function ServiceSection(props) {


    return (
        <>

            <section id="flight">
                <div className='service_container'>
                    <section className='services'>

                        {/* --------------: Hotel :-------------- */}
                        <NavLink class="nav__link" to="/hotels" activeClassName="active">
                            <div className=' serviceItem services_hotels'>
                                <div className='icon'>
                                    <i class="fa-solid fa-hotel"></i>
                                </div>
                                <span>Hotels</span>
                            </div>

                        </NavLink>

                        {/* --------------: Flight :-------------- */}

                        <NavLink class="nav__link" to="/flight" activeClassName="active">
                            <div className='serviceItem services_flights'>
                                <div className='icon'>
                                    <i class="fa-solid fa-plane"></i>
                                </div>
                                <span>Flights</span>
                            </div>

                        </NavLink>
                        {/* --------------: Holiday :-------------- */}

                        <NavLink class="nav__link " to="/holidays" activeClassName="active">

                            <div className='serviceItem services_holiday'>
                                <div className='icon'>
                                    <i class="fa-solid fa-suitcase-rolling"></i>
                                </div>
                                <span>Holiday</span>
                            </div>

                        </NavLink>
                        {/* --------------: TourGuid :-------------- */}

                        <NavLink class="nav__link" to="/TourGuiding" activeClassName="active">
                            <div className=' serviceItem services_tourGuide'>
                                <div className='icon'>
                                    <i class="fa-solid fa-language"></i>
                                </div>
                                <span>Tour Guide</span>
                            </div>

                        </NavLink>




                    </section>
                    <section>
                        {props.serviceSection}
                    </section>

                </div>


            </section>



        </>

    )
}

export default ServiceSection;