export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn effective coping strategies to manage anxiety, reduce stress, and regain control over overwhelming thoughts and feelings. We'll work together to identify triggers and develop personalized tools for lasting relief.",
      image: "/api/placeholder/400/300",
      fee: "$180 per session",
    },
    {
      title: "Relationship Counseling",
      description:
        "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection. Whether you're working on romantic partnerships, family dynamics, or friendships, we'll focus on building healthier patterns.",
      image: "/api/placeholder/400/300",
      fee: "$200 per session",
    },
    {
      title: "Trauma Recovery",
      description:
        "Heal from past traumatic experiences using evidence-based approaches like EMDR and trauma-focused CBT. Create a safe space to process difficult memories and develop resilience for moving forward with hope and strength.",
      image: "/api/placeholder/400/300",
      fee: "$190 per session",
    },
  ];

  return (
    <section className="py-20 bg-sage-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-sage-900 mb-4">
            Therapeutic Services
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Specialized care tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-sage-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-sage-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sage-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sage-700 font-medium">
                    {service.fee}
                  </span>
                  <button className="text-sage-600 hover:text-sage-800 font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
