import React, { useEffect } from 'react';
import { AdminNav } from '../NavBar/AdminNav';
export const SoldCarDetails = () => {
    useEffect(() => {
        const initializeFlexSlider = () => {
          window.$('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            start: function(slider) {
              window.$('body').removeClass('loading');
            }
          });
        };
    
        if (window.$('.flexslider').length) {
          initializeFlexSlider();
        }
      }, []);

  return (
    <section class="car-details">
        <AdminNav />
    <div class="container">
    <h3 class="main-heading">Sold Car Listing </h3>
            <div class="top-bid-price">
               <h4>Firm Offer Price :</h4>
               <h6 class="pl-3"> <a data-toggle="modal" data-target=".bd-example-modal-lg11">$3000-$3500</a></h6>
            </div>
             <div class="top-bid-price">
               <h4>Winner Bid Price :</h4>
               <h6 class="pl-3"> $4000</h6>
            </div>
            <div class="top-bid-price">
               <h4> Winner Selection Date :</h4>
               <h6 class="pl-3"> March 06 2024</h6>
            </div>
            <div class="top-bid-price">
               <h4>Winner : </h4>
               <h6 class="pl-3"><a data-toggle="modal" data-target=".bd-example-modal-lg11"> John....</a></h6>
            </div>
            <div class="row py-3 mb-4">
                        <div class="col-md-6">
                           <div class="car-list-image">
                               <div class="flexslider">
                                 <ul class="slides">
                                    <li data-thumb="../images/new-car.png">
                                      <img src="../images/new-car.png" />
                                    </li>
                                    <li data-thumb="../images/pexels-mike.jpg">
                                      <img src="../images/pexels-mike.jpg" />
                                    </li>
                                    <li data-thumb="../images/third-view.png">
                                      <img src="../images/third-view.png" />
                                    </li>
                                    <li data-thumb="../images/four-view.png">
                                      <img src="../images/four-view.png" />
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="carlist-details">
                              <div class="carlist-heading">
                                 <h4 class="location-heading p-0 m-0">location :  </h4>
                                 <span class="inner-listname">California</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="vinenumber-heading p-0 m-0">vin number : </h4>
                                 <span class="inner-vinenumber">234</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="year-heading p-0 m-0">Year :</h4>
                                 <span class="inner-year">2018</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="model-heading p-0 m-0">model :</h4>
                                 <span class="inner-model">Audi A4</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="trim-heading p-0 m-0">trim : </h4>
                                 <span class="inner-trim">4WD</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="Mileage:-heading p-0 m-0">Mileage : </h4>
                                 <span class="inner-Mileage:">1900</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="Color-heading p-0 m-0">Color : </h4>
                                 <span class="inner-Color">White</span>
                              </div>
                              <div class="carlist-heading">
                                 <h4 class="Keys:-heading p-0 m-0">Keys : </h4>
                                 <span class="inner-Keys">2</span>
                              </div>
                              <span>2 sets of tire, Remote starter, Roof rack</span>                
                           </div>
                           <div class="external-damage-panel pt-3">
                              <h4 class="p-0 m-0">external damage to the vehicle.</h4>
                              <span>Dents, Paint Chips</span>
                              <div class="vehicle-detail">
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Do you have any extended warranty?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Yes</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Do you have original factory rims?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Yes</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Have you changed your tires in the last 12 month?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Yes</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Do you have winter tires?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Yes</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Is your car driveable?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>No</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Are you interested in a trade In?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Yes</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>How soon are you ready to sell?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>Immediately</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Why are you selling?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>selling to downsize</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>describe the condition of the car</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>good</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Any issues with the vehicle?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>no</h5>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <span>Is the car leased or financed?</span>
                                    </div>
                                    <div class="col-md-3">
                                       <h5>no</h5>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                        </div>
                     </div>
                     
                  </div>
          </section>
  )
}