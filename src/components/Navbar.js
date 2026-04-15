import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

const { logout } = useContext(AuthContext);
const navigate = useNavigate();

const [query,setQuery] = useState("");

function handleSearch(){

navigate("/search?query="+query);

}

return (

<nav className="navbar navbar-dark bg-dark navbar-expand-lg">

<div className="container">

<Link className="navbar-brand" to="/home">
🎟 TicketHub
</Link>

<div>

<Link className="nav-link d-inline text-white mx-3" to="/home">Home</Link>
<Link className="nav-link d-inline text-white mx-3" to="/events">Events</Link>
<Link className="nav-link d-inline text-white mx-3" to="/cart">Cart</Link>
<Link className="nav-link d-inline text-white mx-3" to="/mytickets">My Tickets</Link>

</div>

<div className="d-flex">

<input
className="form-control me-2"
placeholder="Search Events"
value={query}
onChange={(e)=>setQuery(e.target.value)}
/>

<button
className="btn btn-warning"
onClick={handleSearch}
>
Search
</button>

<button
className="btn btn-danger ms-2"
onClick={logout}
>
Logout
</button>

</div>

</div>

</nav>

);

}

export default Navbar;