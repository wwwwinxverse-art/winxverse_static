import { motion } from "framer-motion";

export default function CancelRefundContent() {
  return (
    <section className="bg-[#0b0b1a] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ✅ INTRO */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Cancellation & <span className="text-blue-400">Refund Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            This policy outlines the terms under which cancellations and refunds
            are processed. Please read carefully before making any purchase.
          </p>
        </div>

        {/* ✅ IMPORTANT ALERT */}
        <div className="bg-red-500/10 border border-red-400/30 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-red-400 mb-2">
            Important Notice
          </h2>
          <p className="text-gray-300 text-sm">
            Once a project has been initiated or services have been delivered,
            refunds may not be applicable. Please review all details before confirming your order.
          </p>
        </div>

        {/* ✅ STEP FLOW */}
        <div className="space-y-10">

          {/* STEP 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex gap-4 items-start"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Cancellation Request
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                You may request a cancellation within a limited time frame after placing an order.
                Requests must be submitted via email or our contact page.
              </p>
            </div>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-4 items-start"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Eligibility Check
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our team will review your request and determine eligibility based on
                project status, work completed, and agreed terms.
              </p>
            </div>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 items-start"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Refund Approval
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                If approved, refunds will be processed based on the unused portion
                of the service or product.
              </p>
            </div>
          </motion.div>

          {/* STEP 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 items-start"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Processing Time
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Refunds are typically processed within 5–10 business days and
                credited back to the original payment method.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ✅ CONDITIONS GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* NON-REFUNDABLE */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">
              Non-Refundable Cases
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Completed or delivered services</li>
              <li>Customized or client-specific work</li>
              <li>Missed deadlines from client side</li>
            </ul>
          </div>

          {/* REFUNDABLE */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">
              Eligible Refund Cases
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Duplicate payments</li>
              <li>Service not started</li>
              <li>Technical errors in billing</li>
            </ul>
          </div>

        </div>

        {/* ✅ CTA */}
        <div className="text-center pt-10 border-t border-white/10">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Need help with a refund?
          </h3>
          <p className="text-gray-400 text-sm mb-5">
            Contact our support team for assistance with cancellations and refunds.
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