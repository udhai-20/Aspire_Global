import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import "./Navbar.css";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
function Navbar(props) {
  const [hover, setHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("  location:", pathname);
  const over = () => {
    setHover(true);
  };

  const end = () => {
    setHover(false);
  };
  return (
    <>
      <Box
        className="nav-wrapper"
        px={4}
        py={3}
        shadow={"md"}
        position={"sticky"}
        top={"0"}
        zIndex={1000}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            className=""
            alignItems="center"
            py={0}
            size={"xl"}
            fontSize="40px"
            border="1px solid"
            icon={
              isOpen ? (
                <CloseIcon display={"block"} padding={"2px"} />
              ) : (
                <HamburgerIcon display={"block"} padding={"2px"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                cursor="pointer"
                onClick={() => navigate("/")}
                src="/Images/aspire_logo.webp"
              />
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={20}
              display={{ base: "none", md: "flex" }}
              className="right_side"
            >
              {pathname == "/blog" ? (
                <Link
                  // href="/#about2"
                  onClick={() => {
                    navigate("/#about");
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange  ",
                  }}
                >
                  About IELTS
                </Link>
              ) : (
                <Link
                  href="/#about"
                  onClick={() => {
                    navigate("/#about");
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  About IELTS
                </Link>
              )}

              {pathname == "/blog" ? (
                <Link
                  onClick={() => navigate("/#program")}
                  // href="#program"
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange  ",
                  }}
                >
                  Program
                </Link>
              ) : (
                <Link
                  href="/#program"
                  onClick={() => {
                    navigate("/#program");
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Program
                </Link>
              )}

              <Stack rounded={"md"}>
                {pathname == "/blog" ? (
                  <Link
                    className="nav-course"
                    // href="#testprep"
                    onClick={() => navigate("/#testprep")}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      // bg: useColorModeValue("gray.200", "gray.700"),
                      color: "orange  ",
                    }}
                    onMouseEnter={over}
                  >
                    Test Prep
                  </Link>
                ) : (
                  <Link
                    href="/#testprep"
                    onClick={() => {
                      navigate("/#testprep");
                    }}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      color: "orange",
                    }}
                  >
                    Test Prep
                  </Link>
                )}
              </Stack>
              {pathname == "/blog" ? (
                <Link
                  // href="#testimonials"
                  onClick={() => navigate("/#testimonials")}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    // bg: useColorModeValue("gray.200", "gray.700"),
                    color: "orange  ",
                  }}
                >
                  Success Stories
                </Link>
              ) : (
                <Link
                  href="/#testimonials"
                  onClick={() => {
                    navigate("/#testimonials");
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Success Stories
                </Link>
              )}

              {pathname == "/blog" ? (
                <Link
                  onClick={() => {
                    navigate("/");
                    navigate("/#faqs");
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    // bg: useColorModeValue("gray.200", "gray.700"),
                    color: "orange  ",
                  }}
                >
                  FAQS
                </Link>
              ) : (
                <Link
                  href="/#faqs"
                  onClick={() => {
                    navigate("/#faqs");
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Faqs
                </Link>
              )}

              <Link
                onClick={() => navigate("/blog")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Blogs
              </Link>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {pathname == "/blog" ? (
                <Link
                  href="/#about"
                  onClick={() => {
                    navigate("/#about");
                    return onClose();
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  About IELTS
                </Link>
              ) : (
                <Link
                  href="/#about"
                  onClick={() => {
                    navigate("/#about");
                    return onClose();
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  About IELTS
                </Link>
              )}

              {pathname == "/blog" ? (
                <Link
                  href="/#program"
                  onClick={() => {
                    navigate("/#program");
                    return onClose();
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Program
                </Link>
              ) : (
                <Link
                  href="/#program"
                  onClick={() => {
                    navigate("/#program");
                    return onClose();
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Program
                </Link>
              )}
              {pathname == "/blog" ? (
                <Link
                  href="/#testprep"
                  onClick={() => {
                    navigate("/#testprep");
                    return onClose();
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Test Prep
                </Link>
              ) : (
                <Link
                  href="/#testprep"
                  onClick={() => {
                    navigate("/#testprep");
                    return onClose();
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Test Prep
                </Link>
              )}

              {pathname == "/blog" ? (
                <Link
                  href="/#testimonials"
                  onClick={() => {
                    navigate("/#testimonials");
                    return onClose();
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Success Stories
                </Link>
              ) : (
                <Link
                  href="/#testimonials"
                  onClick={() => {
                    navigate("/#testimonials");
                    return onClose();
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Success Stories
                </Link>
              )}

              {pathname == "/blog" ? (
                <Link
                  href="/#faqs"
                  onClick={() => {
                    navigate("/#faqs");
                    return onClose();
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Faqs
                </Link>
              ) : (
                <Link
                  href="/#faqs"
                  onClick={() => {
                    navigate("/#faqs");
                    return onClose();
                  }}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "orange",
                  }}
                >
                  Faqs
                </Link>
              )}
              <Link
                onClick={() => {
                  navigate("/blog");
                  onClose();
                }}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  // bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Blogs
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
