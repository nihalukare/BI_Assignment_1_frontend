import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const EventListing = ({ searchInput }) => {
  const [eventType, setEventType] = useState("Both");
  const { data, loading, error } = useFetch("http://localhost:3000/events");

  let filteredEvents = [];
  if (data) {
    filteredEvents = data.events;

    if (eventType !== "Both") {
      filteredEvents = filteredEvents.filter(
        (event) => event.typeOfEvent === eventType
      );
    }

    if (searchInput.trim() !== "") {
      filteredEvents = filteredEvents.filter((event) =>
        event.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  }

  return (
    <>
      <div className="container">
        <div className="row py-3">
          <div className="col-md-9">
            <h1 className="fw-bold">Meetup Events</h1>
          </div>
          <div className="col-md-3">
            <select
              className="form-select form-select-sm border-0 text-secondary rounded"
              onChange={(event) => {
                setEventType(event.target.value);
              }}
            >
              <option value="Both">Select Event Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>

        <div className="row">
          {data ? (
            filteredEvents.map((event, index) => (
              <div key={event._id} className="col-md-4">
                <div className="card border border-0 bg-body-tertiary mb-5 position-relative">
                  <Link to={`/${event._id}`}>
                    <img
                      src={event.imageUrl}
                      className="card-img"
                      alt={`meeting-listing-${index + 1}`}
                    />{" "}
                  </Link>
                  <small className="position-absolute top-0 start-0 mt-2 ms-2 text-bg-light p-1 rounded">
                    {event.typeOfEvent} Event
                  </small>
                  <small className=" card-text text-body-secondary">
                    {new Date(event.startDate).toDateString()} ·{" "}
                    {new Date(event.startTime).toLocaleTimeString()} IST
                  </small>

                  <h5 className="card-text">{event.title}</h5>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default EventListing;
