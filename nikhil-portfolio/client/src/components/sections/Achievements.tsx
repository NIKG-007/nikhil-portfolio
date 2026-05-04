import { useEffect, useState } from "react";
import { Award } from "lucide-react";

interface AchievementItem {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function Achievements() {
  const achievements: AchievementItem[] = [
    {
      label: "Reusable Components Built",
      value: 20,
      suffix: "+",
      icon: "🧩",
    },
    {
      label: "Code Reuse Improvement",
      value: 40,
      suffix: "%",
      icon: "📈",
    },
    {
      label: "REST APIs Integrated",
      value: 15,
      suffix: "+",
      icon: "🔌",
    },
    {
      label: "UI Bugs Reduced",
      value: 50,
      suffix: "%",
      icon: "🐛",
    },
    {
      label: "Performance Improvement",
      value: 30,
      suffix: "%",
      icon: "⚡",
    },
    {
      label: "Client Satisfaction",
      value: 100,
      suffix: "%",
      icon: "😊",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Key <span className="gradient-text">Achievements</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-effect border border-blue-500/20 hover:border-blue-500/50 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group animate-slide-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>

                {/* Counter */}
                <div className="text-4xl font-bold gradient-text mb-3">
                  <AnimatedCounter target={achievement.value} suffix={achievement.suffix} />
                </div>

                {/* Label */}
                <p className="text-foreground/70 font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>

          {/* Metrics Summary */}
          <div className="mt-16 glass-effect border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Award className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Professional Impact</h3>
                <p className="text-foreground/70">
                  Through consistent dedication to code quality, performance optimization, and user experience, I've delivered measurable results that directly impact business success.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Code Quality",
                  description: "Reduced bugs by 50% through rigorous testing and best practices",
                },
                {
                  title: "Performance",
                  description: "Improved page load times by 30% with optimization techniques",
                },
                {
                  title: "Scalability",
                  description: "Built 20+ reusable components for 40% faster development",
                },
              ].map((stat, index) => (
                <div key={index} className="p-4 bg-foreground/5 rounded-lg border border-foreground/10">
                  <p className="font-semibold text-foreground/90 mb-2">{stat.title}</p>
                  <p className="text-sm text-foreground/70">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
