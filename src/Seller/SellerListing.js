import React, { useEffect, useState  } from 'react';
import { AdminNav } from '../NavBar/AdminNav';
import api from '../api';
export const SellerListing = () => {
    const [sellerlisting, setSellerListing] = useState([]);
    

    useEffect(() => {
        fetchData();
     }, []);

     const fetchData = async () => {
        try {
            const response = await api.get(`/seller/sellerlist`);
               console.log(response.data)
               if (response.data.Seller && Array.isArray(response.data.Seller)) {
                  setSellerListing(response.data.Seller);
   
              } else {
                  console.error('Calendar data is not in the expected format:', response.data);
                  // Handle the situation when data is not in the expected format
                  // For example, you can set calendarData to an empty array
                  setSellerListing([]);
              }
         } catch (error) {
             console.error('Error fetching data:', error);
         }
     };
  return (
    <section class="dealer-listing">
        <AdminNav />
         <div class="mid-panel mt-3">
            <div class="container">
               <h3 class="main-heading">Seller Listing </h3>
                <div class="flip-card pt-2">
                  <div class="row">
                  {sellerlisting.map((item) => (
                        <div class="col-lg-4 col-md-6 pt-3">
                            <div class="card card-simple">
                                <div class="card-front text-white badge badge-primary">
                                    <div class="card-body">                              
                                        <h6 class="card-title">{item.Seller_FName}</h6>
                                        <h6 class="card-title">{item.Seller_City}</h6>  
                                        <h6 class="card-title">{item.Seller_PostalCode}</h6>
                                        <h6 class="card-title">{item.Seller_Phone}</h6>    
                                        <h6 class="card-title">{item.Seller_Email}</h6>
                                        <h6 class="card-title">No Of Cars Posted:{item.vehicle_count}</h6>  
                                    </div>
                                </div>
                            </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}
