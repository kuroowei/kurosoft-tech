// src/components/Footer.tsx
import { Mail } from "lucide-react";
import { siteConfig, socialLinks } from "../config/site";
import logo from "../assets/logo.png";

function isConfigured(value: string) {
  return value !== "#" && value !== "";
}

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91 0.57 0.11 0.78-0.25 0.78-0.55 0-0.27-0.01-1.16-0.02-2.11-3.2 0.7-3.88-1.36-3.88-1.36-0.52-1.33-1.28-1.69-1.28-1.69-1.04-0.71 0.08-0.7 0.08-0.7 1.16 0.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36 0.96 0.1-0.75 0.4-1.26 0.73-1.55-2.55-0.29-5.24-1.28-5.24-5.68 0-1.26 0.45-2.28 1.19-3.09-0.12-0.29-0.52-1.46 0.11-3.05 0 0 0.97-0.31 3.18 1.18 0.92-0.26 1.91-0.38 2.9-0.39 0.98 0.01 1.97 0.13 2.9 0.39 2.21-1.49 3.18-1.18 3.18-1.18 0.63 1.59 0.23 2.76 0.11 3.05 0.74 0.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67 0.41 0.36 0.78 1.06 0.78 2.14 0 1.55-0.01 2.79-0.01 3.17 0 0.3 0.2 0.66 0.79 0.55C20.21 21.38 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}

function LinkedinMark() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-0.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h0.05c0.48-0.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function FacebookMark() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24 0.2 2.24 0.2v2.47h-1.26c-1.24 0-1.63 0.77-1.63 1.56v1.87h2.77l-0.44 2.91h-2.33V22c4.78-0.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Kurosoft Tech logo" className="h-8 w-8" />
            <p className="font-display text-lg font-semibold text-text">{siteConfig.companyName}</p>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{siteConfig.supportingStatement}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-text">Quick Links</p>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((link) => {
              return (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-text">
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-text">Connect</p>
          <div className="mt-3 flex gap-3">
            {isConfigured(socialLinks.github) && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md border border-white/10 p-2 text-muted transition-colors hover:text-text">
                <GithubMark />
              </a>
            )}
            {isConfigured(socialLinks.linkedin) && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md border border-white/10 p-2 text-muted transition-colors hover:text-text">
                <LinkedinMark />
              </a>
            )}
            {isConfigured(socialLinks.facebook) && (
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-md border border-white/10 p-2 text-muted transition-colors hover:text-text">
                <FacebookMark />
              </a>
            )}
            {isConfigured(socialLinks.email) && (
              <a href={`mailto:${socialLinks.email}`} aria-label="Email" className="rounded-md border border-white/10 p-2 text-muted transition-colors hover:text-text">
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted">
        (c) 2026 {siteConfig.companyName}. All rights reserved.
      </p>
    </footer>
  );
}