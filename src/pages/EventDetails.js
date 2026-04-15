import React from "react";
import { useNavigate } from "react-router-dom";

function EventDetails(){

const navigate = useNavigate();

return(

<div>

<h2>Music Concert</h2>

<p>Date: 20 July</p>

<p>Location: City Stadium</p>

<p>Price: ₹1200</p>

<button onClick={()=>navigate("/seats")}>
Select Seats
</button>

</div>

)

}

export default EventDetails;