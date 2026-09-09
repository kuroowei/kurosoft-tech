// src/sections/Hero.tsx

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
      <div>
        <p className="text-sm text-muted">Emerging software development team, based in Nigeria</p>

        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-text md:text-5xl">
          Building Practical Software Solutions for a Digital World
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          Kurosoft Tech is a software development team building practical web applications and digital solutions for businesses, organizations, and emerging technology ventures.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#products" className="rounded-md bg-amber px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90">
            Explore Our Products
          </a>
          <a href="#contact" className="rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-text transition-colors hover:bg-surface">
            Work With Us
          </a>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-surface font-mono text-sm shadow-lg">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-2 text-xs text-muted">team.ts</span>
        </div>
        <pre className="overflow-x-auto px-4 py-5 leading-relaxed text-muted">
          <code>
            <span className="text-teal">export const</span> team = {"{"}
            {"\n"}  size: 6,
            {"\n"}  location: <span className="text-amber">"Nigeria"</span>,
            {"\n"}  focus: [<span className="text-amber">"web apps"</span>, <span className="text-amber">"automation"</span>, <span className="text-amber">"APIs"</span>],
            {"\n"}  status: <span className="text-amber">"actively building"</span>,
            {"\n"}
            {"}"}
          </code>
        </pre>
      </div>
    </section>
  );
}