import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden border-t border-border">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2228561/pexels-photo-2228561.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Dark gym background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-bebas text-5xl md:text-7xl text-white mb-6 tracking-tight">
          READY TO GET <span className="text-primary">STRONGER?</span>
        </h2>
        
        <p className="text-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Stop waiting for the perfect time. Start building the body and strength you've been working toward.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded text-lg font-bold uppercase tracking-wider transition-transform transform hover:-translate-y-1 shadow-lg shadow-primary/20"
          >
            Join the Gym
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary px-10 py-5 rounded text-lg font-bold uppercase tracking-wider transition-colors"
          >
            Book a Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
}
