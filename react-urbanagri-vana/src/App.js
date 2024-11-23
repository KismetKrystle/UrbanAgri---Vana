// import React, { useState } from 'react';
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import Solutions from './pages/Solutions';
// import vanaService from './services/vanaService';

// function App() {
//   const [location, setLocation] = useState('');
//   const [data, setData] = useState(null);
//   const [solution, setSolution] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleLocationSubmit = async (loc) => {
//     setLocation(loc);
//     setLoading(true);
//     setError(null);
//     try {
//       const fetchedData = await vanaService.fetchAllData(loc);
//       setData(fetchedData);
//       // Here you would typically generate a solution based on the fetched data
//       setSolution(`This is a solution based on data for ${loc}`);
//     } catch (err) {
//       setError('Failed to fetch data. Please try again.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFeedback = (feedback) => {
//     console.log('Feedback received:', feedback);
//     // Here you would typically send this feedback to your backend
//   };

//   // Keep your existing return statement
//   return (
//     <div className="App">
//       {!location && <Home onLocationSubmit={handleLocationSubmit} />}
//       {location && !solution && <Dashboard data={data} />}
//       {solution && (
//         <Solutions solution={solution} onFeedbackSubmit={handleFeedback} />
//       )}
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// }

// export default App;

// src/App.js

import React, { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Solutions from './pages/Solutions';
import vanaService from './services/vanaService';
import { mockLocations } from './utils/mockData';

function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLocationSubmit = async (loc) => {
    setLocation(loc);
    setLoading(true);
    setError(null);
    try {
      const fetchedData = await vanaService.fetchAllData(loc);
      setData(fetchedData);
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {!location && <Home onLocationSubmit={handleLocationSubmit} locations={mockLocations} />}
      {location && data && <Dashboard data={data} />}
      {data && data.solution && <Solutions solution={data.solution} />}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;
