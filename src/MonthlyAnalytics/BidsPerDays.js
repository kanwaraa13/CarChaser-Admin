import React, { useState, useEffect, useRef } from 'react';
import { AdminNav } from '../NavBar/AdminNav';
import Chart from 'chart.js/auto'; // Import Chart from chart.js

export const BidsPerDays = () => {
  const [isShown, setIsShown] = useState(false);
  const chartRef = useRef(null);

  const months = [
    'Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleClick = () => {
    setIsShown(!isShown);
    const selectedMonth = document.getElementById('monthSelect').value;
    const selectedYear = document.getElementById('yearSelect').value;
    console.log("Selected Month:", selectedMonth);
    console.log("Selected Year:", selectedYear);
    // Fetch data based on selected month and year here
    // Update chart with new data if needed
    updateChart();
  };

  const updateChart = () => {
    if (isShown) {
      const xValues = Array.from({ length: 30 }, (_, i) => i + 1);
      const yValues = [5,10,15,15,20,25,30,35,50,34,25,30,25,20,25,30,35,17,45,20,15,20,25,30,35,33,50,44,3,50];

      if (chartRef.current) {
        chartRef.current.data.labels = xValues;
        chartRef.current.data.datasets[0].data = yValues;
        chartRef.current.update();
      } else {
        createChart(xValues, yValues);
      }
    }
  };

  const createChart = (xValues, yValues) => {
    chartRef.current = new Chart("myCharta", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: { display: false },
        scales: {
          y: { ticks: { min: 1, max: 50 } }
        }
      }
    });
  };

  return (
    <section className="dealer-listing">
      <AdminNav />
      <div className="mid-panel mt-3">
        <div className="container">
          <div className="monthy-report">
            <h3 className="main-heading text-center">Bids Per Day Of The Month</h3>
            <form>
              <div className="form-group">
                <label htmlFor="monthSelect" className="mr-3">Bids per day of the month</label>
                <select className="form-control mx-2" id="monthSelect">
                  {months.map((month, index) => (
                    <option key={index}>{month}</option>
                  ))}
                </select>
                <label htmlFor="yearSelect" className="mr-3">Select Year:</label>
                <select className="form-control mx-2" id="yearSelect">
                  <option>Year</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary px-3 mx-3 mb-3" onClick={handleClick}>Show</button>
            </form>
          </div>
          <div id="myDiv" style={{ display: isShown ? 'block' : 'none' }}>
            <canvas id="myCharta" style={{ width: '650px', maxWidth: '100%' }}></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};
