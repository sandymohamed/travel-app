import { useEffect, useState } from 'react';
import './bookHotel.scss';
import dummyImg from "../../../Assets/card/dummy-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane , faCalendarWeek} from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import "aos/dist/aos.css"


const initialValues = {
    RoomCount  : "",    
    AdultCount : "" ,
    Child : "",
    Period : "",
    Single : "",
    Double : "",
    IsApprove : false ,
    startDate: "",
    endDate: "",
    Hotels :"",
    Tourist : "" ,
    Guide : ""
};
const BookHotel = () => {

    const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values)
  };


    useEffect(() => {
        AOS.init();
      }, [])


    return (

      
        <>

            <section id="flightCard" data-aos="fade-up" data-aos-delay="200">
                <div className='cardBody'>
                    <div className='cardBody_img col-md-4 '  data-aos="fade-up" data-aos-delay="300">
                        <img src={dummyImg} alt="Item_Name"></img>
                    </div>
                    <article className='cardBody_details col-md-7 col-sm-12' data-aos="zoom-out" data-aos-delay="200">
                        <div className="cardBody_details_data">
                            <div className="spacer"></div>
                            <div className="container">
                            
                                <span className="line">  - - - - - - -<span> <FontAwesomeIcon className="fs-3" icon={faPlane} />  </span> - - - - - - -</span>
                                <div className="container_data">
                                    <div className="spacer"></div>
                                    <div className="data">
                                        <span className="data_from">Egypt</span>
                                        <span className="data_to">Usa</span>
                                    </div>
                                </div>

                            </div>


                            <form onSubmit={(e)=> {e.preventDefault()}}>
          <input
          type="number"
            value={values.RoomCount}
            onChange={handleInputChange}
            name="RoomCount"
            placeholder="Room Count"
          />
          <input
          type="number"
            value={values.AdultCount}
            onChange={handleInputChange}
            name="AdultCount"
            placeholder="Adult Count"
          />

<input
          type="number"
            value={values.Child}
            onChange={handleInputChange}
            name="Child"
            placeholder="Child Count"
          />

<input
          type="number"
            value={values.Period}
            onChange={handleInputChange}
            name="Period"
            placeholder="days number"
          />

<input
          type="number"
            value={values.Single}
            onChange={handleInputChange}
            name="Single"
            placeholder="Single Room Count"
          />

<input
          type="number"
            value={values.Double}
            onChange={handleInputChange}
            name="Double"
            placeholder="Double  Room Count"
          />

<input
          type="date"
            value={values.startDate}
            onChange={handleInputChange}
            name="startDate"
            placeholder="Start Date"
          />

<input
          type="date"
            value={values.endDate}
            onChange={handleInputChange}
            name="endDate"
            placeholder="End Date"
          />

<input
         
            value={values.Hotels}
            onChange={handleInputChange}
            name="Hotels"
            placeholder="Hotel"
          />
          <input
         
            value={values.Tourist}
            onChange={handleInputChange}
            name="Tourist"
            placeholder="Tourist"
          />
          <input
         
            value={values.Guide}
            onChange={handleInputChange}
            name="Guide"
            placeholder="Guide"
          />
       
       <button className="primaryBtn" type="submit"> Booking</button>

        </form>

                        <button className="secondaryBtn"> Details</button>

                        </div>
                        
                    </article>

                </div>
            </section>
        </>
    );
};

export default BookHotel;