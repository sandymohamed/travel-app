

import './vcard.scss';
import dummyImg from "../../../Assets/card/dummy-image.jpg";
import {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

function Vcart() {
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
                    <h3>Ayman Mostafa</h3>
                    <div className='cartBody_details_data'>
                        <div className='cartBody_details_data_text'>
                            <span className='spanMajor'>Category</span>
                            <span className='spanMinor'>lorem lorem lorem</span>
                            <span className=' review spanMinor'>(2)review</span>

                        </div>
                        <div className='cartBody_details_data_price'>
                            <span className='stars'>stars</span>
                            <span className='itemPrice'>20</span>
                            <span className='priceCurrency'>$</span>
                        </div>
                    </div>
                    <button className='primaryBtn'>Select</button>

                </article>

            </div>
        </section>

    )
}
export default Vcart;