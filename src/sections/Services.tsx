// src/sections/Services.tsx
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm text-muted">What We Do</p>
      <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold text-text md:text-4xl">
        Services built around real business needs
      </h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          return (
            <div key={service.id} className="rounded-lg border border-white/10 bg-surface p-6">
              <h3 className="font-display text-lg font-semibold text-text">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}