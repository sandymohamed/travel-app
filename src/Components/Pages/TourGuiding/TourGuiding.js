import './tourGuiding.scss';

//// Header Data ////
import headerimg from '../../../Assets/header/tourGuidHeader.png';
import HeaderComponent from '../../Shared/header/HeaderComponent';
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
    </>
  );
}

export default TourGuiding;
