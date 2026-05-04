import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Zap,
  BarChart3,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <Code2 size={26} />,
    title: "Modern Web Development",
    desc: "Fast, scalable and SEO-optimized websites."
  },
  {
    icon: <Smartphone size={26} />,
    title: "Responsive Design",
    desc: "Perfect experience across all devices."
  },
  {
    icon: <Cloud size={26} />,
    title: "Cloud Integration",
    desc: "Secure and scalable cloud deployment."
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Security",
    desc: "Advanced protection and best practices."
  },
  {
    icon: <Zap size={26} />,
    title: "Performance",
    desc: "High-speed optimized applications."
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Analytics",
    desc: "Track and grow your business insights."
  }
];

export default function FeaturesContent() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b0b1a] text-white">

      {/* ================== 1. INTRO + FEATURES ================== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="text-blue-400">Solutions?</span>
            </h2>

            <p className="text-gray-400 mb-6">
              We build scalable, high-performance digital products that help
              businesses grow faster and smarter.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-500 px-8 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Get Started
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-blue-400/40 transition"
              >
                <div className="text-blue-400 mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* ================== 3. PROCESS ================== */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our <span className="text-blue-400">Process</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {["Planning", "Design", "Development", "Launch"].map((step, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-xl text-center"
            >
              <span className="text-blue-400 font-bold text-lg">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-semibold">{step}</h3>
              <p className="text-gray-400 text-sm mt-2">
                We carefully execute each step to deliver high-quality results.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================== 4. WHY CHOOSE US ================== */}
      <section className="py-20 px-4 bg-[#0f0f25]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Performance & Growth
            </h2>

            <ul className="space-y-4">
              {[
                "SEO optimized structure",
                "Fast loading speed",
                "Modern UI/UX design",
                "Scalable architecture",
                "Secure applications"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-400" size={18} />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src="/images/service/ai.jpg"
              alt="features"
              className="rounded-2xl w-full h-[300px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================== 5. FINAL CTA ================== */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>

        <p className="text-gray-400 mb-6">
          Let’s build something amazing together.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md transition"
        >
          Contact Us
        </button>
      </section>

    </div>
  );
}