// src/data/services.ts
// The six services Kurosoft Tech offers. Keep this list truthful --
// only services the team can actually deliver.

export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Design and development of software applications tailored to specific organizational and business requirements.",
  },
  {
    id: "web-apps",
    title: "Web Application Development",
    description:
      "Modern, responsive and scalable web applications for businesses and organizations.",
  },
  {
    id: "process-automation",
    title: "Business Process Automation",
    description:
      "Digital solutions designed to reduce manual processes and improve operational efficiency.",
  },
  {
    id: "database-api",
    title: "Database & API Development",
    description:
      "Secure database architecture and API integration for reliable software systems.",
  },
  {
    id: "maintenance-support",
    title: "Software Maintenance & Support",
    description:
      "Continuous improvement, troubleshooting, maintenance, and technical support for software applications.",
  },
  {
    id: "digital-product",
    title: "Digital Product Development",
    description:
      "From concept to working product, we transform ideas into functional digital solutions.",
  },
];