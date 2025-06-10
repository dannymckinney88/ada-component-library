import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styles from './Accordion.module.css';

export interface AccordionItem {
  value: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionBaseProps {
  /**
   * Array of items to display in the accordion
   */
  items: AccordionItem[];
  /**
   * Additional class name for the accordion
   */
  className?: string;
}

interface SingleAccordionProps extends AccordionBaseProps {
  /**
   * Default value of the accordion
   */
  defaultValue?: string;
  /**
   * Current value of the accordion
   */
  value?: string;
  /**
   * Callback function to handle value changes
   */
  onValueChange?: (value: string) => void;
}

interface MultipleAccordionProps extends AccordionBaseProps {
  /**
   * Default values of the accordion
   */
  defaultValue?: string[];
  /**
   * Current values of the accordion
   */
  value?: string[];
  /**
   * Callback function to handle value changes
   */
  onValueChange?: (value: string[]) => void;
}

const AccordionContent = ({ items }: { items: AccordionItem[] }) => (
  <>
    {items.map((item) => (
      <AccordionPrimitive.Item
        key={item.value}
        value={item.value}
        className={styles.accordionItem}
      >
        <AccordionPrimitive.Header className={styles.accordionHeader}>
          <AccordionPrimitive.Trigger className={styles.accordionTrigger}>
            {item.title}
            <ChevronDownIcon className={styles.chevron} aria-hidden />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className={styles.accordionContent}>
          <div className={styles.accordionContentInner}>{item.content}</div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    ))}
  </>
);

export const SingleAccordion: React.FC<SingleAccordionProps> = (props) => (
  <AccordionPrimitive.Root
    type="single"
    defaultValue={props.defaultValue}
    value={props.value}
    onValueChange={props.onValueChange}
    className={`${styles.accordion} ${props.className || ''}`}
  >
    <AccordionContent items={props.items} />
  </AccordionPrimitive.Root>
);

export const MultipleAccordion: React.FC<MultipleAccordionProps> = (props) => (
  <AccordionPrimitive.Root
    type="multiple"
    defaultValue={props.defaultValue}
    value={props.value}
    onValueChange={props.onValueChange}
    className={`${styles.accordion} ${props.className || ''}`}
  >
    <AccordionContent items={props.items} />
  </AccordionPrimitive.Root>
);

export const Accordion: React.FC<SingleAccordionProps | MultipleAccordionProps> = (props) => {
  if ('defaultValue' in props && Array.isArray(props.defaultValue)) {
    return <MultipleAccordion {...(props as MultipleAccordionProps)} />;
  }
  return <SingleAccordion {...(props as SingleAccordionProps)} />;
}; 