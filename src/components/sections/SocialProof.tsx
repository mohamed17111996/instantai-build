export const SocialProof = () => {
  const testimonials = [
    {
      quote: "Instantaibuild transformed our operations overnight. The AI implementation was seamless.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
    },
    {
      quote: "Our team's productivity doubled within weeks of using Instantaibuild's solutions.",
      author: "Michael Chen",
      role: "Operations Director, InnovateCo",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold heading-gradient text-center mb-16">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card p-8 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p className="text-lg mb-6 text-black/90">{testimonial.quote}</p>
              <div>
                <div className="font-semibold text-black">{testimonial.author}</div>
                <div className="text-black/60 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};