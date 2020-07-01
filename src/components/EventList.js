//React
import React from "react";

//Events
import events from "../data";

//Components
import EventItem from "./EventItem";


const EventList = () => {
  const eventList = events.map((event) => (
    <EventItem event={event} key={event.id} />
  ));

  return eventList;
};

export default EventList;
