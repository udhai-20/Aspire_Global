import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Select,
} from "@chakra-ui/react";
function RequestForm({ check }) {
  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} py={3} px={4} w={"100%"}>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            // boxShadow={"lg"}
            backgroundColor={"rgba(255,255,255,0.81)"}
            p={8}
          >
            <Box
              fontSize={"xl"}
              color={"#799447"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text>Contact Us</Text>
            </Box>
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="name" placeholder={"Enter name"} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder={"Enter email"} />
              </FormControl>
              <FormControl id="mobilenumber">
                <FormLabel>Mobile Number</FormLabel>
                <Input type="tel" placeholder={"Enter mobile Number"} />
              </FormControl>
              {/* <FormControl id="center">
                <Select placeholder="Select Center">
                  <option value="online">Online</option>
                  <option value="outside_india">OutSide India</option>
                  <option value="chennai">Chennai</option>
                </Select>
              </FormControl> */}
              <FormControl id="program">
                <Select placeholder="Program">
                  <option value="ielts_calssroom">IELTS Classroom</option>
                  <option value="ielts_online_batch">IELTS Online Batch</option>
                  <option value="one_on_one">IELTS One-On-One</option>
                  <option value="online_prep">IELTS Online Prep</option>
                </Select>
              </FormControl>

              <Stack spacing={10}>
                <Button
                  bg={"#799447"}
                  color={"white"}
                  _hover={{
                    bg: "#799460",
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default RequestForm;
