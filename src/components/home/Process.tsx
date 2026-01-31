import {
  ArrowRight,
  FileSearch,
  HandCoins,
  PhoneCall,
  UploadCloud,
} from "lucide-react";
import { Section } from "../ui/Section";

export function Process() {
  const steps = [
    {
      icon: PhoneCall,
      title: "Contact Us",
      description:
        "Get in touch with our experts to discuss your financial requirements.",
    },
    {
      icon: UploadCloud,
      title: "Document Submission",
      description:
        "Submit the necessary documents online for initial screening.",
    },
    {
      icon: FileSearch,
      title: "Analysis & Structure",
      description:
        "We analyze your profile and structure the loan for maximum eligibility.",
    },
    {
      icon: HandCoins,
      title: "Approval & Disbursal",
      description:
        "Get faster sanctions from our partner banks and quick disbursal.",
    },
  ];

  return (
    <Section className="bg-neutral-50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Your Path to <span className="text-primary">Funding</span>
        </h2>
        <p className="text-neutral-600">
          A simple, transparent, and hassle-free process designed to get you the
          funds you need, when you need them.
        </p>
      </div>

      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-primary/20 -z-10"></div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-primary/10 flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:border-accent group-hover:scale-110">
                <step.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 w-full h-full hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-neutral-100 mb-2 absolute -mt-10 ml-4 hidden md:block select-none pointer-events-none">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-neutral-600 relative z-10">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight className="md:hidden w-6 h-6 text-neutral-300 my-4 rotate-90" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
