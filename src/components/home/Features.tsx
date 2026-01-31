import {
  BadgeCheck,
  Banknote,
  Briefcase,
  Building,
  Clock,
  FileCheck,
  Percent,
  ShieldCheck,
} from "lucide-react";
import { Section } from "../ui/Section";

export function Features() {
  const features = [
    { icon: BadgeCheck, text: "Chartered Accountant Expertise" },
    { icon: Percent, text: "Lowest Interest Rate" },
    { icon: Clock, text: "Faster Processing" },
    { icon: FileCheck, text: "Minimum Documents" },
    { icon: ShieldCheck, text: "Transparent Process" },
    { icon: Banknote, text: "Higher Funding Limits" },
    { icon: Building, text: "Multiple Bank Tie-ups" },
    { icon: Briefcase, text: "End-to-End Assistance" },
  ];

  return (
    <Section className="bg-primary text-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Makes Us <span className="text-accent">Different</span>
        </h2>
        <p className="text-white/80">
          We combine financial expertise with banking knowledge to deliver the
          best results for your business.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4 group"
          >
            <div className="w-20 h-20 rounded-full border-2 border-accent/30 bg-primary-light flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10 group-hover:scale-110">
              <feature.icon className="w-8 h-8 text-accent" />
            </div>
            <p className="font-semibold text-lg">{feature.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
