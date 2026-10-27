import { Link } from 'react-router-dom';

const projects = [
  { number: '01', title: 'Modern 2.5-storey residence', type: 'Residential construction', detail: 'RCC structural coordination, drawing review, seismic-code awareness and MEP coordination.', image: '/images/projects/project-01.jpg', alt: 'Residential building construction site' },
  { number: '02', title: 'Structural rehabilitation & interior renewal', type: 'Renovation and retrofitting', detail: 'Condition review, identification of structural concerns, retrofit coordination and practical space improvements.', image: '/images/projects/project-02.jpg', alt: 'Building rehabilitation work' },
  { number: '03', title: 'Quantity surveying & cost planning', type: 'Cost engineering', detail: 'Quantity take-offs, bills of quantities, material schedules and labour-informed cost estimates.', image: '', alt: '' },
  { number: '04', title: 'Site supervision & quality control', type: 'Project execution', detail: 'Daily progress tracking, subcontractor coordination, reinforcement checks and concrete-work quality observations.', image: '', alt: '' }
];

const experience = [
  { dates: 'Dec 2024 — Present', role: 'Site Engineer · Contract', org: 'Department of Urban Development and Building Construction (DUDBC)', detail: 'Technical supervision, quality control, site coordination and compliance with applicable Nepal Building Code and DUDBC requirements.' },
  { dates: 'Nov 2024 — Dec 2025', role: 'Estimator', org: 'SkillSewa', detail: 'Construction quantity take-offs, cost estimation and project documentation.' },
  { dates: 'Sep 2024 — Nov 2024', role: 'Inspection Engineer', org: 'SkillSewa', detail: 'Property inspection, site observations and clear technical reporting.' }
];

const skills = ['Structural engineering', 'Structural analysis & design', 'Site supervision', 'Quantity surveying & BoQ', 'Cost estimation', 'Quality control', 'Seismic retrofitting', 'Forensic engineering', 'Building renovation', 'AutoCAD', 'ETABS', 'NBC / DUDBC compliance', 'Material take-offs', 'Stakeholder coordination'];

export default function Home() {
  return <main>
    <section className="hero section-wrap">
      <div className="hero-copy">
        <p className="availability"><span className="availability-dot" /> Kathmandu, Nepal <span className="dot-separator">/</span> Civil engineering</p>
        <h1>Engineering that<br /><em>stands up</em> to scrutiny.</h1>
        <p className="hero-intro">I’m Er. Nayan Kuikel, a civil engineer focused on structural work, construction quality and practical cost planning. I bring design intent closer to what gets built on site.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">Explore selected work <span aria-hidden="true">↘</span></a>
          <a className="text-link" href="mailto:er.nayankuikel@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-facts">
          <div><strong>2024</strong><span>Field experience since</span></div>
          <div><strong>10+</strong><span>Projects contributed to</span></div>
          <div><strong>M.Eng.</strong><span>Structural engineering · candidate</span></div>
        </div>
      </div>
      <div className="hero-visual" role="img" aria-label="Architectural linework inspired by a structural drawing">
        <div className="drawing-top"><span>FIELD NOTES / 01</span><span>KTM · NP</span></div>
        <svg className="structure-drawing" viewBox="0 0 520 580" fill="none" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="1.15">
            <path d="M75 482V167L260 66L445 167V482M75 167H445M75 272H445M75 377H445M168 116V482M260 66V482M352 116V482"/>
            <path d="M75 167L168 116L260 167L352 116L445 167M75 272L168 221L260 272L352 221L445 272M75 377L168 326L260 377L352 326L445 377"/>
            <path d="M58 482H463M58 495H463M61 482V495M460 482V495M75 152H445M75 146V158M445 146V158"/>
            <path d="M92 183V255M185 183V255M277 183V255M369 183V255M92 288V360M185 288V360M277 288V360M369 288V360M92 393V465M185 393V465M277 393V465M369 393V465" strokeDasharray="4 6" opacity=".7"/>
          </g>
          <g stroke="#C46A45" strokeWidth="2"><path d="M75 272H445M260 66V482"/><circle cx="260" cy="272" r="5" fill="#C46A45"/></g>
          <g fill="currentColor" fontFamily="monospace" fontSize="10" opacity=".8"><text x="75" y="137">GRID A</text><text x="225" y="52">SECTION B-B</text><text x="75" y="516">STRUCTURAL STUDY</text><text x="374" y="516">N° 001</text><text x="25" y="280" transform="rotate(-90 25 280)">LEVEL +3.20</text></g>
        </svg>
        <div className="drawing-caption"><span>STRUCTURE / DETAIL</span><span>01 — 04</span></div>
      </div>
      <div className="hero-index"><span>01</span><span>ENGINEERING / PEOPLE / PLACE</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="intro-band">
      <div className="section-wrap intro-grid"><p className="section-kicker">01 / APPROACH</p><div><h2>Good engineering is precise.<br /><span>Good delivery makes it practical.</span></h2><p className="body-copy">My work sits between drawings, quantities and the realities of a live construction site. I care about sound decisions, clear communication and quality that can be checked, not just claimed.</p></div></div>
    </section>

    <section id="projects" className="section-wrap projects-section">
      <div className="section-heading"><div><p className="section-kicker">02 / SELECTED WORK</p><h2>From plan<br />to <em>place.</em></h2></div><p className="heading-note">A selection of project types and responsibilities across residential construction, rehabilitation, estimating and site delivery.</p></div>
      <div className="project-list">{projects.map((project) => <article className="project-row" key={project.number}>
        <div className="project-number">{project.number}</div>
        <div className="project-image">{project.image ? <img src={project.image} alt={project.alt} onError={(e) => { e.currentTarget.style.display = 'none'; }} /> : null}<span className="image-placeholder"><span>NK / SITE RECORD</span><span>{project.number}</span></span></div>
        <div className="project-copy"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.detail}</p><span className="project-note">Project summary · Representative experience</span></div>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </article>)}</div>
      <p className="disclaimer">Project summaries describe work areas and responsibilities; imagery and detailed case studies can be added when approved project material is available.</p>
    </section>

    <section id="experience" className="experience-section"><div className="section-wrap experience-grid">
      <div className="experience-heading"><p className="section-kicker">03 / EXPERIENCE</p><h2>On site.<br /><em>In detail.</em></h2><p className="body-copy">A practical foundation in inspections, estimating and public-sector site engineering.</p></div>
      <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><p className="timeline-date">{item.dates}</p><div><h3>{item.role}</h3><p className="timeline-org">{item.org}</p><p className="timeline-detail">{item.detail}</p></div></article>)}</div>
    </div></section>

    <section id="about" className="section-wrap about-section"><div className="about-top"><p className="section-kicker">04 / ABOUT NAYAN</p><p className="about-statement">I’m a civil engineer and structural engineering postgraduate candidate, based in Kathmandu. I work across site supervision, structural coordination and construction estimating, with a focus on dependable, code-aware delivery.</p></div>
      <div className="skills-layout"><h2>Areas of<br /><em>practice.</em></h2><div className="skill-list">{skills.map((skill, i) => <span key={skill}><small>{String(i + 1).padStart(2, '0')}</small>{skill}</span>)}</div></div>
    </section>

    <section className="tools-band"><div className="section-wrap tools-callout"><div><p className="section-kicker">05 / FIELD UTILITIES</p><h2>Useful tools.<br /><em>Clear answers.</em></h2><p className="body-copy">Quick calculations for common civil engineering workflows, including Nepali land units, triangle area and concrete quantities.</p></div><Link className="button button-light" to="/tools">Open engineering tools <span aria-hidden="true">↗</span></Link></div></section>

    <section id="contact" className="section-wrap contact-section"><p className="section-kicker">06 / CONTACT</p><div className="contact-grid"><h2>Let’s talk<br />about the <em>work.</em></h2><div className="contact-details"><p>For engineering opportunities, project coordination or professional enquiries, you can reach me directly.</p><a className="email-link" href="mailto:er.nayankuikel@gmail.com">er.nayankuikel@gmail.com <span>↗</span></a><a href="tel:+9779861969107">+977 986-196-9107</a><div className="social-links"><a href="https://www.linkedin.com/in/nayan-kuikel-379b43323/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.facebook.com/nayan.kuikel" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://wa.me/9779848506672" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div></div></section>
  </main>;
}
