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
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import "./Navbar.css";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
function Navbar(props) {
  const [hover, setHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
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
              <Link
                to="/"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                About IELTS
              </Link>
              <Link
                to="/"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Program
              </Link>

              <Stack rounded={"md"}>
                <Link
                  className="nav-course"
                  to="/"
                  rounded={"md"}
                  _hover={{
                    px: "2px",
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                    color: "orange  ",
                  }}
                  onMouseEnter={over}
                >
                  Test Prep
                </Link>
                {/* {hover && (
                  <Box onMouseLeave={end} bg={"#ffff"} className="sub_course">
                    <Text className="courses">IELTS</Text>
                    <Text className="courses">GRE</Text>
                    <Text className="courses">TOEFL</Text>
                    <Text className="courses">SAT</Text>
                    <Text className="courses">GMAT</Text>
                    <Text className="courses">PTE</Text>
                  </Box>
                )} */}
                {/* <Select
                  onMouseEnter={over}
                  placeholder="Select option"
                  variant="unstyled"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select> */}
              </Stack>

              <Link
                to="/"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Success Stories
              </Link>
              <Link
                to="/blog"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Blogs
              </Link>
              {/* <Link
                to="/contact"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Contact Us
              </Link> */}
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                to="/"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: "gray.200",
                  color: "orange  ",
                }}
              >
                About IELTS
              </Link>
              <Link
                to="/"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: "gray.200",
                  color: "orange  ",
                }}
              >
                Program
              </Link>
              <Link
                to="/"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: "gray.200",
                  color: "orange  ",
                }}
              >
                Test Prep
              </Link>
              <Link
                to="/"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: "gray.200",
                  color: "orange  ",
                }}
              >
                Success Stories
              </Link>
              <Link
                to="/blog"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: "gray.200",
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
