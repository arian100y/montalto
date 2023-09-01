import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./parts/Navbar";
import Information from "./sections/Information";
import { VisitUs } from "./sections/VisitUs";
import Staff from "./sections/Staff";
import ContactUs from "./sections/ContactUs";
import Us from "./sections/Us";
import Allies from "./sections/Allies";
import Services from "./sections/Services";
import Footer from "./parts/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./sections/Hero";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = React.createContext<any>(null);

function App() {
  const [showModal, setShowModal] = useState(false);
  const [contentIdx, setContentIdx] = useState(0);
  const [language, setLanguage] = useState(0);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <UserContext.Provider
      value={{
        showModal,
        setShowModal,
        contentIdx,
        setContentIdx,
        language,
        setLanguage,
      }}
    >
      <div className="App">
        <Navbar />
        <div id="top" className="pt-20 overflow-x-hidden">
          <Hero />
          <Us />
          <Staff />
          <Services />
          <Allies />
          <Information />
          <ContactUs />
          <VisitUs />
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
