export default function Stats() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "5K+", label: "Members Trained" },
    { value: "20+", label: "Expert Trainers" },
    { value: "50+", label: "Weekly Classes" },
  ];

  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-bebas text-5xl md:text-6xl text-white mb-2">
                <span className="text-primary">{stat.value.slice(0, -1)}</span>
                <span className="text-white">{stat.value.slice(-1)}</span>
              </div>
              <div className="text-text-secondary text-sm md:text-base font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
