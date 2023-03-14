import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./Feature.css";
import { useNavigate } from "react-router-dom";

function Features({ title, text, icon, btnName, id }) {
  const navigate = useNavigate();
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
        {text && (
          <Text textAlign={"center"} color={"gray.600"}>
            {text}
          </Text>
        )}
        {btnName == "Read More" && (
          <Box marginTop={"25px"}>
            <Button
              onClick={() => navigate(`/blog/${id}`)}
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
        {btnName == "More detail" && (
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
