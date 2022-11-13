 import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8080/',
});
// Get all Flight
export function getAllFlight(countryTo ,  dateTo ,selectedClass,price) {

  let Url ='flight'
  let isFrist = true ;
  // Filtertion For country
  if(countryTo)
    { 
      Url += `?FlyingTo=${countryTo}` ;
      isFrist = false ;
   }
  if(dateTo)
    { 
      Url += isFrist ? `?ReturnDate=${dateTo}` :  `&ReturnDate=${dateTo}` ;
      isFrist = false ;
    }
  if(selectedClass)
  {
     Url += isFrist ? `?CabinClass=${selectedClass}` :  `&CabinClass=${selectedClass}`
  }
  if(price)
  {
     Url += isFrist ? `?Price=${price}` :  `&Price=${price}`
  }

  console.log("URL  = "+ Url)

  return instance({
    url: Url ,//`flight`,
    method: 'get'
  })
    .then((response) => response)
    .catch((err) => alert(err));
}



// Get all Flight ByUser
export function getAllFlightByUser(countryTo ,  dateTo ,user) {

  let Url ='flight'
  let isFrist = true ;
  // Filtertion For country
  if(countryTo)
    { 
      Url += `?FlyingTo=${countryTo}` ;
      isFrist = false ;
   }
  if(dateTo)
    { 
      Url += isFrist ? `?ReturnDate=${dateTo}` :  `&ReturnDate=${dateTo}` ;
      isFrist = false ;
    }
  if(user)
  {
     Url += isFrist ? `?Tourist=${user}` :  `&Tourist=${user}`
  }

  console.log("URL  = "+ Url)

  return instance({
    url: Url ,//`flight`,
    method: 'get'
  })
    .then((response) => response)
    .catch((err) => alert(err));
}

export const bookedFlight = (UserID , Flight) => {

  const UserBooking = {
    IsBooking  : false ,
    Tourist : UserID ,
    Flight : Flight 
  }
  
  return instance.post(`flightBooking`,UserBooking)
  .then(res => res)
  .catch((error) => {      
        console.log(error);     
    });

}
