"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { mockFaqs } from "@/shared/mock";

const AccordionComponent = () => {
  return (
    <Accordion
      variant="splitted"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      {mockFaqs.map((faq) => (
        <AccordionItem
          classNames={{
            base: "bg-bgStone750",
            title: "text-white",
            content: "text-base text-balance leading-6 text-white",
          }}
          key={faq.id}
          aria-label={faq.title}
          title={faq.title}
        >
          {faq.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
