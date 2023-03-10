import React from "react";
import { Box, Container, Link, Text } from "@chakra-ui/react";
import "./Header.css";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
function Header(props) {
  return (
    <>
      <Box className="header-wrapper">
        <Container maxW={"5xl"}>
          <Box className="inside-header">
            <Box>
              <Link href="mailto:abc@gmail.com">Email id: abc@gmail.com</Link>
            </Box>
            <Box>
              <Link href="tel:+91 2312322">PhoneNo: 1234567891</Link>
            </Box>
            <Box className="social_media">
              <AiFillLinkedin fontSize={"30px"} />
              <AiFillFacebook fontSize={"30px"} />
              <AiFillInstagram fontSize={"30px"} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Header;
