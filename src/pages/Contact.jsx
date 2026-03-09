import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-dark min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get In Touch
        </h1>
        <p className="text-gray-400 text-lg mb-16">
          Reach out to us directly through any of the platforms below.
          We’re always ready to collaborate.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Phone 1 */}
          <a
            href="tel:+919009924901"
            className="group flex flex-col items-center justify-center p-8 rounded-2xl 
                       bg-white/5 backdrop-blur-lg border border-white/10
                       transition-all duration-300
                       hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
          >
            <FiPhone className="text-4xl text-indigo-400 mb-4" />
            <span className="text-white font-medium">
              +91 90099 24901
            </span>
          </a>

          {/* Phone 2 */}
          <a
            href="tel:+919277427680"
            className="group flex flex-col items-center justify-center p-8 rounded-2xl 
                       bg-white/5 backdrop-blur-lg border border-white/10
                       transition-all duration-300
                       hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
          >
            <FiPhone className="text-4xl text-indigo-400 mb-4" />
            <span className="text-white font-medium">
              +91 92774 27680
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/halciora_studio?igsh=M3ljcTJkbnBvMDFj"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 rounded-2xl 
                       bg-white/5 backdrop-blur-lg border border-white/10
                       transition-all duration-300
                       hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            <FaInstagram className="text-4xl text-pink-500 mb-4" />
            <span className="text-white font-medium">
              @halciora_studio
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:halciorastudioteam@gmail.com"
            className="group flex flex-col items-center justify-center p-8 rounded-2xl 
                       bg-white/5 backdrop-blur-lg border border-white/10
                       transition-all duration-300
                       hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          >
            <FiMail className="text-4xl text-green-400 mb-4" />
            <span className="text-white font-medium">
              hlciorastudioteam@gmail.com
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}