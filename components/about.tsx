import { Code2, Users, Zap, Target } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Technical Excellence',
      description: 'Learn cutting-edge technologies and industry best practices from experienced mentors and experts.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with like-minded individuals, collaborate on projects, and build lasting professional relationships.',
    },
    {
      icon: Zap,
      title: 'Skill Development',
      description: 'Enhance your technical and soft skills through workshops, webinars, and hands-on projects.',
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Get guidance on career development, internships, and opportunities from industry leaders.',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Our <span className="text-green-500">Chapter</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Geek for Geeks is a community-driven organization dedicated to helping tech enthusiasts learn, grow, and network with peers and industry professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-800 hover:border-green-500/50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-r from-green-500/20 to-slate-900 rounded-lg border border-green-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-slate-300 leading-relaxed">
            To foster a vibrant tech community at RGIT where students can collaborate, learn from industry experts,
            and develop the skills needed to thrive in today's competitive tech landscape. We believe in the power of
            community-driven learning and aim to make quality tech education accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
