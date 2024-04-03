import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminLogin } from './Auth/Adminlogin/AdminLogin';
import { SellerListing } from './Seller/SellerListing';

import { DealerListing } from './Dealer/DealerListing';
import { AgentList } from './Agent/AgentList';
import { AddNewAgent } from './Agent/AddNewAgent';
import { EditAgent } from './Agent/EditAgent';
import { CarListing } from './NewCars/CarListing';
import  CarDetails  from './NewCars/CarDetails';
import  { CarsoldListing }  from './NewCars/CarsoldListing';
import  { CarBidding }  from './CarBid/CarBidding';
import  { CarBiddingDetails }  from './CarBid/CarBiddingDetails';
import  { TotalBid }  from './CarBid/TotalBid';
import  { SoldCarList }  from './SoldCars/SoldCarList';
import  { SoldCarDetails }  from './SoldCars/SoldCarDetails';
import  { TotalNumberCarAvailable }  from './MonthlyAnalytics/TotalNumberCarAvailable';
import  { TotalNumberCarSold }  from './MonthlyAnalytics/TotalNumberCarSold';
import  { TotalNumberSeller }  from './MonthlyAnalytics/TotalNumberSeller';
import  { AverageCalculationBid }  from './MonthlyAnalytics/AverageCalculationBid';
import  { HighestWinningBid }  from './MonthlyAnalytics/HighestWinningBid';
import  { CarSoldMonthDay }  from './MonthlyAnalytics/CarSoldMonthDay';
import  { BidsPerDays }  from './MonthlyAnalytics/BidsPerDays';
import  { NewCarListed }  from './MonthlyAnalytics/NewCarListed';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/seller-isting" element={<SellerListing />} />  
          <Route path="/dealer-listing" element={<DealerListing />} />
          <Route path="/agent-list" element={<AgentList />} />
          <Route path="/add-new-agent" element={<AddNewAgent />} />
          <Route path="/edit-agent" element={<EditAgent />} />
          <Route path="/car-listing" element={<CarListing />} />
          <Route path="/car-details" element={<CarDetails />} />
          <Route path="/car-sold-listing" element={<CarsoldListing />} />
          <Route path="/car-bidding" element={<CarBidding />} />
          <Route path="/car-bidding" element={<CarBidding />} />
          <Route path="/car-bidding-details" element={<CarBiddingDetails />} />
          <Route path="/total-bid" element={<TotalBid />} />  
          <Route path="/sold-cars" element={<SoldCarList />} />
          <Route path="/sold-car-details" element={<SoldCarDetails />} />
          <Route path="/total-number-car-available" element={<TotalNumberCarAvailable />} />
          <Route path="/total-number-car-sold" element={<TotalNumberCarSold />} />
          <Route path="/total-number-seller" element={<TotalNumberSeller />} />
          <Route path="/average-calculation-bid" element={<AverageCalculationBid />} />
          <Route path="/highest-winning-bid" element={<HighestWinningBid />} />
          <Route path="/Cars-sold-per-day-of-the-month" element={<CarSoldMonthDay />} />
          <Route path="/bids-per-day-of-the-month" element={<BidsPerDays />} />
          <Route path="/new-cars-listed-per-month" element={<NewCarListed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
