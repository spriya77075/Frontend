import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Confirmation() {

function downloadTicket(){

const input = document.getElementById("ticket")

html2canvas(input).then(canvas=>{

const imgData = canvas.toDataURL("image/png")

const pdf = new jsPDF()

pdf.addImage(imgData,"PNG",10,10,180,100)

pdf.save("ticket.pdf")

})

}

return(

<div className="container text-center mt-5">

<div id="ticket" className="ticket-card">

<h2>🎉 Booking Confirmed</h2>

<p>Event: Music Concert</p>

<p>Date: 25 July</p>

<p>Seat: A5</p>

<p>Ticket ID: TK123456</p>

<QRCodeCanvas value="Ticket-ID-TK123456" size={150} />

</div>

<button
className="btn btn-warning mt-4"
onClick={downloadTicket}
>

Download Ticket PDF

</button>

</div>

)

}

export default Confirmation