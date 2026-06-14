export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-cool-gray-900 mb-4">
              About
            </h3>
            <p className="text-cool-gray-700">
              A minimalist portfolio showcasing projects and skills.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cool-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-cool-gray-700">
              <li>
                <a href="#about" className="hover:text-cream-600">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cream-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cream-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cool-gray-900 mb-4">
              Connect
            </h3>
            <ul className="space-y-2 text-cool-gray-700">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-600"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-600"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@aldrene.com"
                  className="hover:text-cream-600"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-200 pt-8 text-center text-cool-gray-600">
          <p>© 2024 Aldrene. Built with React, Convex, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
