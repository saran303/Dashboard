import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Values',
        data: [10000, 6000, 7000, 8000, 6000, 7000, 11000, 9000, 15000, 12000, 10000],
        backgroundColor: '#529ddf',
        borderRadius: 20, // Add borderRadius property
        barPercentage: 0.6, // Controls the width of each bar
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to adjust to different aspect ratios
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    layout: {
      backgroundColor: '#21253d' // Set the background color for the chart area
    }
  };

  const containerStyle = {
    width: '100%', // Adjust as necessary
    height: '200px', // Adjust as necessary
    backgroundColor: '#21253d', // Change the overall background color of the canvas
  };

  return (
    <div style={containerStyle}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
