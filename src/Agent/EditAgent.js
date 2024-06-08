import React, { useEffect, useState  } from 'react';
import { AdminNav } from '../NavBar/AdminNav';
import api from '../api';
import { useParams } from 'react-router-dom'; // import useParams
import { useNavigate } from 'react-router-dom';
export const EditAgent = () => {
const { Agent_Id } = useParams(); // Get the ID from the URL slug
const navigate = useNavigate();
const [firstName, setFirstName] = useState('');
const [firstNameError, setFirstNameError] = useState('');
const [lastName, setLastName] = useState('');
const [lastNameError, setLastNameError] = useState('');
const [address, setAddress] = useState('');
const [Zip, setZip] = useState('');
const [Password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [city, setCity] = useState('');
const [phonenumber, setPhoneNumber] = useState('');
const [lastemailError, setLastEmailError] = useState('');
const [lastphonenumberError, setPhoneNumberError] = useState('');
const [cityError, setCityError] = useState('');
const [addressError, setAddressError] = useState('');
const [ZipError, setZipError] = useState('');
const [passwordError, setpasswordError] = useState('');
const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState({});
const [CarListAllow, setCarListAllow] = useState(0);
const [selectedWeekdays, setSelectedWeekdays] = useState([]);
const [fromTime, setFromTime] = useState({ hours: '01', minutes: '00', period: 'am' }); // State for "From" time
const [toTime, setToTime] = useState({ hours: '01', minutes: '00', period: 'pm' }); // State for "To" time
const [Carseller, setSeller] = useState(0);
const [Cardealer, setDealer] = useState(0);
const [minutes, setMinutes] = useState('00');
const [period, setPeriod] = useState('');
const [showWeekdays, setShowWeekdays] = useState([]);
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const [hours, setHours] = useState('');
useEffect(() => {
const fetchData = async () => {
try {
const response = await api.get(`/agent/getweekdays/${Agent_Id}`);
const Agentweekdaysdata = response.data.Days;
console.log(response.data);
const StartTime = response.data.StartTime.Start_Time;
const [time, period] = StartTime.split(' ');
const [hours, minutes] = time.split(':');
setHours(hours);
setFromTime(prevState => ({
...prevState,
hours: hours,
}));
const EndTime = response.data.EndTime.End_Time;
const [endPeriod, Endperiod] = StartTime.split(' ');
const [endTime, endTimeperiod] = EndTime.split(':');
setHours(endTime);
setToTime(prevState => ({
...prevState,
hours: endTime,
}));
setSelectedWeekdays(Agentweekdaysdata);
} catch (error) {
console.error('Error fetching data: ', error);
}
};
fetchData();
}, []);
useEffect(() => {
fetchAgentData();
}, []);
const fetchAgentData = async () => {
try {
const response = await api.get(`/agent/agentlist/${Agent_Id}`);
const Agentdata = (response.data)
setFirstName(Agentdata.Agent.Agent_Fname)
setLastName(Agentdata.Agent.Agent_Lname)
setAddress(Agentdata.Agent.Agent_Address)
setCity(Agentdata.Agent.Agent_City)
setZip(Agentdata.Agent.Agent_Zip)
setPhoneNumber(Agentdata.Agent.Agent_Phone)
setEmail(Agentdata.Agent.Agent_Email)
setCarListAllow(Agentdata.Agent.Car_List_Allow)
setSeller(Agentdata.Agent.Seller_BOS_Allowed)
setDealer(Agentdata.Agent.Dealer_BOS_Allowed)
console.log(Agentdata)
} catch (error) {
console.error('Error fetching data:', error);
}
};
// Function to handle checkbox change
const handleCheckboxChangeonweekdays = (event) => {
const { value, checked } = event.target;
if (checked) {
setSelectedWeekdays([...selectedWeekdays, value]);
} else {
setSelectedWeekdays(selectedWeekdays.filter((weekday) => weekday !== value));
}
};
const handleFromHourChange = (e) => {
setFromTime({ ...fromTime, hours: e.target.value });
};
const handleFromMinuteChange = (e) => {
setFromTime({ ...fromTime, minutes: e.target.value });
};
const handleFromPeriodChange = (e) => {
setFromTime({ ...fromTime, period: e.target.value });
};
const handleToHourChange = (e) => {
setToTime({ ...toTime, hours: e.target.value });
};
const handleToMinuteChange = (e) => {
setToTime({ ...toTime, minutes: e.target.value });
};
const handleToPeriodChange = (e) => {
setToTime({ ...toTime, period: e.target.value });
};
const renderHourOptions = () => {
const hours  = [];
for (let i = 1; i <= 12; i++) {
const hour = i.toString().padStart(2, '0'); // Pad single-digit numbers with leading zero
hours .push(
<option key={i} value={hour}>
   {hour}
</option>
);
}
return hours ;
};
const renderMinuteOptions = () => {
const minutes = '00';
return minutes;
};
const handleSignUp = async (event) => {
event.preventDefault();
const fromTimeString = `${fromTime.hours}:${fromTime.minutes} ${fromTime.period}`;
const toTimeString = `${toTime.hours}:${toTime.minutes} ${toTime.period}`;
if (firstName.trim() === '') {
setFirstNameError('First name cannot be empty');
} else {
setFirstNameError('');
}
if (lastName.trim() === '') {
setLastNameError('Last name cannot be empty');
} else {
setLastNameError('');
}
if (email.trim() === '') {
setLastEmailError('Email cannot be empty');
}else {
setLastEmailError('');
}
if (phonenumber.trim() === '') {
setPhoneNumberError('Phone Number cannot be empty');
} else {
setPhoneNumberError('');
}
if (city.trim() === '') {
setCityError('City cannot be empty');
} else {
setCityError('');
}
if (address.trim() === '') {
setAddressError('Address cannot be empty');
} else {
setAddressError('');
}
if (Zip.trim() === '') {
setZipError('Zip cannot be empty');
} else {
setZipError('');
}
if (Password.trim() === '') {
setpasswordError('Password cannot be empty');
} else {
setpasswordError('');
}
try {
const response = await api.post(`/admin/editagent/${Agent_Id}`, {
Agent_Fname: firstName,
Agent_Lname: lastName,
Agent_Address: address,
Agent_City: city,
Agent_Zip: Zip,
Agent_Phone: phonenumber,
Agent_Email: email,
Agent_Password: Password,
Car_List_Allow: CarListAllow,
Seller_BOS_Allowed: Carseller,
Dealer_BOS_Allowed: Cardealer,
weekdays: selectedWeekdays,
start_time: fromTimeString,
end_time: toTimeString,
});
setSubmitted(true);
setTimeout(() => {
// Navigate to another page
navigate('/agent-list');
}, 3000); // 3000 milliseconds = 3 seconds
}catch (error) {
console.error('Error occurred during registration:', error);
// If there are errors, you can display them to the user
setErrors(error.response?.data?.errors || {});
}
};
const handleCheckboxChange = (event) => {
setCarListAllow(event.target.checked ? 1 : 0);
};
const handleCheckboxSellerChange = (event) => {
setSeller(event.target.checked ? 1 : 0);
};
const handleCheckboxDealerChange = (event) => {
setDealer(event.target.checked ? 1 : 0);
};
const handleCheckboxChangeDays = (e) => {
const { value, checked } = e.target;
if (checked) {
setSelectedWeekdays([...selectedWeekdays, value]);
} else {
setSelectedWeekdays(selectedWeekdays.filter(day => day !== value));
}
};
return (
<section class="editagent-listing">
   <AdminNav />
   <div class="mid-panel agent-list-modify my-4">
      <div class="container">
         <h3 class="main-heading  text-center">Edit Agent</h3>
         <div class="newagent-list">
            {submitted && (
            <div className="alert alert-success" role="alert">
               Agent Updated successfully. 
            </div>
            )}
            <form onSubmit={handleSignUp}>
               <div class="form-row">
                  <div class="form-group col-md-6">
                     <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                     />
                     {firstNameError && 
                     <div className="text-danger">{firstNameError}</div>
                     }
                  </div>
                  <div class="form-group col-md-6">
                     <input type="text" 
                        className="form-control"
                        placeholder="Last name" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                     />
                     {lastNameError && 
                     <div className="text-danger">{lastNameError}</div>
                     }
                  </div>
               </div>
               <div class="form-group">
                  <input type="text" 
                     className="form-control" 
                     id="inputAddress"
                     placeholder="Address"
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                  />
                  {addressError && 
                  <div className="text-danger">{addressError}</div>
                  }
               </div>
               <div className="form-group">
                  <select
                     className="form-control"
                     name="city"
                     value={city}
                     onChange={(e) =>
                     setCity(e.target.value)}
                     >
                     <option value="">Select City*</option>
                     <option value="Ottawa">Ottawa</option>
                     <option value="Mississauga">Mississauga</option>
                     <option value="Brampton">Brampton</option>
                     <option value="Hamilton">Hamilton</option>
                     <option value="London">London</option>
                     <option value="Markham">Markham</option>
                     <option value="Vaughan">Vaughan</option>
                     <option value="Kitchener">Kitchener</option>
                     <option value="Windsor">Windsor</option>
                     <option value="Richmond Hill">Richmond Hill</option>
                     <option value="Burlington">Burlington</option>
                     <option value="Oshawa">Oshawa</option>
                     <option value="Greater Sudbury">Greater Sudbury</option>
                     <option value="Barrie">Barrie</option>
                     <option value="Guelph">Guelph</option>
                     <option value="Cambridge">Cambridge</option>
                     <option value="St. Catharines">St. Catharines</option>
                     <option value="Waterloo">Waterloo</option>
                     <option value="Thunder Bay">Thunder Bay</option>
                     <option value="Brantford">Brantford</option>
                     <option value="Pickering">Pickering</option>
                     <option value="Niagara Falls">Niagara Falls</option>
                     <option value="Peterborough">Peterborough</option>
                     <option value="Sault Ste. Marie">Sault Ste. Marie</option>
                     <option value="Sarnia">Sarnia</option>
                     <option value="Norfolk County">Norfolk County</option>
                     <option value="Welland">Welland</option>
                     <option value="Belleville">Belleville</option>
                     <option value="North Bay">North Bay</option>
                  </select>
                  {cityError && 
                  <div className="text-danger">{cityError}</div>
                  }
               </div>
               <div class="form-group">
                  <input type="number" 
                     className="form-control"
                     id="inputZip" 
                     placeholder="Zip"
                     value={Zip}
                     onChange={(e) => setZip(e.target.value)}
                  />
                  {ZipError && 
                  <div className="text-danger">{ZipError}</div>
                  }
               </div>
               <div class="form-group">
                  <input type="number" 
                     className="form-control"
                     id="inputphone" 
                     placeholder="Phone number"
                     value={phonenumber}
                     onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {lastphonenumberError && 
                  <div className="text-danger">{lastphonenumberError}</div>
                  }
               </div>
               <div class="form-group">
                  <input type="email" 
                     className="form-control"
                     id="inputEmail4"
                     placeholder="Email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  {lastemailError && 
                  <div className="text-danger">{lastemailError}</div>
                  }
               </div>
               <h5 class="my-3">Agent availability for inspection</h5>
               <div className="showweekdays">
                  <b>Previous Selected Days:</b>
                  <div class="panel">
                     {weekdays.map(day => (
                     <div key={day}>
                        <input
                           type="checkbox"
                           name="weekdays[]"
                           value={day}
                           checked={selectedWeekdays.includes(day)}
                           onChange={handleCheckboxChangeDays}
                           />
                        <label>{day}</label>
                     </div>
                     ))}
                  </div>
               </div>
               <div class="agent-newcal">
                  <div className="form-group d-flex items">
                     <label htmlFor="fromTime">From</label>
                     <div>
                        <select value={fromTime.hours} onChange={handleFromHourChange}>
                        {renderHourOptions()}
                        </select>
                        <select value={fromTime.period} onChange={handleFromPeriodChange}>
                           <option value="Am">AM</option>
                           <option value="Pm">PM</option>
                        </select>
                     </div>
                  </div>
                  <div className="form-group d-flex">
                     <label htmlFor="toTime">To</label>
                     <div>
                        <select value={toTime.hours} onChange={handleToHourChange}>
                        {renderHourOptions()}
                        </select>
                        <select value={toTime.period} onChange={handleToPeriodChange}>
                           <option value="am">AM</option>
                           <option value="pm">PM</option>
                        </select>
                     </div>
                  </div>
               </div>
               <div class="form-check py-3">
                  <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={handleCheckboxChange}
                  checked={CarListAllow === 1 ? true : false}
                  />
                  <label class="form-check-label" for="exampleCheck1">This agent can approve the car for the listing to show up on the dealer network</label>
               </div>
               <div class="form-check py-3">
                  <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={handleCheckboxSellerChange}
                  checked={Carseller === 1 ? true : false}
                  />
                  <label class="form-check-label" for="exampleCheck1">Permission to generate BOS of Seller to Car Chaser</label>
               </div>
               <div class="form-check py-3">
                  <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={handleCheckboxDealerChange}
                  checked={Cardealer === 1 ? true : false}
                  />
                  <label class="form-check-label" for="exampleCheck1">Permission to generate BOS Car Chaser to Dealer</label>
               </div>
               <div class="text-center">
               <button type="submit" className="btn btn-primary py-3 mt-3">Update</button>
               </div>
            </form>
         </div>
      </div>
   </div>
</section>
)
}