import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./Feature.css";

function Features({ title, text, icon, btnName }) {
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
        {title && <Text fontWeight={600}>{title}</Text>}
        {text && <Text color={"gray.600"}>{text}</Text>}
        {btnName && (
          <Box marginTop={"25px"}>
            <Button
              backgroundColor={"#799447"}
              color={"white"}
              _hover={{
                backgroundColor: "#799447",
              }}
            >
              {btnName}
            </Button>
          </Box>
        )}
      </Stack>
    </>
  );
}

export default Features;
