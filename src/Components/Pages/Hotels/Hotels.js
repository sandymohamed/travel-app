import HeaderComponent from '../../Shared/header/HeaderComponent';
import './hotels.scss';
//// Header Data ////
import headerimg from '../../../Assets/header/hotelHeader.png';
const headerTitle = <>Select Your Home </>;
const headerParagraph = <> Ana B7b bety Gdan , msh hadar aseebo laaaaaaaaaaa</>;
const Hotels = () => {
  return (
    <>
      <HeaderComponent
        img={headerimg}
        title={headerTitle}
        paragraph={headerParagraph}
      />
    </>
  );
};

export default Hotels;
