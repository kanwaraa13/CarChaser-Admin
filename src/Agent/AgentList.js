import React from 'react'
import { AdminNav } from '../NavBar/AdminNav';
export const  AgentList = () => {
  return (
    <section class="agent-listing">
       <AdminNav />
         <div class="mid-panel mt-3">
            <div class="container">
               <h3 class="main-heading">Agent List</h3>
               <div class="flip-card pt-5">
                  <div class="row">
                    <div class="col-md-6">
                        <div class="card card-flip">
                            <div class="card-front text-white badge badge-primary">
                                <div class="card-body">                                    
                                    <h6 class="card-title">Jovany Kuhlman</h6>
                                    <h6 class="card-title">10060 Bramalea Rd,Brampton</h6>
                                    <h6 class="card-title">L6R 1A1</h6>
                                    <h6 class="card-title"> (905) 799-1122</h6>
                                    <h4 class="py-2">Car List Allowed</h4>
                                    
                                </div>
                            </div>
                            <div class="card-back bg-white ">
                                <div class="card-body">
                                    <div class="text-center">
                                       <a data-toggle="modal" data-target=".bd-example-modal-lg-view-calendar" class="btn btn-primary">View Agent Calender</a>
                                    </div>
                                    <div class="agent-list-veiw-btn mt-4 text-center">
                                    <a href="/edit-agent" class="btn btn-primary px-4 py-2">Edit</a>
                                    <a data-toggle="modal" data-target=".bd-example-modal-lg-delete"  class="btn btn-primary px-3 py-2 ml-3">Delete</a>
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class="col-md-6">
                        <div class="card card-flip">
                            <div class="card-front text-white badge badge-primary">
                                <div class="card-body">                                    
                                    <h6 class="card-title">Coleman West</h6>
                                    <h6 class="card-title">131 Signal Rd,Fort McMurray</h6>
                                    <h6 class="card-title">T9H 4N6</h6>
                                    <h6 class="card-title"> (780) 791-3995</h6>
                                    <h4 class="py-2">Car List Not Allowed</h4>
                                    
                                </div>
                            </div>
                            <div class="card-back bg-white">
                                <div class="card-body">
                                    <div class="text-center">
                                       <a data-toggle="modal" data-target=".bd-example-modal-lg-view-calendar" class="btn btn-primary">View Agent Calender</a>
                                    </div>
                                    <div class="agent-list-veiw-btn mt-4 text-center">
                                    <a href="editagent-listing.html" class="btn btn-primary px-4 py-2">Edit</a>
                                    <a data-toggle="modal" data-target=".bd-example-modal-lg-delete"  class="btn btn-primary px-3 py-2 ml-3">Delete</a>
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
               </div>
               <div class="add-btn mt-5">
                  <a href="/add-new-agent"  class="btn btn-primary">add new agent </a>
               </div>
            </div>
         </div>
         <div class="modal fade bd-example-modal-lg-delete newcar-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">        
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <div class="delete-status">
                  <div class="delete-img">
                     <img src="../../images/delete_garbage.png" alt="del-img" />
                  </div>
                  <p>Are you sure you want to delete selected Agent</p>
                  <div class="delete-btn">
                     <button type="button" class="btn btn-primary px-4" data-dismiss="modal">Delete</button>
                     <button type="button" class="btn btn-primary mx-4 px-4" data-dismiss="modal">Cancel</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="modal fade bd-example-modal-lg-view-calendar newcar-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">        
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <div class="caldendar-status">
                  <h3 class="main-heading py-3">View agent Calendar</h3>
                 <div class="table-panel py-4">
                  <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                        </div>
                        <table class="table table-bordered mid-table" cellspacing="4">
                     <thead>
                        <tr>
                           <th scope="col">Date</th>
                           <th scope="col">Start Time</th>
                           <th scope="col">end time</th>
                                                    
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>20-03-2024</td>
                           <td>10.00 AM</td>
                           <td>18.00 PM </td>
                                                     
                        </tr>
                         <tr>
                           <td>21-03-2024</td>
                           <td>11.00 AM</td>
                           <td>21.00 PM</td>
                                             
                        </tr>
                     </tbody>
                  </table>
                  
               </div>
               </div>
            </div>
         </div>
      </div>
   </div>
      </section>
     
     
  )
}
