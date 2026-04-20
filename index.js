//Declare the property objects
const properties = [
  {
    name: 'Broadway Apartments',
    address: {
      street1: '11 Broadway',
      city: 'New York',
      state: 'NY',
      zipCode: '10004'
    },
    amenities: ['Pool', 'Gym', 'Parking']
  },
  {
    name: 'Sunset Villas',
    address: {
      street1: '45 Palm Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101'
    },
    amenities: ['Garden', 'Security', 'Playground']
  },
  {
    name: 'Maple Residency',
    address: {
      street1: '89 Maple Street',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601'
    },
    amenities: ['Elevator', 'Laundry', 'Rooftop']
  }
];

//Iterate through the object elements
for (const property of properties) {
  console.log('--- Property ---');

  //Iterate through each property
  for (const key in property) {
    //Check if an element of the property is an object data type
    if (typeof property[key] === 'object') {
      console.log(`Nested data in ${key}:`);
      //Iterate through the property elements
      for (const subKey in property[key]) {
        console.log(`${subKey}: ${property[key][subKey]}`);
      }
    } else {
      console.log(`${key}: ${property[key]}`);
    }
  }
}
