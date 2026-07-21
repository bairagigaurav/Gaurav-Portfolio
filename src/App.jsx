
import { FileText, FolderOpen } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import './App.css'

const stats = [
  { value: '9+', label: 'Years of UI experience' },
  { value: '200+', label: 'Project delivered' },
  { value: '100%', label: 'Usability obsessed' },
]

const skills = ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Accessibility', 'Design Systems', 'Figma', 'Performance Optimization']

const highlights = ['Accessible UI engineering', 'Design system implementation', 'Scalable frontend architecture', 'Cross-functional collaboration']

const contactDetails = [
  { label: 'Email', value: 'bairagig157@gmail.com', href: 'mailto:bairagig157@gmail.com' },
  { label: 'Phone', value: '+91 9907297376', href: 'tel:+919907297376' },
  { label: 'Location', value: 'Ratlam, India', href: 'https://maps.google.com/?q=Mumbai%2C%20India' },
]

const experience = [
  {
    title: 'Senior UI Developer',
    company: 'GAMMASTACK • Indore',
    period: 'Jan 2021 – May 2026',
    description: 'Developed 25+ responsive dashboards and websites using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Ensured 100% cross-browser compatibility across Chrome, Safari, Firefox, and Edge, increasing user retention by 20%. Integrated 20+ REST APIs and optimized performance, reducing average page load time from 5.2s to 2.1s.',
  },
  {
    title: 'UI/UX Designer',
    company: 'CHAPTER247',
    period: 'Jan 2018 – May 2021',
    description: 'Built responsive dashboards and web experiences with a strong focus on usability, visual consistency, and clean interaction design. Contributed to product interfaces that balanced business goals with a polished user experience.',
  },
  {
    title: 'UI/UX Designer',
    company: 'Exactink',
    period: 'Jan 2017 – May 2018',
    description: 'Created 30+ responsive landing pages and e-commerce UIs using HTML5, CSS3, jQuery, and Bootstrap. Implemented SEO best practices and translated PSD/Figma designs into pixel-perfect interfaces with a high design match rate.',
  },
]

const projects = [
  {
    name: 'Clutch',
    summary: 'A polished, high-conversion product experience focused on clarity, usability, and modern UI patterns.',
    link: 'https://www.clutch.app/en',
  },
  {
    name: 'Rollify',
    summary: 'A dynamic web experience designed to present product value clearly through engaging and responsive interfaces.',
    link: 'https://rollify.com/',
  },
  {
    name: 'Fansbets',
    summary: 'A feature-rich platform experience combining product storytelling, interaction design, and performance-focused UI.',
    link: 'https://fansbets.com/',
  },
]

const AnimatedStat = ({ value, label, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const numericValue = Number(value.replace(/\D/g, ''))
    const duration = 1200
    const startTime = performance.now()

    const tick = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(numericValue * eased))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value])

  const suffix = value.replace(/\d/g, '')

  return (
    <motion.div
      className="stat-card"
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <strong>{displayValue}{suffix}</strong>
      <span>{label}</span>
    </motion.div>
  )
}

const App = () => {
  return (
    <motion.div
      className="portfolio-app"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div className="hero__content" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">UI Developer • UI/UX Designer • Web Designer </p>
          <h1>Building high-performance, accessible, SEO-optimized, and scalable digital experiences with modern frontend technologies and AI-powered development.</h1>
          <p>
           I'm Gourav Bairagi, a Senior UI Developer with <b>9+ years</b>  of experience designing and developing responsive, pixel-perfect web applications across industries including iGaming, Sportsbook, Casino, Lottery, and FinTech.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              <FolderOpen size={18} aria-hidden="true" /> View Projects
            </a>
            <a href="/resume.pdf" className="btn btn--secondary" target="_blank" rel="noreferrer">
              <FileText size={18} aria-hidden="true" /> Download Resume
            </a>
          </div>
          <ul className="hero__highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="hero__card" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <p className="hero__card-label">About Me</p>
          <h2>Bridging design, usability, and performance in every build.</h2>
          <p>
            I specialize in transforming complex UI/UX designs into fast, accessible, and user-friendly interfaces using React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, and Material UI. My focus is on building reusable component libraries, scalable design systems, and responsive experiences that perform seamlessly across browsers and devices.
          </p>
          <div className="hero__card-meta">
            <span>React</span>
            <span>Accessibility</span>
            <span>Design Systems</span>
          </div>
        </motion.div>
      </motion.header>

      <motion.section
        className="stats"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat, index) => (
          <AnimatedStat key={stat.label} value={stat.value} label={stat.label} index={index} />
        ))}
      </motion.section>

      <motion.section className="section" id="skills" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <div className="section__heading">
          <p className="eyebrow">Core Skills</p>
          <h3>What I bring to the table</h3>
        </div>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <motion.span className="skill-pill" key={skill} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05 }}>{skill}</motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section className="section" id="experience" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <div className="section__heading">
          <p className="eyebrow">Experience</p>
          <h3>Career journey</h3>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article className="timeline__item" key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <h4>{item.title}</h4>
              <p className="timeline__meta">{item.company} • {item.period}</p>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="section" id="projects" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <div className="section__heading">
          <p className="eyebrow">Featured Work</p>
          <h3>Projects that showcase my approach</h3>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article className="project-card" key={project.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <h4>{project.name}</h4>
              <p>{project.summary}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                View Live Project
              </a>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="section contact" id="contact" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <p className="eyebrow">Let’s build something great</p>
        <h3>Open to product, UI, and frontend opportunities across teams that value thoughtful design.</h3>
        <div className="contact__details">
          {contactDetails.map((item) => (
            <a key={item.label} href={item.href} className="contact__item" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
        <div className="hero__actions contact__actions">
          <a href="mailto:bairagig157@gmail.com" className="btn btn--primary">Say Hello</a>
          <a href="/resume.pdf" className="btn btn--secondary" target="_blank" rel="noreferrer">
            <FileText size={18} aria-hidden="true" /> Download Resume
          </a>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default App

