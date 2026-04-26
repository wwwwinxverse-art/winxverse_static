import { footerLinks } from '../assets/dummy-data';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="relative bg-white/6 border-t border-white/10 pt-10 text-gray-300 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.5 }}
    >

      {/* 🤖 Floating Robot */}
      <div className="hidden md:block pointer-events-none absolute right-6 bottom-10">
        <img
          src="/images/robo.gif"
          alt="robot"
          className="w-[120px] opacity-80"
          style={{ animation: "float 4s ease-in-out infinite" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10 py-10 border-b border-white/10">

          {/* LEFT SIDE */}
          <div>
            <img src='/images/logo_with_name.png' alt="logo" className="h-20" />
            <p className="max-w-[410px] mt-6 text-sm leading-relaxed">
              We are a digital agency focused on strategy, design and development—helping brands build meaningful digital experiences and grow sustainably.
            </p>
          </div>

          {/* QUICK LINKS + LEGAL */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                {footerLinks[0].links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:text-white transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="text-sm space-y-2">
                {footerLinks[1].links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:text-white transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>

           <ul className="text-sm space-y-3">
  <li className="flex items-center gap-2">
    <MapPin size={16} />
    <span>Viruthunagar, Tamil Nadu, India - 626149</span>
  </li>

  <li className="flex items-center gap-2">
    <Phone size={16} />
    <a href="tel:+916380623206" className="hover:underline">
      +91 63806 23206
    </a>
  </li>

  <li className="flex items-center gap-2">
    <Mail size={16} />
    <a href="mailto:www.winxverse@gmail.com" className="hover:underline">
      www.winxverse@gmail.com
    </a>
  </li>
</ul>
            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-2">

          <p>
            © {new Date().getFullYear()} • Distributed by{" "}
            <span className="text-white">Winxverse</span>. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Made <span className="text-red-500">❤️</span> by{" "}
            <span className="text-white font-semibold">WXV</span>
          </p>

        </div>

      </div>

      {/* ✨ Floating Animation Style */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

    </motion.footer>
  );
}