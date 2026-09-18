// SIGNAL NOIR DESIGN SYSTEM: Editorial brutalism, cobalt signal accents, asymmetrical rails, and restrained motion.
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, Code2, ExternalLink, Github, Linkedin, Mail, Menu, Moon, MoveUpRight, Network, Phone, Send, Sun, X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { navItems, portfolioData } from "@/lib/portfolioData";

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.58 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return <div className="section-label"><span className="signal-line" /><span>{index}</span><span>{children}</span></div>;
}

function ArrowButton({ children, href }: { children: ReactNode; href: string }) {
  return <a className="arrow-button" href={href}><span>{children}</span><ArrowUpRight size={16} strokeWidth={1.8} /></a>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="metric-card"><div className="metric-value">{value}</div><div className="metric-label">{label}</div></div>;
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const sections = navItems.map((item) => document.querySelector(item.href));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-28% 0px -60% 0px" });
    window.addEventListener("scroll", onScroll, { passive: true });
    sections.forEach((section) => section && observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  const filters = ["All", "Backend", "Fintech", "Compliance", "Frontend", "API"];
  const filteredProjects = useMemo(() => portfolioData.projects.filter((project) => activeFilter === "All" || project.tags.includes(activeFilter)), [activeFilter]);
  const motionProps = shouldReduceMotion ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.16 } };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Asmat Ali home"><img src="/manus-storage/asmat-mark_9eb7981b.png" alt="" className="brand-mark" onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling?.classList.add("brand-mark-failed"); }} /><span className="brand-fallback-mark" aria-hidden="true">A<span>/</span></span><span className="brand-wordmark">ASMAT ALI<span className="brand-dot">.</span></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a key={item.href} className={activeSection === item.href.slice(1) ? "nav-link nav-link-active" : "nav-link"} href={item.href}>{item.label}</a>)}</nav>
        <div className="header-actions"><button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button><a className="resume-link" href="#contact">Resume <ArrowUpRight size={14} /></a><button className="mobile-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button></div>
      </header>

      {menuOpen && <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={15} /></a>)}<a href={`mailto:${portfolioData.email}`} onClick={() => setMenuOpen(false)}>Start a conversation<ArrowUpRight size={15} /></a></motion.nav>}

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title"><div className="hero-grid-pattern" /><div className="container hero-inner">
          <motion.div className="hero-copy" initial={shouldReduceMotion ? false : "hidden"} animate={shouldReduceMotion ? undefined : "visible"} variants={stagger}>
            <motion.div variants={reveal} className="availability-pill"><span className="availability-dot" /> {portfolioData.availability}</motion.div>
            <motion.p variants={reveal} className="eyebrow">SOFTWARE ENGINEER <span>/</span> API · FINTECH · PRODUCT</motion.p>
            <motion.h1 variants={reveal} id="hero-title">Systems that make<br /><em>complex work</em> feel clear.</motion.h1>
            <motion.p variants={reveal} className="hero-intro">{portfolioData.intro}</motion.p>
            <motion.div variants={reveal} className="hero-actions"><ArrowButton href="#projects">View selected work</ArrowButton><a className="text-link" href={`mailto:${portfolioData.email}`}>Let’s work together <ArrowDownRight size={16} /></a></motion.div>
            <motion.div variants={reveal} className="hero-meta"><span>Based in {portfolioData.location}</span><span className="meta-divider" /><span>Available for focused engagements</span></motion.div>
          </motion.div>
          <motion.div className="hero-visual-wrap" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 0.85, delay: 0.14 }}><div className="hero-visual"><img src="/manus-storage/asmat-hero-systems_78173336.png" alt="Abstract system architecture visualization" /><div className="hero-visual-overlay" /><div className="visual-index">SYS / 026</div><div className="visual-caption"><span className="caption-pulse" /> Interface / logic / signal</div></div><div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" /></motion.div>
        </div><div className="hero-scroll-cue"><span>Scroll to explore</span><ChevronDown size={15} /></div></section>

        <div className="technology-strip"><div className="container technology-inner"><span className="strip-label">Working across</span>{["Laravel", "PHP", "MySQL", "REST APIs", "React", "TypeScript", "Payments", "Compliance"].map((item) => <span className="technology-chip" key={item}>{item}</span>)}</div></div>

        <section className="section about-section" id="about" aria-labelledby="about-title"><div className="container section-layout"><div className="section-rail"><SectionLabel index="01">About</SectionLabel><span className="rail-note">The point of view</span></div><motion.div className="about-content" {...motionProps}><div className="section-heading-row"><h2 id="about-title">The engineer<br /><em>behind the system.</em></h2><span className="heading-marker">A / 01</span></div><div className="about-grid"><div className="portrait-frame"><img src="/manus-storage/asmat-portrait-placeholder_7003f379.png" alt="Dark editorial portrait placeholder for Asmat Ali" /><div className="portrait-label">PORTRAIT / REPLACE IMAGE</div></div><div className="about-copy"><p className="lead-copy">{portfolioData.about}</p><p>Good engineering is not only about what the system can do. It is also about whether the next person can understand it, whether the edge cases are visible, and whether the interface respects the person doing the work.</p><a href="#contact" className="inline-arrow-link">More about the approach <ArrowUpRight size={15} /></a></div></div><div className="metrics-grid">{portfolioData.stats.map((stat) => <Metric key={stat.label} value={stat.value} label={stat.label} />)}</div></motion.div></div></section>

        <section className="section capabilities-section" aria-labelledby="capabilities-title"><div className="container"><div className="section-topline"><SectionLabel index="02">Capabilities</SectionLabel><span className="section-aside">The useful parts</span></div><motion.div className="capabilities-heading" {...motionProps}><h2 id="capabilities-title">Built for the<br /><em>hard workflows.</em></h2><p>Backend architecture, product interfaces, and the domain logic in between—shaped into systems teams can trust.</p></motion.div><div className="capabilities-grid">{portfolioData.capabilities.map((capability, index) => <motion.article className="capability-card" key={capability.index} {...(shouldReduceMotion ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.1 }, variants: reveal, transition: { delay: index * 0.06 } })}><div className="capability-top"><span className="capability-index">{capability.index}</span><ArrowUpRight size={17} /></div><h3>{capability.title}</h3><p>{capability.body}</p><div className="tag-row">{capability.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div></motion.article>)}</div></div></section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title"><div className="container section-layout"><div className="section-rail"><SectionLabel index="03">Experience</SectionLabel><span className="rail-note">A work in progress</span></div><div className="experience-content"><motion.div className="section-heading-row" {...motionProps}><h2 id="experience-title">A timeline of<br /><em>useful problems.</em></h2><span className="heading-marker">EXP / 03</span></motion.div><div className="timeline">{portfolioData.experience.map((item, index) => <motion.article className="timeline-item" key={`${item.date}-${item.role}`} {...(shouldReduceMotion ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.14 }, variants: reveal, transition: { delay: index * 0.08 } })}><div className="timeline-date">{item.date}</div><div className="timeline-node"><span /></div><div className="timeline-card"><div className="timeline-card-top"><div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p></div><span className="timeline-location">{item.location}</span></div><p>{item.body}</p><ul>{item.achievements.map((achievement) => <li key={achievement}><Check size={14} />{achievement}</li>)}</ul><div className="tag-row">{item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div></div></motion.article>)}</div></div></div></section>

        <section className="case-study-section" aria-labelledby="case-title"><div className="container case-study-inner"><div className="case-study-intro"><SectionLabel index="04">Case study</SectionLabel><span className="case-study-status">Case study format / edited for proof</span><h2 id="case-title">From request<br />to <em>reliable signal.</em></h2><p>A visual framework for showing the reasoning behind a real build: the problem, the architecture, the trade-offs, and the result.</p><a className="inline-arrow-link inline-arrow-light" href="#projects">See the project index <ArrowUpRight size={15} /></a></div><div className="architecture-board"><div className="board-grid" /><div className="board-heading"><span>Architecture / flow</span><span>CASE / 001</span></div><div className="architecture-flow"><div className="architecture-node"><span className="node-number">01</span><Network size={18} /><b>Client</b><small>Request / context</small></div><div className="flow-line" /><div className="architecture-node architecture-node-accent"><span className="node-number">02</span><Code2 size={18} /><b>API</b><small>Validation / contract</small></div><div className="flow-line" /><div className="architecture-node"><span className="node-number">03</span><Network size={18} /><b>Service layer</b><small>Rules / orchestration</small></div><div className="flow-line" /><div className="architecture-node"><span className="node-number">04</span><Code2 size={18} /><b>Data + providers</b><small>Persistence / signal</small></div></div><div className="architecture-foot"><span>Design for failure.</span><span>Make the next decision obvious.</span></div></div></div></section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title"><div className="container"><div className="section-topline"><SectionLabel index="05">Selected work</SectionLabel><span className="section-aside">Proof over promises</span></div><motion.div className="projects-heading" {...motionProps}><h2 id="projects-title">A few things<br /><em>worth opening.</em></h2><p>A selected index of systems, interfaces, and domain-heavy workflows—organized around the decisions that make the work dependable.</p></motion.div><div className="filter-row" role="group" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter-button filter-button-active" : "filter-button"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="projects-grid">{filteredProjects.map((project, index) => <motion.article className={project.featured ? "project-card project-card-featured" : "project-card"} key={project.title} layout {...(shouldReduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.48, delay: index * 0.06 } })}><div className="project-media"><img src={project.image} alt="" /><div className="project-media-overlay" /><span className="project-number">{project.number}</span><span className="project-open"><ExternalLink size={15} /></span></div><div className="project-body"><div className="project-category">{project.category}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div><a className="project-link" href="#contact">View case study index <ArrowUpRight size={15} /></a></div></motion.article>)}</div></div></section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title"><div className="container section-layout"><div className="section-rail"><SectionLabel index="06">Skills</SectionLabel><span className="rail-note">The toolkit</span></div><div className="skills-content"><motion.div className="section-heading-row" {...motionProps}><h2 id="skills-title">Tools are only<br /><em>half the craft.</em></h2><span className="heading-marker">SKL / 06</span></motion.div><div className="skills-grid">{portfolioData.skills.map((skill, index) => <motion.div className="skill-group" key={skill.label} {...(shouldReduceMotion ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.1 }, variants: reveal, transition: { delay: index * 0.06 } })}><div className="skill-group-label"><span>0{index + 1}</span>{skill.label}</div><div className="skill-list">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></motion.div>)}</div></div></div></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-grid-pattern" /><div className="container contact-inner"><div className="contact-copy"><SectionLabel index="07">Contact</SectionLabel><h2 id="contact-title">Bring the hard<br /><em>workflow.</em></h2><p>Have a product that needs dependable systems, a messy integration, or a clearer path from business rule to interface? Let’s talk about what the work actually needs.</p><a className="contact-email" href={`mailto:${portfolioData.email}`}>{portfolioData.email}<ArrowUpRight size={18} /></a></div><div className="contact-panel"><div className="contact-panel-top"><span>START A CONVERSATION</span><Send size={18} /></div><div className="contact-lines"><a href={`mailto:${portfolioData.email}`}><Mail size={17} /><span>Email</span><b>{portfolioData.email}</b><ArrowUpRight size={16} /></a><a href={`tel:${portfolioData.phone.replace(/\s/g, "")}`}><Phone size={17} /><span>Phone</span><b>{portfolioData.phone}</b><ArrowUpRight size={16} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn</span><b>Connect professionally</b><ArrowUpRight size={16} /></a></div><div className="contact-panel-foot"><span>Usually replies within 1–2 working days</span><span className="signal-line signal-line-short" /></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><img src="/manus-storage/asmat-mark_9eb7981b.png" alt="" className="brand-mark" onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling?.classList.add("brand-mark-failed"); }} /><span className="brand-fallback-mark" aria-hidden="true">A<span>/</span></span><span>ASMAT ALI<span className="brand-dot">.</span></span></div><p>Software engineer building dependable systems for real-world businesses.</p><div className="footer-links"><a href="#top">Back to top <MoveUpRight size={14} /></a><a href="https://github.com" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a></div></div><div className="container footer-bottom"><span>© 2026 Asmat Ali. Portfolio system / 2026.</span><span>Signal Noir / Portfolio v1.0</span></div></footer>
    </div>
  );
}
