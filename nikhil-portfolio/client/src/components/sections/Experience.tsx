import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Ambiente Technologies",
      duration: "Jun 2022 – Present",
      duration_short: "2+ years",
      description: "Leading frontend development initiatives, building scalable React applications, and mentoring junior developers.",
      achievements: [
        "Improved page load time by 30%",
        "Built 20+ reusable components",
        "Integrated 15+ REST APIs",
      ],
    },
    {
      role: "Software Developer Trainee",
      company: "Yugasa Software Labs",
      duration: "Nov 2021 – Jun 2022",
      duration_short: "7 months",
      description: "Trained in modern web development practices, React fundamentals, and agile methodologies.",
      achievements: [
        "Completed comprehensive React training",
        "Built first production components",
        "Learned best practices in code quality",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-slide-in-up"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-0 top-6 w-16 h-16 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full glass-effect border-2 border-blue-500 flex items-center justify-center bg-background">
                      <Briefcase className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="md:ml-32 glass-effect border border-blue-500/20 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/60 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="bg-foreground/5 rounded-lg p-4 border border-foreground/10">
                      <p className="text-sm font-semibold text-foreground/80 mb-3">Key Achievements:</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="text-blue-400 font-bold mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Companies", value: "2" },
              { label: "Projects Delivered", value: "20+" },
              { label: "Team Collaborations", value: "50+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-effect border border-blue-500/20 rounded-lg p-4 text-center animate-slide-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-foreground/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
