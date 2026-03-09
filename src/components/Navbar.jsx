import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="h-24 bg-dark border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
     
        {/* Logo */}

        <img
            src="/logo.png"
            alt="Halcioara Logo"
            className="h-24 w-auto"
          />

        {/* Menu */}
<Link to="/" className="hover:text-white">Home</Link>
<Link to="/portfolio" className="hover:text-white">Portfolio</Link>
<Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium">
  Contact us 
</Link>
      </div>
    </nav>
  );
}
