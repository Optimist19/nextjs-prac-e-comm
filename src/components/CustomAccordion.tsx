import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CustomAccordion() {
  // State to track the open accordion
  const [openAccordion, setOpenAccordion] = useState(null);

  // Function to handle opening specific accordion item
  const handleOpenAccordion = (id) => {
    setOpenAccordion(id);
  };

  return (
    <div>
      {/* Text to trigger the accordion */}
      <p onClick={() => handleOpenAccordion("item-1")}>Open Accordion 1</p>
      <p onClick={() => handleOpenAccordion("item-2")}>Open Accordion 2</p>

      {/* Accordion component with controlled value */}
      <Accordion value={openAccordion} onValueChange={setOpenAccordion}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion 1</AccordionTrigger>
          <AccordionContent>
            Content for Accordion 1
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Accordion 2</AccordionTrigger>
          <AccordionContent>
            Content for Accordion 2
          </AccordionContent>
        </AccordionItem>

        {/* Add more AccordionItems as needed */}
      </Accordion>
    </div>
  );
}
