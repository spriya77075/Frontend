import React from "react";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {

const navigate = useNavigate();

return (

<div className="card event-card shadow">

<img src={event.image} className="card-img-top" alt={event.title} />

<div className="card-body text-center">

<h5>{event.title}</h5>

<p>₹{event.price}</p>

<button
className="btn btn-warning"
onClick={() => navigate("/seats")}
>
Select Seats
</button>

</div>

</div>

);

}

export default EventCard;