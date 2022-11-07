import axios from 'axios'
import {ENDPOINTS} from '../utils/endPoints' 

export const getHotels = () => {
    // console.log(process.env.REACT_APP_API_URL)
    return axios.get(`${ENDPOINTS.GETHOTELS}`)
    .then(res => {return(res.data)})
    .catch(err => console.log(err))
}






