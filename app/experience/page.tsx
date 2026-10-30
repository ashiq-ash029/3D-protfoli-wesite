import Link from "next/link";
import PageIntro from "@/components/page-intro";
import { projects, workshops } from "@/lib/portfolio-data";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Work & Practical Experience",
  "Website development, AI application projects, SEO practice, creative production, internships, and workshops.",
);

const websiteProjects = projects.filter((project) =>
  [
    "Green Arch Builders",
    "Invendo AI Academy",
    "Salon Form Web Application",
    "Personal Portfolio Website",
  ].includes(project.title),
);
const applicationProjects = projects.filter((project) =>
  [
    "Highway FR Detection Web Application",
    "AI-Based Question Paper Generation",
    "RationKart",
  ].includes(project.title),
);

function ExperienceProjectList({
  entries,
}: {
  entries: typeof projects;
}) {
  return (
    <div className="experience-project-grid">
      {entries.map((project) => (
        <article className="experience-card" key={project.title}>
          <p className="eyebrow">{project.type}</p>
          <h3>{project.title}</h3>
          <ul className="tag-list">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <p>{project.description}</p>
          <ul className="plain-list">
            {project.contributions.slice(0, 2).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.github && (
            <a
              className="text-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub repository ↗
            </a>
          )}
          {project.live && (
            <a
              className="text-link"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Visit website ↗
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="page-shell" id="top">
      <PageIntro
        eyebrow="WORK & PRACTICAL EXPERIENCE"
        title="Project practice, not an employment timeline."
        description="This page distinguishes practical project work from formal employment. It brings together development, search and content practice, creative tools, and learning experiences."
      />

      <section className="section content-section">
        <p className="eyebrow">WEBSITE DEVELOPMENT</p>
        <h2>
          STRUCTURE, CONTENT
          <br />
          <span>&amp; RESPONSIVE UI.</span>
        </h2>
        <ExperienceProjectList entries={websiteProjects} />
      </section>

      <section className="section content-section section-bordered">
        <p className="eyebrow">AI & APPLICATION DEVELOPMENT</p>
        <h2>
          EXPLORING USEFUL
          <br />
          <span>APPLICATION IDEAS.</span>
        </h2>
        <ExperienceProjectList entries={applicationProjects} />
      </section>

      <section className="section content-section">
        <p className="eyebrow">SEO & DIGITAL MARKETING PRACTICE</p>
        <h2>
          PRACTICAL SEARCH
          <br />
          <span>FUNDAMENTALS.</span>
        </h2>
        <p className="section-note wide-copy">
          Project activities include keyword research and search intent
          analysis, on-page SEO, metadata and headings, internal linking,
          content structure, technical SEO considerations, answer-focused
          content supporting AEO and GEO, and AI-assisted content planning.
          These are practical skills and project activities, not verified
          commercial campaign results.
        </p>
        <Link className="text-link" href="/skills">
          Browse related skills ↗
        </Link>
      </section>

      <section className="section content-section section-bordered">
        <p className="eyebrow">CREATIVE PRODUCTION</p>
        <h2>
          AI-ASSISTED VISUALS
          <br />
          <span>&amp; VIDEO WORKFLOWS.</span>
        </h2>
        <p className="section-note wide-copy">
          Tools explored for AI-assisted content planning, visual creation, and
          video editing:
        </p>
        <ul className="tag-list">
          {[
            "Canva",
            "Runway",
            "Kling AI",
            "Pika",
            "Luma Dream Machine",
            "HeyGen",
            "DALL·E",
            "CapCut",
            "Adobe Premiere Pro",
          ].map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="section content-section">
        <p className="eyebrow">INTERNSHIPS & WORKSHOPS</p>
        <div className="timeline compact-timeline">
          {workshops.map((item) => (
            <article className="timeline-item" key={item.title}>
              <p className="timeline-period">{item.period}</p>
              <div>
                <p className="eyebrow">{item.organization}</p>
                <h3>{item.title}</h3>
                <p className="muted-copy">{item.location}</p>
                <p className="muted-copy">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/education">
          Education details ↗
        </Link>
      </section>
    </main>
  );
}
