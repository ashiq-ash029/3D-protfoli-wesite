import Link from "next/link";
import PageIntro from "@/components/page-intro";
import { education, workshops } from "@/lib/portfolio-data";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Education",
  "Education, internships, and workshops in computer science, UI/UX, machine learning, embedded systems, and robotics.",
);

export default function EducationPage() {
  return (
    <main className="page-shell" id="top">
      <PageIntro
        eyebrow="EDUCATION & LEARNING"
        title="Building a foundation through study and practice."
        description="Academic education, internships, and workshop experience that support my interests in software development and applied technology."
      />
      <section className="section content-section">
        <p className="eyebrow">ACADEMIC EDUCATION</p>
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item" key={item.title}>
              <p className="timeline-period">{item.period}</p>
              <div>
                <h2>{item.title}</h2>
                <p className="timeline-organization">{item.institution}</p>
                <p className="muted-copy">{item.location}</p>
                {item.description && (
                  <p className="muted-copy">{item.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section content-section section-bordered">
        <p className="eyebrow">INTERNSHIPS & WORKSHOPS</p>
        <h2>
          LEARNING THROUGH
          <br />
          <span>HANDS-ON EXPOSURE.</span>
        </h2>
        <div className="timeline">
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
        <Link className="text-link" href="/experience">
          View practical experience ↗
        </Link>
      </section>
    </main>
  );
}
