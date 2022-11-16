import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { bookedHolidayByUser } from '../../../services/holidaysServ';
import { bookedHotelByUser } from '../../../services/hotelsServ';
import { format } from 'date-fns'

import './userReservations.scss';

const UserReservations = () => {

    const [hotelReservations, setHReservations]= useState([])

    // const userName = useSelector((({ signReducer }) => signReducer.data.username))
    // console.log("user"+userName);
    // let user = (userName) ? userName : null

    useEffect(()=>{
        bookedHotelByUser('noor').then(res =>setHReservations(res) )
        console.log(hotelReservations);
 

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
                     <p className='text-end'>createdAt: {format(new Date(item.createdAt),  'dd/mm/yyyy')}</p>
                    <p>Hotel Name: {item.Hotels.HotelName}</p>
                    <p>Confirmation of Acceptance: {String(item.IsApprove)}</p>
                    <p>Period: {item.Period}</p>
                    <p>RoomCount: {item.RoomCount}</p>
                    <p>startDate: {item.startDate}</p>
                    <p>endDate: {item.endDate}</p>
                    <p className='text-end'>updatedAt: {format(new Date(item.updatedAt),  'dd/mm/yyyy')}</p>



                </div>
                ))
             
            )
        }
        </section>

    
        </>
    );
};

export default UserReservations;