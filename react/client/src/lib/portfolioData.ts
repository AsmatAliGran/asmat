// SIGNAL NOIR DESIGN SYSTEM: Editable source of truth for portfolio content. Replace placeholders with verified facts before publishing.
export const portfolioData = {
  name: "Asmat Ali",
  role: "Software Engineer",
  location: "Mingora, Swat · Pakistan",
  email: "asmat6894@gmail.com",
  phone: "+92 343 9602946",
  availability: "Open to selected product & engineering work",
  intro: "I turn complex business rules into dependable systems — from Laravel APIs and payment workflows to compliance engines and sharp, useful interfaces.",
  about: "My work sits where product decisions meet technical reality. I build backend systems that can be reasoned about, APIs that stay clear under pressure, and frontends that help people move through difficult workflows with confidence. The exact metrics and company details below are intentionally editable where the supplied materials did not confirm them.",
  stats: [
    { value: "3+", label: "Years in product engineering" },
    { value: "[08]", label: "Projects shipped · edit metric" },
    { value: "[24]", label: "APIs in production · edit metric" },
    { value: "[12]", label: "Integrations delivered · edit metric" },
  ],
  capabilities: [
    { index: "01", title: "Backend systems", body: "Laravel services, REST APIs, queues, jobs, authentication, database design, and maintainable service layers.", tags: ["PHP", "Laravel", "MySQL"] },
    { index: "02", title: "Financial workflows", body: "Payment, FX, transaction monitoring, sanction screening, risk assessment, and rules-heavy business logic.", tags: ["Payments", "Compliance", "Risk"] },
    { index: "03", title: "Product interfaces", body: "React and TypeScript interfaces that make operational complexity feel legible, calm, and fast.", tags: ["React", "TypeScript", "Tailwind"] },
    { index: "04", title: "Integrations & delivery", body: "Third-party APIs, Git, Docker, Linux, and pragmatic delivery patterns that keep teams moving.", tags: ["APIs", "Docker", "Git"] },
  ],
  experience: [
    { date: "2023 — Present", role: "Software Engineer", company: "Company / role detail — replace with verified name", location: "Remote / Pakistan", body: "Building robust web applications with a focus on backend workflows, integrations, data integrity, and product-quality delivery.", achievements: ["Designed full-stack workflows across Laravel services and modern frontend surfaces.", "Worked across payment, FX, compliance, and transaction-monitoring domains.", "Improved maintainability through clear service boundaries and practical API contracts."], tags: ["Laravel", "React", "APIs", "MySQL"] },
    { date: "2021 — 2023", role: "Full Stack Developer", company: "Company / role detail — replace with verified name", location: "Pakistan", body: "Delivered end-to-end features with an emphasis on clean code, usable interfaces, and dependable database-backed systems.", achievements: ["Built responsive product experiences from the data model through the interface.", "Connected third-party services while keeping validation and failure states visible.", "Handled schema design, server-side logic, and frontend implementation as one system."], tags: ["PHP", "Laravel", "JavaScript", "SQL"] },
    { date: "2020 — 2021", role: "Intern Developer in PHP", company: "Company / role detail — replace with verified name", location: "Pakistan", body: "A foundation in PHP development, responsive interfaces, and the habits that make software easier to maintain.", achievements: ["Built and refined PHP interfaces with a focus on clear structure.", "Learned to turn requirements into reusable implementation patterns.", "Developed early experience with databases, debugging, and collaborative delivery."], tags: ["PHP", "HTML", "CSS", "Bootstrap"] },
  ],
  projects: [
    { title: "Payment Operations Layer", category: "Fintech", description: "A systems case study for payment and FX workflows, structured around the path from request validation to settled transaction.", image: "/manus-storage/asmat-project-ledger_b9794287.png", tags: ["Backend", "Fintech", "API"], number: "01", featured: true },
    { title: "Risk Signal Engine", category: "Compliance", description: "An architecture brief for rules-driven monitoring, screening, and the handoff from flagged signal to human review.", image: "/manus-storage/asmat-project-risk_91ac42a3.png", tags: ["Compliance", "API", "Backend"], number: "02", featured: false },
    { title: "Operational Product UI", category: "Frontend", description: "An interface study for operational workflows where status, exceptions, and next actions stay legible.", image: "/manus-storage/asmat-hero-systems_78173336.png", tags: ["Frontend", "React", "Full Stack"], number: "03", featured: false },
  ],
  skills: [
    { label: "Backend", items: ["PHP", "Laravel", "REST APIs", "Authentication", "Queues", "Jobs", "Services", "Events"] },
    { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Tailwind"] },
    { label: "Data & architecture", items: ["MySQL", "SQL", "Database design", "Indexing", "Service layer", "API architecture"] },
    { label: "Domain systems", items: ["Payment APIs", "FX APIs", "Transaction monitoring", "Sanction screening", "Rules engines", "Risk assessment"] },
  ],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
