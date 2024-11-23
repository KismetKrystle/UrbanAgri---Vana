import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
n
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Solutions from './pages/Solutions';

function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const [solution, setSolution] = useState('');

  const handleLocationSubmit = (loc) => {
    setLocation(loc);
    // Here you would typically fetch data and generate a solution
    setData({ /* mock data */ });
    setSolution('This is a mock solution for ' + loc);
  };

  const handleFeedback = (feedback) => {
    console.log('Feedback received:', feedback);
    // Here you would typically send this feedback to your backend
  };

  return (
    <div className="App">
      {!location && <Home onLocationSubmit={handleLocationSubmit} />}
      {location && !solution && <Dashboard data={data} />}
      {solution && (
        <Solutions solution={solution} onFeedbackSubmit={handleFeedback} />
      )}
    </div>
  );
}

export default App;

