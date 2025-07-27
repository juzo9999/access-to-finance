// src/utils/analytics.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-S8NPQT8K4M"; // Replace with your actual GA4 ID

export const initAnalytics = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const trackPageview = (path = window.location.pathname) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = ({ category, action, label }) => {
  ReactGA.event({ category, action, label });
};

// ✅ This is the missing hook
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
};

