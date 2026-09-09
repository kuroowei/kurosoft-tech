// src/data/team.ts
// Real team profiles, as supplied by the founder.

export interface TeamMember {
  id: string;
  name: string | null;
  role: string;
  isFounder: boolean;
  bio?: string;
}

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "Kuro-owei Fewai",
    role: "Founder & Lead Software Developer",
    isFounder: true,
    bio: "Senior Systems Analyst & Web Developer with a Bachelor's degree in Computer Science, 18 years of professional IT experience, and 8+ years of software development experience.",
  },
  {
    id: "member-2",
    name: "Dipamo Kalsuo",
    role: "Senior Software Developer",
    isFounder: false,
    bio: "Seasoned programmer with a Master's degree in Computer Science and 10 years of experience in software development.",
  },
  {
    id: "member-3",
    name: "Perez Zikina",
    role: "Software Developer",
    isFounder: false,
    bio: "Seasoned programmer with a Master's degree in Computer Science and 4 years of experience in software development using Laravel and React.",
  },
  {
    id: "member-4",
    name: "Faafa Tamkivie",
    role: "Software Developer",
    isFounder: false,
    bio: "Seasoned programmer with a Bachelor's degree in Computer Science and 4 years of experience in JavaScript (React, Node.js, Express, Next.js).",
  },
  {
    id: "member-5",
    name: "Elemokumo Amassomaowei",
    role: "Software Developer & Data Analyst",
    isFounder: false,
    bio: "Holds a Bachelor's degree in Computer Science, with 4 years of experience in software development and data analysis.",
  },
  {
    id: "member-6",
    name: "Reuben Ovreme",
    role: "Software Developer",
    isFounder: false,
    bio: "Holds a Bachelor's degree in Computer Science and a Master's degree in Network Administration, with over 4 years of experience.",
  },
];