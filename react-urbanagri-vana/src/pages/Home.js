import React from 'react';
import LocationInput from '../components/LocationInput';

const Home = ({ onLocationSubmit }) => {
  return (
    <div>
      <h1>Urban Farming Solutions</h1>
      <LocationInput onLocationSubmit={onLocationSubmit} />
    </div>
  );
};

export default Home;
