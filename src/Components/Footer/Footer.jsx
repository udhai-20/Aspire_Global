import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Divider,
  // Link,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const data = [
  {
    title: "Our Program",
    fields: [
      { label: "Field 1", value: "IELTS Classroom", link: "/" },
      { label: "Field 2", value: "IELTS Online Batch", link: "/" },
      { label: "Field 3", value: "IELTS One-On-One", link: "/" },
      { label: "Field 3", value: "IELTS ONline Prep" },
    ],
  },
  {
    title: "Our Company",
    fields: [
      { label: "Field 4", value: "Home", link: "/" },
      { label: "Field 5", value: "About IELTS", link: "/" },
      { label: "Field 5", value: "Program", link: "/" },
      { label: "Field 5", value: "Test prep", link: "/" },
      { label: "Field 5", value: "Success Stories", link: "/" },
      { label: "Field 5", value: "Blogs", link: "/" },
    ],
  },
  {
    title: "Contact us",
    fields: [
      { label: "Field 6", value: "+91 9591722199" },
      { label: "Field 7", value: "aspireglobaleducation@gmail.com" },
    ],
  },
  {
    title: "Location",
    fields: [
      { label: "Field 6", value: "Aspire Global education" },
      { label: "Field 7", value: "2nd floor, CRM Soubhagya complex," },
      { label: "Field 8", value: "above G Pulla reddy sweets," },
      { label: "Field 8", value: "Next to spice garden bus stop," },
      { label: "Field 9", value: "Marathahalli, Bangalore" },
    ],
  },
];
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

function Footer(props) {
  return (
    <>
      <Box bg={useColorModeValue("black")}>
        <Container as={Stack} maxW={"8xl"} py={3}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr 1fr" }}
            spacing={5}
          >
            <Stack spacing={6}>
              <Box
                backgroundColor="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                py={1}
                width={"100%"}
              >
                <Image
                  width={{ md: "80%", base: "50%" }}
                  height={"70px"}
                  src="/Images/aspire_logo.webp"
                />
              </Box>
              <Text fontSize={"sm"}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.239044702346!2d77.70777941434521!3d12.956549890865787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1236b4dd5d73%3A0x4e9ee936625ddac4!2sAspire%20Global%20Education!5e0!3m2!1sen!2sin!4v1678702373174!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  allowFullScreen=""
                  className="border-0 w-100"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Text>
            </Stack>
            {data.map((elem) => (
              <Stack align={"flex-start"} key={elem.title} color="white">
                <ListHeader>{elem.title}</ListHeader>
                {elem.fields.map((item) => (
                  <Box style={{ cursor: "pointer" }} key={item.value}>
                    <Link to={item.link || "#"}>{item.value}</Link>
                  </Box>
                ))}
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        borderColor={useColorModeValue("white")}
        backgroundColor="black"
        borderTopWidth={1}
        alignItems="center"
      >
        <SimpleGrid
          columns={2}
          spacingX="40px"
          spacingY="20px"
          width="90%"
          display="flex"
          justifyContent="center"
          px={3}
        >
          <Box display="flex" justifyContent="center">
            <Text color="white">
              @{new Date().getFullYear()} Aspire Global Education. All rights
              reserved. Designed & Developed by Rittz Digital
            </Text>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Box fontSize={"30px"} color="white">
              <Link
                to="https://www.linkedin.com/company/rittz-digital/"
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </Box>
            <Link
              to="https://www.facebook.com/rittzaccessories/?ref=rittzaccessoriesweb"
              target="_blank"
            >
              <Box fontSize={"30px"} color="white">
                <AiFillFacebook />
              </Box>
            </Link>
            <Link
              to="https://www.instagram.com/rittz.accessories/?ref=rittzaccessoriesweb"
              target="_blank"
            >
              <Box fontSize={"30px"} color="white">
                <AiFillInstagram />
              </Box>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Footer;
