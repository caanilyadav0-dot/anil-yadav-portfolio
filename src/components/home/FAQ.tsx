import { Accordion } from "../ui/Accordion";
import { Section } from "../ui/Section";

export function FAQ() {
  const faqs = [
    {
      title: "Who is eligible for a business loan?",
      content:
        "Any business entity (Proprietorship, Partnership, LLP, Pvt Ltd) with a vintage of at least 3 years and profitable turnovers is eligible. Specific criteria depend on the loan type.",
    },
    {
      title: "Do you charge any upfront fees?",
      content:
        "No, we do not charge any upfront fees. Our consulting charges are applicable only after the sanction of the loan facility.",
    },
    {
      title: "How much funding can I get?",
      content:
        "Funding eligibility depends on your financials, turnover, and profitability. We help structure your proposal to maximize your eligibility limit.",
    },
    {
      title: "What is the interest rate?",
      content:
        "Interest rates vary based on the product (Unsecured vs Secured) and your credit profile. Since we work with top nationalized and private banks, we ensure you get the most competitive rates in the market.",
    },
    {
      title: "How long does the process take?",
      content:
        "For unsecured loans, the process typically takes 5-7 working days. For secured and project finance, it may take 15-20 days depending on document readiness.",
    },
  ];

  return (
    <Section className="bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-neutral-600">
            Have questions? We have answers. If you don't see your question
            here, feel free to contact us.
          </p>
        </div>

        <Accordion
          items={faqs.map((f) => ({
            ...f,
            content: (
              <p className="text-neutral-600 leading-relaxed">{f.content}</p>
            ),
          }))}
        />
      </div>
    </Section>
  );
}
