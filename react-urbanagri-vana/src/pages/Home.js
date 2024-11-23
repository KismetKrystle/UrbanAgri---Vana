// import React from 'react';
// import LocationInput from '../components/LocationInput';

// const Home = ({ onLocationSubmit }) => {
//   return (
//     <div>
//       <h1>Urban Farming Solutions</h1>
//       <LocationInput onLocationSubmit={onLocationSubmit} />
//     </div>
//   );
// };

// export default Home;

// src/pages/Home.js

import React, { useState } from 'react';

const Home = ({ onLocationSubmit, locations }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationSubmit(selectedLocation);
  };

  return (
    <div>
      <h1>Urban Farming Solutions</h1>
      <form onSubmit={handleSubmit}>
        <select 
          value={selectedLocation} 
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Select a location</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <button type="submit" disabled={!selectedLocation}>Submit</button>
      </form>
    </div>
  );
};

export default Home;
