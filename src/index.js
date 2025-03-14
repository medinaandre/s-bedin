import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FirstPage from "./FirstPage";
import HelpSection from "./HelpSection";
import AboutMe from "./AboutMe";
import FollowUp from "./FollowUp";
import Local from "./Local";
import FaqSection from "./FaqSection";
import ContactSection from "./ContactSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirstPage />
    <HelpSection />
    <AboutMe />
    <FollowUp />
    <Local />
    <FaqSection />
    <ContactSection />
  </React.StrictMode>
);
