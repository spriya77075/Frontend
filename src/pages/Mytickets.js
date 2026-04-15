import React,{useContext} from "react"
import {TicketContext} from "../context/TicketContext"

function MyTickets(){

const {cart} = useContext(TicketContext)

return(

<div className="container mt-4">

<h2>My Tickets</h2>

{cart.map((ticket,index)=>(

<div className="card p-3 mt-3" key={index}>

<h5>{ticket.title}</h5>

<p>Status : Confirmed</p>

</div>

))}

</div>

)

}

export default MyTickets