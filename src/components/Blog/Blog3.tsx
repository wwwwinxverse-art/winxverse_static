import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HomeBlog from "../HomeBlog";

export default function CloudComputingBlog() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b0b1a] text-white overflow-hidden">

      {/* ✅ HEADER */}
      <section
        className="relative w-full h-[420px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg1.jpg')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* GRADIENT */}
      <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-6xl font-bold leading-tight"
          >
            Cloud Computing{" "}
            <span className="text-blue-400">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-gray-300 text-sm md:text-lg max-w-2xl mx-auto"
          >
            Discover how modern cloud technologies are transforming businesses
            with scalability, security, automation, and high-performance
            infrastructure in 2026.
          </motion.p>

          <p className="mt-4 text-gray-400 text-sm">
            <span className="text-white">Home</span> / Blog / Cloud Computing
          </p>
        </div>
      </section>

      {/* ✅ BLOG CONTENT */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              The Future of{" "}
              <span className="text-blue-400">Cloud Computing</span> and
              Scalable Business Solutions
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Cloud computing has become the backbone of modern digital
              transformation. Businesses worldwide are leveraging cloud
              technologies to improve flexibility, reduce infrastructure costs,
              and accelerate innovation.
            </p>
          </motion.div>

          {/* FEATURE IMAGE */}
          <div className="rounded-3xl overflow-hidden border border-white/10 mb-14">
            <img
              src="/images/blog3/cloud2.jpg"
              alt="Cloud Computing"
              className="w-full h-[260px] md:h-[500px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-10 text-gray-300 leading-relaxed text-[15px]">

            {/* INTRO */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                ☁️ Why Cloud Computing Matters in 2026
              </h2>

              <p>
                Cloud computing enables businesses to access computing
                resources, storage, databases, networking, and software over
                the internet without maintaining expensive physical
                infrastructure.
              </p>

              <p className="mt-4">
                In 2026, cloud solutions are helping startups, enterprises, and
                digital platforms scale globally while maintaining high
                performance, advanced security, and operational efficiency.
              </p>
            </div>

            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/blog3/cloud1.jpg"
                alt="Cloud Infrastructure"
                className="w-full h-[240px] md:h-[380px] object-cover"
              />
            </div>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-blue-400 pl-5 italic text-lg text-gray-300">
              "Cloud computing is no longer the future — it is the foundation
              of modern business innovation."
            </blockquote>

            {/* BENEFITS */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                🚀 Key Benefits of Cloud Technology
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Scalability
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Cloud platforms allow businesses to scale resources up or
                    down instantly based on demand without hardware limitations.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Cost Efficiency
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Reduce infrastructure and maintenance costs with flexible
                    pay-as-you-go pricing models.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    High Security
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Advanced cloud security systems help protect sensitive
                    business and customer data.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Remote Accessibility
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Teams can securely access applications and data from
                    anywhere in the world.
                  </p>
                </div>

              </div>
            </div>

            {/* TECHNOLOGY */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                ⚡ Modern Cloud Technologies
              </h2>

              <p>
                Businesses today rely on powerful cloud providers and services
                to build scalable digital solutions:
              </p>

              <ul className="list-disc pl-5 mt-5 space-y-3">
                <li>Amazon Web Services (AWS)</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud Platform (GCP)</li>
                <li>Cloud-native microservices architecture</li>
                <li>Serverless computing and APIs</li>
                <li>Containerization with Docker & Kubernetes</li>
              </ul>
            </div>

            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/blog3/cloud3.jpg"
                alt="Cloud Services"
                className="w-full h-[240px] md:h-[380px] object-cover"
              />
            </div>

            {/* SEO */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                🔍 Cloud Computing & SEO Performance
              </h2>

              <p>
                Website speed, uptime, and scalability directly impact SEO
                rankings. Cloud hosting improves performance through advanced
                caching, global CDN delivery, and optimized infrastructure.
              </p>

              <p className="mt-4">
                Search engines prioritize fast-loading websites with stable
                performance. Cloud-based hosting helps businesses achieve better
                Core Web Vitals and improved search visibility.
              </p>

              <ul className="list-disc pl-5 mt-5 space-y-3">
                <li>Improved website speed</li>
                <li>Better Core Web Vitals</li>
                <li>Reduced downtime</li>
                <li>Enhanced global performance</li>
                <li>Higher SEO rankings</li>
              </ul>
            </div>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-blue-400 pl-5 italic text-lg text-gray-300">
              "Scalable cloud infrastructure creates faster digital experiences
              and stronger online visibility."
            </blockquote>

            {/* FUTURE */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                🌐 The Future of Cloud Computing
              </h2>

              <p>
                The future of cloud computing is driven by AI integration,
                automation, edge computing, and sustainable data centers.
                Businesses are increasingly moving toward hybrid and multi-cloud
                strategies for better flexibility and resilience.
              </p>

              <p className="mt-4">
                Emerging technologies like AI-powered cloud management,
                edge-based computing, and intelligent automation will continue
                transforming how businesses operate in the digital age.
              </p>
            </div>

            {/* REFERENCES */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                🔗 References & Resources
              </h2>

              <ul className="list-disc pl-5 space-y-3 text-blue-400">
                <li>
                  <a
                    href="https://aws.amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amazon Web Services
                  </a>
                </li>

                <li>
                  <a
                    href="https://azure.microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Azure
                  </a>
                </li>

                <li>
                  <a
                    href="https://cloud.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Cloud Platform
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Scalable Cloud Solutions?
            </h3>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We help businesses build secure, scalable, and high-performance
              cloud-based platforms for the modern digital world.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl transition font-medium shadow-lg shadow-blue-500/20"
            >
              Contact Us
            </button>
          </div>

        </div>

        {/* RELATED BLOGS */}
        <div className="mt-20">
          <HomeBlog />
        </div>

      </section>
    </div>
  );
}