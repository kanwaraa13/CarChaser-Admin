import React, { useState } from 'react';
import { AdminNav } from '../NavBar/AdminNav';
import api from '../api';

export const HighestWinningBid = () => {
 const [displaynumber, setDisplaynumber] = useState(0);
  const [displaymonth, setDisplaymonth] = useState("");
  const [displayyear, setDisplayyear] = useState(0);
  const [isdisplay, setIsdisplay] = useState(false);

  const months = [
    'Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

   const handleClick = async (event) => {
	  event.preventDefault(); // Prevent the default form submission behavior

	  const monthSelect = document.getElementById('exampleFormControlSelect1');
	  const yearSelect = document.getElementById('exampleFormControlSelect2');

	  const selectedMonth = monthSelect.value;
	  const selectedYear = yearSelect.value;
	  
	  const selectedMonthText = monthSelect.options[monthSelect.selectedIndex].textContent;
	  
	  try {
		const response = await api.get(`/admin/total-number-of-car/HighestWinningBid/${selectedYear}/${selectedMonth}`);
		console.log(response);
		setIsdisplay(true);
		setDisplaymonth(selectedMonthText);
		setDisplayyear(selectedYear);
		setDisplaynumber(response.data.Vehicle_Count);
	  } catch (error) {
		console.error("Error:", error);
	  }
 };

  return (
    <section className="dealer-listing">
      <AdminNav />
      <div className="mid-panel mt-3">
        <div className="container">
          <div className="monthy-report">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1" className="mr-3">Highest winning Bid in</label>
                <select className="form-control mx-2" id="exampleFormControlSelect1">
                  {months.map((month, index) => (
                    <option value={index} key={index}>{month}</option>
                  ))}
                </select>
                <select className="form-control mx-2" id="exampleFormControlSelect2">
                  <option>Year</option>
                  <option>2024</option>
                  <option>2025</option>
                  
                </select>
              </div>

              <button id="myButton" type="button" className="btn btn-primary px-3 mx-3 mb-3" onClick={handleClick}>Show</button>

            </form>
          </div>
          {isdisplay && (
				<div>
				  {/* Content to display when isdisplay is true */}
				  <div className="car-no-available">
				  <h3>Highest Winning Bids In {displaymonth}, {displayyear}</h3>
				  <div className="car-no-span"> <span>${displaynumber !== null ? parseFloat(displaynumber).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}</span>

				  </div>
				  </div>
				</div>
			)}
        </div>
      </div>
    </section>
  );
};
