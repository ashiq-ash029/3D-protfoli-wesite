import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Muhammad Ashiq S | AI Digital Marketing Specialist",
  description:
    "Explore the portfolio of Muhammad Ashiq S, a Computer Science graduate focused on AI digital marketing, SEO, AEO, GEO, content creation, and web development.",
  openGraph: {
    title: "Muhammad Ashiq S | AI Digital Marketing Specialist",
    description:
      "SEO, AEO & GEO, AI-assisted content, and web development.",
    type: "website",
  },
};

const specialties = [
  {
    number: "01",
    title: "SEO, AEO & GEO",
    description:
      "Search intent, on-page fundamentals, answer-focused structure, and discoverability.",
  },
  {
    number: "02",
    title: "AI-Assisted Content",
    description:
      "AI-supported research, content planning, creative production, and refinement.",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Responsive websites and application concepts across frontend, backend, and data.",
  },
  {
    number: "04",
    title: "AI-Powered Workflows",
    description:
      "Using AI tools for prototyping, code generation, debugging, and creative workflows.",
  },
];


const videoProjects = [
  {
    number: "01",
    title: "Short Advertisement Video",
    category: "Advertising",
    url: "https://www.instagram.com/reel/DUXMUMiCWoU/?psln=MTVyamVsZW5yZmt1bw==",
    thumbnail: null as string | null,
  },
  {
    number: "02",
    title: "AI-Powered Shop Advertisement",
    category: "Business Promotion · AI",
    url: "https://www.instagram.com/reel/DZdEFNWS-EH/?xtok=MWZtbzdqNHNmcGxlYg==",
    thumbnail: null as string | null,
  },
  {
    number: "03",
    title: "Events & Production Company Video",
    category: "Events & Production",
    url: "https://www.instagram.com/reel/DUiADxuD3ha/?obrf=MWpha3lsbHpmN3NjMw==",
    thumbnail: null as string | null,
  },
  {
    number: "04",
    title: "House Tour Reel",
    category: "Real Estate",
    url: "https://www.instagram.com/reel/Debury7JS-m/?dlrf=ZHdoM2tiMWFzZWIw",
    thumbnail: null as string | null,
  },
];


export default function Home() {
  const featuredProjects = [
    projects[0],
    projects[1],
    projects[2],
    projects[3],
  ];

  return (
    <main id="top">

      

<div className="resume-actions">
  <a
    className="resume-button resume-button-primary"
    href="\resume\Muhammad_Ashiq_S_resume (3).pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="resume-button-icon">↗</span>
    <span>
      <strong>View Resume</strong>
     
    </span>
  </a>

  <a
    className="resume-button resume-button-outline"
    href="\resume\Muhammad_Ashiq_S_resume (3).pdf"
    download="Muhammad_Ashiq_S_Resume.pdf"
  >
    <span className="resume-button-icon">↓</span>
    <span>
      <strong>Download Resume</strong>
      
    </span>
  </a>
</div>


      

<section className="hero">
  

  <div className="hero-content">
    <div className="hero-text">
      <p className="eyebrow">
        <span className="status-dot" />
        AI · SEARCH · CREATIVE TECHNOLOGY
      </p>

      <h1 className="hero-name">
        MUHAMMAD
        <br />
        ASHIQ <span>S.</span>
      </h1>

      <p className="hero-role">AI Digital Marketing Specialist</p>

      <p className="hero-specialties">
        SEO, AEO &amp; GEO <span>·</span> AI-Powered Content{" "}
        <span>·</span> Web Development
      </p>

      <p className="hero-introduction">
        I combine my computer science background with practical project
        experience in search optimization, AI-assisted content, and web
        development to create useful digital experiences.
      </p>

      <div className="hero-actions">
        <Link className="button button-primary" href="/projects">
          View My Projects <span aria-hidden="true">↗</span>
        </Link>

        <Link className="button button-outline" href="/contact">
          Contact Me
        </Link>
      </div>
    </div>
  </div>

  <span className="hero-index">PORTFOLIO / 2026</span>

  <a className="scroll-cue" href="#specialties">
    Scroll to explore <span aria-hidden="true">↓</span>
  </a>
</section>



      <section className="section section-block" id="specialties">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / WHAT I DO</p>
            <h2>
              TECHNOLOGY WITH
              <br />
              <span>INTENTION.</span>
            </h2>
          </div>
          <p className="section-note">
            Bringing search, creative thinking, and development together to
            make practical digital experiences.
          </p>
        </div>
        <div className="specialty-grid">
          {specialties.map((specialty) => (
            <article className="specialty-card" key={specialty.number}>
              <span className="card-index">{specialty.number}</span>
              <h3>{specialty.title}</h3>
              <p>{specialty.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-block about-preview">
        <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
        <h2>
          SEARCH-MINDED.
          <br />
          <span>TECHNICALLY CURIOUS.</span>
        </h2>
        <div className="split-copy">
          <p>
            My interests sit at the intersection of artificial intelligence,
            digital marketing, search optimization, and web development. I
            enjoy learning by planning and building practical projects.
          </p>
          <div>
            <p>
              From responsive website structure to AI-assisted workflows, I
              focus on clear information, useful interfaces, and thoughtful
              implementation.
            </p>
            <Link className="text-link" href="/about">
              More about me ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-block section-bordered">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / SELECTED PROJECTS</p>
            <h2>
              IDEAS INTO
              <br />
              <span>APPLICATIONS.</span>
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            View all projects ↗
          </Link>
        </div>
        <div className="featured-project-grid">
          {featuredProjects.map((project, index) => (
            <article className="featured-project" key={project.title}>
              <span className="card-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="eyebrow">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list">
                {project.technologies.slice(0, 3).map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <Link className="text-link" href="/projects">
                Project details ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      
<section
  className="section section-block section-bordered video-creative-section"
  id="video-creative"
>
  <div className="section-heading">
    <div>
      <p className="eyebrow">04 / VIDEO & CREATIVE</p>
      <h2>
        VIDEO EDITING
        <br />
        <span>&amp; CREATIVE WORK.</span>
      </h2>
    </div>

    <p className="section-note">
      Selected video projects across advertising, business promotion,
      events, and property content.
    </p>
  </div>

  <div className="video-creative-grid">
    {videoProjects.map((project) => (
      <article className="video-creative-card" key={project.number}>
        <a
          className="video-creative-thumbnail"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${project.title} on Instagram`}
        >
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={`${project.title} video thumbnail`}
              fill
              sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 25vw"
              className="video-creative-image"
            />
          ) : (
            <div className="video-creative-placeholder">
              <span className="video-creative-number">
                {project.number}
              </span>
              <span className="video-play-icon" aria-hidden="true">
                ▶
              </span>
              <span className="video-placeholder-label">
                VIDEO PROJECT
              </span>
            </div>
          )}

          <span className="video-creative-open" aria-hidden="true">
            ↗
          </span>
        </a>

        <div className="video-creative-info">
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>

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



      <section className="section section-block section-bordered">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / SELECTED SKILLS</p>
            <h2>
              A PRACTICAL
              <br />
              <span>TOOLKIT.</span>
            </h2>
          </div>
          <Link className="text-link" href="/skills">
            Browse all skills ↗
          </Link>
        </div>
        <ul className="tag-list featured-skills">
          {[
            "Keyword research",
            "Search intent",
            "On-page SEO",
            "AEO & GEO",
            "React",
            "Next.js",
            "Python",
            "FastAPI",
            "AI-assisted content",
            "Google Analytics 4",
          ].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section section-block education-preview">
        <div>
          <p className="eyebrow">06 / EDUCATION</p>
          <h2>
            ROOTED IN
            <br />
            <span>COMPUTER SCIENCE.</span>
          </h2>
        </div>
        <div className="education-preview-card">
          <p className="eyebrow">2022–2026</p>
          <h3>B.Tech, Computer Science and Engineering</h3>
          <p>Younus College of Engineering and Technology, Kollam</p>
          <Link className="text-link" href="/education">
            Education &amp; workshops ↗
          </Link>
        </div>
      </section>

      <section className="section section-block section-bordered home-contact">
        <p className="eyebrow">07 / NEXT STEP</p>
        <h2>
          OPEN TO THE
          <br />
          <span>RIGHT OPPORTUNITY.</span>
        </h2>
        <p>
          Interested in AI digital marketing, search optimization, AI-assisted
          content, and web development.
        </p>
        <Link className="button button-primary" href="/contact">
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
