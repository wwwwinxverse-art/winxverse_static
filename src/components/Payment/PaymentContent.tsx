import { motion } from "framer-motion";

export default function PaymentContent() {
  return (
    <section className="bg-[#0b0b1a] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ✅ INTRO */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Payment <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            This Payment Policy outlines the terms related to payments, billing,
            and transactions for our services. Please review it carefully before
            making any purchase.
          </p>
        </div>

        {/* ✅ HIGHLIGHT BOX */}
        <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-400/20 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-blue-400">
            Secure & Transparent Payments
          </h2>
          <p className="text-gray-300 text-sm">
            We ensure all transactions are encrypted and processed through secure
            payment gateways to protect your financial data.
          </p>
        </div>

        {/* ✅ GRID SECTIONS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* PAYMENT METHODS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-400">
              Accepted Payment Methods
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Credit / Debit Cards</li>
              <li>UPI & Net Banking</li>
              <li>Online Payment Gateways</li>
              <li>Bank Transfers (for enterprise clients)</li>
            </ul>
          </motion.div>

          {/* BILLING TERMS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-400">
              Billing Terms
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              All payments must be completed before the delivery of services unless
              otherwise agreed. For ongoing projects, milestone-based billing may apply.
            </p>
          </motion.div>

          {/* PRICING POLICY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-400">
              Pricing & Changes
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Prices for our services may change without prior notice. However,
              confirmed orders will not be affected by pricing updates.
            </p>
          </motion.div>

          {/* FAILED TRANSACTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-400">
              Failed Transactions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              In case of failed payments, the amount will be refunded automatically
              by your payment provider. Please contact your bank if delays occur.
            </p>
          </motion.div>

        </div>

        {/* ✅ FULL WIDTH SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">
            Payment Security
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We use trusted third-party payment processors and encryption technologies
            to ensure that your payment details are safe. We do not store sensitive
            financial information such as card numbers or CVV codes on our servers.
          </p>
        </motion.div>

        {/* ✅ CTA */}
        <div className="text-center pt-10 border-t border-white/10">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Need help with payments?
          </h3>
          <p className="text-gray-400 text-sm mb-5">
            Our support team is ready to assist you with billing and payment queries.
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