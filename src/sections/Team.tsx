// src/sections/Team.tsx
import { User } from "lucide-react";
import { team } from "../data/team";

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm text-muted">Meet Our Technical Team</p>
      <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold text-text md:text-4xl">
        A six-person development team
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        We work collaboratively to design, build, test, and deploy practical software solutions.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => {
          return (
            <div key={member.id} className={`rounded-lg border p-6 ${member.isFounder ? "border-amber/30 bg-surface" : "border-white/10 bg-surface"}`}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-muted">
                <User size={24} />
              </div>

              <h3 className="mt-4 font-display text-base font-semibold text-text">
                {member.name ?? member.role}
              </h3>

              {member.isFounder && (
                <p className="mt-1 text-xs uppercase tracking-wider text-amber">Founder</p>
              )}

              {member.bio && (
                <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}