import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {
  return (
    <footer className="relative mt-10 border-t border-green-500/20 bg-black">
      
      {/* thin glow line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-green-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-10">
        
        {/* Title */}
        <h2 className="text-green-400 font-semibold text-lg text-center mb-6">
          Contact GFG RGIPT
        </h2>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-sm">
          
          {/* Address */}
          <div className="flex items-center gap-2">
            <FaLocationDot color="#4ade80" />
            <span>RGIPT, Jais Amethi, Uttar Pradesh</span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhone color="#4ade80" />
              <span>+91 XXXXXXXXXX</span>
            </div>

            <a
              href="mailto:gfg@rgipt.ac.in"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <FaEnvelope />
              gfg@rgipt.ac.in
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-lg">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} GFG RGIPT · All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Contact;
