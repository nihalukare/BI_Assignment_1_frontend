import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import EventListing from "./pages/EventListing";

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <Header setSearchInput={setSearchInput} />
      <main className="bg-body-tertiary">
        <EventListing searchInput={searchInput} />
      </main>
      <Footer />
    </>
  );
}

export default App;
