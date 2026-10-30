import Link from "next/link";
import PageIntro from "@/components/page-intro";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "About Me",
  "Learn about Muhammad Ashiq S's direction across AI digital marketing, search optimization, AI-assisted content, and web development.",
);

const capabilities = [
  {
    title: "Search optimization",
    items: [
      "Keyword research and search intent analysis",
      "On-page and technical SEO fundamentals",
      "Metadata, headings, and internal linking",
      "Answer-focused content structure",
    ],
  },
  {
    title: "Website development",
    items: [
      "Responsive website interfaces",
      "React and Next.js development",
      "Tailwind CSS styling",
      "Backend integrations, APIs, and database-connected application concepts",
    ],
  },
  {
    title: "AI-assisted workflows",
    items: [
      "Content planning and prompt engineering",
      "Code generation and debugging assistance",
      "Website prototyping",
      "AI-supported creative production",
    ],
  },
  {
    title: "Creative content",
    items: [
      "Social media and online promotional content",
      "AI-assisted visual and video creation",
      "Short-form video editing",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell" id="top">
      <PageIntro
        eyebrow="ABOUT ME"
        title="Where technology, search, and creativity meet."
        description="I am a Computer Science and Engineering graduate interested in the intersection of artificial intelligence, digital marketing, search optimization, and web development."
      />

      <section className="section content-section">
        <div className="content-copy">
          <p className="eyebrow">PROFESSIONAL PROFILE</p>
          <h2>
            CURIOUS BY NATURE.
            <br />
            <span>PRACTICAL BY DESIGN.</span>
          </h2>
          <p>
            My practical project work includes developing responsive websites,
            planning SEO-focused content, exploring AI-powered web
            applications, and using AI tools to support development and
            creative workflows.
          </p>
          <p>
            I am building a professional direction across AI digital marketing,
            SEO, Answer Engine Optimization (AEO), Generative Engine
            Optimization (GEO), AI-assisted content creation, and frontend and
            backend development.
          </p>
          <p>
            My career objective is to contribute to an AI digital marketing,
            SEO, or AI-powered content role by combining search optimization
            knowledge, AI-assisted content creation, and website development
            skills.
          </p>
        </div>
      </section>

      <section className="section content-section section-bordered">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT I DO</p>
            <h2>
              FOUR CONNECTED
              <br />
              <span>DISCIPLINES.</span>
            </h2>
          </div>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <article className="capability-card" key={capability.title}>
              <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
              <h3>{capability.title}</h3>
              <ul className="plain-list">
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section content-section">
        <p className="eyebrow">MY APPROACH</p>
        <h2>
          UNDERSTAND. BUILD.
          <br />
          <span>IMPROVE.</span>
        </h2>
        <ol className="process-list">
          {[
            "Understand the problem",
            "Research requirements",
            "Plan the structure",
            "Build and test",
            "Improve usability",
            "Review search visibility",
          ].map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
        <Link className="text-link" href="/projects">
          See the approach in my projects ↗
        </Link>
      </section>
    </main>
  );
}
