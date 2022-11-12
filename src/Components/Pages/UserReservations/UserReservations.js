import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { bookedHolidayByUser } from '../../../services/holidaysServ';
import { bookedHotelByUser } from '../../../services/hotelsServ';
import './userReservations.scss';

const UserReservations = () => {

    const [hotelReservations, setHReservations]= useState([])
    const [holidayReservations, setTReservations]= useState([])

    const userName = useSelector((({ signReducer }) => signReducer.data.username))
    console.log("user"+userName);
    let user = (userName) ? userName : null

    useEffect(()=>{
        bookedHotelByUser(user).then(res =>setHReservations(res) )
        console.log(hotelReservations);
        bookedHolidayByUser(user).then(res =>setTReservations(res) )
        console.log(holidayReservations);

    },[])
    return (
        <>
       <h1>My Reservations</h1>


       <section className="formCard " >
        <h1 className='text-center'>Hotels Reservations</h1>
        {
            (hotelReservations)&&(
                hotelReservations.map((item,i)=>(

                    <div className='reservation-card fs-6'>
                     <p className='text-end'>createdAt: {item.createdAt}</p>
                    <p>Hotel Name: {item.Hotels.HotelName}</p>
                    {/* /************************************ *************************************** */}
                    <p>Confirmation of Acceptance: {item.IsApprove}</p>
                    <p>Period: {item.Period}</p>
                    <p>RoomCount: {item.RoomCount}</p>
                    <p>startDate: {item.startDate}</p>
                    <p>endDate: {item.endDate}</p>
                    <p className='text-end'>updatedAt: {item.updatedAt}</p>



                </div>
                ))
             
            )
        }
        </section>

        
       <section className="formCard " >
        <h1 className='text-center'>Hotels Reservations</h1>
        {
            (holidayReservations)&&(
                holidayReservations.map((item,i)=>(

                    <div className='reservation-card fs-6'>
                     <p className='text-end'>createdAt: {item.createdAt}</p>
                    {/* <p>Hotel Name: {item.Hotels.HotelName}</p> */}
                    {/* /************************************ *************************************** */}
                    <p>Confirmation of Acceptance: {item.IsApprove}</p>
                    <p>Period: {item.Period}</p>
                    <p>RoomCount: {item.RoomCount}</p>
                    <p>Transport: {item.Transport}</p>
                    <p>startDate: {item.startDate}</p>
                    <p>endDate: {item.endDate}</p>
                    <p className='text-end'>updatedAt: {item.updatedAt}</p>



                </div>
                ))
             
            )
        }
        </section>
        </>
    );
};

export default UserReservations;