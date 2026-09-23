import React, { useState } from 'react';

export default function Portfolio() {
  // oxlint-disable-next-line no-empty-pattern
  const [] = useState(false);

  const myPhotoUrl = "src/assets/hero-profile.jpg"; 

  const projects = [
    {
      title: "Medical Booking App",
      category: "Healthcare Web Application",
      description: "A comprehensive medical booking platform achieving 100% responsive layout compatibility. Engineered clean component structures and interactive booking workflows, boosting user retention by 35% and load speeds (95%+ efficiency).",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs"],
      github: "https://github.com/rehababdelaziz011-ship-it/medical-booking-app",
      image: "\Screenshot 2026-09-23 002204.png" 
    },
    {
      title: "Tech Nova Project",
      category: "Full-Stack Collaboration Project",
      description: "Collaborated to build a robust full-stack web application, taking absolute ownership of frontend implementation and UI design. Integrated complex REST APIs resulting in a 30% reduction in page load latency.",
      tags: ["JavaScript", "HTML5", "CSS3", "API Integration"],
      github: "https://github.com/rehababdelaziz011-ship-it",
      image: "\Screenshot 2026-09-22 025010.png" // 
    },
    {
      title: "E-Commerce Furniture Store",
      category: "Web Commerce Portfolio Project",
      description: "Designed and deployed a fully responsive e-commerce web interface featuring advanced product catalogs, real-time dynamic filtering, and interactive image galleries with 100% cross-browser compatibility.",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/rehababdelaziz011-ship-it",
      image: "\Screenshot 2026-09-21 024940.png" 
    }
  ];

  const skills = [
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "React.js & Router", level: "Advanced" },
    { name: "Tailwind CSS & Bootstrap", level: "Advanced" },
    { name: "HTML5 & CSS3 / DOM", level: "Expert" },
    { name: "REST APIs Integration", level: "Advanced" },
    { name: "Git, GitHub & Version Control", level: "Advanced" },
    { name: "C++ & SQL Basics", level: "Intermediate" },
    { name: "Microsoft Office Suite", level: "Proficient" }
  ];

  return (
    <div style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', backgroundColor: '#0b0f19', color: '#f1f5f9', minHeight: '100vh', margin: 0, padding: 0, lineHeight: 1.7 }}>
      
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: 'rgba(11, 15, 25, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', height: '75px', display: 'flex', alignItems: 'center', justifyBetween: 'space-between' }}>
          <span style={{ fontWeight: '800', fontSize: '1.25rem', background: 'linear-gradient(to right, #60a5fa, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '0.5px' }}>
            RAHAB.DEV
          </span>
          
          <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.95rem', fontWeight: '500' }}>
            <a href="#about" style={{ textDecoration: 'none', color: '#94a3b8' }}>About</a>
            <a href="#projects" style={{ textDecoration: 'none', color: '#94a3b8' }}>Projects</a>
            <a href="#skills" style={{ textDecoration: 'none', color: '#94a3b8' }}>Skills</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#94a3b8' }}>Contact</a>
          </div>
        </div>
      </nav>

      <header style={{ padding: '160px 32px 90px 32px', textAlign: 'center', background: 'radial-gradient(circle at 50% 20%, rgba(30, 58, 138, 0.25) 0%, rgba(11, 15, 25, 1) 75%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ position: 'relative', marginBottom: '25px' }}>
            <img 
              src={myPhotoUrl} 
              alt="Rahab Abdelaziz" 
              style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #38bdf8', boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)' }}
            />
          </div>

          <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', fontSize: '0.8rem', fontWeight: '700', padding: '6px 18px', borderRadius: '30px', border: '1px solid rgba(56, 189, 248, 0.2)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
            Frontend Web Developer
          </div>
          
          <h1 style={{ fontSize: '3.2rem', fontWeight: '900', color: '#ffffff', marginBottom: '15px', letterSpacing: '-1px' }}>
            Hi, I'm <span style={{ background: 'linear-gradient(to right, #60a5fa, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rahab Abdelaziz</span>
          </h1>
          
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', marginBottom: '35px', lineHeight: '1.8', maxWidth: '650px' }}>
            Technology student at Fayoum Technological University specializing in building high-performance, responsive web applications using React.js and modern frontend tools.
          </p>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#projects" style={{ backgroundColor: '#2563eb', color: 'white', padding: '12px 30px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.4)' }}>
              Explore Projects
            </a>
            <a href="#contact" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'white', padding: '12px 30px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" style={{ padding: '90px 32px', maxWidth: '850px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', textAlign: 'center', marginBottom: '40px', color: '#ffffff' }}>
          <span style={{ color: '#38bdf8' }}>01.</span> About Me
        </h2>
        <div style={{ backgroundColor: '#131c2e', padding: '35px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.06)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.9' }}>
          <p style={{ marginBottom: '20px' }}>
            I am a dedicated and results-driven Frontend Web Developer and technology student at <strong>Fayoum Technological University</strong>. I have hands-on experience building dynamic, user-centric web applications with clean component structures and optimized performance.
          </p>
          <p>
            My technical toolkit covers <strong>React.js, JavaScript (ES6+), Tailwind CSS, Bootstrap, HTML5, CSS3, and REST APIs integration</strong>. I am passionate about writing clean code, solving complex UI challenges, and turning ideas into seamless digital experiences.
          </p>
        </div>
      </section>

      <section id="projects" style={{ padding: '90px 32px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', textAlign: 'center', marginBottom: '50px', color: '#ffffff' }}>
          <span style={{ color: '#38bdf8' }}>02.</span> Featured Projects
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ backgroundColor: '#131c2e', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', backgroundColor: '#0b0f19' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1.5px' }}>{project.category}</span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff', marginTop: '8px', marginBottom: '12px' }}>{project.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '20px', lineHeight: '1.6' }}>{project.description}</p>
                </div>
                
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', fontSize: '0.75rem', padding: '5px 10px', borderRadius: '6px', fontWeight: '600' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', textDecoration: 'none' }}
                  >
                    🐙 View on GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '90px 32px', maxWidth: '850px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', textAlign: 'center', marginBottom: '40px', color: '#ffffff' }}>
          <span style={{ color: '#38bdf8' }}>03.</span> Technical Skills
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '16px' }}>
          {skills.map((skill, index) => (
            <div key={index} style={{ backgroundColor: '#131c2e', padding: '18px 22px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: '600', color: '#e2e8f0', fontSize: '0.95rem' }}>
                ✨ {skill.name}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '90px 32px 100px 32px', maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '15px', color: '#ffffff' }}>
          <span style={{ color: '#38bdf8' }}>04.</span> Let's Connect
        </h2>
        <p style={{ color: '#94a3b8', marginBottom: '35px', fontSize: '1rem' }}>
          I'm always open to discussing new projects, creative ideas, or frontend development opportunities.
        </p>
        
        <div style={{ backgroundColor: '#131c2e', padding: '35px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', color: '#cbd5e1', fontSize: '0.95rem' }}>
            <a href="mailto:rehababdelaziz011@gmail.com" style={{ textDecoration: 'none', color: '#cbd5e1' }}>
              ✉️ rehababdelaziz011@gmail.com
            </a>
            <span style={{ color: '#475569' }}>|</span>
            <div>📞 01062588326</div>
            <span style={{ color: '#475569' }}>|</span>
            <div>📍 Fayoum, Egypt</div>
          </div>

          <div style={{ marginTop: '30px', paddingTop: '25px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="https://www.linkedin.com/in/rehab-abd-el-aziz-021022391" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              LinkedIn Profile
            </a>
            <a href="https://github.com/rehababdelaziz011-ship-it" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#2563eb', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#080b12', color: '#64748b', padding: '35px 32px', textAlign: 'center', fontSize: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <p>© 2026 Rahab Abdelaziz. Designed & Built with React.js & Passion.</p>
      </footer>

    </div>
  );
}