
import "./headerComponent.scss"
import {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css"


function HeaderComponent(props) {
    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <>
            <header>
                <div id="header_container"  data-aos="fade-up" data-aos-delay="200">
                    <article>
                        <h2 className="header_title" data-aos="fade-up" data-aos-delay="250">
                           {props.title}
                        </h2>
                        <p className="header_paragraph" data-aos="fade-up" data-aos-delay="300">
                            {props.paragraph}
                        </p>
                    </article>
                    <div>
                        <img className="header_img" src={props.img} data-aos="fade-down-left"  data-aos-delay="300"></img>
                    </div>
                </div>
            </header>

        </>
    )
}

export default HeaderComponent;