import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TicketContext } from "../context/TicketContext";

function Seats(){

const navigate = useNavigate();

const { addTicket } = useContext(TicketContext);

const rows = ["A","B","C","D"];
const cols = 8;

const [selectedSeats,setSelectedSeats] = useState([]);

function toggleSeat(seat){

if(selectedSeats.includes(seat)){
setSelectedSeats(selectedSeats.filter(s => s !== seat))
}else{
setSelectedSeats([...selectedSeats,seat])
}

}

function addToCart(){

if(selectedSeats.length === 0){
alert("Please select seats first")
return
}

selectedSeats.forEach(seat => {

addTicket({
title:"Music Concert",
price:1200,
seat:seat
})

})

navigate("/cart")

}

return(

<div className="container text-center mt-4">

<h2>Select Your Seats</h2>

<div className="screen">SCREEN</div>

<div className="seat-grid">

{rows.map(row =>
Array.from({length:cols},(_,i)=>{

const seat = row+(i+1)

return(

<div
key={seat}
className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
onClick={()=>toggleSeat(seat)}
>

{seat}

</div>

)

})
)}

</div>

<p className="mt-3">
Selected Seats: {selectedSeats.join(", ")}
</p>

<button
className="btn btn-warning mt-3"
onClick={addToCart}
>

Add To Cart

</button>

</div>

)

}

export default Seats