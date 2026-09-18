import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Athlete lifting weights"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80 md:bg-background/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <span className="text-primary font-bold tracking-widest text-sm md:text-base mb-4 uppercase">
          Your stronger self starts here
        </span>
        
        <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary mb-6 leading-none">
          BUILD YOUR <br className="hidden sm:block" />
          <span className="text-primary">STRONGEST SELF.</span>
        </h1>
        
        <p className="max-w-2xl text-text-secondary text-base md:text-lg lg:text-xl mb-10 leading-relaxed">
          Train harder. Move better. Get stronger. Expert coaching, structured programs and a community built to help you become your best.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#contact"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded text-base font-bold uppercase tracking-wide transition-all transform hover:-translate-y-1"
          >
            Start Training
          </Link>
          <Link
            href="#programs"
            className="w-full sm:w-auto bg-transparent border border-border hover:border-primary text-text-primary hover:text-primary px-8 py-4 rounded text-base font-bold uppercase tracking-wide transition-all"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
