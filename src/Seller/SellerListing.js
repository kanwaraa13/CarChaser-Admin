import React from 'react'
import { AdminNav } from '../NavBar/AdminNav';
export const SellerListing = () => {
  return (
    <section class="dealer-listing">
        <AdminNav />
         <div class="mid-panel mt-3">
            <div class="container">
               <h3 class="main-heading">Seller Listing </h3>
                <div class="flip-card pt-5">
                  <div class="row">
                    <div class="col-md-6">
                        <div class="card card-simple">
                            <div class="card-front text-white badge badge-primary">
                                <div class="card-body">                                    
                                    <h6 class="card-title">Aurelie Monahan</h6>
                                    <h6 class="card-title">1000 9 Ave SW #102</h6>
                                    <h6 class="card-title">T2P 2Y6</h6>
                                    <h6 class="card-title"> (403) 229-2294</h6>
                                    <h5 class="card-title"> No Of Cars Posted: 4</h5>
                                    
                                    
                                </div>
                            </div>
                           
                        </div>
                    </div>
                     <div class="col-md-6">
                        <div class="card card-simple">
                            <div class="card-front text-white badge badge-primary">
                                <div class="card-body">                                    
                                    <h6 class="card-title">Dewar Ln</h6>
                                    <h6 class="card-title">O'Leary</h6>
                                    <h6 class="card-title">C0B 1V0</h6>
                                    <h6 class="card-title"> (902) 859-2039</h6>
                                    <h5 class="card-title"> No Of Cars Posted: 6</h5>
                                    
                                </div>
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
