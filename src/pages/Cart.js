import React,{useContext} from "react"
import {TicketContext} from "../context/TicketContext"
import {useNavigate} from "react-router-dom"

function Cart(){

const {cart,removeTicket} = useContext(TicketContext)

const navigate = useNavigate()

const total = cart.reduce((sum,item)=> sum + item.price ,0)

return(

<div className="container mt-4">

<h2>Your Cart</h2>

{cart.length === 0 && <p>No tickets selected</p>}

{cart.map((ticket,index)=> (

<div key={index} className="card p-3 mt-3">

<h5>{ticket.title}</h5>

<p>Seat : {ticket.seat}</p>

<p>Price : ₹{ticket.price}</p>

<button
className="btn btn-danger"
onClick={()=>removeTicket(index)}
>

Remove

</button>

</div>

))}

{cart.length > 0 && (

<div className="mt-4">

<h4>Total : ₹{total}</h4>

<button
className="btn btn-warning"
onClick={()=>navigate("/checkout")}
>

Checkout

</button>

</div>

)}

</div>

)

}

export default Cart
