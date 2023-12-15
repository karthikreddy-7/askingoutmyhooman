import React, { useState } from "react";
import "./App.css";
import Lunch from "./Lunch/Lunch";
import { LandingPage } from "./LandingPage";
import { inject } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";

inject();

const App = () => {
  const [showLunch, setShowLunch] = useState(false);

  const handleVisitLunch = () => {
    setShowLunch((prevShowLunch) => !prevShowLunch);
  };
  return (
    <>
      {inject()}
      <Analytics />
      {!showLunch ? (
        <>
          <LandingPage onVisitLunch={handleVisitLunch} />
        </>
      ) : (
        <Lunch onVisitLunch={handleVisitLunch} />
      )}
    </>
  );
};

export default App;
