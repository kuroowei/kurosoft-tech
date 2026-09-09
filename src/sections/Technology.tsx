// src/sections/Technology.tsx
import { technologies } from "../data/technologies";

export default function Technology() {
  return (
    <section id="technology" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm text-muted">Our Stack</p>
      <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold text-text md:text-4xl">
        Technology we build with
      </h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((group) => {
          return (
            <div key={group.id} className="rounded-lg border border-white/10 bg-surface p-6">
              <h3 className="text-xs uppercase tracking-wider text-teal">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  return (
                    <span key={item} className="rounded-md border border-white/10 px-2 py-1 text-xs text-muted">
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}