import { Dumbbell, HeartPulse, Target, Utensils, Activity, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      id: "01",
      title: "Strength Training",
      description: "Build strength, muscle and power with structured resistance training.",
      icon: Dumbbell,
    },
    {
      id: "02",
      title: "Cardio",
      description: "Improve endurance, conditioning and cardiovascular performance.",
      icon: HeartPulse,
    },
    {
      id: "03",
      title: "Personalized Workouts",
      description: "Training plans designed around your goals and current fitness level.",
      icon: Target,
    },
    {
      id: "04",
      title: "Nutrition Guidance",
      description: "Practical nutrition guidance to support performance and body composition goals.",
      icon: Utensils,
    },
    {
      id: "05",
      title: "Recovery",
      description: "Mobility, stretching and recovery practices to keep you training consistently.",
      icon: Activity,
    },
    {
      id: "06",
      title: "Expert Coaching",
      description: "Learn proper technique and train with experienced fitness professionals.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-text-primary mb-4 tracking-tight">
            MORE THAN A GYM. <br />
            <span className="text-primary">A BETTER WAY TO TRAIN.</span>
          </h2>
          <p className="text-text-secondary text-lg">
            We combine strength training, cardio, nutrition, recovery, coaching, and community to help you unlock your full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group bg-surface p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 flex flex-col items-start"
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="p-3 bg-surface-light rounded-md group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-border font-bebas text-3xl">{feature.id}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
