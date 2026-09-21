import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Strength & Muscle",
      description: "Build muscle and increase overall strength.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    },
    {
      title: "Fat Loss",
      description: "Structured training focused on sustainable fat loss.",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    },
    {
      title: "Functional Training",
      description: "Improve mobility, balance, strength and everyday movement.",
      image: "https://images.pexels.com/photos/4164844/pexels-photo-4164844.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    },
    {
      title: "HIIT",
      description: "Short, intense workouts designed to improve conditioning.",
      image: "https://images.pexels.com/photos/841125/pexels-photo-841125.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    },
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored to your goals.",
      image: "Personal.png?auto=compress&cs=tinysrgb&w=800&q=80",
    },
    {
      title: "Beginner Program",
      description: "A structured starting point for people new to training.",
      image: "https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-text-primary tracking-tight">
            TRAIN WITH PURPOSE.
          </h2>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              </div>
              <div className="relative p-6 -mt-16 bg-background rounded-t-xl mx-4 shadow-lg border border-border group-hover:border-primary/50 transition-colors">
                <h3 className="font-bold text-xl uppercase tracking-wide text-text-primary mb-2">
                  {program.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {program.description}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors text-sm uppercase tracking-wider"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
