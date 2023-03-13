import React, { useState } from "react";
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
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
const initial = {
  name: "",
  email: "",
  mobilenumber: "",
  program: "",
  message: "",
};
function RequestForm({ check }) {
  const [formData, setFormData] = useState(initial);
  const { name, email, mobilenumber, program, message } = formData;
  const handleCatch = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t78aj5w",
        "template_kfwsj7p",
        e.target,
        "OTViQfEUQojir13_q"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setFormData({
            ...formData,
            name: "",
            email: "",
            mobilenumber: "",
            program: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Error sending email.");
        }
      );
  };
  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} py={3} px={4} w={"100%"}>
          <Box rounded={"lg"} backgroundColor={"rgba(255,255,255,0.81)"} p={8}>
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
              <form onSubmit={handleSubmit}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="name"
                    value={name}
                    name={"name"}
                    onChange={handleCatch}
                    placeholder={"Enter name"}
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    value={email}
                    name={"email"}
                    onChange={handleCatch}
                    type="email"
                    placeholder={"Enter email"}
                  />
                </FormControl>
                <FormControl id="mobilenumber">
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    value={mobilenumber}
                    name={"mobilenumber"}
                    onChange={handleCatch}
                    type="tel"
                    placeholder={"Enter mobile Number"}
                  />
                </FormControl>

                <FormControl id="program">
                  <Select
                    mt={4}
                    value={program}
                    name={"program"}
                    onChange={handleCatch}
                    placeholder="Program"
                  >
                    <option value="ielts_calssroom">IELTS Classroom</option>
                    <option value="ielts_online_batch">
                      IELTS Online Batch
                    </option>
                    <option value="one_on_one">IELTS One-On-One</option>
                    <option value="online_prep">IELTS Online Prep</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Textarea
                    mt={4}
                    mb={4}
                    value={message}
                    name="message"
                    onChange={handleCatch}
                    placeholder="message"
                    size="sm"
                  />
                </FormControl>

                <Stack spacing={10}>
                  <Button
                    type={"submit"}
                    bg={"#799447"}
                    color={"white"}
                    _hover={{
                      bg: "#799460",
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default RequestForm;
