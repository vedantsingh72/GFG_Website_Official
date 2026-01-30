import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Teams() {
  const leadership = [
    {
      name: 'Shreya Mam',
      role: 'President',
      department: 'CSE',
      email: 'shreya.mam@student.rgit.edu',
      bio: 'Passionate about web development and community building',
      image: 'bg-gradient-to-br from-green-400 to-blue-500',
    },
    {
      name: 'Ashish Yadav',
      role: 'Vice president',
      department: 'CSE',
      email: 'ashish.yadav@student.rgit.edu',
      bio: 'AI enthusiast and problem solver',
      image: 'bg-gradient-to-br from-purple-400 to-pink-500',
    },
    {
      name: 'Kushagra ',
      role: 'Vice president',
      department: 'CSE',
      email: 'kushagra.student.rgit.edu',
      bio: 'Full stack developer and open source contributor',
      image: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    },
    {
      name: 'Devisha Bhargava',
      role: 'President , Dev Club',
      department: 'CSE',
      email: 'devisha.bhargava@student.rgit.edu',
      bio: 'Organized 20+ successful events and workshops',
      image: 'bg-gradient-to-br from-orange-400 to-red-500',
    },
  ];

  const teams = [
    {
      name: 'Development Team',
      members: 12,
      focus: 'Building projects, website, and technical infrastructure',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      name: 'Content & Media Team',
      members: 8,
      focus: 'Creating tutorials, documentation, and promotional content',
      color: 'from-pink-500/20 to-purple-500/20',
    },
    {
      name: 'Events Team',
      members: 10,
      focus: 'Planning, coordinating, and executing chapter events',
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      name: 'Community Outreach',
      members: 7,
      focus: 'Connecting with industry, mentorship, and partnerships',
      color: 'from-orange-500/20 to-red-500/20',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-green-500">Leadership & Teams</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Meet the dedicated team driving innovation and community at RGIT.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-800 hover:border-green-500/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-green-500/10"
              >
                {/* Avatar */}
                <div className={`h-32 ${member.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                    <p className="text-sm text-green-500 font-medium">{member.role}</p>
                    <p className="text-xs text-slate-500 mt-1">{member.department}</p>
                  </div>

                  <p className="text-sm text-slate-400">{member.bio}</p>

                  {/* Contact Links */}
                  <div className="pt-3 flex gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-1 p-2 bg-slate-800 hover:bg-green-500/20 rounded border border-slate-700 hover:border-green-500/50 text-slate-400 hover:text-green-400 transition-all text-xs"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="hidden sm:inline">Email</span>
                    </a>
                    <button className="flex-1 flex items-center justify-center gap-1 p-2 bg-slate-800 hover:bg-green-500/20 rounded border border-slate-700 hover:border-green-500/50 text-slate-400 hover:text-green-400 transition-all text-xs">
                      <Linkedin className="w-4 h-4" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teams Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Teams</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {teams.map((team, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg border border-slate-800 bg-gradient-to-br ${team.color} hover:border-green-500/50 transition-all duration-300`}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{team.name}</h4>
                    <p className="text-sm text-slate-400 mt-1">
                      <span className="text-green-500 font-medium">{team.members} members</span> working together
                    </p>
                  </div>

                  <p className="text-slate-300">{team.focus}</p>

                  <button className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors">
                    Join This Team →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Now CTA */}
        <div className="mt-20 p-12 bg-gradient-to-r from-green-500/20 to-slate-900 rounded-lg border border-green-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Want to Join Our Team?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            We're always looking for passionate individuals to join our leadership and various teams. Apply now and be part of something amazing!
          </p>
          <button className="px-8 py-3 bg-green-500 text-slate-950 font-semibold rounded-lg hover:bg-green-400 transition-colors">
            Apply to Join
          </button>
        </div>
      </div>
    </section>
  );
}
