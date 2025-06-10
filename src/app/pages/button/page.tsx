import { Button } from "@/components/atoms/Button/Button";
import { PlusIcon, DownloadIcon, UpdateIcon } from "@radix-ui/react-icons";

export default function ButtonDemoPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Button Component</h1>
      <div className="grid gap-8">
        {/* Basic Variants */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Basic Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
          </div>
        </div>
        {/* Size Variants */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Size Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button size="small">Small Button</Button>
            <Button size="medium">Medium Button</Button>
            <Button size="large">Large Button</Button>
          </div>
        </div>
        {/* Icon Buttons */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Icon Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button icon="PlusIcon">Add Item</Button>
            <Button icon="DownloadIcon">Download</Button>
            <Button icon="UpdateIcon">Update</Button>
          </div>
        </div>
        {/* State Variants */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">State Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button isLoading>Loading Button</Button>
            <Button disabled>Disabled Button</Button>
            <Button ariaLabel="Submit form">Accessible Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 