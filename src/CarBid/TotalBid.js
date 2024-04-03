import React from 'react'
import { AdminNav } from '../NavBar/AdminNav';
export const  TotalBid = () => {
  return (
    <section class="dealer-listing">
         <AdminNav />
         <div class="mid-panel mt-3">
            <div class="container">
               <div class="table-panel">
                  <table class="table table-bordered mid-table">
                     <thead>
                        <tr>
                           <th scope="col">first name</th>
                           <th scope="col">last name</th>
                           <th scope="col">email</th>
                           <th scope="col">company name</th>
                           <th scope="col">City</th>
                           <th scope="col">Phone Number</th>
                           <th scope="col">Bid Price</th>
                           <th scope="col">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Ally</td>
                           <td>Aagaard</td>
                           <td>bige0@f.com</td>
                           <td>abc</td>
                           <td>New York</td>
                           <td>(800) 555‑0175</td>
                           <td>$2000</td>
                           <td><a href="#" class="btn btn-sm btn-primary">Winner</a></td>
                        </tr>
                        <tr>
                           <td>raju</td>
                           <td>ram</td>
                           <td>aige0@f.com</td>
                           <td>appo</td>
                           <td>New York</td>
                           <td>(800) 555‑0175</td>
                           <td>$10000</td>
                           <td><a href="#" class="btn btn-sm btn-primary">Winner</a></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>
  );
};
