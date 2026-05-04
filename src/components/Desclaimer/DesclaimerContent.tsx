import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, Info, FileText } from "lucide-react";

export default function DesclaimerContent() {
  return (
    <section className="bg-[#0b0b1a] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-400 leading-relaxed">
            The information provided by our company is for general informational purposes only.
            By using our services or website, you agree to the terms outlined in this disclaimer.
          </p>
        </motion.div>

        {/* WARNING STRIP */}
        <div className="flex items-start gap-4 bg-red-500/10 border border-red-400/30 rounded-xl p-5 mb-12">
          <AlertTriangle className="text-red-400 mt-1" />
          <p className="text-sm text-gray-300">
            We do not guarantee that all information is always accurate, complete, or up-to-date.
            Use our services at your own discretion and risk.
          </p>
        </div>

        {/* CONTENT BLOCKS */}
        <div className="space-y-10">

          {/* GENERAL INFO */}
          <div className="flex gap-4">
            <Info className="text-blue-400 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">General Information</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                All content on this website is published in good faith and for general information
                purposes only. We make no warranties about the completeness, reliability,
                and accuracy of this information.
              </p>
            </div>
          </div>

          {/* PROFESSIONAL DISCLAIMER */}
          <div className="flex gap-4">
            <FileText className="text-blue-400 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Professional Disclaimer</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our services do not constitute legal, financial, or professional advice.
                You should consult with a qualified professional before making any decisions
                based on the information provided.
              </p>
            </div>
          </div>

          {/* EXTERNAL LINKS */}
          <div className="flex gap-4">
            <ShieldAlert className="text-blue-400 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">External Links Disclaimer</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our website may contain links to external websites that are not provided or
                maintained by us. We do not guarantee the accuracy, relevance, or completeness
                of any external content.
              </p>
            </div>
          </div>

        </div>

        {/* LIMITATION BOX */}
        <div className="mt-14 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Limitation of Liability
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Under no circumstances shall we be held liable for any loss or damage,
            including without limitation indirect or consequential loss, arising
            out of or in connection with the use of our website or services.
          </p>
        </div>

        {/* CONSENT */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Consent
          </h3>
          <p className="text-gray-400 text-sm">
            By using our website, you hereby consent to our disclaimer and agree
            to its terms.
          </p>
        </div>

        {/* UPDATE */}
        <div className="mt-6 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>

      </div>
    </section>
  );
}