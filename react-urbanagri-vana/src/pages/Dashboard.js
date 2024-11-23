import React from 'react';
import DataVisualization from '../components/DataVisualization';

const Dashboard = ({ data }) => {
  return (
    <div>
      <h1>Data Dashboard</h1>
      <DataVisualization data={data} />
    </div>
  );
};

export default Dashboard;
