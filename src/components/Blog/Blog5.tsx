import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HomeBlog from "../HomeBlog";

export default function SocialMediaMarketingBlog() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b0b1a] text-white overflow-hidden">

      {/* ✅ HERO SECTION */}
      <section
        className="relative w-full h-[430px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-blue-500/10"></div>

        <div className="relative z-10 text-center px-4">
          <span className="px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm">
            Social Media Marketing
          </span>

          <h1 className="text-3xl md:text-6xl font-bold mt-5 leading-tight">
            Social Media <span className="text-blue-500">Marketing Trends</span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Explore the latest social media marketing strategies helping brands
            improve engagement, visibility, and digital growth in 2026.
          </p>

          <div className="mt-6 text-sm text-gray-400">
            Home / Blogs / Social Media Marketing
          </div>
        </div>
      </section>

      {/* ✅ BLOG CONTENT */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">

          {/* FEATURE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden border border-white/10 mb-14"
          >
            <img
              src="/images/blog5/sm1.jpg"
              alt="Social Media Marketing"
              className="w-full h-[260px] md:h-[520px] object-cover"
            />
          </motion.div>

          {/* INTRO */}
          <div className="space-y-8 text-gray-300 leading-relaxed">

            <div>
              <h2 className="text-3xl font-bold mb-5 text-white">
                🚀 The Future of Social Media Marketing
              </h2>

              <p>
                Social media marketing has become one of the most powerful tools
                for businesses to build brand awareness, connect with audiences,
                and generate leads online.
              </p>

              <p className="mt-4">
                In 2026, successful brands focus on personalized content,
                video marketing, AI-driven engagement, and community building
                across platforms like Instagram, LinkedIn, Facebook, TikTok,
                and YouTube.
              </p>
            </div>

            {/* SECTION */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  📈 Latest Social Media Trends
                </h2>

                <ul className="space-y-3 list-disc pl-5">
                  <li>Short-form video content dominance</li>
                  <li>AI-powered content generation</li>
                  <li>Influencer & creator collaborations</li>
                  <li>Social commerce and direct shopping</li>
                  <li>Interactive stories and live streaming</li>
                  <li>Community-focused brand engagement</li>
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/blog5/sm2.jpg"
                  alt="Social Media Trends"
                  className="w-full h-[320px] object-cover"
                />
              </div>

            </div>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-pink-500 pl-5 italic text-xl text-gray-200 py-2">
              "Brands that connect emotionally with audiences on social media grow faster and build stronger loyalty."
            </blockquote>

            {/* CONTENT STRATEGY */}
            <div>
              <h2 className="text-3xl font-bold mb-5 text-white">
                🎯 Content Strategy for Maximum Engagement
              </h2>

              <p>
                Content is the foundation of every successful social media campaign.
                Businesses must create valuable, engaging, and visually attractive
                content tailored to their audience.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-5">

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">
                    Video Marketing
                  </h3>

                  <p className="text-sm text-gray-400">
                    Reels, Shorts, and TikTok videos generate higher engagement
                    and audience reach.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">
                    Storytelling
                  </h3>

                  <p className="text-sm text-gray-400">
                    Emotional storytelling helps brands build stronger audience relationships.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                    Consistency
                  </h3>

                  <p className="text-sm text-gray-400">
                    Consistent posting schedules improve visibility and audience trust.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    User Interaction
                  </h3>

                  <p className="text-sm text-gray-400">
                    Replying to comments and messages increases engagement rates.
                  </p>
                </div>

              </div>

            </div>

            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/blog5/sm3.jpg"
                alt="Content Marketing"
                className="w-full h-[260px] md:h-[420px] object-cover"
              />
            </div>

            {/* SEO & SOCIAL */}
            <div>
              <h2 className="text-3xl font-bold mb-5 text-white">
                🔍 SEO and Social Media Marketing
              </h2>

              <p>
                SEO and social media now work together to improve brand visibility.
                Optimized social content can drive website traffic, increase authority,
                and improve search rankings.
              </p>

              <ul className="mt-5 list-disc pl-5 space-y-3">
                <li>Use keyword-rich captions and hashtags</li>
                <li>Optimize profile descriptions</li>
                <li>Share SEO-focused blog content</li>
                <li>Drive traffic through social campaigns</li>
                <li>Improve engagement signals and backlinks</li>
              </ul>
            </div>

            {/* BENEFITS */}
            <div>
              <h2 className="text-3xl font-bold mb-5 text-white">
                💡 Benefits of Social Media Marketing
              </h2>

              <div className="grid md:grid-cols-3 gap-5">

                <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-3">
                    Brand Awareness
                  </h3>

                  <p className="text-sm text-gray-400">
                    Reach larger audiences and improve online visibility.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    Audience Engagement
                  </h3>

                  <p className="text-sm text-gray-400">
                    Build meaningful relationships with customers and followers.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                    Lead Generation
                  </h3>

                  <p className="text-sm text-gray-400">
                    Convert social traffic into loyal customers and business growth.
                  </p>
                </div>

              </div>
            </div>

            {/* CONCLUSION */}
            <div>
              <h2 className="text-3xl font-bold mb-5 text-white">
                📌 Final Thoughts
              </h2>

              <p>
                Social media marketing in 2026 is driven by creativity,
                authenticity, and audience connection. Brands that embrace
                video content, AI tools, and community engagement will stand
                out in competitive digital markets.
              </p>

              <p className="mt-4">
                Businesses investing in modern social media strategies can improve
                customer trust, brand recognition, and long-term growth.
              </p>
            </div>

            {/* REFERENCES */}
            <div>
              <h2 className="text-3xl font-bold mb-5 text-white">
                🔗 References & Resources
              </h2>

              <ul className="list-disc pl-5 space-y-3 text-blue-400">
                <li>
                  <a href="https://business.instagram.com" target="_blank">
                    Instagram Business
                  </a>
                </li>

                <li>
                  <a href="https://www.facebook.com/business" target="_blank">
                    Meta Business
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/business/" target="_blank">
                    LinkedIn Business
                  </a>
                </li>

                <li>
                  <a href="https://developers.google.com/search" target="_blank">
                    Google Search Central
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Grow Your Brand Online?
            </h3>

            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Build powerful social media campaigns with creative content,
              SEO optimization, and audience engagement strategies.
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