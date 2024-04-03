import React from 'react'
import { AdminNav } from '../NavBar/AdminNav';
export const DealerListing = () => {
  return (
    <section class="dealer-listing">
           <AdminNav />
         <div class="mid-panel mt-3">
            <div class="container">
               <h3 class="main-heading">Dealer Listing </h3>
                <div class="flip-card pt-5">
                  <div class="row">
                    <div class="col-md-6">
                        <div class="card card-simple">
                            <div class="card-front text-white badge badge-primary">
                                <div class="card-body">                                    
                                    <h6 class="card-title">Aurelie Monahan</h6>
                                    <h6 class="card-title">10060 Bramalea Rd,Brampton</h6>
                                    <h6 class="card-title">L6R 1A1</h6>
                                    <h6 class="card-title"> (905) 799-1122</h6>
                                    <h5 class="card-title"> Active Dealer</h5>
                                    <div class="text-center">
                                     <a href="#" class="btn btn-sm btn-outline-light px-2 py-2 mt-2">Deactivate</a>
                                    </div>
                                    
                                </div>
                            </div>
                           
                        </div>
                    </div>
                     <div class="col-md-6">
                        <div class="card card-simple">
                            <div class="card-front text-white badge badge-primary">
                                <div class="card-body">                                    
                                    <h6 class="card-title">Ivy Cassin</h6>
                                    <h6 class="card-title">131 Signal Rd,Fort McMurray</h6>
                                    <h6 class="card-title">T9H 4N6</h6>
                                    <h6 class="card-title"> (780) 791-3995</h6>
                                    <h5 class="card-title"> Inactive Dealer</h5>
                                    <div class="text-center">
                                     <a href="#" class="btn btn-sm btn-outline-light px-2 py-2 mt-2">Activate</a>
                                    </div>
                                    
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
