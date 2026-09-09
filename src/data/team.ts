// src/data/team.ts
// Founder profile is real. The other 5 members are intentionally generic
// placeholders -- do NOT invent names, photos, titles, or bios for them.
// Replace placeholder entries with real profiles once supplied.

export interface TeamMember {
  id: string;
  name: string | null; // null = not yet supplied, render as placeholder
  role: string;
  isFounder: boolean;
  bio?: string;
}

export const team: TeamMember[] = [
  {
    id: "founder",
    name: null, // TODO: add founder's public display name if desired
    role: "Founder & Lead Software Developer",
    isFounder: true,
    bio: "Senior Systems Analyst & Web Developer with 18 years of professional IT experience and 8+ years of software development experience.",
  },
  {
    id: "member-2",
    name: null,
    role: "Software Developer",
    isFounder: false,
  },
  {
    id: "member-3",
    name: null,
    role: "Software Developer",
    isFounder: false,
  },
  {
    id: "member-4",
    name: null,
    role: "Software Developer",
    isFounder: false,
  },
  {
    id: "member-5",
    name: null,
    role: "Software Developer",
    isFounder: false,
  },
  {
    id: "member-6",
    name: null,
    role: "Software Developer",
    isFounder: false,
  },
];