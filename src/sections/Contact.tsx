// src/sections/Contact.tsx
import { useState, type FormEvent } from "react";
import { CONTACT_FORM_ENDPOINT } from "../config/site";

interface FormState {
  name: string;
  email: string;
  organization: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  organization: "",
  projectType: "",
  message: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const endpointConfigured = CONTACT_FORM_ENDPOINT !== "";

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => {
      return { ...prev, [field]: value };
    });
  }

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};
    if (form.name.trim() === "") {
      nextErrors.name = "Please enter your name.";
    }
    if (!isValidEmail(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (form.message.trim() === "") {
      nextErrors.message = "Please enter a message.";
    }
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (!endpointConfigured) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization: form.organization,
          projectType: form.projectType,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-lg border border-amber/30 bg-surface p-10 text-center">
        <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
          Have a Software Idea?
        </h2>
        <p className="mt-3 text-sm text-muted">
          Let&apos;s turn your idea into a working digital solution.
        </p>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl font-semibold text-text">Discuss a Project</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Tell us about what you&apos;re building. We&apos;ll get back to you to talk through the details.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {!endpointConfigured && (
            <p className="rounded-md border border-white/10 bg-ink px-4 py-3 text-sm text-muted">
              Contact form submission is currently being configured. Please use our available contact channel.
            </p>
          )}

          {status === "success" && (
            <p className="rounded-md border border-teal/30 bg-teal/10 px-4 py-3 text-sm text-teal">
              Thanks -- your message has been sent. We&apos;ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="rounded-md border border-amber/30 bg-amber/10 px-4 py-3 text-sm text-amber">
              Something went wrong sending your message. Please try again or use our available contact channel.
            </p>
          )}

          <div>
            <label htmlFor="name" className="block text-sm text-muted">Name</label>
            <input id="name" type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-ink px-3 py-2 text-sm text-text outline-none focus:border-amber" />
            {errors.name && <p className="mt-1 text-xs text-amber">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-muted">Email</label>
            <input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-ink px-3 py-2 text-sm text-text outline-none focus:border-amber" />
            {errors.email && <p className="mt-1 text-xs text-amber">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm text-muted">Organization</label>
            <input id="organization" type="text" value={form.organization} onChange={(e) => handleChange("organization", e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-ink px-3 py-2 text-sm text-text outline-none focus:border-amber" />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm text-muted">Project Type</label>
            <input id="projectType" type="text" value={form.projectType} onChange={(e) => handleChange("projectType", e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-ink px-3 py-2 text-sm text-text outline-none focus:border-amber" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-muted">Message</label>
            <textarea id="message" rows={4} value={form.message} onChange={(e) => handleChange("message", e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-ink px-3 py-2 text-sm text-text outline-none focus:border-amber" />
            {errors.message && <p className="mt-1 text-xs text-amber">{errors.message}</p>}
          </div>

          <button type="submit" disabled={status === "submitting"} className="w-full rounded-md bg-amber px-4 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}