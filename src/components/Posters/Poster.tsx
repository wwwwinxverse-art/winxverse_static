import { useEffect, useRef, useState } from "react";
import Title from "../Title";

const posts = [
  "/images/post/post1.png",
  "/images/post/post2.png",
  "/images/post/post3.png",
  "/images/post/post4.png",
  "/images/post/post5.png",
  "/images/post/post6.png",
  "/images/post/post7.png",
  "/images/post/post8.png",
  "/images/post/post9.png",
  "/images/post/post10.png",
];

export default function Poster() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;
    let isHovered = false;

    const scroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += 1;

        // Infinite Loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <section className="w-full overflow-hidden py-20 relative">
        
        <Title
                           title="Instagram Posts"
                           heading="Our Creative Instagram Posts"
                           description="Explore our latest creative works, branding designs,
            social media campaigns, and digital content crafted
            for modern businesses and growing brands."
                       />

        {/* SLIDER */}
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-scroll hide-scrollbar"
            style={{
              scrollBehavior: "smooth",
            }}
          >
            {[...posts, ...posts].map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group min-w-[220px] md:min-w-[250px] h-[260px] md:h-[300px] rounded-[5px] overflow-hidden relative flex-shrink-0 cursor-pointer border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2"
              >
                {/* IMAGE */}
                <img
                  src={image}
                  alt={`Instagram Post ${index + 1}`}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />

                {/* HOVER BORDER */}
                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/40 rounded-[24px] transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-blue-400 transition"
          >
            ×
          </button>

          {/* IMAGE */}
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full md:max-w-5xl max-h-[90vh] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}

      {/* HIDE SCROLLBAR */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}