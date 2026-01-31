import { clsx, type ClassValue } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden mb-4 bg-white shadow-sm">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between p-4 md:p-6 text-left transition-colors",
          isOpen
            ? "bg-primary/5 text-primary font-semibold"
            : "bg-white text-neutral-800 font-medium hover:bg-neutral-50",
        )}
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-200",
            isOpen ? "transform rotate-180" : "",
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 md:p-6 border-t border-neutral-100 bg-white">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((current) =>
        current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index],
      );
    } else {
      setOpenIndexes((current) => (current.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
