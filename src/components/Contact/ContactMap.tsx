export default function ContactMap() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Our <span className="text-blue-400">Location</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Find us easily on the map below
          </p>
        </div>

        {/* MAP */}
        <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Anna%20Nagar,Watrap,Srivilliputhur,Virudhunagar,Tamil%20Nadu,626132&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}