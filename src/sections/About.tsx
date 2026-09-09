// src/sections/About.tsx
import { founder, teamSize } from "../config/site";

const focusAreas = [
  "Systems analysis",
  "Web development",
  "Database development",
  "API integration",
  "Application development",
  "Problem solving",
  "Digital transformation",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm text-muted">About Kurosoft Tech</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text md:text-4xl">
            A small team, building real software
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Kurosoft Tech is a {teamSize}-person software development team focused on building practical technology solutions for businesses and organizations. We work across the full stack, from systems analysis and architecture through to deployment and ongoing support.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {focusAreas.map((area) => {
              return (
                <li key={area} className="rounded-md border border-white/10 bg-surface px-3 py-2 text-sm text-muted">
                  {area}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-lg border border-white/10 bg-surface p-6">
          <p className="text-xs uppercase tracking-wider text-teal">{founder.role}</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-text">{founder.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {founder.yearsItExperience} years of professional IT experience, and {founder.yearsSoftwareDevExperience}+ years of software development experience -- leading a team of {teamSize} developers building practical, business-focused software.
          </p>
        </div>
      </div>
    </section>
  );
}