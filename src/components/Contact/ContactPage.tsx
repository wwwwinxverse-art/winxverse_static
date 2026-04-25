import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen  text-white py-16 px-4">
      
      <div className="max-w-6xl mx-auto">

        {/* ✅ CENTER HEADING */}
        <div className="text-center mb-14">
       
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We’d love to hear from you. Whether you have a question, need a quote,
            or just want to say hello — feel free to reach out anytime.
          </p>
        </div>

        {/* ✅ CONTENT SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-8">

            {/* ADDRESS */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition">
              <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Address</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  1/98/95, Maharajapuram<br />
                  Virudhunagar, Tamil Nadu<br />
                  626 149
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition">
              <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Phone</h4>
                <p className="text-gray-400 text-sm">
                  +91 6380623206
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition">
              <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <p className="text-gray-400 text-sm">
                  www.winxverse@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">

            <h3 className="text-xl font-semibold mb-6 text-white text-center">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-400 outline-none py-2 text-sm placeholder-gray-400"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-400 outline-none py-2 text-sm placeholder-gray-400"
              />

              <textarea
                rows={3}
                placeholder="Type your message..."
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-400 outline-none py-2 text-sm placeholder-gray-400 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-2 rounded-md font-medium"
              >
                Send
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}