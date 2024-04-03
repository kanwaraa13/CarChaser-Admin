import React from 'react'

export const  AdminNav = () => {
  return (
    <header class="py-3">
    <div class="container">
       <nav class="navbar navbar-expand-lg navbar-light p-0">
          <a class="navbar-brand" href="#">
          <img src="../../images/logo.png" alt="logo-img" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
             <ul class="navbar-nav">
                <li class="nav-item">
                   <a class="nav-link" href="/seller-isting">Sellers <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="/dealer-listing">Dealers </a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="/agent-list">Agents</a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="/car-listing">New Cars</a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="/car-bidding">Cars for Bidding</a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="/sold-cars">Sold Cars</a>
                </li>
                <li class="nav-item dropdown active">
                  <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly Analytics 
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/total-number-car-available">Total number of cars Available</a>
                    <a class="dropdown-item" href="/total-number-car-sold">Total number of cars Sold</a>
                    <a class="dropdown-item" href="/total-number-seller">Total number of Sellers</a>
                    <a class="dropdown-item" href="/average-calculation-bid"> Average calculation of winning bids</a>
                    <a class="dropdown-item" href="/highest-winning-bid">Highest winning Bid</a>
                    <a class="dropdown-item" href="/Cars-sold-per-day-of-the-month">Cars sold per day of the month</a>
                    <a class="dropdown-item" href="/bids-per-day-of-the-month">Bids per day of the month</a>
                    <a class="dropdown-item" href="/new-cars-listed-per-month">New cars listed per month</a>
                    </div>
                </li>
             </ul>
             <div class="signout-btn">
                <a href="/" class="btn btn-primary"> Sign Out</a>
             </div>
          </div>
       </nav>
    </div>
 </header>
  )
}
