import APIKey from '../apiKey/ApiKey';

const fetchLocation = async (location) => {
    const fetchedLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${APIKey}`)
    const locationData = await fetchedLocation.json();
    const mappedLocation = locationData.results.map(place => {
  
      return place.address_components[1].short_name && place.geometry.location
    })
  }

  export default { fetchLocation };
