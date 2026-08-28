import { site, about, skillGroups, experiences, projects, education } from "../data/content";

export function buildPortfolioContext(): string {
  const sections: string[] = [];

  // Basic identity
  sections.push(`Name: ${site.name}`);
  sections.push(`Title: ${site.title}`);
  sections.push(`Location: ${site.location}`);
  sections.push(`Tagline: ${site.tagline}`);

  // About
  sections.push(`\nABOUT:\n${about.summary.join(" ")}\n${about.currently}`);

  // Skills
  const skillsText = skillGroups
    .map((group) => `${group.category}: ${group.items.join(", ")}`)
    .join("\n");
  sections.push(`\nSKILLS:\n${skillsText}`);

  // Experience
  const experienceText = experiences
    .map((exp) => {
      const clientLine = exp.client ? ` (Client: ${exp.client})` : "";
      const highlightsText = exp.highlights.map((h) => `- ${h}`).join("\n");
      return `${exp.role} at ${exp.company}${clientLine}, ${exp.location} (${exp.start} - ${exp.end})\n${highlightsText}`;
    })
    .join("\n\n");
  sections.push(`\nEXPERIENCE:\n${experienceText}`);

  // Projects
  const projectsText = projects
    .map((p) => `${p.title}: ${p.description} [Tags: ${p.tags.join(", ")}]`)
    .join("\n");
  sections.push(`\nPROJECTS:\n${projectsText}`);

  // Education
  const educationText = education
    .map((e) => `${e.degree}, ${e.institution}, ${e.location} (${e.start} - ${e.end})`)
    .join("\n");
  sections.push(`\nEDUCATION:\n${educationText}`);

  return sections.join("\n");
}


// console.log(buildPortfolioContext());