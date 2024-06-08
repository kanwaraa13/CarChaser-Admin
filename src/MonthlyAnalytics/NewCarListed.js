import React, { useState, useEffect, useRef } from 'react';
import { AdminNav } from '../NavBar/AdminNav';
import Chart from 'chart.js/auto'; // Import Chart from chart.js
import api from '../api';

export const NewCarListed = () => {
  const chartRef = useRef(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [showChart, setShowChart] = useState(false);
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  useEffect(() => {
    if (!chartRef.current) return;

    // Check if there's an existing chart instance
    if (chartRef.current.chart) {
      // Destroy the existing chart instance
      chartRef.current.chart.destroy();
    }

    if (showChart) {
      const ctx = chartRef.current.getContext('2d');
      chartRef.current.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: xValues,
          datasets: [{
            label: 'New Car Listed Per Day',
            data: yValues,
            backgroundColor: 'rgba(0, 123, 255, 0.6)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
			  /* ticks: {
                precision: 0 // Ensures integer values are displayed on the y-axis
              } */
            }
          }
        }
      });
    }

    // Clean up function
    return () => {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, [xValues, yValues, showChart]);

  const handleClick = () => {
	   if (selectedMonth && selectedYear) {
      setShowChart(true);
      fetchData(selectedMonth, selectedYear);
    } else {
      // Show error message or handle the case when month and year are not selected
    }
  };

  const fetchData = async (month, year) => {
    try {
      // Make API call to fetch data for selected month and year
      const response = await api.get(`/admin/total-number-of-car/NewListedCarPerDayOfTheMonth/${year}/${month}`);
	  console.log(response.data.Vehicle_Count);
      const data = response.data.Vehicle_Count; // Assuming the response contains data for the chart

      // Map the response data to xValues and yValues
      const xValues = data.map(item => item.day_of_month);
      const yValues = data.map(item => item.NewCar);

      setXValues(xValues);
      setYValues(yValues);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateChart = (newData) => {
    // Update chart with new data
    // You need to replace the code here with the logic to update the chart
    console.log("Updating chart with new data:", newData);
  };

  return (
    <section className="dealer-listing">
      <AdminNav />
      <div className="mid-panel mt-3">
        <div className="container">
          <div className="monthy-report">
            <h3 className="main-heading text-center">New Car Listed Per Day Of The Month</h3>
            <form>
              <div className="form-group">
                <label htmlFor="monthSelect" className="mr-3">New Car Listed Per Day Of The Month</label>
                <select className="form-control mx-2" id="exampleFormControlSelect1" onChange={(e) => setSelectedMonth(e.target.value)}>
                  {months.map((month, index) => (
                    <option  value={index+1} key={index}>{month}</option>
                  ))}
                </select>
                <label htmlFor="yearSelect" className="mr-3">Select Year:</label>
                <select className="form-control mx-2" id="exampleFormControlSelect2" onChange={(e) => setSelectedYear(e.target.value)}>
                  <option>Year</option>
                  <option>2024</option>
                  <option>2025</option>
                  
                </select>
              </div>
              <button type="button" className="btn btn-primary px-3 mx-3 mb-3" onClick={handleClick}>Show</button>
            </form>
          </div>
          {showChart && (
            <div>
              <canvas ref={chartRef}></canvas>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
