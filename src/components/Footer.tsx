import { footerLinks } from '../assets/dummy-data';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-white/6 border-t border-white/6 pt-10 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white/10">

          {/* LEFT SIDE */}
          <div>
            <img src='/images/logo_with_name.png' alt="logo" className="h-24" />
            <p className="max-w-[410px] mt-6 text-sm leading-relaxed">
              We are a digital agency focused on strategy, design and development—helping brands build meaningful digital experiences and grow sustainably.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-10 w-full md:w-[45%] items-start">

            {/* QUICK LINKS */}
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

            {/* LEGAL */}
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

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <img
              src="/images/robo.gif" // 👉 your image
              alt="footer"
              className="h-34"
            />
          </div>

        </div>

        {/* BOTTOM */}
        <div className="py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-2">

          {/* LEFT */}
          <p>
            © {new Date().getFullYear()} • Distributed by{" "}
            <a href="#" className="text-white">Winxverse</a>. All rights reserved.
          </p>

          {/* RIGHT */}
          <p className="flex items-center gap-1">
            Made <span className="text-red-500">❤️</span> by{" "}
            <span className="text-white font-semibold">WXV</span>
          </p>

        </div>

      </div>
    </motion.footer>
  );
}