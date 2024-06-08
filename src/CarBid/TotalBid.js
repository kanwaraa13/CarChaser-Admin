import React, { useEffect, useState  } from 'react';
import { AdminNav } from '../NavBar/AdminNav';
import { useParams } from 'react-router-dom'; // import useParams
import { useNavigate } from 'react-router-dom';
import api from '../api';
export const  TotalBid = () => {
const { Vehicle_Id } = useParams(); // Get the ID from the URL slug
const [biddata, setBidData] = useState([]);
const [winnerData, setWinnerData] = useState(null);
const [successMessage, setSuccessMessage] = useState('');
const navigate = useNavigate();
useEffect(() => {
fetchData();
}, []);
const fetchData = async () => {
try {
const response = await api.get(`/admin/vehiclebidslisting/${Vehicle_Id}`);
console.log(response.data)
if (response.data.vehiclebidlisting && Array.isArray(response.data.vehiclebidlisting)) {
setBidData(response.data.vehiclebidlisting);
} else {
console.error('Calendar data is not in the expected format:', response.data);
// Handle the situation when data is not in the expected format
// For example, you can set calendarData to an empty array
setBidData([]);
}
} catch (error) {
console.error('Error fetching data:', error);
}
};
const postWinnerData = async (bidId, vehicleId) => {
try {
const response = await api.post(`/admin/setwinnerbid/${bidId}/${vehicleId}`);
setWinnerData(response.data);
setSuccessMessage('Winner set successfully!');
setTimeout(() => {
navigate('/car-bidding')
}, 3000);
} catch (error) {
console.error('Error fetching:', error);
}
};
const formatBidAmount = (amount) => {
// Convert the amount to a number and format it with commas
return parseFloat(amount).toLocaleString(undefined, {maximumFractionDigits: 2});
};
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
						{biddata.map((item) => (
						<tr key={item.Dealer_Id}>
							<td>{item.Dealer_Fname}</td>
							<td>{item.Dealer_Lname}</td>
							<td>{item.Dealer_Email}</td>
							<td>{item.Dealership_Name}</td>
							<td>{item.Dealer_Address}</td>
							<td>{item.Dealer_Phone}</td>
							<td>${formatBidAmount(item.Bid_Amount)}</td>
							<td>
								<button 
									onClick={() => postWinnerData(item.Bid_Id, item.Vehicle_Id)} 
								className="btn btn-sm btn-primary"
								>
								Winner
								</button>
							</td>
						</tr>
						))}
					</tbody>
				</table>
				{successMessage && 
						<div class="text-success">{successMessage}</div>
						}
			</div>
		</div>
	</div>
</section>
);
};