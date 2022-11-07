import axios from 'axios'
import {ENDPOINTS} from '../utils/endPoints' 

export const getHotels = () => {
    return axios.get(`${ENDPOINTS.GETHOTELS}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}






