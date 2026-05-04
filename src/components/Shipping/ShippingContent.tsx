import { motion } from "framer-motion";
import { Truck, Clock, Globe, ShieldCheck } from "lucide-react";

export default function ShippingContent() {
  return (
    <section className="bg-[#0b0b1a] text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* TOP INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Shipping <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We ensure reliable and timely delivery of our services and digital products.
            This policy explains how we handle delivery timelines, access, and support.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">

          {/* DELIVERY */}
          <div className="bg-[#11112b] p-6 rounded-2xl border border-white/10">
            <Truck className="text-blue-400 mb-4" size={28} />
            <h3 className="text-lg font-semibold mb-2">Service Delivery</h3>
            <p className="text-gray-400 text-sm">
              All services are delivered digitally. Once your project is confirmed,
              our team begins development and provides access upon completion.
            </p>
          </div>

          {/* TIME */}
          <div className="bg-[#11112b] p-6 rounded-2xl border border-white/10">
            <Clock className="text-blue-400 mb-4" size={28} />
            <h3 className="text-lg font-semibold mb-2">Delivery Timeline</h3>
            <p className="text-gray-400 text-sm">
              Delivery depends on project scope. Most projects are completed
              within 2–6 weeks, with clear milestones shared in advance.
            </p>
          </div>

          {/* GLOBAL */}
          <div className="bg-[#11112b] p-6 rounded-2xl border border-white/10">
            <Globe className="text-blue-400 mb-4" size={28} />
            <h3 className="text-lg font-semibold mb-2">Global Access</h3>
            <p className="text-gray-400 text-sm">
              Our services are accessible worldwide. Clients can receive updates,
              files, and support regardless of their location.
            </p>
          </div>

          {/* SECURITY */}
          <div className="bg-[#11112b] p-6 rounded-2xl border border-white/10">
            <ShieldCheck className="text-blue-400 mb-4" size={28} />
            <h3 className="text-lg font-semibold mb-2">Secure Delivery</h3>
            <p className="text-gray-400 text-sm">
              We ensure secure file sharing and deployment using trusted platforms
              and encrypted communication channels.
            </p>
          </div>

        </div>

        {/* TIMELINE SECTION */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-white">
            Delivery Process
          </h2>

          <div className="space-y-6">

            {[
              "Project confirmation and requirement analysis",
              "Design and development phase begins",
              "Client review and feedback iteration",
              "Final delivery and deployment",
              "Post-delivery support and maintenance"
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-semibold">
                  {i + 1}
                </div>
                <p className="text-gray-400">{step}</p>
              </div>
            ))}

          </div>
        </div>

        {/* IMPORTANT NOTES */}
        <div className="bg-blue-500/10 border border-blue-400/30 rounded-2xl p-6 mb-16">
          <h3 className="text-lg font-semibold mb-3 text-blue-300">
            Important Notes
          </h3>
          <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
            <li>Delivery timelines may vary based on project complexity.</li>
            <li>Delays in client feedback can affect final delivery dates.</li>
            <li>All deliverables are shared digitally via secure channels.</li>
            <li>Support is available after delivery based on agreement.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-3">
            Need Help With Delivery?
          </h3>
          <p className="text-gray-400 mb-6">
            Contact our support team for any shipping or delivery-related queries.
          </p>

          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md transition font-medium"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}