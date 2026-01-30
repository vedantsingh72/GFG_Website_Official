import { BookOpen, Code, Video, FileText, Download, ExternalLink } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      category: 'Tutorials',
      icon: Video,
      items: [
        { title: 'Web Development Series', url: '#', type: 'Video Series' },
        { title: 'JavaScript Fundamentals', url: '#', type: 'Video Playlist' },
        { title: 'React Crash Course', url: '#', type: 'Video Tutorial' },
      ],
    },
    {
      category: 'Documentation',
      icon: FileText,
      items: [
        { title: 'GFG Chapter Guidelines', url: '#', type: 'PDF' },
        { title: 'Project Submission Guide', url: '#', type: 'Document' },
        { title: 'Interview Preparation Notes', url: '#', type: 'PDF' },
      ],
    },
    {
      category: 'Code Repositories',
      icon: Code,
      items: [
        { title: 'GFG Sample Projects', url: '#', type: 'GitHub Repo' },
        { title: 'Code Snippets & Algorithms', url: '#', type: 'GitHub' },
        { title: 'Full Stack Boilerplate', url: '#', type: 'GitHub Repo' },
      ],
    },
    {
      category: 'Learning Materials',
      icon: BookOpen,
      items: [
        { title: 'Data Structures & Algorithms Guide', url: '#', type: 'E-Book' },
        { title: 'System Design Concepts', url: '#', type: 'Article' },
        { title: 'Coding Interview Questions', url: '#', type: 'Article Collection' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learning <span className="text-green-500">Resources</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Access curated learning materials, tutorials, and guides to accelerate your tech journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resourceGroup, idx) => {
            const Icon = resourceGroup.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-lg border border-slate-800 overflow-hidden hover:border-green-500/50 transition-colors duration-300"
              >
                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-green-500/20 to-slate-900 border-b border-slate-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{resourceGroup.category}</h3>
                  </div>
                </div>

                {/* Items */}
                <div className="p-6 space-y-4">
                  {resourceGroup.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.url}
                      className="group block p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-green-500/50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">{item.type}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-green-500/60 group-hover:text-green-500 flex-shrink-0 mt-0.5 transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-slate-950 to-slate-900 rounded-lg border border-slate-800 hover:border-green-500/50 transition-colors">
            <div className="flex items-start gap-4">
              <Download className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Resume Templates</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Download professionally designed resume templates optimized for tech industry hiring.
                </p>
                <button className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors flex items-center gap-1">
                  Download Now →
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-slate-950 to-slate-900 rounded-lg border border-slate-800 hover:border-green-500/50 transition-colors">
            <div className="flex items-start gap-4">
              <ExternalLink className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Recommended Tools</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Explore curated tools and platforms used by professional developers worldwide.
                </p>
                <button className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors flex items-center gap-1">
                  Explore Tools →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
