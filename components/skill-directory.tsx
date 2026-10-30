"use client";

import { useState } from "react";
import { skillGroups } from "@/lib/portfolio-data";

const categories = ["All skills", ...skillGroups.map((group) => group.category)];

export default function SkillDirectory() {
  const [activeCategory, setActiveCategory] = useState("All skills");
  const visibleGroups =
    activeCategory === "All skills"
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeCategory);

  return (
    <>
      <div className="filter-list skill-filters" aria-label="Filter skill groups">
        {categories.map((category) => (
          <button
            className={`filter-button${activeCategory === category ? " is-active" : ""}`}
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="skill-grid">
        {visibleGroups.map((group, index) => (
          <section className="skill-card" key={group.category}>
            <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
            <h2>{group.category}</h2>
            <ul className="tag-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
