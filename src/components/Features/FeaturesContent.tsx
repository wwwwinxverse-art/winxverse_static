import { useNavigate } from "react-router-dom";

export default function FeaturesContent() {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent text-white">
      {/* ================== 5. FINAL CTA ================== */}
      <section className="py-20 text-center px-4">
        {/* Thin line above */}
        <div className="w-84 h-0.5 bg-gray-600 mx-auto mb-6"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>

        <p className="text-gray-400 mb-6">
          Let’s build something amazing together.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md transition"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}
