import FlightCard from '../../Shared/cards/FlightCard';
import Vcart from '../../Shared/cards/Vcard';
import './home.scss'
const Home = () => {
    return (
        <>
        
        //Test Cards ///
        <section>
          <div className='row'>
            <div className='col-lg-3'>
            <Vcart/>
            </div>
            <div className='col-lg-3'>
            <Vcart/>
            </div>
            <div className='col-lg-3'>
            <Vcart/>
            </div>
            <div className='col-lg-3'>
            <Vcart/>
            </div>
          </div>
          //////////// Flight Card ////////
          <div className='row'>
            <div className='col-md-12'>
            <FlightCard/>
            </div>
            <div className='col-md-12'>
            <FlightCard/>
            </div>
          </div>
        </section>

        </>
    );
};

export default Home;