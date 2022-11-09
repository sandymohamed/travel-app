import './vcard.scss';
import dummyImg from "../../../assets/card/dummy-image.jpg";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'


function Vcart({title,city ,description, Evaluation,Price, id}) {
    useEffect(() => {
        AOS.init();
      }, [])

    return (

        <section id="vcart"  data-aos="fade-up" data-aos-delay="200">
            <div className='cartBody'>
                <div className='cartBody_img'  data-aos="fade-up" data-aos-delay="300">
                    <img src={dummyImg} alt="Item_Name"></img>
                </div>
                <article className='cartBody_details' data-aos="zoom-out" data-aos-delay="200">
                    <h3>{title}</h3>
                    <div className='cartBody_details_data'>
                        <div className='cartBody_details_data_text'>
                            <span className='spanMajor'>{city}</span>
                            <span className='spanMinor'>{description}</span>
                            <span className=' review spanMinor'>{Evaluation}review</span>

                        </div>
                        <div className='cartBody_details_data_price'>
                            <span className='stars'>price: </span>
                            <span className='itemPrice'>{Price}</span>
                            <span className='priceCurrency'>$</span>
                        </div>
                    </div>
                    <button className='primaryBtn'>
                    <Link to={`/hotel/${id}`} className='btn btn-warning'>
                        Details
                          </Link>
            
                    </button>

                </article>

            </div>
        </section>

    )
}
export default Vcart;
