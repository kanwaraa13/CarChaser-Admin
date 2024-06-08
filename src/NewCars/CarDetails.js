import React, { useEffect, useState  } from 'react';
import { AdminNav } from '../NavBar/AdminNav';
import { useParams } from 'react-router-dom'; // import useParams
import { useNavigate } from 'react-router-dom';
import api from '../api';
const CarDetails = () => {
   const { Vehicle_Id } = useParams(); // Get the ID from the URL slug
   const [fetchprice, setFetchPrice] = useState({}); // Initialize fetchprice with an empty object
      const [vehicleData, setVehicleData] = useState(null);
      const [sellerid, setSeller] = useState('');
      const [textareaValue, setTextareaValue] = useState('');
      const [vechicleid, setVehicleId] = useState('');
      const [vechiclevideo, setVechicleVideo] = useState('');
      const [location, setLocation] = useState('');
      const [vin, setVin] = useState('');
      const [year, setYear] = useState('');
      const [make, setMake] = useState('');
      const [model, setModel] = useState('');
      const [trim, setTrim] = useState('');
      const [mileage, setMileage] = useState('');
      const [color, setColor] = useState('');
      const [keys, setkeys] = useState('');
      const [settire, setSetTire] = useState('');
      const [windowtint, setWindowTint] = useState('');
      const [aftermarketexhaust, setAftermarketExhaust] = useState('');
      const [aftermarkrims, setAftermarkRims] = useState('');
      const [roofrack, setRoofRack] = useState('');
      const [remotestarter, setRemoteStarter] = useState('');
      const [aftermarkstereo, setAftermarkStereo] = useState('');
      const [aftermarketspoiler, setAftermarketSpoiler] = useState('');
      const [minordamage, setMinorDamage] = useState('');
      const [interiorimage, setInteriorImage] = useState('');
      const [interiorimagetwo, setInteriorImageTwo] = useState('');
      const [interiorimagethree, setInteriorImageThree] = useState('');
      const [interiorimagefour, setInteriorImageFour] = useState('');
      const [exteriorimage, setExteriorImage] = useState('');
      const [exteriorimagetwo, setExteriorImageTwo] = useState('');
      const [exteriorimagethree, setExteriorImageThree] = useState('');
      const [exteriorimagefour, setExteriorImageFour] = useState('');
      const [dashboardimage, setDashboardImage] = useState('');
      const [dashboardimagetwo, setDashboardImageTwo] = useState('');
      const [dashboardimagethree, setDashboardImageThree] = useState('');
      const [dashboardimagefour, setDashboardImageFour] = useState('');
      const [rimsimage, setRimsImage] = useState('');
      const [rimsimagetwo, setRimsImageTwo] = useState('');
      const [rimsimagethree, setRimsImageThree] = useState('');
      const [rimsimagefour, setRimsImageFour] = useState('');
      const [fadingpaints, setFadingPaints] = useState('');
      const [rust, setRust] = useState('');
      const [haildamage, setHailDamage] = useState('');
      const [extmintcondition, setExtMintCondition] = useState('');
      const [dents, setDents] = useState('');
      const [ripsOrTears, setRipsOrTears] = useState(false); 
      const [visibleStain, setVisibleStain] = useState(false);
      const [strongSmell, setStrongSmell] = useState(false);
      const [damagedSystems, setDamagedSystems] = useState(false);
      const [IntmintCondition, setIntMintCondition] = useState(false);
      const [smokeInVehicle, setSmokeInVehicle] = useState(false);
      const [hasOriginalRims, setHasOriginalRims] = useState(null);
      const [tireReplacement, setTireReplacement] = useState(null); 
      const [vehicleDrivable, setVehicleDrivable] = useState(null);
      const [crackOnWindshield, setCrackOnWindshield] = useState(null);
      const [extendedWarranty, setExtendedWarranty] = useState(null);
      const [tradeInInterest, setTradeInInterest] = useState(null);
      const [bidcount, setBidCount] = useState('');
      const [sellTiming, setSellTiming] = useState(''); 
      const [DonotNeedCar, setDonotNeedCar] = useState('');
      const [MechElectIssues, setMechElectIssues] = useState('');
      const [DownSize, setDownSize] = useState(''); 
      const [BuyAnotherCar, setBuyAnotherCar] = useState('')
      const [carCondition, setCarCondition] = useState('');
      const [accidentclaims, setAccidentClaims] = useState('');
      const [howmuchclaims, setHowMuchClaims] = useState('');
      const [carrims, setCarRims] = useState('');
      const [stockrim, setStockRim] = useState('');
      const [issuevichle, setIssueVichle] = useState('');
      const [issuevichledecs, setIssueVichleDecs] = useState('');
      const [carmodify, setCarMdify] = useState('');
      const [carmodifydecs, setCarMdifyDecs] = useState('');
      const [financed, setFinanced] = useState('');
      const [financeddesc, setFinancedDesc] = useState('');
      const [vehicledrivabledesc, setVehicleDrivableDes] = useState('');
      const [sellername, SetSellerName] = useState('');
      const [sellerlastname, SetSellerLastname] = useState('');
      const [sellercity, SetSellerCity] = useState('');
      const [selleremail, SetSellerEmail] = useState('');
      const [sellerphone, SetSellerPhone] = useState('');
      const [sellerpostalCod, SetSellerPostal] = useState('');
   
      const [firmprice, setFirmPrice] = useState('');
      const [postinspect, setPostInspect] = useState(false);
      const [vechicleadminstatus, setVechicleAdminStatus] = useState('');
      const [showTextarea, setShowTextarea] = useState(false);
      const [agent, setAgentid] = useState('');
      const [inspectonstatus, setAgentInspectonStatus] = useState('');
      const [agentname, setAgentName] = useState('');
      const [agentlastname, setAgentLame] = useState('');
      const [agentcity, setAgentCity] = useState('');
      const [agentemail, setAgentEmail] = useState('');
      const [agentphone, setAgentPhone] = useState('');
      const [agentzip, setAgentZip] = useState('');
      const [agentadresss, setAgentAddress] = useState('');
      const [responseMessageState, setResponseDataMessage] = useState("");
      const navigate = useNavigate();
      
      useEffect(() => {
         fetchData();
      
       
      }, []);

      const features = [
         settire,
         windowtint,
         aftermarketexhaust,
         roofrack,
         remotestarter,
         aftermarkstereo,
         aftermarketspoiler,
         
       ];
       const filteredFeatures = features.filter(feature => feature);
      const featuresString = filteredFeatures.join(',');

      const featurestwo = [
         minordamage,
         fadingpaints,
         rust,
         haildamage,
         extmintcondition,
         dents
       ];
       const filteredFeaturestwo = featurestwo.filter(feature => feature);
      const featuresStringtwo = filteredFeaturestwo.join(',');

      const featuresthree = [
         ripsOrTears,
         visibleStain,
         strongSmell,
         damagedSystems,
         IntmintCondition
       ];
       const filteredFeaturesthree = featuresthree.filter(feature => feature);
      const featuresStringthree = filteredFeaturesthree.join(',');

      useEffect(() => {
         if (Vehicle_Id && (interiorimage || interiorimagetwo || interiorimagethree || interiorimagefour ||  exteriorimage || dashboardimage || dashboardimagetwo || dashboardimagethree || dashboardimagefour || rimsimage || rimsimagetwo || rimsimagethree || rimsimagefour)) {
             initializeFlexSlider();
         }
     }, [Vehicle_Id, interiorimage, interiorimagetwo, interiorimagethree, interiorimagefour, exteriorimage, dashboardimage, rimsimage]);
    
    

   const fetchData = async () => {
      try {
         const response = await api.get(`/seller/vehicle/${Vehicle_Id}`);
          const vehicleData = response.data;
          // Log the entire API response
          console.log('API response:', vehicleData);
          setSeller(vehicleData.vehicle.Seller_Id)
          const sell = vehicleData.vehicle.Seller_Id;
          setLocation(vehicleData.vehicle.Location || '');
          setVin(vehicleData.vehicle.VIN || '');
          setYear(vehicleData.vehicle.Year || '');
          setMake(vehicleData.vehicle.Make || '');
          setModel(vehicleData.vehicle.Model || '');
          setTrim(vehicleData.vehicle.Trim || '');
          setMileage(vehicleData.vehicle.Mileage || '');
          setColor(vehicleData.vehicle.Color || '');
          setkeys(vehicleData.vehicle.Car_Keys || '');
          setSetTire(vehicleData.vehicle['2_Sets_Of_Tire'] || ''); 
          setWindowTint(vehicleData.vehicle['Win_Tint'] || ''); 
          setAftermarketExhaust(vehicleData.vehicle['Aftermark_Exhaust'] || ''); 
          setAftermarkRims(vehicleData.vehicle['Aftermark_Rims'] || ''); 
          setRoofRack(vehicleData.vehicle['Roof_Rack'] || ''); 
          setRemoteStarter(vehicleData.vehicle['Remote_Start'] || '');
          setRemoteStarter(vehicleData.vehicle['Remote_Start'] || '');
          setAftermarkStereo(vehicleData.vehicle['Aftermark_Stereo'] || '');
          setAftermarketSpoiler(vehicleData.vehicle['Aftermark_Spoiler'] || '');
          setMinorDamage(vehicleData.vehicle['Minor_Damage'] || '');
          setInteriorImage(vehicleData.vehicle['Interior_Image'] || '');
          setInteriorImageTwo(vehicleData.vehicle['Interior_Image2'] || '');
          setInteriorImageThree(vehicleData.vehicle['Interior_Image3'] || '');
          setInteriorImageFour(vehicleData.vehicle['Interior_Image4'] || '');
          setExteriorImage(vehicleData.vehicle['Exterior_Image'] || '');
          setExteriorImageTwo(vehicleData.vehicle['Exterior_Image2'] || '');
          setExteriorImageThree(vehicleData.vehicle['Exterior_Image3'] || '');
          setExteriorImageFour(vehicleData.vehicle['Exterior_Image4'] || '');
          setDashboardImage(vehicleData.vehicle['Dashboard_Image'] || '');
          setDashboardImageTwo(vehicleData.vehicle['Dashboard_Image2'] || '');
          setDashboardImageThree(vehicleData.vehicle['Dashboard_Image3'] || '');
          setDashboardImageFour(vehicleData.vehicle['Dashboard_Image4'] || '');
          setRimsImage(vehicleData.vehicle['Rims_Image'] || '');
          setRimsImageTwo(vehicleData.vehicle['Rims_Image2'] || '');
          setRimsImageThree(vehicleData.vehicle['Rims_Image3'] || '');
          setRimsImageFour(vehicleData.vehicle['Rims_Image4'] || '');
          setFadingPaints(vehicleData.vehicle['Fading_Paints'] || '');
          setRust(vehicleData.vehicle['Rust'] || '')
          setHailDamage(vehicleData.vehicle['Hail_Damage'] || '')
          setExtMintCondition(vehicleData.vehicle['Ext_Mint_Condition'] || '')
          setDents(vehicleData.vehicle['Dents'] || '')
          setRipsOrTears(vehicleData.vehicle['Seats_Rips_Tears'] || '')
          setVisibleStain(vehicleData.vehicle['Seats_Visible_Stain'] || '')
          setStrongSmell(vehicleData.vehicle['Strong_Smell'] || '')
          setDamagedSystems(vehicleData.vehicle['Nav_Entmt_Ctrl_Dmg_Sys'] || '')
          setIntMintCondition(vehicleData.vehicle['Int_Mint_Condition'] || '')
          setSmokeInVehicle(vehicleData.vehicle['Smoke_In_Vehicle'] || 'No')
          setHasOriginalRims(vehicleData.vehicle['Original_Factory_Rims'] || 'No')
          setTireReplacement(vehicleData.vehicle['Tires_Repld_12_Months'] || 'No')
          setVehicleDrivable(vehicleData.vehicle['Vehicle_Drivable'] || 'No')
          setCrackOnWindshield(vehicleData.vehicle['Windshield_Crack'] || 'No')
          setExtendedWarranty(vehicleData.vehicle['Extended_Warranty'] || 'No')
          setTradeInInterest(vehicleData.vehicle['TradeIn_Interested'] || 'No')
          setVehicleDrivableDes(vehicleData.vehicle['vehicle_drivable_not_explanation'])
          setSellTiming(vehicleData.vehicle['How_Soon_Ready_Sell'])
          setDonotNeedCar(vehicleData.vehicle['Donot_Need_Car'] || "")
          setMechElectIssues(vehicleData.vehicle['Mech_Elect_Issues'] || "")
          setDownSize(vehicleData.vehicle['Downsize'] || "")
          setBuyAnotherCar(vehicleData.vehicle['Buy_Another_Car'] || "")
          setCarCondition(vehicleData.vehicle['Car_Condition'])
          setAccidentClaims(vehicleData.vehicle['Accident_Claims'] || "No")
          setHowMuchClaims(vehicleData.vehicle['How_Much_Claims'] || "")
          setCarRims(vehicleData.vehicle['Car_Rims'])
          setStockRim(vehicleData.vehicle['Stock_Rims'] || "No")
          setIssueVichle(vehicleData.vehicle['Any_Vehicle_Issues'] || "No")
          setIssueVichleDecs(vehicleData.vehicle['Vehicle_Issues_desc'] || "")
          setCarMdify(vehicleData.vehicle['Car_Modification'] || "No")
          setCarMdifyDecs(vehicleData.vehicle['Modification_desc'] || "")
          setFinanced(vehicleData.vehicle['Leased_Financed'] || "No")
          setFinancedDesc(vehicleData.vehicle['Financed_By'] || "") 
          setVehicleId(vehicleData.vehicle['Vehicle_Id'] ) 
          setVechicleVideo(vehicleData.vehicle['Vehicle_video'] ) 
          setFirmPrice(vehicleData.vehicle['Firm_Price'] ) 
          setVechicleAdminStatus(vehicleData.vehicle['Vehicle_Admin_Status'] ) 
         console.log(vehicleData.vehicle['Vehicle_Admin_Status'])
         if (vehicleData.vehicle['Leased_Financed'] === 1) {
            setFinanced('Yes');
         } 
         if (vehicleData.vehicle['Car_Modification'] === 1) {
            setCarMdify('Yes');
         } 
          if (vehicleData.vehicle['Any_Vehicle_Issues'] === 1) {
            setIssueVichle('Yes');
         } 

         if (vehicleData.vehicle['Stock_Rims'] === 1) {
            setStockRim('Yes');
         } 
         if (vehicleData.vehicle['Accident_Claims'] === 1) {
            setAccidentClaims('Yes');
         }
         if (vehicleData.vehicle['Donot_Need_Car'] === 1) {
            setDonotNeedCar('Don’t Need The Car Anymore');
         }
         if (vehicleData.vehicle['Mech_Elect_Issues'] === 1) {
            setMechElectIssues('Selling Because The Car Has Some Mechanical/ Electrical Issues');
         }
         if (vehicleData.vehicle['Downsize'] === 1) {
            setDownSize('Selling To Downsize');
         }
         if (vehicleData.vehicle['Buy_Another_Car'] === 1) {
            setBuyAnotherCar('Selling To Buy Another Car');
         }
       
         if (vehicleData.vehicle['TradeIn_Interested'] === 1) {
            setTradeInInterest('Yes');
         }
         if (vehicleData.vehicle['Extended_Warranty'] === 1) {
            setExtendedWarranty('Yes');
         }
         if (vehicleData.vehicle['Windshield_Crack'] === 1) {
            setCrackOnWindshield('Yes');
         }
         if (vehicleData.vehicle['Vehicle_Drivable'] === 1) {
            setVehicleDrivable('Yes');
         }
         if (vehicleData.vehicle['Tires_Repld_12_Months'] === 1) {
            setTireReplacement('Yes');
         }
         if (vehicleData.vehicle['Original_Factory_Rims'] === 1) {
            setHasOriginalRims('Yes');
         }
         if (vehicleData.vehicle['Original_Factory_Rims'] === 1) {
            setHasOriginalRims('Yes');
         }
         if (vehicleData.vehicle['Smoke_In_Vehicle'] === 1) {
            setSmokeInVehicle('Yes');
         }
         if (vehicleData.vehicle['2_Sets_Of_Tire'] === 1) {
            setSetTire('2 Sets of Tire');
         }
         if (vehicleData.vehicle['Win_Tint'] === 1) {
            setWindowTint('Window Tint');
         }
         if (vehicleData.vehicle['Aftermark_Exhaust'] === 1) {
            setAftermarketExhaust('Aftermarket Exhaust');
         } 
         if (vehicleData.vehicle['Aftermark_Rims'] === 1) {
            setAftermarkRims('Aftermarket Rims');
         }
         if (vehicleData.vehicle['Roof_Rack'] === 1) {
            setRoofRack('Roof Rack');
         }
         if (vehicleData.vehicle['Remote_Start'] === 1) {
            setRemoteStarter('Remote Start');
         }
         if (vehicleData.vehicle['Aftermark_Stereo'] === 1) {
            setAftermarkStereo('Aftermarket Stereo');
         }
         if (vehicleData.vehicle['Aftermark_Spoiler'] === 1) {
            setAftermarketSpoiler('Aftermarket Spoiler');
         }
         if (vehicleData.vehicle['Minor_Damage'] === 1) {
            setMinorDamage('Minor Damage');
         }
         if (vehicleData.vehicle['Fading_Paints'] === 1) {
            setFadingPaints('Fading Paints');
         }
         if (vehicleData.vehicle['Rust'] === 1) {
            setRust('Rust');
         }
         if (vehicleData.vehicle['Hail_Damage'] === 1) {
            setHailDamage('Hail Damage');
         }
         if (vehicleData.vehicle['Ext_Mint_Condition'] === 1) {
            setExtMintCondition('Mint Condition');
         }
         if (vehicleData.vehicle['Dents'] === 1) {
            setDents('Dents');
         }
         if (vehicleData.vehicle['Int_Mint_Condition'] === 1) {
            setIntMintCondition('Mint Condition');
         }
         if (vehicleData.vehicle['Nav_Entmt_Ctrl_Dmg_Sys'] === 1) {
            setDamagedSystems('Damaged Systems');
         }
         if (vehicleData.vehicle['Strong_Smell'] === 1) {
            setStrongSmell('Strong Smell');
         }
         if (vehicleData.vehicle['Seats_Visible_Stain'] === 1) {
            setVisibleStain('Visible Stain On The Seats');
         }
         if (vehicleData.vehicle['Seats_Rips_Tears'] === 1) {
            setRipsOrTears('Rips Or Tears On The Seats');
         }
         const sellerres = await api.get(`/seller/sellerlist/${sell}`);
         console.log("sellerdata", sellerres.data)
         const sellerName = sellerres.data.Seller.Seller_FName;
         const sellerLastName = sellerres.data.Seller.Seller_LName;
         const sellerCity = sellerres.data.Seller.Seller_City;
         const seller_Email = sellerres.data.Seller.Seller_Email;
         const seller_Phone = sellerres.data.Seller.Seller_Phone;
         const seller_PostalCod = sellerres.data.Seller.Seller_PostalCode ;
         SetSellerName(sellerName);
         SetSellerLastname(sellerLastName);
         SetSellerCity(sellerCity);
         SetSellerEmail(seller_Email);
         SetSellerPhone(seller_Phone);
         SetSellerPostal(seller_PostalCod);
         const Aggent = await api.get(`/agent/getinspectionreport/${Vehicle_Id}`);
         console.log(Aggent.data);
         const ageentid = Aggent.data;
         const ageentids = ageentid.vehicleInspectionReport.Agent_Id;
         setAgentInspectonStatus(ageentid.vehicleInspectionReport.Inspection_Status);

         const Aggentdata = await api.get(`/agent/agentlist/${ageentids}`);
         console.log(Aggentdata.data)
         setAgentName(Aggentdata.data.Agent.Agent_Fname)
         setAgentLame(Aggentdata.data.Agent.Agent_Lname)
         setAgentCity(Aggentdata.data.Agent.Agent_City)
         setAgentEmail(Aggentdata.data.Agent.Agent_Email)
         setAgentPhone(Aggentdata.data.Agent.Agent_Phone)
         setAgentZip(Aggentdata.data.Agent.Agent_Zip)
         setAgentAddress(Aggentdata.data.Agent.Agent_Address)
         
      } catch (error) {
          console.error('Error fetching vehicle details:', error);
      }
   };
  

   const initializeFlexSlider = () => {
      window.$('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        start: function(slider) {
          window.$('body').removeClass('loading');
        }
      });
    };
   const handleClick = () => {
      // Extract the vehicle ID from the URL
      const url = window.location.href;
      const urlParts = url.split('/');
      const vehicleId = urlParts[urlParts.length - 1]; // Assuming vehicle ID is the last part of the URL

      // Store the vehicle ID in session storage
      sessionStorage.setItem('Vehicle_Id', vehicleId);
    
      // Log the session value
      const sessionValue = sessionStorage.getItem('Vehicle_Id');
      console.log('Session value:', sessionValue);
     
     
    };
   
    const handleSubmit = async (event, status) => {
      event.preventDefault();
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      try {
          const response = await api.post(`/admin/adminapprovedisapprove/${Vehicle_Id}`, {
            Vehicle_Admin_Status: status,
            Vehicle_Admin_Disapprove_Notes: textareaValue,
            
          });
          fetchData();
          // Handle success
          setPostInspect(true);
          setTextareaValue('');
          setShowTextarea(false);
          console.log('Post successful:', response.data);
      } catch (error) {
          // Handle error
          console.error('Error posting inspection report:', error);
      }
  };

  const handleTextareaChange = (event) => {
   setTextareaValue(event.target.value);

 };
 const formatWithCommas = (value) => {
   // Convert the value to a number and format it with commas
   return parseFloat(value).toLocaleString();
};
const handleListCarInDealerNetwork = async () => {
   try {
     const response = await api.post("/admin/listcarindealernetworkbyadmin", {
       Vehicle_Id: Vehicle_Id,
     });
     setResponseDataMessage(response.data);
     setTimeout(() => {
      navigate('/car-listing')
      }, 3000);

   } catch (error) {
     // Handle error
     console.error("Error listing car in dealer network:", error);
   }
 };
  return (
   <section class="car-details">
   <AdminNav />
<div class="container mt-5">
<h3 class="main-heading"></h3>
    <div class="top-bid-price">
       <h4>Seller :</h4>
       <h6 class="pl-3"> <a data-toggle="modal" data-target=".bd-example-modal-lg11">{sellername}</a></h6>
    </div>
     <div class="top-bid-price">
       <h4>Agent :</h4>
       <h6 class="pl-3"><a data-toggle="modal" data-target=".bd-example-modal-lg12">{agentname}</a></h6>
    </div>
    <div class="top-bid-price">
       <h4>Firm Price :</h4>
       <h6 class="pl-3">${formatWithCommas(firmprice)}</h6>
    </div>
    
    <div class="top-bid-price">
       <h4>Inspection Status :</h4>
       <h6 class="pl-3"> {inspectonstatus}</h6>
    </div>

    
         <button
            className="btn btn-primary px-3 my-3"
            onClick={handleListCarInDealerNetwork}
         >
            List This Car In Dealer Network
         </button>
       
          {responseMessageState.message && ( // Render the 'message' property of responseMessageState
          <div class="text-success">Car listed in dealer network successfully.</div>
        )}
    <div class="row py-3">
    <div className="col-md-6">
      <div className="car-list-image">
        <div className="flexslider">
          <ul className="slides">
          {interiorimage && (
          <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimage}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimage}`} alt="Interior" />
            </li>
           )}
            {interiorimagetwo && (
    <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagetwo}`}>
        <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagetwo}`} alt="Interior" />
    </li>
)}
  {interiorimagethree && (
    <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagethree}`}>
        <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagethree}`} alt="Interior" />
    </li>
)}
  {interiorimagefour && (
    <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagefour}`}>
        <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${interiorimagefour}`} alt="Interior" />
    </li>
)}
 {exteriorimage && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimage}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimage}`} alt="Exterior" />
            </li>
 )}
  {exteriorimagetwo && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagetwo}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagetwo}`} alt="Exterior" />
            </li>
 )}
  {exteriorimagethree && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagethree}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagethree}`} alt="Exterior" />
            </li>
 )}
  {exteriorimagefour && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagefour}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${exteriorimagefour}`} alt="Exterior" />
            </li>
 )}
  {dashboardimage && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimage}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimage}`} alt="Dashboard" />
            </li>
)}
  {dashboardimagetwo && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagetwo}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagetwo}`} alt="Dashboard" />
            </li>
)}
  {dashboardimagethree && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagethree}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagethree}`} alt="Dashboard" />
            </li>
)}
  {dashboardimagefour && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagefour}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${dashboardimagefour}`} alt="Dashboard" />
            </li>
)}
  {rimsimage && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimage}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimage}`} alt="Rims" />
            </li>
  )}
    {rimsimagetwo && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagetwo}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagetwo}`} alt="Rims" />
            </li>
  )}
    {rimsimagethree && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagethree}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagethree}`} alt="Rims" />
            </li>
  )}
    {rimsimagefour && (
            <li data-thumb={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagefour}`}>
              <img src={`https://topdevit.com/clients/carchaser/public/uploads/${Vehicle_Id}/${rimsimagefour}`} alt="Rims" />
            </li>
  )}
          </ul>
        </div>
      </div>
      <div id="vechiclevideo">
      <h2>Vehicle Video</h2>
        {/* Check if vechiclevideo is not empty */}
        {vechiclevideo ? (
          // If vechiclevideo is not empty, render the iframe
          
          <iframe 
            width="560" 
            height="315" 
            src={vechiclevideo} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : (
          // If vechiclevideo is empty, render a message
          <p>No vehicle video</p>
        )}
      </div>
      <div>
      
     
    </div>
     
    </div>
                <div class="col-md-6">
                   <div class="carlist-details">
                      <div class="carlist-heading">
                   
                         <h4 class="location-heading p-0 m-0">location :  </h4>
                         <span class="inner-listname">{location}</span>
                      </div>
                 
                      <div class="carlist-heading">
                         <h4 class="vinenumber-heading p-0 m-0">vin number : </h4>
                         <span class="inner-vinenumber">{vin}</span>
                      </div>
                      <div class="carlist-heading">
                         <h4 class="year-heading p-0 m-0">Year :</h4>
                         <span class="inner-year">{year}</span>
                      </div>
                      <div class="carlist-heading">
                         <h4 class="model-heading p-0 m-0">Make :</h4>
                         <span class="inner-model">{make}</span>
                      </div>
                      <div class="carlist-heading">
                         <h4 class="model-heading p-0 m-0">model :</h4>
                         <span class="inner-model">{model}</span>
                      </div>
                      <div class="carlist-heading">
                         <h4 class="trim-heading p-0 m-0">trim : </h4>
                         <span class="inner-trim">{trim}</span>
                      </div>
                      <div class="carlist-heading">
                         <h4 class="Mileage:-heading p-0 m-0">Mileage : </h4>
                         <span class="inner-Mileage:">{mileage}</span>
                      </div>
                      <div class="carlist-heading">
                         <h4 class="Color-heading p-0 m-0">Color : </h4>
                         <span class="inner-Color">{color}</span>
                      </div>
                      <div class="carlist-heading">
                         <h4 class="Keys:-heading p-0 m-0">Keys : </h4>
                         <span class="inner-Keys">{keys}</span>
                      </div>
                      <span>{featuresString}</span>
                         </div>
                   <div class="external-damage-panel pt-3">
                      <h4 class="p-0 m-0">external damage to the vehicle.</h4>
                      <span>{featuresStringtwo}</span>
                      <h4 class="p-0 m-0">Any interior damage?</h4> 
                      <span>{featuresStringthree}</span>
                      <div class="vehicle-detail">
                      <h4 class="p-0 m-0">Our top priority is to sell your car.</h4> 
                      <div class="row">
                     
                            <div class="col-md-9">
                               <span>Do you smoke in this vehicle?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{smokeInVehicle}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Do you have original factory rims?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{hasOriginalRims}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Have you replaced your tires in last 12 months?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{tireReplacement}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Is your car driveable?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{vehicleDrivable}</h5>
                            </div>
                            <div class="col-12">
                              <h6>{vehicledrivabledesc}</h6>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Any crack on the windshield?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{crackOnWindshield}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Do you have any extended warranty?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{extendedWarranty}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Are you interested in a trade In?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{tradeInInterest}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>How soon are you ready to sell?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{sellTiming}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Why are you selling?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{DonotNeedCar}</h5>
                               <h5>{MechElectIssues}</h5>
                               <h5>{DownSize}</h5>
                               <h5>{BuyAnotherCar}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>describe the condition of the car</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{carCondition}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Any Accident Claims? How Much?</span>
                               
                            </div>
                            <div class="col-md-3">
                               <h5>{accidentclaims}</h5> 
                            </div>
                            <div class="col-12">
                              <h6>{howmuchclaims}</h6>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>What Rims Are On The Car?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{carrims}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Do You Have Stock Rims?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{stockrim}</h5>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Any Issues With The Vehicle?</span>
                            </div>
                            <div class="col-md-3">
                               <h5>{issuevichle} </h5>
                            </div>
                            <div class="col-12">
                              <h6>{issuevichledecs}</h6>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Are There Any Modifications On The Car?</span>
                               
                            </div>
                            <div class="col-md-3">
                               <h5>{carmodify}</h5> 
                            </div>
                            <div class="col-12">
                              <h6>{carmodifydecs}</h6>
                            </div>
                         </div>
                         <div class="row">
                            <div class="col-md-9">
                               <span>Is The Car Leased Or Financed?</span>
                               
                            </div>
                            <div class="col-md-3">
                               <h5>{financed}</h5> 
                            </div>
                            <div class="col-12">
                              <h6>{financeddesc}</h6>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="modal fade bd-example-modal-lg11 newcar-modal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div className="modal-dialog" role="document">
         <div className="modal-content">
            <div className="modal-header">
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">×</span>
               </button>
            </div>
            <div className="modal-body">
               <div className="seller-details">
                 <h2>Seller Detail</h2>
                 <div className="seller-list d-flex">
                     <h4>First Name : </h4>
                     <span> {sellername} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Last Name : </h4>
                     <span> {sellerlastname} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Seller City : </h4>
                     <span> {sellercity} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Seller Email : </h4>
                     <span> {selleremail} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Seller Phone : </h4>
                     <span> {sellerphone} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Seller Poatalcode : </h4>
                     <span> {sellerpostalCod} </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="modal fade bd-example-modal-lg12 newcar-modal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div className="modal-dialog" role="document">
         <div className="modal-content">
            <div className="modal-header">
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">×</span>
               </button>
            </div>
            <div className="modal-body">
               <div className="seller-details">
                 <h2>Agent Detail</h2>
                 <div className="seller-list d-flex">
                     <h4>First Name : </h4>
                     <span> {agentname} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Last Name : </h4>
                     <span> {agentlastname} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Agent City : </h4>
                     <span> {agentcity} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Agent Email : </h4>
                     <span> {agentemail} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Agent Phone : </h4>
                     <span> {agentphone} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Agent Poatalcode : </h4>
                     <span> {agentzip} </span>
                  </div>
                  <div className="seller-list d-flex">
                     <h4>Agent Address : </h4>
                     <span> {agentadresss} </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
          </section>
  );
};
export default CarDetails;