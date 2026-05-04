import { motion } from "framer-motion";

export default function TermsContent() {
  return (
    <section className="bg-[#0b0b1a] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* INTRO */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            These Terms & Conditions outline the rules and regulations for using our website and services.
            By accessing this platform, you agree to comply with all terms stated below.
          </p>
        </div>

        {/* SECTION 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            By accessing or using our services, you confirm that you have read, understood,
            and agreed to be bound by these Terms & Conditions. If you disagree with any part,
            you must discontinue use immediately.
          </p>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            2. User Responsibilities
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
            <li>Provide accurate and up-to-date information.</li>
            <li>Do not engage in illegal or unauthorized activities.</li>
            <li>Respect intellectual property rights.</li>
            <li>Do not attempt to disrupt or hack the system.</li>
          </ul>
        </motion.div>

        {/* SECTION 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            3. Services & Availability
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            We strive to provide reliable and uninterrupted services. However,
            we do not guarantee that the website will always be available, secure,
            or free from errors. We reserve the right to modify or discontinue
            services at any time without notice.
          </p>
        </motion.div>

        {/* SECTION 4 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            4. Intellectual Property Rights
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            All materials, including logos, designs, content, and code,
            are owned by our company and protected by applicable copyright
            and trademark laws. Unauthorized use or reproduction is strictly prohibited.
          </p>
        </motion.div>

        {/* SECTION 5 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            We shall not be held liable for any indirect, incidental, or consequential
            damages resulting from the use or inability to use our services.
            Users agree that they use the platform at their own risk.
          </p>
        </motion.div>

        {/* SECTION 6 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            6. Privacy & Data Protection
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Your privacy is important to us. Any personal data collected will be handled
            in accordance with our Privacy Policy. We implement industry-standard
            measures to protect your information.
          </p>
        </motion.div>

        {/* SECTION 7 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            7. Updates to Terms
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            We reserve the right to update or change these Terms at any time.
            Continued use of the platform after changes means you accept the updated terms.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="text-center pt-10 border-t border-white/10">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Need clarification?
          </h3>
          <p className="text-gray-400 mb-5 text-sm">
            Our team is here to help you understand our policies.
          </p>

          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md transition font-medium"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}