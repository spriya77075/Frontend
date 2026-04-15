import React from "react";
import EventCard from "../components/EventCard";

function Events() {

  const events = [

    {
      title: "Music Concert",
      price: 1200,
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063"
    },

    {
      title: "Football Match",
      price: 3500,
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
    },

    {
      title: "Comedy Show",
      price: 900,
      image: "https://images.unsplash.com/photo-1508704019882-f9cf40e475b4"
    },

    {
      title: "Tech Conference",
      price: 500,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
    }

  ];

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-4">Upcoming Events</h2>

      <div className="row">

        {events.map((event, index) => (

          <div className="col-md-3 mb-4" key={index}>

            <EventCard event={event} />

          </div>

        ))}

      </div>

    </div>

  );

}

export default Events;