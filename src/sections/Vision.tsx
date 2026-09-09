// src/sections/Vision.tsx

export default function Vision() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-surface p-8">
          <h2 className="font-display text-xl font-semibold text-amber">Our Vision</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            To build practical technology products and software solutions that solve real-world problems, improve organizational efficiency, and create opportunities for businesses and communities in Nigeria and beyond.
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-surface p-8">
          <h2 className="font-display text-xl font-semibold text-teal">Our Mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            To combine technical expertise, user-focused design, and continuous innovation to develop reliable software solutions that create measurable value for our customers.
          </p>
        </div>
      </div>
    </section>
  );
}