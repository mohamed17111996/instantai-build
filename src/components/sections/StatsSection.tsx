export const StatsSection = () => {
  const stats = [
    { value: "30%", label: "Lead Increase" },
    { value: "20%", label: "Cost Reduction" },
    { value: "2x", label: "Efficiency Boost" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-8 text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};