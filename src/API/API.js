findLocation = async () => {
    const fetchedLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.search}&key=${APIKey}`)
    const locationData = await fetchedLocation.json();
    const mappedLocation = locationData.results.map(place => {
      console.log(place)
      console.log(place.address_components[1].short_name)
      console.log(place.geometry.location)
      debugger;
      return place.address_components[1].short_name && place.geometry.location

      // this needs to be a conected compoent 
      // send the address to the store 
      // make a some sort of card list component 
      // that has access to your data and the filter string in the store 
      // filter through the data by the search adddress 
      // once you have that single address object check to see if the address is within the address range || included in the full address array. 

      // if thats true that is your precinct 
    })
  }

      export default { findLocation };
