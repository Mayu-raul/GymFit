import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Johnson",
      goal: "Strength & Muscle",
      quote: "The coaching here completely changed how I approach lifting. I've broken through plateaus I was stuck on for years and finally built the strength I wanted.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
    },
    {
      name: "Sarah Chen",
      goal: "Fat Loss & Conditioning",
      quote: "I used to hate going to the gym, but the community and structured programs here make it something I look forward to. Down 20lbs and stronger than ever.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
    },
    {
      name: "David Miller",
      goal: "Functional Training",
      quote: "At 45, my focus is on staying healthy and moving pain-free. The trainers customized everything for my needs, and I haven't felt this athletic since college.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            REAL PEOPLE. <br className="md:hidden" />
            <span className="text-primary">REAL RESULTS.</span>
          </h2>
          <p className="text-text-secondary text-lg">
            See how our members are training harder, building confidence and changing their relationship with fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-surface p-8 rounded-lg border border-border relative">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-text-primary text-lg mb-8 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wide">{testimonial.name}</h4>
                  <p className="text-primary text-sm font-medium">{testimonial.goal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
