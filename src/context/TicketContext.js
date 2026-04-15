import React,{createContext,useState} from "react"

export const TicketContext = createContext()

export const TicketProvider = ({children}) => {

const [cart,setCart] = useState([])

function addTicket(ticket){

setCart(prev => [...prev,ticket])

}

function removeTicket(index){

setCart(prev => prev.filter((_,i)=> i !== index))

}

return(

<TicketContext.Provider
value={{
cart,
addTicket,
removeTicket
}}
>

{children}

</TicketContext.Provider>

)

}