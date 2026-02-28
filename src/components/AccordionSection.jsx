import { useState } from "react";
import { ChevronDown } from "lucide-react";

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className=" w-full flex items-center justify-between py-4 text-left"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title}
        </h1>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-4 text-gray-600">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function AccordionSection() {
  return (
    <div className="max-w-2xl mx-auto bg-[#F8FAFC]   p-4">
      <AccordionItem
        title="Can I upgrade or downgrade at any time?"
        content="You get full access to all features, premium support and future updates."
      />
      <AccordionItem
        title="What are the advantages of the Tidy Advanced Service?"
        content="Yes, you can cancel your subscription at any time with no extra fees."
      />
      <AccordionItem
        title="Are there any commissions in addition to the monthly plans?"
        content="We offer a 14-day money-back guarantee if you're not satisfied."
      />

      <AccordionItem
        title="Can I request a refund?"
        content="We offer a 14-day money-back guarantee if you're not satisfied."
      />

      <AccordionItem
        title="What are my payment options?"
        content="We offer a 14-day money-back guarantee if you're not satisfied."
      />

      <AccordionItem
        title="Do you offer a discount for universities and students?"
        content="We offer a 14-day money-back guarantee if you're not satisfied."
      />
    </div>
  );
}