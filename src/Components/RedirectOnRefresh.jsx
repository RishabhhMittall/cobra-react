// RedirectOnRefresh.js

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectOnRefresh = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if Ctrl (or Cmd on Mac) + R is pressed
      if ((event.ctrlKey || event.metaKey) && event.code === "KeyR") {
        // Redirect to the login page
        navigate("/AfterLog");
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]); // Dependency array with navigate to ensure correct reference

  return null; // This component doesn't render anything visible
};

export default RedirectOnRefresh;
