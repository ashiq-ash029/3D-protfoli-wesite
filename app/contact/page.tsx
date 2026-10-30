import PageIntro from "@/components/page-intro";
import ContactForm from "@/components/contact-form";
import { socialLinks } from "@/lib/portfolio-data";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Contact",
  "Contact Muhammad Ashiq S about opportunities in AI digital marketing, SEO, AEO/GEO, AI-assisted content, and web development.",
);

export default function ContactPage() {
  return (
    <main className="page-shell" id="top">
      <PageIntro
        eyebrow="LET'S CONNECT"
        title="Let's talk about thoughtful digital work."
        description="I'm interested in opportunities related to AI digital marketing, SEO, AEO/GEO, AI-assisted content creation, and web development. Feel free to reach out about relevant roles, projects, and collaborations."
      />
      <section className="section contact-layout">
        <div className="contact-details">
          <p className="eyebrow">DIRECT CONTACT</p>
          <a className="contact-detail" href={`mailto:${socialLinks.email}`}>
            <span>Email</span>
            {socialLinks.email}
          </a>
          <a className="contact-detail" href={`tel:${socialLinks.phone.replaceAll(" ", "")}`}>
            <span>Phone</span>
            {socialLinks.phone}
          </a>
          <div className="contact-detail">
            <span>Location</span>
            Kollam, Kerala, India
          </div>
          <a
            className="contact-detail"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            Connect ↗
          </a>
          <a
            className="contact-detail"
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            View profile ↗
          </a>
          <a
            className="text-link"
            href={`mailto:${socialLinks.email}?subject=${encodeURIComponent("Request for resume")}`}
          >
            Request my resume by email ↗
          </a>
          <p className="muted-copy">
            A downloadable resume PDF is not available in the project files
            yet.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
