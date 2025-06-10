import { Accordion } from "@/components/molecules/Accordion/Accordion";

export default function AccordionDemoPage() {
  const accordionItems = [
    {
      value: "item-1",
      title: "What is ADA Compliance?",
      content: "ADA (Americans with Disabilities Act) compliance refers to making digital content accessible to people with disabilities. This includes ensuring proper keyboard navigation, screen reader compatibility, color contrast, and other accessibility features."
    },
    {
      value: "item-2",
      title: "Why is Accessibility Important?",
      content: "Accessibility is crucial because it ensures that everyone, regardless of their abilities, can access and use digital content. It's not just about compliance; it's about creating an inclusive digital experience for all users."
    },
    {
      value: "item-3",
      title: "How to Test for Accessibility?",
      content: "You can test for accessibility using various tools and methods: keyboard navigation testing, screen reader testing, color contrast checkers, and automated testing tools like axe or Lighthouse."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Accordion Component</h1>
      <div className="grid gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Single Accordion</h2>
          <Accordion items={accordionItems} />
        </div>
        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-medium">Multiple Accordion</h2>
          <Accordion items={accordionItems} defaultValue={["item-1"]} />
        </div>
      </div>
    </div>
  );
} 