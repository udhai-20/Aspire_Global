import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./Feature.css";

function Features({ title, text, icon }) {
  return (
    <>
      <Stack
        borderRadius={"20px"}
        className="feature-wrapper"
        align={"center"}
        p={1}
      >
        <Flex w={"60%"} h={"60%"} align={"center"} justify={"center"}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.600"}>{text}</Text>
      </Stack>
    </>
  );
}

export default Features;
