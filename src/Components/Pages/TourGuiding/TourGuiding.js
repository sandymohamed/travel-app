import './tourGuiding.scss';

//// Header Data ////
import headerimg from '../../../Assets/header/tourGuidHeader.png';
import HeaderComponent from '../../Shared/header/HeaderComponent';
import ServiceSection from '../../Shared/serviceSection/ServiceSection';
const headerTitle = <>Select Your tooor </>;
const headerParagraph = <> Ana msh mn sharm , </>;
function TourGuiding() {
  return (
    <>
      <HeaderComponent
        img={headerimg}
        title={headerTitle}
        paragraph={headerParagraph}
      />

      <ServiceSection />
    </>
  );
}

export default TourGuiding;
