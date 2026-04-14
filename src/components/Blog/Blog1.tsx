import { motion } from "framer-motion";

export default function WebDevelopmentBlog() {
  return (
    <div className="bg-[#0b0b1a] text-white">

      {/* ✅ HEADER SECTION */}
      <section
        className="relative w-full h-[420px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Web Development <span className="text-blue-500">Insights</span>
          </h1>

          <p className="mt-3 text-gray-300 text-sm">
            <span className="text-white">Home</span> / Services / Web Development
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
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              The Future of{" "}
              <span className="text-blue-400">Web Development</span> in 2026
            </h2>

            <p className="text-gray-400 text-lg">
              A complete guide to modern technologies, SEO strategies, and scalable solutions for building high-performance web applications.
            </p>
          </motion.div>

          {/* FEATURE IMAGE */}
          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src="/images/blog1/blog1-1.jpg"
              alt="Web Development"
              className="w-full h-[250px] md:h-[420px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-8 text-gray-300 leading-relaxed text-[15px]">

            {/* INTRO */}
            <p>
              In today’s digital-first world, web development plays a critical role in shaping how businesses interact with their customers. A well-designed website is not just a digital presence — it is a powerful tool for branding, marketing, and customer engagement.
            </p>

            <p>
              As we move into 2026, the demand for fast, scalable, and SEO-optimized web applications continues to grow. Businesses are investing heavily in modern web technologies to stay competitive and deliver exceptional user experiences.
            </p>

            {/* SECTION */}
            <h2 className="text-2xl font-semibold text-white">
              🚀 Emerging Trends in Web Development
            </h2>

            <p>
              The web development landscape is constantly evolving. Here are the most impactful trends shaping the future:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>AI-driven user experiences and automation</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>Serverless computing and cloud-native apps</li>
              <li>Headless CMS for flexible content delivery</li>
              <li>Blockchain and Web3 integration</li>
            </ul>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/blog1/blog1-2.jpg"
                alt="Web Trends"
                className="w-full h-[240px] md:h-[340px] object-cover"
              />
            </div>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-blue-400 pl-4 italic">
              "Modern web development is not just about code — it's about creating meaningful digital experiences."
            </blockquote>

            {/* TECH STACK */}
            <h2 className="text-2xl font-semibold text-white">
              ⚡ Powerful Technologies Behind Modern Websites
            </h2>

            <p>
              Choosing the right technology stack is essential for building scalable and high-performance applications. Developers today rely on a combination of frontend, backend, and cloud tools:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Frontend: React.js, Next.js, Angular</li>
              <li>Backend: Node.js, .NET Core, Python</li>
              <li>Database: MongoDB, PostgreSQL</li>
              <li>Cloud: AWS, Azure, Firebase</li>
              <li>Styling: Tailwind CSS, Material UI</li>
            </ul>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/blog1/blog1-3.jpg"
                alt="Tech Stack"
                className="w-full h-[240px] md:h-[340px] object-cover"
              />
            </div>

            {/* SEO SECTION */}
            <h2 className="text-2xl font-semibold text-white">
              🔍 SEO Optimization for Web Applications
            </h2>

            <p>
              Search Engine Optimization (SEO) is a crucial factor for online visibility. A well-optimized website ranks higher in search engines, attracting more traffic and potential customers.
            </p>

            <p>
              Key SEO strategies include:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Fast loading speed (Core Web Vitals)</li>
              <li>Mobile-first responsive design</li>
              <li>Clean and semantic HTML structure</li>
              <li>Optimized images and lazy loading</li>
              <li>Meta tags, schema markup, and alt attributes</li>
            </ul>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-blue-400 pl-4 italic">
              "SEO is the bridge between your website and your audience."
            </blockquote>

            {/* BENEFITS */}
            <h2 className="text-2xl font-semibold text-white">
              💡 Why Businesses Need Modern Web Solutions
            </h2>

            <p>
              Investing in modern web development provides numerous advantages:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Improved user experience and engagement</li>
              <li>Higher conversion rates</li>
              <li>Better search engine rankings</li>
              <li>Scalable and future-ready architecture</li>
              <li>Enhanced security and performance</li>
            </ul>

            {/* CONCLUSION */}
            <h2 className="text-2xl font-semibold text-white">
              📌 Conclusion
            </h2>

            <p>
              The future of web development is driven by innovation, performance, and user-centric design. Businesses that adopt modern technologies and SEO strategies will gain a competitive edge in the digital marketplace.
            </p>

            <p>
              Whether you're building a startup website or an enterprise platform, investing in high-quality web development ensures long-term success.
            </p>

            {/* REFERENCES */}
            <h2 className="text-2xl font-semibold text-white">
              🔗 References
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-blue-400">
              <li><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></li>
              <li><a href="https://react.dev" target="_blank">React Docs</a></li>
              <li><a href="https://web.dev" target="_blank">Google Web.dev</a></li>
            </ul>

          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Need a Professional Website?
            </h3>

            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md transition">
              Contact Us
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}