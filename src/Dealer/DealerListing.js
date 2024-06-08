import React, { useEffect, useState  } from 'react';
import { AdminNav } from '../NavBar/AdminNav';
import api from '../api';
export const DealerListing = () => {
const [dealerlisting, setDealerListing] = useState([]);
useEffect(() => {
fetchData();
}, []);
const fetchData = async () => {
try {
const response = await api.get(`/dealer/dealerlist`);
console.log(response.data)
if (response.data.Dealer && Array.isArray(response.data.Dealer)) {
setDealerListing(response.data.Dealer);
} else {
console.error('Calendar data is not in the expected format:', response.data);
// Handle the situation when data is not in the expected format
// For example, you can set calendarData to an empty array
setDealerListing([]);
}
} catch (error) {
console.error('Error fetching data:', error);
}
};
const Postdata = async (dealerId) => {
try {
const response = await api.post(`/admin/dealeractivatedeactivate/${dealerId}`);
fetchData(); 
} catch (error) {
console.error('Error fetching data:', error);
}
};
return (
<section class="dealer-listing">
	<AdminNav />
	<div class="mid-panel mt-3">
		<div class="container">
			<h3 class="main-heading">Dealer Listing </h3>
			<div class="flip-card">
				<div class="row">
					{dealerlisting.map((item) => (
					<div class="col-lg-4 col-md-6 pt-3">
						<div class="card card-simple">
							<div class="card-front text-white badge badge-primary">
								<div class="card-body">
									<h6 class="card-title">{item.Dealer_Fname}</h6>
									<h6 class="card-title">{item.Dealer_Address}</h6>
									<h6 class="card-title">{item.Dealership_ID}</h6>
									<h6 class="card-title">{item.Dealer_Phone}</h6>
									<h5 class="card-title"> {item.Dealer_Status === 1 ? "Active" : "Inactive"}</h5>
									<div className="text-center">
										{item.Dealer_Status === 1 ? (
										<button className="btn btn-sm btn-outline-light px-2 py-2 mt-2" onClick={() => Postdata(item.Dealer_Id)}>Deactivate</button>
										) : (
										<button className="btn btn-sm btn-outline-light px-2 py-2 mt-2" onClick={() => Postdata(item.Dealer_Id)}>Activate</button>
										)}
									</div>
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