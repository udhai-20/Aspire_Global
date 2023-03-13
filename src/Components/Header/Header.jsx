import React from "react";
import { Box, Container, Link, Text } from "@chakra-ui/react";
import "./Header.css";
import { AiFillLinkedin, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
function Header(props) {
  return (
    <>
      <Box className="header-wrapper">
        <Container maxW={"5xl"}>
          <Box className="inside-header">
            <Box>
              <Link href="mailto:aspireglobaleducation@gmail.com">
                Email: aspireglobaleducation@gmail.com
              </Link>
            </Box>
            <Box>
              <Link href="tel:+91  9591722199 ">PhoneNo:+91 9591722199 </Link>
            </Box>
            <Box className="social_media">
              <Link
                href="https://www.linkedin.com/company/aspire-global-education/"
                target="_blank"
              >
                <AiFillLinkedin color="blue" fontSize={"30px"} />
              </Link>
              <Link
                href="https://www.youtube.com/@aspireglobaleducation"
                target="_blank"
              >
                <AiFillYoutube color="red" fontSize={"30px"} />
              </Link>
              <Link
                href="https://www.instagram.com/aspireglobal_education/"
                target="_blank"
              >
                <AiFillInstagram className="header_insta" fontSize={"30px"} />
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Header;
