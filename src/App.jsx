import React from "react";

function App() {
  const [theme, setTheme] = React.useState('dark');
  const [copySuccess, setCopySuccess] = React.useState('');

  const isDark = theme === 'dark';

  const sectionHeaderStyles = isDark ? "text-3xl mb-16 text-zinc-300 uppercase tracking-wider font-bold" : "text-3xl mb-16 text-zinc-700 uppercase tracking-wider font-bold";
  const projectTitleStyles = "text-2xl mb-2 font-semibold";
  const jobTitleStyles = "text-2xl mb-1 font-semibold";
  const techStackStyles = isDark ? "text-zinc-500 text-sm mb-6 font-mono" : "text-zinc-600 text-sm mb-6 font-mono";
  const linkStyles = isDark ? "text-zinc-400 hover:text-zinc-100 transition-colors" : "text-zinc-600 hover:text-zinc-900 transition-colors";
  const buttonStyles = isDark ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-100 px-6 py-3 transition-all duration-200" : "bg-zinc-200 hover:bg-zinc-300 text-zinc-700 hover:text-zinc-900 px-6 py-3 transition-all duration-200";
  const timeStyles = isDark ? "text-sm text-zinc-500" : "text-sm text-zinc-600";
  const skillTagStyles = isDark ? "bg-zinc-800 px-4 py-2 text-sm text-zinc-300" : "bg-zinc-200 px-4 py-2 text-sm text-zinc-700";
  const gridLayoutStyles = "grid grid-cols-4 gap-8";
  const sectionPaddingStyles = isDark ? "py-24 border-t border-zinc-800" : "py-24 border-t border-zinc-200";
  const spaceGroteskFont = {fontFamily: 'Space Grotesk, sans-serif'};
  const jetBrainsFont = {fontFamily: 'JetBrains Mono, monospace'};

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('richardlechko@gmail.com');
    setCopySuccess('Email copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  return (
    <div className={isDark ? "bg-zinc-900 text-zinc-100 min-h-screen" : "bg-white text-zinc-900 min-h-screen"} style={{fontFamily: 'Inter, system-ui, sans-serif', scrollBehavior: 'smooth'}}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Manrope:wght@200..800&family=Quicksand:wght@300..700&family=Space+Grotesk:wght@300..700&display=swap');
         html { scroll-behavior: smooth; }`}
      </style>
      <header className={isDark ? "px-8 py-8 bg-zinc-900/95 backdrop-blur-sm sticky top-0 z-10 border-b border-zinc-800" : "px-8 py-8 bg-white/95 backdrop-blur-sm sticky top-0 z-10 border-b border-zinc-200"}>
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-lg tracking-tight" style={spaceGroteskFont}>Richard Lechko</h1>
          <div className="flex items-center gap-8">
            <ul className="flex gap-12 text-sm text-zinc-400">
              <li>
                <a href="#experience" className={linkStyles}>Experience</a>
              </li>
              <li>
                <a href="#projects" className={linkStyles}>Projects</a>
              </li>
              <li>
                <a href="#education" className={linkStyles}>Education</a>
              </li>
              <li>
                <a href="#contact" className={linkStyles}>Contact</a>
              </li>
            </ul>
            <button 
              onClick={toggleTheme}
              className={isDark ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 py-2 rounded transition-colors cursor-pointer" : "bg-zinc-200 hover:bg-zinc-300 text-zinc-700 px-4 py-2 rounded transition-colors cursor-pointer"}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-8">
        <section id="hero" className="py-24">
          <h1 className="text-7xl font-light mb-8 tracking-tight" style={spaceGroteskFont}>Hi, I'm Richard Lechko</h1>
          <p className={isDark ? "text-2xl text-zinc-300 mb-4" : "text-2xl text-zinc-700 mb-4"}>Software Engineer & Frontend Developer</p>
          <p className={isDark ? "text-lg text-zinc-500 mb-8" : "text-lg text-zinc-600 mb-8"}>Orland Park, IL</p>
          <p className={isDark ? "text-lg text-zinc-300 mb-12 max-w-2xl" : "text-lg text-zinc-700 mb-12 max-w-2xl"}>
            Software Engineering student at DePaul University, focusing on
            creating efficient web applications and modern user experiences.
          </p>
          <a href="#contact" className={isDark ? "text-zinc-100 border-b border-zinc-100 pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors" : "text-zinc-900 border-b border-zinc-900 pb-1 hover:text-zinc-700 hover:border-zinc-700 transition-colors"}>Get In Touch</a>
        </section>

        <section id="experience" className={sectionPaddingStyles}>
          <h2 className={sectionHeaderStyles} style={spaceGroteskFont}>Experience</h2>

          <div className="space-y-16">
            <article className={gridLayoutStyles}>
              <div className={timeStyles}>
                Nov 2024 – Present
              </div>
              <div className="col-span-3">
                <header className="mb-4">
                  <h3 className={jobTitleStyles} style={spaceGroteskFont}>IT Intern</h3>
                  <p className={isDark ? "text-zinc-400" : "text-zinc-600"}>Hendrickson | Woodridge, IL</p>
                </header>
                <ul className={isDark ? "text-zinc-300 space-y-2" : "text-zinc-700 space-y-2"}>
                  <li>
                    Assisted in gathering, processing, and reporting data to
                    determine operational metrics and KPIs
                  </li>
                  <li>
                    Created dashboards using PowerBI for business process owners and
                    support data validation within the ERP data hub
                  </li>
                </ul>
              </div>
            </article>

            <article className={gridLayoutStyles}>
              <div className={timeStyles}>
                Dec 2022 – Present
              </div>
              <div className="col-span-3">
                <header className="mb-4">
                  <h3 className={jobTitleStyles} style={spaceGroteskFont}>Frontend Developer</h3>
                  <p className={isDark ? "text-zinc-400" : "text-zinc-600"}>RL IT Firm | Orland Park, IL</p>
                </header>
                <ul className={isDark ? "text-zinc-300 space-y-2" : "text-zinc-700 space-y-2"}>
                  <li>
                    Developed a full-stack application for a local business,
                    enhancing their online presence and functionality
                  </li>
                  <li>
                    Collaborated with the client to gather requirements and ensure
                    the application met their needs
                  </li>
                </ul>
              </div>
            </article>

            <article className={gridLayoutStyles}>
              <div className={timeStyles}>
                May 2022 – Nov 2024
              </div>
              <div className="col-span-3">
                <header className="mb-4">
                  <h3 className={jobTitleStyles} style={spaceGroteskFont}>Bakery Clerk</h3>
                  <p className={isDark ? "text-zinc-400" : "text-zinc-600"}>Mariano's | Orland Park, IL</p>
                </header>
                <ul className={isDark ? "text-zinc-300 space-y-2" : "text-zinc-700 space-y-2"}>
                  <li>
                    Managed 28-32 hours of work per week during the school year,
                    demonstrating time management and dedication
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className={sectionPaddingStyles}>
          <h2 className={sectionHeaderStyles} style={spaceGroteskFont}>Projects</h2>

          <div className="space-y-16">
            <article className={gridLayoutStyles}>
              <div className={timeStyles}>
                July 2024 – Present
              </div>
              <div className="col-span-3">
                <header className="mb-4">
                  <h3 className={projectTitleStyles} style={spaceGroteskFont}>MMA Scheduler</h3>
                </header>
                <p className={isDark ? "text-zinc-300 mb-4" : "text-zinc-700 mb-4"}>
                  Built a comprehensive platform for scheduling and tracking MMA
                  events, including fighter details, match dates, and categories.
                  Aggregates and displays real-time data through web scraping,
                  enabling users to stay updated with upcoming fights.
                </p>
                <p className={techStackStyles} style={jetBrainsFont}>Go, Astro, SCSS, Supabase, TypeScript, Docker</p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className={linkStyles}>Live Demo</a>
                  <a href="#" className={linkStyles}>GitHub</a>
                </div>
              </div>
            </article>

            <article className={gridLayoutStyles}>
              <div className={timeStyles}>
                October 2024
              </div>
              <div className="col-span-3">
                <header className="mb-4">
                  <h3 className={projectTitleStyles} style={spaceGroteskFont}>Northern Trust Hackathon (3rd Place)</h3>
                </header>
                <p className={isDark ? "text-zinc-300 mb-4" : "text-zinc-700 mb-4"}>
                  As a group built a site with a currency converter, portfolio
                  simulator, and exchange-rate predictor using an LSTM model.
                </p>
                <p className={techStackStyles} style={jetBrainsFont}>React, Tailwind, Node.js, Express, Vercel, Python</p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className={linkStyles}>Live Demo</a>
                  <a href="#" className={linkStyles}>GitHub</a>
                </div>
              </div>
            </article>

            <article className={gridLayoutStyles}>
              <div className={timeStyles}>
                June 2024 – Present
              </div>
              <div className="col-span-3">
                <header className="mb-4">
                  <h3 className={projectTitleStyles} style={spaceGroteskFont}>Freedom Butchers Project</h3>
                </header>
                <p className={isDark ? "text-zinc-300 mb-4" : "text-zinc-700 mb-4"}>
                  Developed a full-stack application for a local business, enhancing
                  their online presence with responsive design.
                </p>
                <p className={techStackStyles} style={jetBrainsFont}>Astro, Tailwind, ShadCN, Figma, Node.js, Express, Vercel</p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className={linkStyles}>Live Demo</a>
                  <a href="#" className={linkStyles}>GitHub</a>
                </div>
              </div>
            </article>

            <article className={gridLayoutStyles}>
              <div className={timeStyles}>
                April 2025
              </div>
              <div className="col-span-3">
                <header className="mb-4">
                  <h3 className={projectTitleStyles} style={spaceGroteskFont}>ScarletHacks 2025 Hackathon</h3>
                </header>
                <p className={isDark ? "text-zinc-300 mb-4" : "text-zinc-700 mb-4"}>
                  Designed and deployed a zero food waste marketplace connecting
                  consumers with surplus food from local businesses.
                </p>
                <p className={techStackStyles} style={jetBrainsFont}>Next.js, Supabase, Tailwind, Anthropic AI, Node.js</p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className={linkStyles}>Live Demo</a>
                  <a href="#" className={linkStyles}>GitHub</a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="education" className={sectionPaddingStyles}>
          <h2 className={sectionHeaderStyles} style={spaceGroteskFont}>Education</h2>

          <article className={gridLayoutStyles}>
            <div className={timeStyles}>
              Sep 2022 – Jun 2026
            </div>
            <div className="col-span-3">
              <h3 className={jobTitleStyles} style={spaceGroteskFont}>Bachelor of Science in Information Technology</h3>
              <p className={isDark ? "text-zinc-400" : "text-zinc-600"}>DePaul University | Chicago, IL</p>
            </div>
          </article>
        </section>

        <section id="skills" className={sectionPaddingStyles}>
          <h2 className={sectionHeaderStyles} style={spaceGroteskFont}>Technical Skills</h2>

          <div className="grid grid-cols-2 gap-x-24 gap-y-12">
            <div>
              <h3 className={isDark ? "text-lg mb-8 text-zinc-300" : "text-lg mb-8 text-zinc-700"}>Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <span className={skillTagStyles}>HTML & CSS</span>
                <span className={skillTagStyles}>JavaScript</span>
                <span className={skillTagStyles}>TypeScript</span>
                <span className={skillTagStyles}>React</span>
                <span className={skillTagStyles}>Next.js</span>
                <span className={skillTagStyles}>Tailwind CSS</span>
                <span className={skillTagStyles}>SCSS</span>
                <span className={skillTagStyles}>Astro</span>
                <span className={skillTagStyles}>Figma</span>
              </div>
            </div>

            <div>
              <h3 className={isDark ? "text-lg mb-8 text-zinc-300" : "text-lg mb-8 text-zinc-700"}>Backend</h3>
              <div className="flex flex-wrap gap-3">
                <span className={skillTagStyles}>Node.js</span>
                <span className={skillTagStyles}>Express.js</span>
                <span className={skillTagStyles}>Python</span>
                <span className={skillTagStyles}>Flask</span>
                <span className={skillTagStyles}>Go</span>
                <span className={skillTagStyles}>C#</span>
                <span className={skillTagStyles}>PostgreSQL</span>
                <span className={skillTagStyles}>MySQL</span>
              </div>
            </div>

            <div className="col-span-2">
              <h3 className={isDark ? "text-lg mb-8 text-zinc-300" : "text-lg mb-8 text-zinc-700"}>Cloud & Tools</h3>
              <div className="flex flex-wrap gap-3">
                <span className={skillTagStyles}>AWS EC2</span>
                <span className={skillTagStyles}>AWS Amplify</span>
                <span className={skillTagStyles}>AWS S3</span>
                <span className={skillTagStyles}>AWS Route 53</span>
                <span className={skillTagStyles}>Vercel</span>
                <span className={skillTagStyles}>Docker</span>
                <span className={skillTagStyles}>Git</span>
                <span className={skillTagStyles}>Caddy</span>
                <span className={skillTagStyles}>Stripe</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={sectionPaddingStyles}>
          <h2 className={sectionHeaderStyles} style={spaceGroteskFont}>Contact</h2>
          
          <div className="max-w-2xl">
            <p className={isDark ? "text-zinc-300 mb-12 text-lg whitespace-nowrap" : "text-zinc-700 mb-12 text-lg whitespace-nowrap"}>
              Let's connect! I'm always open to discussing new opportunities and interesting projects.
            </p>
            <address className="mb-12 relative">
              <button 
                onClick={copyEmail}
                className={isDark ? "text-zinc-100 text-lg hover:text-zinc-300 transition-colors cursor-pointer flex items-center gap-2" : "text-zinc-900 text-lg hover:text-zinc-700 transition-colors cursor-pointer flex items-center gap-2"}
                title="Click to copy email"
              >
                📋 richardlechko@gmail.com
              </button>
              {copySuccess && (
                <span className="absolute left-0 -bottom-6 text-green-400 text-sm">
                  {copySuccess}
                </span>
              )}
            </address>
            <div className="flex gap-8">
              <a href="https://linkedin.com/in/richardlechko" target="_blank" className={buttonStyles}>
                LinkedIn
              </a>
              <a href="https://github.com/richardlechko" target="_blank" className={buttonStyles}>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={isDark ? "px-8 py-16 border-t border-zinc-800" : "px-8 py-16 border-t border-zinc-200"}>
        <div className="max-w-7xl mx-auto">
          <p className={isDark ? "text-zinc-500 text-sm" : "text-zinc-600 text-sm"}>&copy; 2025 Richard Lechko</p>
        </div>
      </footer>
    </div>
  );
}

export default App;