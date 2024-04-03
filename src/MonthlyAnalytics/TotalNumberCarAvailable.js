import React, { useState } from 'react';
import { AdminNav } from '../NavBar/AdminNav';

export const TotalNumberCarAvailable = () => {
  const [isShown, setIsShown] = useState(false);

  const months = [
    'Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <section className="dealer-listing">
      <AdminNav />
      <div className="mid-panel mt-3">
        <div className="container">
          <div className="monthy-report">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1" className="mr-3">Total Number of Cars Available in </label>
                <select className="form-control mx-2" id="exampleFormControlSelect1">
                  {months.map((month, index) => (
                    <option key={index}>{month}</option>
                  ))}
                </select>
                <select className="form-control mx-2" id="exampleFormControlSelect2">
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

              <button id="myButton" type="button" className="btn btn-primary px-3 mx-3 mb-3" onClick={handleClick}>Show</button>

            </form>


          </div>
          <div id="myDiv" style={{ display: isShown ? 'block' : 'none' }}>
            50
          </div>
        </div>
      </div>
    </section>
  );
};
