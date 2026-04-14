import { useState } from "react";
import { Mail, Linkedin, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Share() {
  const [open, setOpen] = useState(false);

  const icons = [
    { icon: <Mail size={16} />, link: "#" },
    { icon: <Linkedin size={16} />, link: "#" },
    { icon: <Phone size={16} />, link: "#" },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">

      {/* FLOATING ICONS */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="flex flex-col items-center gap-2"
          >
            {icons.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-10 h-10 rounded-full bg-[#0b1f3a] flex items-center justify-center shadow-md hover:scale-110 hover:bg-sky-500 transition"
              >
                <span className="text-white">{item.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN BUTTON */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`relative w-12 h-12 rounded-full flex items-center justify-center 
        bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg
        ${
          open
            ? "shadow-[0_0_20px_rgba(56,189,248,0.8)]"
            : "shadow-[0_0_15px_rgba(56,189,248,0.6)]"
        }`}
      >
        {/* GLOW */}
        <span className="absolute inset-0 rounded-full bg-sky-400 blur-lg opacity-50 animate-pulse"></span>

        {/* CONTENT */}
        <span className="relative z-10">
          {open ? (
            <X className="text-white" size={18} />
          ) : (
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-white/70 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
            </div>
          )}
        </span>
      </motion.button>
    </div>
  );
}