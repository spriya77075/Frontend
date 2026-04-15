import React,{useContext} from "react"
import {AuthContext} from "../context/AuthContext"

function Profile(){

const {user} = useContext(AuthContext)

return(

<div className="container mt-4">

<h2>User Profile</h2>

<p>Email : {user.email}</p>

<p>Status : Active</p>

</div>

)

}

export default Profile