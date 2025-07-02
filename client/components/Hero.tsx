import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sage-50 to-sage-100 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-sage-900 mb-6 leading-tight">
          Welcome, I'm{" "}
          <span className="font-medium text-sage-700">Dr. Serena Blake</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-sage-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Helping you manage anxiety, heal from trauma, and build stronger
          relationships through compassionate, evidence-based therapy
        </p>
        <Button
          size="lg"
          className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Book a Free Consult
        </Button>
      </div>
    </section>
  );
}
