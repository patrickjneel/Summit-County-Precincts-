import APIKey from '../apiKey/ApiKey';

const fetchLocation = async (location) => {
    const fetchedLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${APIKey}`)
    return await fetchedLocation.json();
  }

  export default { fetchLocation };
