import { Check } from "lucide-react";
import { Accordion } from "../ui/Accordion";
import { Section } from "../ui/Section";

export function Documents() {
  const kycDocs = [
    "PAN Card of Applicant & Co-applicant",
    "Aadhar Card / Voter ID / Passport",
    "Current Address Proof (Electricity Bill/Rent Agreement)",
    "Udyam Registration Certificate",
    "GST Registration Certificate",
  ];

  const financialDocs = [
    "Last 3 Years ITR with Computation",
    "Last 3 Years Audited Balance Sheet & P&L",
    "Last 12 Months Bank Statement (Current & Savings)",
    "Sanction Letter of Existing Loans (if any)",
    "Provisional Financials for Current Year",
  ];

  const List = ({ items }: { items: string[] }) => (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="mt-1 min-w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-3 h-3 text-green-600" />
          </div>
          <span className="text-neutral-600">{item}</span>
        </li>
      ))}
    </ul>
  );

  const accordionItems = [
    {
      title: "KYC & Business Proof",
      content: <List items={kycDocs} />,
    },
    {
      title: "Financial Documents",
      content: <List items={financialDocs} />,
    },
  ];

  return (
    <Section className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Documents <span className="text-primary">Required</span>
          </h2>
          <p className="text-neutral-600 mb-8">
            To ensure a smooth and fast processing of your loan application,
            please keep the following documents ready. Our team will guide you
            if any additional documents are needed based on your specific
            profile.
          </p>
          <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-100">
            <h4 className="font-semibold text-yellow-800 mb-2">Note:</h4>
            <p className="text-sm text-yellow-700">
              For Private Limited Companies and Partnerships, additional
              documents like MOA/AOA or Partnership Deed will be required.
            </p>
          </div>
        </div>

        <div>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </Section>
  );
}
