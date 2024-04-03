import React from 'react'
import { AdminNav } from '../NavBar/AdminNav';
export const  AddNewAgent = () => {
  return (
    <section class="editagent-listing">
         <AdminNav />
    <div class="mid-panel agent-list-modify my-4">
       <div class="container">
          <h3 class="main-heading  text-center">Add New Agent</h3>
          <div class="newagent-list">
             <form>
                <div class="form-row">
                   <div class="form-group col-md-6">      
                      <input type="text" class="form-control" placeholder="First name"/>
                   </div>
                   <div class="form-group col-md-6">      
                      <input type="text" class="form-control" placeholder="Last name"/>
                   </div>
                </div>
                <div class="form-group">
                   <input type="text" class="form-control" id="inputAddress" placeholder="Street Address"/>
                </div>
                <div class="form-group">      
                   <input type="text" class="form-control" id="inputCity" placeholder="City" />
                </div>
                <div class="form-group">    
                   <input type="text" class="form-control" id="inputZip" placeholder="Zip"/>
                </div>
                <div class="form-group">      
                   <input type="tel" class="form-control" id="inputphone" placeholder="Phone"/ >
                </div>
                <div class="form-group">
                   <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div class="form-group">      
                   <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
                <div class="form-check py-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">This agent can approve the car for the listing to show up on the dealer network</label>
                </div>
                <a href="#" class="btn btn-primary w-100 py-3">Submit</a>
             </form>
          </div>
       </div>
    </div>
 </section>
  );
};
