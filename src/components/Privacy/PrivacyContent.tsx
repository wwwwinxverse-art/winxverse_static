import { motion } from "framer-motion";

export default function PrivacyContent() {
  return (
    <section className="bg-[#0b0b1a] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ✅ INTRO */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Privacy <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Your privacy matters to us. This policy explains how we collect, use,
            and protect your personal information when you use our services.
          </p>
        </div>

        {/* ✅ TIMELINE STYLE CONTENT */}
        <div className="relative border-l border-white/10 pl-6 space-y-12">

          {/* ITEM 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <span className="absolute -left-[10px] top-1 w-4 h-4 bg-blue-500 rounded-full"></span>

            <div className="bg-gradient-to-br from-white/5 to-white/0 p-6 rounded-xl border border-white/10">
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                1. Information We Collect
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We may collect personal information such as your name, email,
                phone number, and usage data when you interact with our website
                or services.
              </p>
            </div>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[10px] top-1 w-4 h-4 bg-blue-500 rounded-full"></span>

            <div className="bg-gradient-to-br from-white/5 to-white/0 p-6 rounded-xl border border-white/10">
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                2. How We Use Your Data
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>To provide and improve our services</li>
                <li>To communicate with you</li>
                <li>To personalize user experience</li>
                <li>To ensure security and prevent fraud</li>
              </ul>
            </div>
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <span className="absolute -left-[10px] top-1 w-4 h-4 bg-blue-500 rounded-full"></span>

            <div className="bg-gradient-to-br from-white/5 to-white/0 p-6 rounded-xl border border-white/10">
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                3. Data Protection & Security
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We implement industry-standard security measures to protect your
                personal data from unauthorized access, misuse, or disclosure.
              </p>
            </div>
          </motion.div>

          {/* ITEM 4 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <span className="absolute -left-[10px] top-1 w-4 h-4 bg-blue-500 rounded-full"></span>

            <div className="bg-gradient-to-br from-white/5 to-white/0 p-6 rounded-xl border border-white/10">
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                4. Sharing of Information
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We do not sell or rent your personal data. Information may be
                shared only with trusted partners or when required by law.
              </p>
            </div>
          </motion.div>

          {/* ITEM 5 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <span className="absolute -left-[10px] top-1 w-4 h-4 bg-blue-500 rounded-full"></span>

            <div className="bg-gradient-to-br from-white/5 to-white/0 p-6 rounded-xl border border-white/10">
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                5. Cookies & Tracking
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our website may use cookies to enhance user experience, analyze
                traffic, and improve performance. You can manage cookie settings
                through your browser.
              </p>
            </div>
          </motion.div>

          {/* ITEM 6 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <span className="absolute -left-[10px] top-1 w-4 h-4 bg-blue-500 rounded-full"></span>

            <div className="bg-gradient-to-br from-white/5 to-white/0 p-6 rounded-xl border border-white/10">
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                6. Your Rights
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>Access your personal data</li>
                <li>Request corrections or deletion</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </motion.div>

          {/* ITEM 7 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <span className="absolute -left-[10px] top-1 w-4 h-4 bg-blue-500 rounded-full"></span>

            <div className="bg-gradient-to-br from-white/5 to-white/0 p-6 rounded-xl border border-white/10">
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                7. Policy Updates
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. Continued
                use of our services indicates acceptance of the updated policy.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ✅ CTA */}
        <div className="mt-20 text-center border-t border-white/10 pt-10">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Have questions about your data?
          </h3>
          <p className="text-gray-400 text-sm mb-5">
            Contact us for more details about how we handle your information.
          </p>

          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md transition font-medium"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}