// src/sections/Products.tsx
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

function isConfigured(url: string) {
  return url !== "#" && url !== "";
}

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91 0.57 0.11 0.78-0.25 0.78-0.55 0-0.27-0.01-1.16-0.02-2.11-3.2 0.7-3.88-1.36-3.88-1.36-0.52-1.33-1.28-1.69-1.28-1.69-1.04-0.71 0.08-0.7 0.08-0.7 1.16 0.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36 0.96 0.1-0.75 0.4-1.26 0.73-1.55-2.55-0.29-5.24-1.28-5.24-5.68 0-1.26 0.45-2.28 1.19-3.09-0.12-0.29-0.52-1.46 0.11-3.05 0 0 0.97-0.31 3.18 1.18 0.92-0.26 1.91-0.38 2.9-0.39 0.98 0.01 1.97 0.13 2.9 0.39 2.21-1.49 3.18-1.18 3.18-1.18 0.63 1.59 0.23 2.76 0.11 3.05 0.74 0.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67 0.41 0.36 0.78 1.06 0.78 2.14 0 1.55-0.01 2.79-0.01 3.17 0 0.3 0.2 0.66 0.79 0.55C20.21 21.38 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm text-muted">What We&apos;ve Built</p>
      <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold text-text md:text-4xl">
        Featured Products
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Real, working software built and deployed by our team -- not mockups or concepts.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const demoReady = isConfigured(project.demoUrl);
          const githubReady = isConfigured(project.githubUrl);

          return (
            <div key={project.id} className="flex flex-col rounded-lg border border-white/10 bg-surface p-6">
              <div className="h-40 overflow-hidden rounded-md border border-white/10 bg-ink">
                <img src={project.image} alt={`Screenshot of ${project.title}`} className="h-full w-full object-cover object-top" />
              </div>

              <span className="mt-4 w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                {project.category}
              </span>

              <h3 className="mt-3 font-display text-lg font-semibold text-text">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  return (
                    <span key={tech} className="rounded-md border border-white/10 px-2 py-1 text-xs text-muted">
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="mt-6 flex gap-3">
                {demoReady ? (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-muted opacity-50">
                    <ExternalLink size={16} />
                    Demo coming soon
                  </span>
                )}

                {githubReady ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-ink">
                    <GithubMark />
                    View on GitHub
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-muted opacity-50">
                    <GithubMark />
                    Repo coming soon
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}