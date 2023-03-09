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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const data = [
  {
    title: "Our Products",
    fields: [
      { label: "Field 1", value: "All Products", link: "/products" },
      { label: "Field 2", value: "Belt", link: "/products" },
      { label: "Field 3", value: "Wallet", link: "/products" },
      { label: "Field 3", value: "Bag" },
      { label: "Field 3", value: "Cusome Bag", link: "/products" },
    ],
  },
  {
    title: "Our Company",
    fields: [
      { label: "Field 4", value: "Home", link: "/" },
      { label: "Field 5", value: "Overses", link: "/about" },
      { label: "Field 5", value: "Courses", link: "/products" },
      { label: "Field 5", value: "Our Teams", link: "/contact" },
      { label: "Field 5", value: "Abouts Us", link: "/enquiry" },
      { label: "Field 5", value: "Contact Us", link: "/enquiry" },
    ],
  },
  {
    title: "Contact us",
    fields: [
      { label: "Field 6", value: "+91 442247 1672 / 5740" },
      { label: "Field 7", value: "sales@rittzaccessories.com" },
    ],
  },
  {
    title: "Location",
    fields: [
      { label: "Field 6", value: "Rittz Accessories" },
      { label: "Field 7", value: "#12, Pillayar Kovil Street," },
      { label: "Field 8", value: "Keelkattalai, Chennai-600117." },
      { label: "Field 9", value: "Tamilnadu, India" },
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
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={2}
          >
            <Stack spacing={6}>
              <Box backgroundColor="white" py={2} px={3} width={"65%"}>
                <Image
                  width="100%"
                  height={"55px"}
                  src="/Images/aspire_logo.webp"
                />
              </Box>
              <Text fontSize={"sm"}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2672181967973!2d80.17948431461177!3d12.954745290866907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e70b42dc23f%3A0x8b6608b9f8d90711!2sRitz%20Accessories!5e0!3m2!1sen!2sin!4v1678254560254!5m2!1sen!2sin"
                  width="300"
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
                  <Box style={{ cursor: "pointer" }} key={item.lable}>
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
        >
          <Box>
            <Text color="white">
              @{new Date().getFullYear()} Rittz Accessories. All rights
              reserved. Designed & Developed by Rittz Digital
            </Text>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Box fontSize={"30px"} color="white">
              <AiFillLinkedin />
            </Box>
            <Box fontSize={"30px"} color="white">
              <AiFillFacebook />
            </Box>
            <Box fontSize={"30px"} color="white">
              <AiFillInstagram />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Footer;
