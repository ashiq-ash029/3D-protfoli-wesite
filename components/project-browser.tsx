"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/lib/portfolio-data";

const categories: Array<"All projects" | ProjectCategory> = [
  "All projects",
  "Business websites",
  "AI & computer vision",
  "AI-powered applications",
  "Mobile applications",
  "Personal portfolio",
];

export default function ProjectBrowser() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All projects");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All projects" ||
        project.category === activeCategory;
      const searchableContent = [
        project.title,
        project.type,
        project.description,
        ...project.technologies,
        ...project.contributions,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableContent.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <>
      <div className="project-controls">
        <label className="search-field">
          <span>Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try a technology or project name"
          />
        </label>
        <div className="filter-list" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              type="button"
              className={`filter-button${activeCategory === category ? " is-active" : ""}`}
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <p className="result-count" aria-live="polite">
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "project" : "projects"}
      </p>

      {filteredProjects.length > 0 ? (
        <div className="project-list">
          {filteredProjects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <span className="project-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="project-main">
                <p className="eyebrow">{project.type}</p>
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <details className="project-details">
                  <summary>Project contributions</summary>
                  <ul>
                    {project.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                </details>
              </div>
              <div className="project-links">
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
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-state">
          No projects match that search. Try another keyword or category.
        </p>
      )}
    </>
  );
}
