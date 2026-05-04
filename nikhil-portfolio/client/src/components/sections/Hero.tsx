import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const skills = ["React.js", "Next.js", "Tailwind CSS"];
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    if (charIndex < currentSkill.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + currentSkill[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setSkillIndex((prev) => (prev + 1) % skills.length);
        setCharIndex(0);
        setDisplayText("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [charIndex, skillIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Greeting */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass-effect border border-blue-500/30">
            <p className="text-sm font-medium text-blue-400">Welcome to my portfolio</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Nikhil</span> 👋
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-foreground/80 mb-4 font-medium">
            Senior Frontend Developer (React.js Specialist)
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build fast, scalable and high-performance web applications with modern UI/UX.
          </p>

          {/* Typing Effect */}
          <div className="mb-12 h-12 flex items-center justify-center">
            <div className="text-lg sm:text-xl font-semibold">
              <span className="text-blue-400">Specializing in: </span>
              <span className="text-purple-400 border-r-2 border-blue-400 pr-1">
                {displayText}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-base"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/50 hover:border-blue-500 text-blue-400 hover:text-blue-300 font-semibold text-base"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 hover:border-foreground/40 font-semibold text-base"
            >
              <Download className="mr-2 w-5 h-5" />
              Resume
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-foreground/10">
            <div className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">3+</div>
              <p className="text-sm text-foreground/60 mt-2">Years Experience</p>
            </div>
            <div className="animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">20+</div>
              <p className="text-sm text-foreground/60 mt-2">Projects Built</p>
            </div>
            <div className="animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">100%</div>
              <p className="text-sm text-foreground/60 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
