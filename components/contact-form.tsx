"use client";

import { useState, type FormEvent } from "react";
import { socialLinks } from "@/lib/portfolio-data";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const body = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !body) {
      setMessage("Please complete all fields before continuing.");
      return;
    }

    const mailto = `mailto:${socialLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nReply to: ${email}\n\n${body}`)}`;
    setMessage(
      "Your email app should open with a draft. Send it from your email app to complete delivery.",
    );
    window.location.href = mailto;
  }

  return (
    <div className="contact-form-wrap">
      <div className="form-notice" role="note">
    
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="form-wide">
          Subject
          <input name="subject" required />
        </label>
        <label className="form-wide">
          Message
          <textarea name="message" rows={6} required />
        </label>
        <button className="button button-primary form-wide" type="submit">
          Prepare email <span aria-hidden="true">↗</span>
        </button>
      </form>
      <p className="form-status" role="status" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
