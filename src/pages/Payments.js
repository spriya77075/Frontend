import React from "react"
import {useNavigate} from "react-router-dom"

function Payment(){

const navigate = useNavigate()

function pay(){

alert("Payment Successful")

navigate("/confirmation")

}

return(

<div className="container mt-5" style={{maxWidth:"400px"}}>

<h2>Payment</h2>

<input className="form-control mt-3" placeholder="Card Number"/>

<input className="form-control mt-3" placeholder="Expiry Date"/>

<input className="form-control mt-3" placeholder="CVV"/>

<button
className="btn btn-warning w-100 mt-3"
onClick={pay}
>

Pay Now

</button>

</div>

)

}

export default Payment