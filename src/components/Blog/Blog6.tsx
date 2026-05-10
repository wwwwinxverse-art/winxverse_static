import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HomeBlog from "../HomeBlog";

export default function WebDesignBlogs() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b0b1a] text-white">

      {/* ✅ HEADER */}
      <section
        className="relative w-full h-[420px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Modern Web Design <span className="text-blue-500">Trends</span>
          </h1>

          <p className="mt-3 text-gray-300 text-sm">
            <span className="text-white">Home</span> / Blogs / Web Design
          </p>
        </div>
      </section>

      {/* ✅ BLOG CONTENT */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Modern Web Design Trends Creating Better{" "}
              <span className="text-blue-400">User Experiences</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Explore the latest UI/UX design trends improving engagement,
              accessibility, responsiveness, and website performance for modern
              businesses in 2026.
            </p>
          </motion.div>

          {/* FEATURE IMAGE */}
          <div className="rounded-2xl overflow-hidden mb-10 border border-white/10">
            <img
              src="/images/blog3/web-design.jpg"
              alt="Modern Web Design Trends"
              className="w-full h-[250px] md:h-[420px] object-cover"
            />
          </div>

          {/* BLOG CONTENT */}
          <div className="space-y-8 text-gray-300 leading-relaxed text-[15px]">

            {/* INTRO */}
            <p>
              Modern web design is no longer just about creating visually
              attractive websites. In 2026, businesses focus heavily on user
              experience, accessibility, performance optimization, and mobile
              responsiveness to improve engagement and conversion rates.
            </p>

            <p>
              A well-designed website helps brands build trust, improve customer
              retention, and increase online visibility. From interactive
              animations to clean layouts, modern web design trends are shaping
              the future of digital experiences.
            </p>

            {/* SECTION */}
            <h2 className="text-2xl font-semibold text-white">
              🎨 Minimal UI & Clean Layouts
            </h2>

            <p>
              Minimal design continues to dominate the digital world. Clean
              layouts reduce distractions and help users focus on important
              content and actions.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Whitespace-focused layouts</li>
              <li>Simple typography and color palettes</li>
              <li>Clean navigation systems</li>
              <li>Improved readability and accessibility</li>
              <li>Faster loading user interfaces</li>
            </ul>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src="/images/blog3/web-design-2.jpg"
                alt="Minimal UI Design"
                className="w-full h-[240px] md:h-[340px] object-cover"
              />
            </div>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-300">
              "Great web design is invisible — users simply enjoy the experience."
            </blockquote>

            {/* UX SECTION */}
            <h2 className="text-2xl font-semibold text-white">
              🚀 User Experience (UX) is the Priority
            </h2>

            <p>
              Businesses are investing heavily in UX design to improve customer
              satisfaction and retention. Websites that provide smooth and
              intuitive interactions perform significantly better.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Mobile-first responsive design</li>
              <li>Fast page loading speed</li>
              <li>Interactive micro animations</li>
              <li>Accessible navigation systems</li>
              <li>Touch-friendly mobile interfaces</li>
            </ul>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src="/images/blog3/web-design-3.jpg"
                alt="User Experience Design"
                className="w-full h-[240px] md:h-[340px] object-cover"
              />
            </div>

            {/* PERFORMANCE */}
            <h2 className="text-2xl font-semibold text-white">
              ⚡ Website Performance & SEO Optimization
            </h2>

            <p>
              Website speed and SEO optimization are critical ranking factors in
              modern search engines. Businesses that optimize performance gain
              better visibility and user engagement.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Optimized images and lazy loading</li>
              <li>Core Web Vitals optimization</li>
              <li>SEO-friendly page structure</li>
              <li>Fast responsive frameworks</li>
              <li>Semantic HTML and accessibility standards</li>
            </ul>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-300">
              "Performance-driven design creates better rankings and happier users."
            </blockquote>

            {/* AI SECTION */}
            <h2 className="text-2xl font-semibold text-white">
              🤖 AI-Powered Design Experiences
            </h2>

            <p>
              Artificial Intelligence is transforming modern web experiences.
              Businesses now use AI-driven personalization to improve customer
              engagement and conversions.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>AI-powered chatbots</li>
              <li>Personalized user recommendations</li>
              <li>Smart search experiences</li>
              <li>Automated customer interactions</li>
              <li>Behavior-based content delivery</li>
            </ul>

            {/* BENEFITS */}
            <h2 className="text-2xl font-semibold text-white">
              💡 Benefits of Modern Web Design
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Improved customer engagement</li>
              <li>Higher conversion rates</li>
              <li>Better search engine rankings</li>
              <li>Enhanced mobile user experience</li>
              <li>Stronger brand credibility</li>
              <li>Faster website performance</li>
            </ul>

            {/* CONCLUSION */}
            <h2 className="text-2xl font-semibold text-white">
              📌 Conclusion
            </h2>

            <p>
              Modern web design trends are focused on delivering seamless,
              accessible, and performance-driven user experiences. Businesses
              that adopt innovative UI/UX strategies gain a strong competitive
              advantage in the digital marketplace.
            </p>

            <p>
              From responsive layouts to AI-powered personalization, the future
              of web design is centered around speed, simplicity, and user
              satisfaction. Investing in modern design helps businesses improve
              engagement, trust, and long-term growth.
            </p>

            {/* REFERENCES */}
            <h2 className="text-2xl font-semibold text-white">
              🔗 References
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-blue-400">
              <li>
                <a
                  href="https://web.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Web.dev
                </a>
              </li>

              <li>
                <a
                  href="https://developer.mozilla.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MDN Web Docs
                </a>
              </li>

              <li>
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Framer Motion
                </a>
              </li>
            </ul>

          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Need a Modern Website Design?
            </h3>

            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We create high-performance, responsive, and SEO-optimized websites
              that improve user experience and help businesses grow online.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md transition font-medium"
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