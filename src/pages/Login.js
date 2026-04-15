import React,{useState,useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import {useNavigate,Link} from "react-router-dom"

function Login(){

const {login} = useContext(AuthContext)

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function handleLogin(){

login(email,password)

navigate("/home")

}

return(

<div className="container mt-5" style={{maxWidth:"400px"}}>

<h2>Login</h2>

<input
className="form-control mt-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="form-control mt-3"
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="btn btn-warning w-100 mt-3"
onClick={handleLogin}
>

Login

</button>

<p className="mt-3">

No account?

<Link to="/register"> Signup</Link>

</p>

</div>

)

}

export default Login