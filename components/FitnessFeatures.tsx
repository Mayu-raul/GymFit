import Image from "next/image";

export default function FitnessFeatures() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-text-primary tracking-tight">
            EVERYTHING YOU NEED <br />
            <span className="text-primary">TO GET RESULTS.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[600px]">
          {/* Main Large Image */}
          <div className="relative flex-1 rounded-lg overflow-hidden group min-h-[300px] lg:min-h-0">
            <Image
              src="https://images.pexels.com/photos/19254710/pexels-photo-19254710.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
              alt="Gym facility"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-bebas text-3xl text-white mb-2">Strength Zone</h3>
              <p className="text-text-secondary max-w-sm">
                Free weights, machines and functional equipment designed for serious training.
              </p>
            </div>
          </div>

          {/* Right Side Stack */}
          <div className="flex flex-col gap-6 w-full lg:w-[400px]">
            {/* Top Right Card */}
            <div className="relative flex-1 rounded-lg overflow-hidden group min-h-[250px]">
              <Image
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Cardio area"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-bebas text-2xl text-white mb-1">Cardio Zone</h3>
                <p className="text-text-secondary text-sm">
                  Treadmills, bikes, rowing machines and conditioning equipment.
                </p>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="relative flex-1 rounded-lg overflow-hidden group min-h-[250px]">
              <Image
                src="https://images.pexels.com/photos/4164841/pexels-photo-4164841.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Personal Training"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-bebas text-2xl text-white mb-1">Personal Training</h3>
                <p className="text-text-secondary text-sm">
                  One-on-one guidance from experienced trainers to reach your goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Text Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
          <div>
            <h4 className="font-bold uppercase text-text-primary mb-2">Group Training</h4>
            <p className="text-text-secondary text-sm">High-energy sessions designed around community and accountability.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-text-primary mb-2">Nutrition Support</h4>
            <p className="text-text-secondary text-sm">Guidance to align your nutrition with your training goals.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-text-primary mb-2">Recovery & Mobility</h4>
            <p className="text-text-secondary text-sm">Dedicated practices to improve movement and recovery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
