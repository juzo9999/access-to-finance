// src/utils/analytics.js
import ReactGA from "react-ga4";

const TRACKING_ID = "G-S8NPQT8K4M"; // ✅ Replace with your real GA4 ID

export const initAnalytics = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const trackPageview = (path = window.location.pathname) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = ({ category, action, label }) => {
  ReactGA.event({ category, action, label });
};