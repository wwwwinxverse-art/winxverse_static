import { useRef } from "react";
import { featuresData } from "../assets/dummy-data";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Features() {
  const navigate = useNavigate();
  const refs = useRef([]);

  return (
    <section id="features" className="">
      <div className="max-w-6xl mx-auto px-4">

        <Title
          title="Services"
          heading="Everything your brand needs to grow"
          description="From strategy to execution, we help businesses build strong digital products and meaningful customer experiences."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuresData.map((feature, i) => (
            <motion.div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: i * 0.1,
              }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg hover:border-white/20 transition duration-300 flex flex-col"
            >
              {/* PANORAMIC IMAGE */}
              <div className="w-full h-40 md:h-44 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {feature.desc}
                </p>

                {/* BUTTON RIGHT BOTTOM */}
                <div className="mt-auto flex justify-end">
                  <button
      onClick={() => navigate("/services")}
      className="text-sm text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
    >
      Read More →
    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}