export default function About() {
  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-light text-sage-900 mb-6">
              About Dr. Serena Blake
            </h2>
            <div className="text-sage-700 leading-relaxed space-y-4">
              <p>
                With over 15 years of experience in clinical psychology, I
                specialize in helping individuals navigate life's most
                challenging moments. My approach combines evidence-based
                therapeutic techniques with a warm, compassionate environment
                where healing can truly begin.
              </p>
              <p>
                I earned my Ph.D. in Clinical Psychology from Stanford
                University and completed my postdoctoral fellowship at UCSF
                Medical Center. I'm licensed in California and offer both
                in-person and telehealth sessions to better serve my clients'
                needs.
              </p>
              <p>
                My practice focuses on creating a safe, non-judgmental space
                where you can explore your thoughts, feelings, and experiences.
                Together, we'll work towards your goals using personalized
                treatment plans that honor your unique journey.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-medium text-sage-800 mb-3">
                Credentials & Training
              </h3>
              <ul className="text-sage-600 space-y-1">
                <li>• Ph.D. Clinical Psychology, Stanford University</li>
                <li>• Licensed Clinical Psychologist (CA #PSY12345)</li>
                <li>• Certified in EMDR Therapy</li>
                <li>• Cognitive Behavioral Therapy (CBT) Specialist</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-80 h-96 bg-sage-100 rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7578806/pexels-photo-7578806.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dr. Serena Blake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
