import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0 text-muted-foreground", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-6 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h1>
      
      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>What insurance do you accept?</AccordionTrigger>
          <AccordionContent>
            For California patients, I accept Aetna, Carelon Behavioral Health, and some Blue Cross Blue Shield plans via Headway. For New York patients, I accept Aetna and Cigna via Alma.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you offer in-person appointments?</AccordionTrigger>
          <AccordionContent>
            Currently, my practice is 100% telehealth. This allows for greater flexibility and accessibility for patients across California and New York.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can you prescribe medication?</AccordionTrigger>
          <AccordionContent>
            Yes, as a medical doctor (MD), I can prescribe medications when clinically indicated. However, please note that I do not prescribe controlled substances (such as stimulants or benzodiazepines) via telehealth.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How long are sessions?</AccordionTrigger>
          <AccordionContent>
            Initial evaluations are typically 60 minutes. Follow-up psychotherapy sessions are 45 minutes. Medication management only visits (when appropriate) are 20-30 minutes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}