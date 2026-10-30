
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Works | Muhammad Ashiq S",
  description:
    "Selected video editing and creative projects across advertising, business promotion, events, production, and property content.",
};

const creativeProjects = [
  {
    number: "01",
    title: "Short Advertisement Video",
    category: "Advertising",
    description: "Short-form advertisement content.",
    url: "https://www.instagram.com/a_s_h_i_q___?obrf=MW0wdHdybDdocHZkdA==",
  },
  {
    number: "02",
    title: "AI-Powered Shop Advertisement",
    category: "Business Promotion · AI",
    description: "Shop advertisement created with an AI-powered creative approach.",
    url: "https://www.instagram.com/reel/DZdEFNWS-EH/?xtok=MWZtbzdqNHNmcGxlYg==",
  },
  {
    number: "03",
    title: "Events & Production Company Video",
    category: "Events & Production",
    description: "Video content for events and production.",
    url: "https://www.instagram.com/reel/DUiADxuD3ha/?obrf=MWpha3lsbHpmN3NjMw==",
  },
  {
    number: "04",
    title: "House Tour Reel",
    category: "Real Estate",
    description: "Short-form property and house-tour content.",
    url: "https://www.instagram.com/reel/Debury7JS-m/?dlrf=ZHdoM2tiMWFzZWIw",
  },
];

export default function CreativeWorksPage() {
  return (
    <main className="page-shell creative-works-page" id="top">
      <section className="creative-works-hero">
        <p className="eyebrow">CREATIVE PORTFOLIO / 2026</p>
        <h1>
          VIDEO EDITING
          <br />
          <span>&amp; CREATIVE WORK.</span>
        </h1>
        <p className="creative-works-intro">
          Selected video projects across advertising, business promotion,
          events, and property content.
        </p>
        <div className="creative-works-meta">
          <span>VIDEO EDITING</span>
          <span>SHORT-FORM CONTENT</span>
          <span>CREATIVE PRODUCTION</span>
        </div>
      </section>

      <section
        className="section section-block creative-works-list"
        aria-labelledby="creative-projects-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK / 04 PROJECTS</p>
            <h2 id="creative-projects-heading">
              THE CREATIVE
              <br />
              <span>COLLECTION.</span>
            </h2>
          </div>
          <p className="section-note">
            Explore selected work through the original Instagram posts.
          </p>
        </div>

        <div className="creative-works-grid">
          {creativeProjects.map((project) => (
            <article className="creative-work-card" key={project.number}>
              <a
                className="creative-work-cover"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${project.title} on Instagram`}
              >
                <span className="creative-work-number">{project.number}</span>
                <span className="creative-work-play" aria-hidden="true">
                  ▶
                </span>
                <span className="creative-work-cover-label">
                  CREATIVE WORK
                </span>
                <span className="creative-work-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <div className="creative-work-details">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="creative-work-description">
                  {project.description}
                </p>
                <a
                  className="text-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on Instagram <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      
    </main>
  );
}
