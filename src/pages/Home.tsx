import { Link } from 'react-router-dom';

import site from '../content/site.json';
export default function Home() {
  return <main id="top">
    <section className="hero section-wrap">
      <div className="hero-copy">
        <p className="availability"><span className="availability-dot" /> {site.location} <span className="dot-separator">/</span> Civil engineering</p>
        <h1>Engineering that<br /><em>stands up</em> to scrutiny.</h1>
        <p className="hero-intro">I’m Er. Nayan Kuikel, a civil engineer focused on structural work, construction quality and practical cost planning. I bring design intent closer to what gets built on site.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">Explore selected work <span aria-hidden="true">↘</span></a>
          <a className="text-link" href={'mailto:' + site.email}>Get in touch <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-facts">
          <div><strong>2024</strong><span>Field experience since</span></div>
          <div><strong>10+</strong><span>Projects contributed to</span></div>
          <div><strong>M.Eng.</strong><span>Structural engineering · candidate</span></div>
        </div>
      </div>
      <div className="hero-visual hero-profile">
        <img className="hero-profile-photo" src="/images/nayan-kuikel.jpeg" alt="Er. Nayan Kuikel in the Himalayas" fetchPriority="high" />
        <div className="profile-photo-label"><span>ER. NAYAN KUIKEL</span><span>KATHMANDU · NEPAL</span></div>
      </div>
      <div className="hero-index"><span>01</span><span>ENGINEERING / PEOPLE / PLACE</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="intro-band">
      <div className="section-wrap intro-grid"><p className="section-kicker">01 / APPROACH</p><div><h2>Good engineering is precise.<br /><span>Good delivery makes it practical.</span></h2><p className="body-copy">My work sits between drawings, quantities and the realities of a live construction site. I care about sound decisions, clear communication and quality that can be checked, not just claimed.</p></div></div>
    </section>

    <section id="projects" className="section-wrap projects-section">
      <div className="section-heading"><div><p className="section-kicker">02 / SELECTED WORK</p><h2>From plan<br />to <em>place.</em></h2></div><p className="heading-note">A selection of project types and responsibilities across residential construction, rehabilitation, estimating and site delivery.</p></div>
      <div className="project-list">{site.projects.map((project) => <article className="project-row" key={project.number}>
        <div className="project-number">{project.number}</div>
        <div className="project-image">{project.image ? <img src={project.image} alt={project.alt} onError={(e) => { e.currentTarget.style.display = 'none'; }} /> : null}<span className="image-placeholder"><span>NK / SITE RECORD</span><span>{project.number}</span></span></div>
        <div className="project-copy"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.detail}</p><span className="project-note">Project summary · Representative experience</span></div>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </article>)}</div>
      <p className="disclaimer">Project summaries describe work areas and responsibilities; imagery and detailed case studies can be added when approved project material is available.</p>
    </section>

    <section id="experience" className="experience-section"><div className="section-wrap experience-grid">
      <div className="experience-heading"><p className="section-kicker">03 / EXPERIENCE</p><h2>On site.<br /><em>In detail.</em></h2><p className="body-copy">A practical foundation in inspections, estimating and public-sector site engineering.</p></div>
      <div className="timeline">{site.experience.map((item) => <article className="timeline-item" key={item.role}><p className="timeline-date">{item.dates}</p><div><h3>{item.role}</h3><p className="timeline-org">{item.org}</p><p className="timeline-detail">{item.detail}</p></div></article>)}</div>
    </div></section>

    <section id="about" className="section-wrap about-section"><div className="about-top"><p className="section-kicker">04 / ABOUT NAYAN</p><p className="about-statement">I’m a civil engineer and structural engineering postgraduate candidate, based in Kathmandu. I work across site supervision, structural coordination and construction estimating, with a focus on dependable, code-aware delivery.</p></div>
      <div className="skills-layout"><h2>Areas of<br /><em>practice.</em></h2><div className="skill-list">{site.skills.map((skill, i) => <span key={skill}><small>{String(i + 1).padStart(2, '0')}</small>{skill}</span>)}</div></div>
    </section>

    <section className="tools-band"><div className="section-wrap tools-callout"><div><p className="section-kicker">05 / FIELD UTILITIES</p><h2>Useful tools.<br /><em>Clear answers.</em></h2><p className="body-copy">Quick calculations for common civil engineering workflows, including Nepali land units, triangle area and concrete quantities.</p></div><Link className="button button-light" to="/tools">Open engineering tools <span aria-hidden="true">↗</span></Link></div></section>

    <section id="contact" className="section-wrap contact-section"><p className="section-kicker">06 / CONTACT</p><div className="contact-grid"><h2>Let’s talk<br />about the <em>work.</em></h2><div className="contact-details"><p>For engineering opportunities, project coordination or professional enquiries, you can reach me directly.</p><a className="email-link" href={'mailto:' + site.email}>{site.email} <span>↗</span></a><a href={'tel:' + site.phone.replace(/[^+\d]/g, '')}>{site.phone}</a><div className="social-links">{site.socialLinks.map((social) => <a key={social.label} href={social.url} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div></div></div></section>
  </main>;
}
