import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
function AccordionsMenu({ title, desc }) {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                fontSize={"1rem"}
                color={" #799447"}
                fontWeight={600}
                flex="1"
                textAlign="left"
              >
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontSize={".875rem"} color={"#747474"} pb={4}>
            {desc}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default AccordionsMenu;
