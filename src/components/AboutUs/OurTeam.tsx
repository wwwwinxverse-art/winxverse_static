import { Facebook, Linkedin, Twitter } from "lucide-react";

type Team = {
  name: string;
  role: string;
  image: string;
};

const teamData: Team[] = [
  {
    name: "Subburam K",
    role: "Founder & CEO",
    image: "/images/profile.jpeg",
  },
  {
    name: "Arun Kumar",
    role: "Full Stack Developer",
    image: "/images/profile.jpeg",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    image: "/images/profile.jpeg",
  },
  {
    name: "Rahul Verma",
    role: "Digital Marketing",
    image: "/images/profile.jpeg",
  },
];

export default function OurTeam() {
  return (
    <section className="py-20  text-white">
      
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-blue-400">Team</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Meet the talented people behind our success. We work together to deliver amazing results.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {teamData.map((member, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg hover:border-blue-400/30 transition duration-300"
            >

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">

                  <button className="p-2 bg-white/10 rounded-full hover:bg-blue-500/30 transition">
                    <Facebook size={18} />
                  </button>

                  <button className="p-2 bg-white/10 rounded-full hover:bg-blue-500/30 transition">
                    <Twitter size={18} />
                  </button>

                  <button className="p-2 bg-white/10 rounded-full hover:bg-blue-500/30 transition">
                    <Linkedin size={18} />
                  </button>

                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {member.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}