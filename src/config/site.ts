// src/config/site.ts
// Central configuration for Kurosoft Tech.
// TODO: Replace placeholder ("#" or "") values with real URLs once available.
// Do not invent URLs, stats, or credentials -- leave placeholders until supplied.

export const siteConfig = {
  companyName: "Kurosoft Tech",
  tagline: "Building Practical Software Solutions for a Digital World",
  supportingStatement:
    "We design and develop practical, scalable software solutions that help businesses and organizations improve operations, automate processes, and serve their customers better.",
  positioningLabel: "Emerging Software Development Team", // not a registered company
  location: "Nigeria",

  // TODO: replace with the real production domain once deployed
  siteUrl: "https://kurosoft-tech.vercel.app/",
};

export const founder = {
  role: "Founder & Lead Software Developer",
  title: "Senior Systems Analyst & Web Developer",
  yearsItExperience: 18,
  yearsSoftwareDevExperience: 8, // "8+"
};

// The other 5 team members: no invented names, photos, titles, or bios.
// Neutral placeholders only, until real profiles are supplied.
export const teamSize = 6;

// Social / external links -- leave as "#" or "" until real URLs are supplied.
// UI should hide the icon/link entirely when a value is empty or "#".
export const socialLinks = {
  github: "https://github.com/kuroowei", // TODO: confirm this is the org/profile to link
  linkedin: "https://www.linkedin.com/in/kuro-owei-fewai",
  facebook: "https://www.facebook.com/kuroowei.fewai.7",
  email: "kuro4goodluck@gmail.com",
};

// Contact form endpoint -- leave empty until a real backend/email service exists.
// TODO: set this once a backend or email service (e.g. Formspree, Resend) is wired up.
export const CONTACT_FORM_ENDPOINT: string = "https://formspree.io/f/mkjnpawv";

// Featured product: Waste Pickup Scheduler (already live)
export const GITHUB_WASTE_PICKUP_URL = "https://github.com/kuroowei/waste-pickup-scheduler";
export const WASTE_PICKUP_DEMO_URL =
  "https://waste-pickup-scheduler-web.vercel.app/";

// Second product: Vuexy Chat App
export const VUEXY_CHAT_DEMO_URL = "https://vuexy-chat-web.onrender.com/";
export const VUEXY_CHAT_GITHUB_URL = "https://github.com/kuroowei/vuexy-chat";