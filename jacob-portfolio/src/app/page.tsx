import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold gradient-text">
              Jacob Schenck
            </Link>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#education" className="hover:text-primary transition-colors">Education</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-primary font-medium mb-2">Hello, I&apos;m</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Henry Jacob <span className="gradient-text">Schenck</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary mb-6">
              Software Developer & Computer Scientist
            </h2>
            <p className="text-lg text-secondary mb-8 max-w-lg">
              Recent Master&apos;s graduate in Computer Science from Tulane University 
              with a passion for software development, avionics systems, and competitive programming.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#experience" 
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-medium transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full border-4 border-primary/30 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-secondary mb-6">
                I&apos;m a dedicated computer scientist with a strong foundation in both theoretical 
                and practical aspects of computing. Having earned my Bachelor&apos;s degree from 
                The University of Alabama and recently completing my Master&apos;s degree from 
                Tulane University, I bring a unique blend of academic excellence and hands-on experience.
              </p>
              <p className="text-lg text-secondary mb-6">
                My journey in tech has been marked by diverse experiences, from designing avionics 
                systems for NASA Student Launch rockets to IT work at Sterling Financial Services. 
                I&apos;m passionate about building efficient solutions and always eager to tackle new challenges.
              </p>
              <p className="text-lg text-secondary">
                When I&apos;m not coding, you&apos;ll find me competing in trivia/quiz bowl, playing board 
                games and chess, exploring VR, or participating in competitive programming contests.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-hover p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">3.4</div>
                <div className="text-secondary">GPA at UA</div>
              </div>
              <div className="card-hover p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">MS</div>
                <div className="text-secondary">Computer Science</div>
              </div>
              <div className="card-hover p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-secondary">Languages</div>
              </div>
              <div className="card-hover p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-secondary">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tulane */}
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#006747] to-[#87CEEB]"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image 
                      src="/TulaneLogoWithoutText.png" 
                      alt="Tulane University"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tulane University</h3>
                    <p className="text-secondary">New Orleans, LA</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">Master of Science in Computer Science</p>
                  <p className="text-primary font-medium">December 2025</p>
                  <p className="text-secondary mt-4">
                    Advanced coursework in computer science with focus on cutting-edge technologies 
                    and research methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* University of Alabama */}
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#9E1B32] to-[#828A8F]"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image 
                      src="/UniverstyOfAlabamaWithScriptALogo.png" 
                      alt="University of Alabama"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">The University of Alabama</h3>
                    <p className="text-secondary">Tuscaloosa, AL</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">Bachelor of Science in Computer Science</p>
                  <p className="text-primary font-medium">May 2023</p>
                  <p className="text-secondary">GPA: 3.4/4.0</p>
                  <div className="mt-4 inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                    🏆 National Merit Finalist Scholarship (2019-2024)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C/C++', 'C#', 'Java', 'Python', 'SQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Operating Systems */}
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Operating Environments</h3>
              <div className="flex flex-wrap gap-2">
                {['Windows', 'PC Assembly', 'Hardware Troubleshooting'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hardware */}
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Hardware & Embedded</h3>
              <div className="flex flex-wrap gap-2">
                {['Microcontrollers', 'Integrated Circuits', 'Avionics Design'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Experience & Activities</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8">
            {/* Alabama Rocketry Association */}
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-[#9E1B32] to-[#d4a373] p-8 flex items-center justify-center">
                  <div className="w-32 h-32 relative">
                    <Image 
                      src="/CoolRocketryAssociationLogo.jpg" 
                      alt="Alabama Rocketry Association"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">Alabama Rocketry Association</h3>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                      🚀 NASA Student Launch
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-4">Avionics Team Member | 2021 - 2023</p>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Designed and implemented avionics systems for high-powered rockets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Worked with integrated circuits and microcontrollers for flight control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Collaborated with team members on NASA Student Launch competition</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sterling Financial Services */}
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-400 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-20 h-20 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="font-bold text-lg">Sterling Financial</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-2">Sterling Financial Services</h3>
                  <p className="text-secondary mb-1">New Orleans, LA</p>
                  <p className="text-primary font-medium mb-4">IT Support | 2019 - 2022</p>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Provided technical support and IT solutions for the organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Managed and maintained computer systems and networks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Troubleshot hardware and software issues</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Interests & Hobbies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="font-bold mb-2">Trivia/Quiz Bowl</h3>
              <p className="text-secondary text-sm">Competitive knowledge challenges</p>
            </div>
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
              <div className="text-5xl mb-4">♟️</div>
              <h3 className="font-bold mb-2">Board Games & Chess</h3>
              <p className="text-secondary text-sm">Strategic thinking & gaming</p>
            </div>
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
              <div className="text-5xl mb-4">🥽</div>
              <h3 className="font-bold mb-2">Virtual Reality</h3>
              <p className="text-secondary text-sm">Exploring immersive technologies</p>
            </div>
            <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="font-bold mb-2">Competitive Programming</h3>
              <p className="text-secondary text-sm">Algorithm challenges & contests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="mailto:hjacobschenck@gmail.com" 
              className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">hjacobschenck@gmail.com</span>
            </a>
            
            <a 
              href="tel:+15049823332" 
              className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">(504) 982-3332</span>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/henry-schenck/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#0077B5] hover:bg-[#005885] rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:hjacobschenck@gmail.com"
              className="w-14 h-14 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-secondary">
          <p>&copy; {new Date().getFullYear()} Henry Jacob Schenck. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
