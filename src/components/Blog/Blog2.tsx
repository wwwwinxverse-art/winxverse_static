import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HomeBlog from "../HomeBlog";

export default function AIBlog() {
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
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Artificial Intelligence <span className="text-blue-500">Insights</span>
          </h1>

          <p className="mt-3 text-gray-300 text-sm">
            <span className="text-white">Home</span> / Services / AI Solutions
          </p>
        </div>
      </section>

      {/* ✅ CONTENT */}
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
              <span className="text-blue-400">Artificial Intelligence</span> in 2026
            </h2>

            <p className="text-gray-400 text-lg">
              Explore how AI is transforming industries, improving automation, and enabling smarter business decisions with cutting-edge technologies.
            </p>
          </motion.div>

          {/* FEATURE IMAGE */}
          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src="/images/service/ai.jpg"
              alt="Artificial Intelligence"
              className="w-full h-[250px] md:h-[420px] object-cover"
            />
          </div>

          {/* BLOG CONTENT */}
          <div className="space-y-8 text-gray-300 leading-relaxed text-[15px]">

            {/* INTRO */}
            <p>
              Artificial Intelligence (AI) is revolutionizing the way businesses operate and interact with customers. From automation to predictive analytics, AI is helping organizations streamline processes, reduce costs, and improve decision-making.
            </p>

            <p>
              In 2026, AI is no longer a futuristic concept — it is a necessity for businesses aiming to stay competitive in a rapidly evolving digital landscape.
            </p>

            {/* SECTION */}
            <h2 className="text-2xl font-semibold text-white">
              🤖 Key Trends in Artificial Intelligence
            </h2>

            <p>
              AI technologies are advancing at an incredible pace. Some of the most impactful trends include:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Generative AI (ChatGPT, AI content creation)</li>
              <li>AI-powered chatbots and virtual assistants</li>
              <li>Machine learning for predictive analytics</li>
              <li>Computer vision for image and video analysis</li>
              <li>Natural Language Processing (NLP)</li>
            </ul>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/blog2/blog2-1.webp"
                alt="AI Trends"
                className="w-full h-[240px] md:h-[340px] object-cover"
              />
            </div>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-blue-400 pl-4 italic">
              "Artificial Intelligence is not replacing humans — it is amplifying human potential."
            </blockquote>

            {/* TECHNOLOGY */}
            <h2 className="text-2xl font-semibold text-white">
              ⚡ AI Technologies Powering Innovation
            </h2>

            <p>
              Modern AI solutions are built using powerful tools and frameworks that enable scalable and intelligent systems:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>TensorFlow & PyTorch for machine learning</li>
              <li>OpenAI & NLP APIs for language models</li>
              <li>Computer Vision APIs (OpenCV, AWS Rekognition)</li>
              <li>Cloud AI services (Azure AI, Google AI)</li>
              <li>Big Data platforms for training models</li>
            </ul>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/blog2/blog2-2.jpg"
                alt="AI Technology"
                className="w-full h-[240px] md:h-[340px] object-cover"
              />
            </div>

            {/* SEO SECTION */}
            <h2 className="text-2xl font-semibold text-white">
              🔍 SEO & AI: The Future of Search
            </h2>

            <p>
              AI is transforming search engine algorithms. Businesses must adapt their SEO strategies to stay visible:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>AI-driven search results (Google SGE)</li>
              <li>Voice search optimization</li>
              <li>Semantic search & intent-based content</li>
              <li>Structured data and schema markup</li>
              <li>High-quality, human-focused content</li>
            </ul>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-blue-400 pl-4 italic">
              "AI is redefining how users discover content — SEO must evolve with it."
            </blockquote>

            {/* BENEFITS */}
            <h2 className="text-2xl font-semibold text-white">
              💡 Benefits of AI for Businesses
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Automated workflows and reduced manual effort</li>
              <li>Improved customer experience with personalization</li>
              <li>Data-driven decision making</li>
              <li>Increased productivity and efficiency</li>
              <li>Competitive advantage in digital markets</li>
            </ul>

            {/* CONCLUSION */}
            <h2 className="text-2xl font-semibold text-white">
              📌 Conclusion
            </h2>

            <p>
              Artificial Intelligence is shaping the future of every industry. Businesses that adopt AI-driven solutions will gain a significant edge in innovation, efficiency, and growth.
            </p>

            <p>
              Whether it’s automation, analytics, or customer engagement, AI is the key to building smarter digital solutions in 2026 and beyond.
            </p>

            {/* REFERENCES */}
            <h2 className="text-2xl font-semibold text-white">
              🔗 References
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-blue-400">
              <li><a href="https://openai.com" target="_blank">OpenAI</a></li>
              <li><a href="https://ai.google" target="_blank">Google AI</a></li>
              <li><a href="https://learn.microsoft.com/azure/ai" target="_blank">Azure AI Docs</a></li>
            </ul>

          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Want to integrate AI into your business?
            </h3>

            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md transition"
            >
              Contact Us
            </button>
          </div>

       

        </div>
              <div className="mt-10">
                        <HomeBlog />
            
                    </div>
      </section>
    </div>
  );
}