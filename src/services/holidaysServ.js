import {ENDPOINTS} from '../utils/endPoints' 
import {instance} from './authAPI'

// get all hotels 
export const getHolidays = () => {
    return instance.get(`${ENDPOINTS.GETHOLIDAYS}`)

    .then(res => {return(res.data)})
    .catch(err => console.log(err))
}

// get holiday by price
export const getHolidayByPrice = (price) => {
    return instance.get(`${ENDPOINTS.GETHOLIDAYBYPRICE}?price=${price}`)

    .then(res => {return(res.data)})
    .catch(err => console.log(err))
}


// get hotels by it's rate
export const getHolidaysByRate = (rate) => {
    console.log("lol");
    return instance.get(`${ENDPOINTS.GETHOLIDAYSBYRATE}?rate=${rate}`)

    .then(res => {return(res.data)})
    .catch(err => console.log(err))
}

// get all hotels by city
export const getHolidaysByCityName = (city) => {
    return instance.get(`${ENDPOINTS.GETHOLIDAYSBYCITY}?city=${city}`)

    .then(res => {return(res.data)})
    .catch(err => console.log(err))
}



