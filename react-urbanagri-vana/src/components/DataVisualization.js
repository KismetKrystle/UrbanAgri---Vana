import React from 'react';

const DataVisualization = ({ data }) => {
  // This is a placeholder. You'll implement actual visualization later.
  return (
    <div>
      <h2>Data Visualization</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataVisualization;
