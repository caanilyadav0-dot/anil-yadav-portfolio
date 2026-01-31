import { Award, CheckCircle2, UserCheck } from "lucide-react";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";

export function About() {
  const benefits = [
    { text: "Fast Turnaround Time", icon: CheckCircle2 },
    { text: "End to End Support", icon: UserCheck },
    { text: "No Hidden Charges", icon: Award },
    { text: "Unsecured Loans", icon: CheckCircle2 },
  ];

  return (
    <Section className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Intro */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <span className="w-12 h-1 bg-accent rounded-full"></span>
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Expert Financial Guidance by{" "}
            <span className="text-primary">CA Anil Kumar</span>
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            With over 15 years of experience in financial consulting, CA Anil
            Kumar has helped hundreds of MSMEs and startups secure the funding
            they need to grow. Our approach is distinct - we don't just process
            applications; we structure your financials to maximize eligibility.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            We understand the nuances of banking policies and leverage our
            strong network with nationalized and private banks to get you the
            best deals.
          </p>
        </div>

        {/* Right Column: Why Partner Card */}
        <div className="relative">
          {/* Decorator blob */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>

          <Card className="bg-primary text-white p-8 relative z-10 border-none shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
            <div className="space-y-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-white/10 p-2 rounded-full">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-medium text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
