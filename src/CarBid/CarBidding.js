import React from 'react'
import { AdminNav } from '../NavBar/AdminNav';
export const  CarBidding = () => {
  return (
    <section class="newcar-listing">
             <AdminNav />
         <div class="mid-panel mt-3">
            <div class="container">
               <h3 class="main-heading"> Car For Bidding </h3>
           <div class="car-bid-gallary">
                  <div class="input-group">
                      <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>    
                      <input type="search" id="form1" class="form-control" placeholder=" Search Cars" />                                                
                  </div>
                  <div class="carbid-gallery-panel py-4">
                     <div class="row">
                        <div class="col-lg-4 col-12">
                             <a href="/car-bidding-details">
                           <div class="carbid-image-panel">                          
                              <img src="../../images/nissan1.jpg" alt="images" />
                              <div class="bidpanel-innercont">                                
                                 <h6 class="pt-2">2020 Nissan 570Z</h6>
                                 <span><small>Vin #234</small></span>                                 
                              </div>
                           
                           </div>
                        </a>
                        
                        </div>
                        <div class="col-lg-4 col-12"> 
                           <a href="/car-bidding-details">                           
                           <div class="carbid-image-panel">                          
                              <img src="../../images/audi1.jpg" alt="images" />
                              <div class="bidpanel-innercont">
                                 
                                 <h6 class="pt-2">2021 Audi R8</h6>
                                 <span><small>Vin #234</small></span>
                                 
                              </div>
                           
                           </div>
                        </a>
                       
                        </div>                   
                        <div class="col-lg-4 col-12"> 
                            <a href="/car-bidding-details">                           
                           <div class="carbid-image-panel">                          
                              <img src="../../images/honda1.jpg" alt="images" />
                              <div class="bidpanel-innercont">                                
                                 <h6 class="pt-2">2021 Honda Accord</h6>
                                 <span><small>Vin #234</small></span>                                 
                              </div>                           
                           </div> 
                           </a>                       
                        </div>   
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    
  )
}
