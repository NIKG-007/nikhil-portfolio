import { CheckCircle } from "lucide-react";

export default function About() {
  const highlights = [
    "3+ years of frontend development experience",
    "Built 20+ reusable React components",
    "Improved page load time by 30%",
    "Integrated 15+ REST APIs",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="animate-slide-in-up">
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Results-driven Frontend Developer with 3+ years of experience building scalable React.js applications. I'm passionate about creating high-performance web experiences that users love.
              </p>

              <p className="text-base text-foreground/70 mb-8 leading-relaxed">
                I've improved page load times by ~30%, built 20+ reusable components, and integrated complex REST APIs. Experienced in Agile environments and cross-team collaboration. Currently expanding into TypeScript and Next.js.
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 animate-slide-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Info Card */}
            <div className="animate-slide-in-down">
              <div className="glass-effect p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Quick Facts</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">Role</p>
                    <p className="text-lg font-semibold">Senior Frontend Developer</p>
                  </div>

                  <div>
                    <p className="text-sm text-foreground/60 mb-2">Specialization</p>
                    <p className="text-lg font-semibold">React.js & Next.js</p>
                  </div>

                  <div>
                    <p className="text-sm text-foreground/60 mb-2">Location</p>
                    <p className="text-lg font-semibold">India (Open to Remote / Relocate)</p>
                  </div>

                  <div>
                    <p className="text-sm text-foreground/60 mb-2">Email</p>
                    <p className="text-lg font-semibold text-blue-400">nikhilrajput5436@gmail.com</p>
                  </div>

                  <div className="pt-4 border-t border-foreground/10">
                    <p className="text-sm text-foreground/60 mb-3">Connect with me</p>
                    <div className="flex gap-3">
                      <a
                        href="https://www.linkedin.com/in/nikhil-gahlaut-bb0360191"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg glass-effect border border-blue-500/30 hover:border-blue-500/60 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/10"
                      >
                        <span className="text-blue-400 font-bold">in</span>
                      </a>
                      <a
                        href="https://wa.me/917251804837"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg glass-effect border border-green-500/30 hover:border-green-500/60 flex items-center justify-center transition-all duration-300 hover:bg-green-500/10"
                      >
                        <span className="text-green-400 font-bold">WA</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
