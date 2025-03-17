import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const EventDetails = () => {
  const params = useParams();
  console.log(params.eventId);

  const { data, loading, error } = useFetch(
    `http://localhost:3000/events/${params.eventId}`
  );
  console.log(data);

  return (
    <>
      <Header />
      <main className="bg-body-tertiary">
        <div className="container py-4">
          {data ? (
            <div className="row justify-content-between">
              <div className="col-md-7">
                <h2 className="fw-semibold">{data.title}</h2>
                <p>
                  <small>Hosted By:</small> <br />
                  <strong>{data.hostedBy}</strong>
                </p>
                <div className="mt-5">
                  <img
                    src={data.imageUrl}
                    alt="event image"
                    className="img-fluid"
                  />
                </div>
                <h3 className="mt-4">Details:</h3>
                <p>{data.details}</p>
                <h3>Additional Information:</h3>
                <p>
                  <strong>Dress Code:</strong>{" "}
                  {data.additionalInformation.dressCode}
                </p>
                <p>
                  <strong>Age Restrictions:</strong>{" "}
                  {data.additionalInformation.ageRestrictions}
                </p>
                <h3>Event Tags:</h3>
                <div className="d-flex">
                  {data.eventTags.map((eventTags) => (
                    <p className="text-bg-danger rounded py-2 px-3 me-4">
                      {eventTags}
                    </p>
                  ))}
                </div>
              </div>

              <div className="col-md-4">
                <div className="card bg-white border-0 rounded-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center ">
                      <div>
                        <i className="bi bi-clock px-2"></i>
                      </div>
                      <p className="m-0">
                        {new Date(data.startDate).toDateString()} at{" "}
                        {new Date(data.startTime).toLocaleTimeString()} to
                        <br /> {new Date(data.endDate).toDateString()} at{" "}
                        {new Date(data.startTime).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="d-flex align-items-center my-4">
                      <div>
                        <i className="bi bi-geo-alt px-2"></i>
                      </div>
                      <p className="m-0">{data.location}</p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <i className="bi bi-currency-rupee px-2"></i>
                      </div>
                      <p className="m-0">{data.fees}</p>
                    </div>
                  </div>
                </div>
                <h3 className="mt-5">Speakers: ({data.speakers.length})</h3>
                <div className="row mt-3">
                  {data.speakers.map((speaker) => (
                    <div className="col-md-6">
                      <div className="card border-0 rounded shadow-sm h-100">
                        <div className="card-body text-center">
                          <img
                            className="card-img-top rounded-circle"
                            src={speaker.photoUrl}
                            alt=""
                          />
                          <h5 className="card-title">{speaker.speakerName}</h5>
                          <p className="card-subtitle">{speaker.designation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default EventDetails;
