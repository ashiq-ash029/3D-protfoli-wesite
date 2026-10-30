import PageIntro from "@/components/page-intro";
import ProjectBrowser from "@/components/project-browser";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Projects",
  "Search project work across business websites, AI and computer vision, educational applications, mobile concepts, and portfolio development.",
);

export default function ProjectsPage() {
  return (
    <main className="page-shell" id="top">
      <PageIntro
        eyebrow="SELECTED PROJECTS"
        title="Practical work across websites and applications."
        description="Browse project descriptions, technologies, contributions, and available repository or live website links. Project details are presented without unsupported outcome claims."
      />
      <section className="section content-section">
        <ProjectBrowser />
      </section>
    </main>
  );
}
