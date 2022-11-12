 import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8080/',
});
// Get all Flight
export function getAllFlight(countryTo) {

  console.log("in service = " +countryTo)
  let Url ='flight'
  if(countryTo)
     Url =`flight?FlyingTo=${countryTo}`

  return instance({
    url: Url ,//`flight`,
    method: 'get'
  })
    .then((response) => response)
    .catch((err) => alert(err));
}
