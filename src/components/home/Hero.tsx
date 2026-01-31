import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

export function Hero() {
  const highlights = [
    "Multiple Bank Tie-ups",
    "Paperless Process",
    "Faster Processing",
    "Lowest Interest Rates",
  ];

  return (
    <Section className="bg-gradient-to-br from-primary via-primary to-[#001f40] text-white min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Column: Text & CTA */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/20">
            Business Finance Expert
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Fuel Your Business Growth with the{" "}
            <span className="text-accent">Right Finance</span>
          </h1>
          <p className="text-xl text-neutral-200 font-medium">
            Working Capital | Business Loans | Project Finance | Expert CA
            Advisory
          </p>
          <p className="text-neutral-300 max-w-lg">
            Chartered Accountant led financial solutions to help MSMEs, traders,
            manufacturers & startups get faster approvals and higher funding
            limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="secondary" size="lg" className="group">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Check Eligibility
            </Button>
          </div>
        </div>

        {/* Right Column: Highlights Grid */}
        <div className="flex justify-center md:justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex flex-col gap-3 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-8 h-8 text-accent" />
                <span className="font-semibold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
