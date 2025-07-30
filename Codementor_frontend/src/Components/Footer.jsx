import React from 'react'; 
import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#18181A] text-white">
      <div className="container mx-auto px-6 py-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-medium">
              <img src={Logo} alt="CodeMentor Logo" className="w-16" />
              <span className="text-white">CodeMentor</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Your go-to platform for debugging, optimizing, and translating code with AI-powered solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
            <div>
              <h3 className="text-md font-semibold">Services</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/debugger" className="text-gray-400 hover:text-white transition-colors duration-200">Code Debugger</Link></li>
                <li><Link to="/optimization" className="text-gray-400 hover:text-white transition-colors duration-200">Code Optimization</Link></li>
                <li><Link to="/documentation" className="text-gray-400 hover:text-white transition-colors duration-200">Code Documentation</Link></li>
                <li><Link to="/refactoring" className="text-gray-400 hover:text-white transition-colors duration-200">Code Refactoring</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold">More Tools</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/review" className="text-gray-400 hover:text-white transition-colors duration-200">Code Review</Link></li>
                <li><Link to="/explainer" className="text-gray-400 hover:text-white transition-colors duration-200">Code Explainer</Link></li>
                <li><Link to="/translator" className="text-gray-400 hover:text-white transition-colors duration-200">Multi-Language Translator</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>© 2024 CodeMentor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;