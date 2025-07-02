import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "I am an out-of-network provider for most insurance plans. I can provide you with a superbill to submit to your insurance for potential reimbursement. Many clients find that using their Health Savings Account (HSA) or Flexible Spending Account (FSA) helps offset costs.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes, I offer secure telehealth sessions for clients throughout California. Online therapy can be just as effective as in-person sessions and provides greater flexibility and accessibility. All sessions are conducted through a HIPAA-compliant platform.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "I require 24 hours notice for cancellations or rescheduling. Sessions cancelled with less than 24 hours notice may be charged the full session fee. I understand that emergencies happen, and we can discuss these situations on a case-by-case basis.",
    },
    {
      question: "How long are therapy sessions?",
      answer:
        "Standard therapy sessions are 50 minutes long. Initial consultations may take up to 90 minutes to allow time for a comprehensive assessment and treatment planning discussion.",
    },
    {
      question: "How often should I attend therapy?",
      answer:
        "Most clients benefit from weekly sessions initially. As you progress, we may adjust the frequency based on your needs and goals. Some clients transition to bi-weekly or monthly sessions for maintenance and continued growth.",
    },
    {
      question: "Is therapy confidential?",
      answer:
        "Yes, everything discussed in therapy is strictly confidential with very limited exceptions required by law (such as imminent danger to self or others, or suspected child/elder abuse). I will always discuss any confidentiality concerns with you first whenever possible.",
    },
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-sage-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-sage-600">
            Common questions about therapy and my practice
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-sage-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-sage-900 hover:text-sage-700">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sage-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
