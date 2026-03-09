import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Halcioara</h3>
            <p className="text-gray-400 max-w-sm">
              A creative video editing studio helping creators and brands
              turn raw footage into high-impact visual stories.
            </p>
            <div className="mt-6">
              
            <a href="terms.pdf" target="_blank" rel="noopener noreferrer" className="">
  Terms & Condtion
</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">
              Navigation
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>+91 9009924901</li>
              <li>+91 9277427680</li>
                <li> <a href="https://www.instagram.com/halciora_studio?igsh=M3ljcTJkbnBvMDFj" target="blank"> Instagram</a></li>
              <li>halciorastudioteam@gmail.com</li>
              <li>Worldwide · Remote</li> 
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Halcioara. All rights reserved.
        </div>

      </div>
    </footer>
  );
}