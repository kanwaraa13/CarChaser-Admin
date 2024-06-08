import React, { useEffect, useState  } from 'react';
import { AdminNav } from '../NavBar/AdminNav';
import api from '../api';
export const  AgentList = () => {
const [agentlisting, setAgentListing] = useState([]);
const [agentcalnder, setAgentCalnder] = useState([]);
const [deleteAgentId, setDeleteAgentId] = useState(null);
const [updatesucces, setUpdateSucces] = useState(null); // State to hold the selected date
const [disapprovesucces, setDisapproveSucces] = useState(null); // State to hold the selected date
useEffect(() => {
fetchAgentData();
}, []);
const handleApproved = async (calendarId) => {
try {
// Send the API request with the updated time data
const response = await api.post(`/admin/approvedagentdatetime/${calendarId}`, {
});
if (response.data && response.data.message) {
console.log(response.data.message);
setUpdateSucces(true);
setTimeout(() => {
window.location.reload(); // Reload the page
}, 2000);
} else {
// Handle other responses
console.log('Calendar entry update failed.');
}
} catch (error) {
console.error('Error updating calendar entry:', error);
}
};
const handleDisApproved = async (calendarId) => {
try {
// Send the API request with the updated time data
const response = await api.post(`/admin/disapprovedagentdatetime/${calendarId}`, {
});
if (response.data && response.data.message) {
console.log('Calendar entry updated successfully:', response.data.message);
setDisapproveSucces(true);
setTimeout(() => {
window.location.reload(); // Reload the page
}, 2000);
} else {
// Handle other responses
console.log('Calendar entry update failed.');
}
} catch (error) {
console.error('Error updating calendar entry:', error);
}
};
const fetchAgentData = async () => {
try {
const response = await api.get(`/agent/agentlist`);
console.log(response.data)
if (response.data.Agent && Array.isArray(response.data.Agent)) {
setAgentListing(response.data.Agent);
} else {
console.error('Calendar data is not in the expected format:', response.data);
// Handle the situation when data is not in the expected format
// For example, you can set calendarData to an empty array
setAgentListing([]);
}
} catch (error) {
console.error('Error fetching data:', error);
}
};
const fetchAgenCalender =  async (agentId) => {
try {
const response = await api.get(`/admin/viewagentcalender/${agentId}`);
console.log(response.data)
if (response.data.Agent_calender && Array.isArray(response.data.Agent_calender)) {
setAgentCalnder(response.data.Agent_calender);
} else {
console.error('Calendar data is not in the expected format:', response.data);
// Handle the situation when data is not in the expected format
// For example, you can set calendarData to an empty array
setAgentCalnder([]);
}
} catch (error) {
console.error('Error fetching data:', error);
}
};
const postdeleteagent = async () => {
try {
const response = await api.post(`/admin/deleteagent/${deleteAgentId}`);
console.log(response.data);
fetchAgentData();
// You may want to update your UI after successful deletion
} catch (error) {
console.error('Error fetching data:', error);
}
};
return (
<section class="agent-listing">
   <AdminNav />
   <div class="mid-panel mt-3">
      <div class="container">
         <h3 class="main-heading">Agent Listing</h3>
         <div class="flip-card pt-5">
            <div class="row">
               {agentlisting.map((item) => (
               <div class="col-lg-4 col-md-6 mt-3">
                  <div class="card card-flip h-100">
                     <div class="card-front text-white badge badge-primary">
                        <div class="card-body">
                           <h6 class="card-title">{item.Agent_Fname}{item.Agent_Lname}</h6>
                           <h6 class="card-title">{item.Agent_Address} {item.Agent_City}</h6>
                           <h6 class="card-title">{item.Agent_Zip}</h6>
                           <h6 class="card-title">{item.Agent_Phone}</h6>
                           <h4 class="py-2">{item.Car_List_Allow === 1 ? "Car List Allowed" : "Car List Not Allowed"} </h4>
                           <h4 class="py-2">{item.Seller_BOS_Allowed === 1 ? "Seller BOS Allowed" : ""} </h4>
                           <h4 class="py-2">{item.Dealer_BOS_Allowed === 1 ? "Dealer BOS Allowed" : ""} </h4>
                        </div>
                     </div>
                     <div class="card-back bg-white ">
                        <div class="card-body">
                           <div class="text-center">
                              <button data-toggle="modal" data-target=".bd-example-modal-lg-view-calendar" class="btn btn-primary" onClick={() => fetchAgenCalender(item.Agent_Id)}>View Agent Calender</button>
                           </div>
                           <div class="agent-list-veiw-btn mt-4 text-center">
                              <a href={`/edit-agent/${item.Agent_Id}`} class="btn btn-primary px-4 py-2">Edit</a>
                              <a data-toggle="modal" data-target=".bd-example-modal-lg-delete"  class="btn btn-primary px-3 py-2 ml-3"  onClick={() => setDeleteAgentId(item.Agent_Id)}>Delete</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               ))}
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
                     <button type="button" class="btn btn-primary px-4" data-dismiss="modal" onClick={postdeleteagent}>Delete</button>
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
                  {updatesucces && 
                  <p className="text-success">Date has been successfully approved</p>
                  }
                  {disapprovesucces && 
                  <p className="text-error">Date has been disapproved</p>
                  }
                  <div class="table-panel py-4">
                     <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                     </div>
                     <table class="table table-bordered mid-table" cellspacing="4">
                        <thead>
                           <tr>
                              <th scope="col">WeekDays/Date</th>
                              <th scope="col">Start Time</th>
                              <th scope="col">end time</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {agentcalnder.map((item) => (
                           <tr key={item.Calendar_Id}>
                              <td>{item.Calendar_Date ? item.Calendar_Date : item.Calendar_Day}</td>
                              <td>{item.Start_Time}</td>
                              <td>{item.End_Time}</td>
                              {item.Admin_Approval === 1 ? (
                              <td colSpan="3">No Action Required</td>
                              ) : (
                              <td>
                                 <a onClick={() => handleApproved(item.Calendar_Id)} className="btn btn-sm btn-primary ">Approved</a>
                                 <a onClick={() => handleDisApproved(item.Calendar_Id)} className="btn btn-sm btn-primary ml-2">Dis-Approved</a>
                              </td>
                              )} 						   
                           </tr>
                           ))}
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