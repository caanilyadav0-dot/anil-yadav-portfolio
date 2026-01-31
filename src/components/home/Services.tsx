import {
  ArrowRight,
  Briefcase,
  Building2,
  Coins,
  Factory,
  Landmark,
  Wallet,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";

export function Services() {
  const services = [
    {
      title: "Working Capital Loans",
      description:
        "Manage your day-to-day operations smoothy with our tailored working capital solutions.",
      icon: Wallet,
      benefits: ["CC / OD Limits", "Trade Finance", "Export Credit"],
    },
    {
      title: "Business Loans",
      description:
        "Unsecured business loans for expansion, inventory, or cash flow management.",
      icon: Briefcase,
      benefits: ["No Collateral", "Quick Disbursal", "Flexible Tenure"],
    },
    {
      title: "Machinery Loans",
      description:
        "Upgrade your manufacturing unit with the latest machinery and equipment.",
      icon: Factory,
      benefits: ["Up to 90% funding", "CGTMSE Available", "Long Repayment"],
    },
    {
      title: "Project Finance",
      description:
        "End-to-end funding solutions for greenfield and brownfield projects.",
      icon: Building2,
      benefits: ["Term Loans", "Detailed Project Report", "Financial Modeling"],
    },
    {
      title: "Startup Funding",
      description:
        "Seed capital and growth funding for innovative startups and new ventures.",
      icon: Coins,
      benefits: ["Angel Investment", "Venture Debt", "Mudra Loans"],
    },
    {
      title: "Loan Against Property",
      description:
        "Leverage your real estate asset to unlock high-value funds for business needs.",
      icon: Landmark,
      benefits: ["Low Interest Rates", "Higher LTV", "Longest Tenure"],
    },
  ];

  return (
    <Section className="bg-neutral-100">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Complete Business{" "}
          <span className="text-primary">Finance Solutions</span>
        </h2>
        <p className="text-neutral-600">
          We offer a comprehensive range of financial products tailored to meet
          the diverse needs of businesses at every stage of growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            hoverEffect
            className="p-6 flex flex-col h-full border-t-4 border-t-primary"
          >
            <div className="bg-primary/5 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <service.icon className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              {service.title}
            </h3>
            <p className="text-neutral-600 mb-6 flex-grow">
              {service.description}
            </p>

            <div className="space-y-2 mb-6">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Key Benefits
              </p>
              <ul className="text-sm text-neutral-700 space-y-1">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full mt-auto group"
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
