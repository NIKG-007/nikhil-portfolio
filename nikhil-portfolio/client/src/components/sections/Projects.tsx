import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Zemo – Tournament Management System",
      description: "Comprehensive platform for managing tournaments with team registration, live scoring, bib management, certificate generation, auction system, and venue booking.",
      tech: ["React.js", "SASS", "Bootstrap", "REST APIs"],
      color: "from-blue-500",
      icon: "🏆",
    },
    {
      title: "Sequent Admin – UI Revamp",
      description: "Refactored legacy admin panel into modular React architecture. Reduced code complexity by 35% and improved page load time by 30%.",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      color: "from-purple-500",
      icon: "⚙️",
    },
    {
      title: "Online Scheduling Dashboard",
      description: "Built responsive dashboard from scratch with real-time booking system, role-based UI visibility, and seamless API integration.",
      tech: ["React.js", "Context API", "REST APIs", "Responsive Design"],
      color: "from-pink-500",
      icon: "📅",
    },
    {
      title: "Mobile Invoice App",
      description: "Mobile-first invoice system with cross-browser compatibility and REST API integration for seamless invoice management.",
      tech: ["React.js", "Mobile-first", "REST APIs"],
      color: "from-green-500",
      icon: "📱",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <p className="text-foreground/70 mt-4 text-lg">
              A selection of projects that showcase my expertise in building scalable, high-performance web applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-effect border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 animate-slide-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{project.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>


              </div>
            ))}
          </div>

          {/* Additional Work */}
          <div className="mt-12 glass-effect border border-purple-500/20 rounded-2xl p-8 animate-slide-in-up">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🤖</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Additional Work</h3>
                <p className="text-foreground/70 mb-4">
                  Built a Python chatbot with dynamic conversation flow, designing chatbot logic and flowcharts for intelligent user interactions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30">
                    Python
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30">
                    Chatbot
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30">
                    NLP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
