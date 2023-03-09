import React from "react";
import "./Heading.css";
import { Text } from "@chakra-ui/react";
function Heading({ title }) {
  return (
    <>
      <Text className="Headings" p={"0"} textAlign={"left"}>
        {title}
      </Text>
    </>
  );
}

export default Heading;
