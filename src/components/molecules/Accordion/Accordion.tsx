import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styles from './Accordion.module.css';

export interface AccordionItem {
  value: string;
  title: string;
  content: React.ReactNode;
}

type AccordionType = 'single' | 'multiple';

interface AccordionBaseProps {
  /**
   * Array of items to display in the accordion
   */
  items: AccordionItem[];
  /**
   * Whether the accordion is collapsible
   */
  collapsible?: boolean;
  /**
   * Additional class name for the accordion
   */
  className?: string;
}

interface SingleAccordionProps extends AccordionBaseProps {
  type?: 'single';
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

interface MultipleAccordionProps extends AccordionBaseProps {
  type: 'multiple';
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

type AccordionProps = SingleAccordionProps | MultipleAccordionProps;

export const Accordion: React.FC<AccordionProps> = ({
  items,
  type = 'single',
  collapsible = true,
  defaultValue,
  value,
  onValueChange,
  className,
}) => {
  return (
    <AccordionPrimitive.Root
      type={type}
      collapsible={collapsible}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={`${styles.accordion} ${className || ''}`}
    >
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
    </AccordionPrimitive.Root>
  );
}; 