import { Code2, Wrench } from "lucide-react";

export default function Skills() {
  const skills = [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5 / CSS3 / SASS",
    "Bootstrap",
    "Tailwind CSS",
    "TypeScript",
    "Next.js",
    "REST APIs",
    "Context API",
    "Responsive Design",
  ];

  const tools = [
    "Git",
    "JIRA",
    "Postman",
    "AWS",
    "VS Code",
    "Figma",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Tools</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="animate-slide-in-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="glass-effect p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:bg-blue-500/5 cursor-default group"
                  >
                    <p className="text-foreground/80 group-hover:text-blue-400 transition-colors duration-300 font-medium">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="animate-slide-in-down">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Tools & Platforms</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="glass-effect p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:bg-purple-500/5 cursor-default group"
                  >
                    <p className="text-foreground/80 group-hover:text-purple-400 transition-colors duration-300 font-medium">
                      {tool}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 glass-effect p-6 rounded-lg border border-foreground/10">
                <h4 className="font-semibold mb-3">Currently Learning</h4>
                <p className="text-foreground/70 text-sm">
                  Expanding expertise in TypeScript, advanced Next.js patterns, and modern state management solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Proficiency Bars */}
          <div className="mt-16 glass-effect p-8 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>

            <div className="space-y-6">
              {[
                { name: "React.js", level: 95 },
                { name: "JavaScript", level: 90 },
                { name: "CSS/Tailwind", level: 88 },
                { name: "TypeScript", level: 75 },
                { name: "Next.js", level: 80 },
              ].map((skill, index) => (
                <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
