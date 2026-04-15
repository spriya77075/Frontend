import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import {TicketProvider} from "./context/TicketContext"
import {AuthProvider} from "./context/AuthContext"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/main.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(

<AuthProvider>

<TicketProvider>

<App/>

</TicketProvider>

</AuthProvider>

)