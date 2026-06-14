import { useState } from 'react';

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Convex backend
    console.log('Contact form submitted:', contactForm);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-cool-gray-900 mb-6">
            Hi, I'm Aldrene
          </h1>
          <p className="text-xl text-cool-gray-700 mb-8 leading-relaxed">
            A passionate developer and designer creating beautiful, functional
            digital experiences. I believe in minimalist design and clean code.
          </p>
          <button
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 bg-cream-600 text-white rounded-lg hover:bg-cream-700 transition-colors"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cool-gray-900 mb-12">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-cool-gray-700 text-lg leading-relaxed mb-6">
                I'm a full-stack developer with a passion for creating elegant
                solutions to complex problems. With expertise in modern web
                technologies, I help bring ideas to life through thoughtful
                design and robust implementation.
              </p>
              <p className="text-cool-gray-700 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new design
                trends, contributing to open source, or enjoying a good cup of
                coffee.
              </p>
            </div>
            <div className="bg-cream-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-cool-gray-900 mb-4">
                Highlights
              </h3>
              <ul className="space-y-3 text-cool-gray-700">
                <li>✨ 5+ years of web development experience</li>
                <li>🎨 Passionate about UI/UX design</li>
                <li>🚀 Full-stack developer (Frontend & Backend)</li>
                <li>🌟 Open source contributor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cool-gray-900 mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Frontend',
                skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
              },
              {
                category: 'Backend',
                skills: ['Node.js', 'Convex', 'PostgreSQL', 'REST APIs'],
              },
              {
                category: 'Tools',
                skills: ['Git', 'Vite', 'Docker', 'Vercel'],
              },
              {
                category: 'Design',
                skills: ['Figma', 'UI/UX', 'Responsive Design', 'Accessibility'],
              },
            ].map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-cream-100 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-cool-gray-900 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-cool-gray-700 flex items-center"
                    >
                      <span className="w-2 h-2 bg-cream-600 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cool-gray-900 mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Portfolio Website',
                description:
                  'A minimalist portfolio built with React, Vite, and Tailwind CSS',
                tags: ['React', 'Vite', 'Tailwind CSS'],
                links: { github: '#', live: '#' },
              },
              {
                title: 'Task Manager App',
                description:
                  'Real-time task management with Convex backend and React frontend',
                tags: ['React', 'Convex', 'TypeScript'],
                links: { github: '#', live: '#' },
              },
              {
                title: 'Design System',
                description:
                  'Reusable component library with Tailwind CSS and Storybook',
                tags: ['React', 'Tailwind CSS', 'Storybook'],
                links: { github: '#' },
              },
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-cream-200 to-warm-beige-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cool-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-cool-gray-700 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-cream-200 text-cool-gray-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        className="text-cream-600 hover:text-cream-700 font-medium"
                      >
                        Live →
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="text-cream-600 hover:text-cream-700 font-medium"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cool-gray-900 mb-8">Resume</h2>
          <p className="text-cool-gray-700 mb-8 text-lg">
            Download my resume to learn more about my experience and education.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-8 py-3 bg-cream-600 text-white rounded-lg hover:bg-cream-700 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-cool-gray-900 mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-center text-cool-gray-700 mb-12">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-cool-gray-900 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cream-600 bg-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-cool-gray-900 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cream-600 bg-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-cool-gray-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cream-600 bg-white resize-none"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-cream-600 text-white rounded-lg hover:bg-cream-700 transition-colors font-medium"
            >
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-700">
                Thank you! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
