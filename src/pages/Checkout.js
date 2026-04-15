import React,{useContext} from "react"
import {TicketContext} from "../context/TicketContext"
import {useNavigate} from "react-router-dom"

function Checkout(){

const {cart} = useContext(TicketContext)

const navigate = useNavigate()

const total = cart.reduce((sum,t)=>sum+t.price,0)

return(

<div className="container mt-4">

<h2>Checkout</h2>

{cart.map((ticket,index)=>(

<div key={index}>

{ticket.title} - ₹{ticket.price}

</div>

))}

<h4 className="mt-3">Total : ₹{total}</h4>

<button
className="btn btn-warning mt-3"
onClick={()=>navigate("/payment")}
>

Proceed to Payment

</button>

</div>

)

}

export default Checkout