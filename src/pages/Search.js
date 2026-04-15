import React,{useState} from "react"

function Search(){

const events=[
"Music Concert",
"Football Match",
"Comedy Show",
"Tech Conference"
]

const [query,setQuery] = useState("")

const filtered = events.filter(e=>
e.toLowerCase().includes(query.toLowerCase())
)

return(

<div className="container mt-4">

<h2>Search Events</h2>

<input
className="form-control"
placeholder="Search..."
onChange={(e)=>setQuery(e.target.value)}
/>

<ul className="mt-3">

{filtered.map((event,index)=>

<li key={index}>{event}</li>

)}

</ul>

</div>

)

}

export default Search