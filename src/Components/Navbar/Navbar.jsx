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
                Home
              </Link>
              <Link
                to="/about"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Overseas
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
                  Courses
                </Link>
                {hover && (
                  <Box onMouseLeave={end} bg={"#ffff"} className="sub_course">
                    <Text className="courses">IELTS</Text>
                    <Text className="courses">GRE</Text>
                    <Text className="courses">TOEFL</Text>
                    <Text className="courses">SAT</Text>
                    <Text className="courses">GMAT</Text>
                    <Text className="courses">PTE</Text>
                  </Box>
                )}
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
                to="enquiry"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Our Teams
              </Link>
              <Link
                to="/contact"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "orange  ",
                }}
              >
                Abouts Us
              </Link>
              <Link
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
              </Link>
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
                Home
              </Link>
              <Link
                to="/about"
                rounded={"md"}
                _hover={{
                  px: "2px",
                  textDecoration: "none",
                  bg: "gray.200",
                  color: "orange  ",
                }}
              >
                About
              </Link>
              <Stack rounded={"md"}>
                <Menu>
                  <MenuButton>Products</MenuButton>
                  <MenuList>
                    <MenuItem minH="48px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/100/100"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                      />
                      <span onClick={() => navigate("/products")}>Wallet</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/120/120"
                        alt="Simon the pensive"
                        mr="12px"
                      />
                      <span onClick={() => navigate("/products")}>Bag</span>
                    </MenuItem>
                    <MenuItem minH="48px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/100/100"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                      />
                      <span onClick={() => navigate("/products")}>Belt</span>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
