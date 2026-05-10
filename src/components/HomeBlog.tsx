import { useState, useEffect } from "react";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type Blog = {
  slug: string; // ✅ FIXED (added)
  image: string;
  category: string;
  date: string;
  title: string;
  desc: string;
};

const blogData: Blog[] = [
  {
    slug: "webdevelopment",
    image: "/images/blog1/blog1-1.jpg",
    category: "Web Development",
    date: "Apr-12 2026",
    title: "How Modern Web Development Improves Business Growth",
    desc: "Learn how responsive design, performance optimization, and SEO strategies boost online visibility and conversions.",
  },
 {
  slug: "artificial-intelligence-future",
  image: "/images/service/ai.jpg",
  category: "Artificial Intelligence",
  date: "Apr-12 2026",
  title: "How Artificial Intelligence is Transforming Modern Businesses",
  desc: "Explore how AI technologies like machine learning, automation, and data analytics are revolutionizing business operations and driving digital growth."
},
 {
  slug: "future-of-cloud-computing",
  image: "/images/blog3/cloud1.jpg",
  category: "Cloud Technology",
  date: "May-08 2026",
  title: "The Future of Cloud Computing and Scalable Business Solutions",
  desc: "Learn how cloud technologies are helping businesses scale faster with security and flexibility."
},
{
  slug: "startup-growth-strategies",
  image: "/images/blog4/startup.jpg",
  category: "Business Growth",
  date: "May-08 2026",
  title: "Best Startup Growth Strategies for Digital Businesses",
  desc: "Explore smart strategies that help startups scale faster with technology, branding, and automation."
},
{
  slug: "social-media-marketing",
  image: "/images/blog5/sm1.jpg",
  category: "Social Media",
  date: "May-08 2026",
  title: "Social Media Marketing Trends Every Brand Should Know",
  desc: "Discover the latest social media marketing strategies for audience engagement and brand growth."
},
// {
//   slug: "web-design-trends-2026",
//   image: "/images/blog3/web-design.jpg",
//   category: "Web Design",
//   date: "May-08 2026",
//   title: "Modern Web Design Trends Creating Better User Experiences",
//   desc: "Explore the latest UI/UX design trends improving engagement, accessibility, and website performance."
// },
];

export default function HomeBlog() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const navigate = useNavigate();

  // ✅ RESPONSIVE BREAKPOINT
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, blogData.length - visibleCards);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="homeblog"  className="text-white">
      <div className="max-w-6xl mx-auto px-4 mb-20">

        {/* TITLE */}
        <Title
          title="Blogs"
          heading="Latest Insights & Articles"
          description="Stay updated with trends, tips and insights."
        />

        {/* ARROWS */}
        <div className="flex justify-end gap-3 mb-6 md:mb-8">
          <button
            onClick={prev}
            disabled={index === 0}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            disabled={index === maxIndex}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${index * (100 / visibleCards)}%` }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            {blogData.map((blog) => (
              <div
                key={blog.slug} // ✅ better key
                className="px-2 md:px-3 flex-shrink-0"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg hover:border-white/20 transition duration-300 flex flex-col h-full">

                  {/* IMAGE */}
                  <div className="relative w-full h-44 md:h-40 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 md:p-6 flex flex-col flex-1">

                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>{blog.category}</span>
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-base md:text-lg font-semibold mb-2 text-white line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {blog.desc}
                    </p>

                    {/* BUTTON */}
                    <div className="mt-auto flex justify-end">
                      <button
                        onClick={() => navigate(`/${blog.slug}`)}
                        className="text-sm text-blue-400 hover:text-blue-300 transition"
                      >
                        Read More →
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}