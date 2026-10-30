import PageIntro from "@/components/page-intro";
import SkillDirectory from "@/components/skill-directory";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Skills",
  "Browse skills in digital marketing, SEO, AEO, GEO, web development, AI tools, creative production, and analytics.",
);

export default function SkillsPage() {
  return (
    <main className="page-shell" id="top">
      <PageIntro
        eyebrow="SKILLS DIRECTORY"
        title="A growing toolkit for search, content, and software."
        description="Explore practical skills and tools across digital marketing, search optimization, development, AI-assisted work, and creative production. No proficiency ratings are implied."
      />
      <section className="section content-section">
        <SkillDirectory />
      </section>
    </main>
  );
}
