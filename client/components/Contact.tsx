import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us what brings you here";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
      alert("Thank you for reaching out! I'll be in touch within 24 hours.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section className="py-20 bg-sage-50 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-sage-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-sage-600">
            Ready to begin your journey? Reach out for a free consultation
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sage-800">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`mt-1 ${
                    errors.name ? "border-red-500" : "border-sage-200"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-sage-800">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`mt-1 ${
                    errors.phone ? "border-red-500" : "border-sage-200"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sage-800">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 ${
                  errors.email ? "border-red-500" : "border-sage-200"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-sage-800">
                What brings you here? *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`mt-1 ${
                  errors.message ? "border-red-500" : "border-sage-200"
                }`}
                placeholder="Please share a bit about what you're hoping to work on..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="preferredTime" className="text-sage-800">
                Preferred Time for Contact
              </Label>
              <Input
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="mt-1 border-sage-200"
                placeholder="e.g., Weekday mornings, Tuesday evenings..."
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => {
                  setFormData((prev) => ({ ...prev, consent: !!checked }));
                  if (errors.consent) {
                    setErrors((prev) => ({ ...prev, consent: "" }));
                  }
                }}
                className={errors.consent ? "border-red-500" : ""}
              />
              <Label
                htmlFor="consent"
                className="text-sm text-sage-600 leading-relaxed"
              >
                I consent to Dr. Serena Blake contacting me via phone or email
                regarding my inquiry. I understand that this form is not secure
                and should not include sensitive health information. *
              </Label>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-sm">{errors.consent}</p>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 text-lg rounded-full transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
