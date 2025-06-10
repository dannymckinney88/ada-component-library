import { Button } from "@/components/atoms/Button/Button";
import { Accordion } from "@/components/molecules/Accordion/Accordion";
import { UpdateIcon, DownloadIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
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
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">ADA Component Library</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Button Component</h2>
          <div className="grid gap-8">
            {/* Basic Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Basic Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="tertiary">Tertiary Button</Button>
              </div>
            </div>

            {/* Size Variants */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Size Variants</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="small">Small Button</Button>
                <Button size="medium">Medium Button</Button>
                <Button size="large">Large Button</Button>
              </div>
            </div>

            {/* Icon Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Icon Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button icon="PlusIcon">Add Item</Button>
                <Button icon="DownloadIcon">Download</Button>
                <Button icon="UpdateIcon">Update</Button>
              </div>
            </div>

            {/* State Variants */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">State Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button isLoading>Loading Button</Button>
                <Button disabled>Disabled Button</Button>
                <Button ariaLabel="Submit form">Accessible Button</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Accordion Component</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Single Accordion</h3>
            <Accordion items={accordionItems} />
          </div>
          <div className="space-y-4 mt-8">
            <h3 className="text-xl font-medium">Multiple Accordion</h3>
            <Accordion 
              items={accordionItems} 
              defaultValue={['item-1']}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
