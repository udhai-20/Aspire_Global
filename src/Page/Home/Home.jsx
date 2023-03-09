import React from "react";
import {
  Box,
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "./Home.css";
import RequestForm from "../../Components/RequestForm/RequestForm";
import Features from "../../Components/Feature/Features";
import Heading from "../../Components/Heading/Heading";
import CircleGraph from "../../Components/CircleGraph/CircleGraph";

let avilableProgrames = [
  {
    title: "IELTS Classroom",
    type: "In-person program",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2022/09/group-offlice.png?x61251",
  },
  {
    title: "IELTS Live Online Batch",
    type: "Live online program",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2022/09/group-online-wq.png?x61251",
  },
  {
    title: "IELTS One-on-one",
    type: "Personalised program",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2022/09/online-one-on-one.png?x61251",
  },
  {
    title: "IELTS Online Prep",
    type: "Self-learning program",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2022/09/recorded.png?x61251",
  },
];
let whyChooseusArray = [
  {
    title: "Top Scores",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2020/04/IELTSTOP.png?x61251",
  },
  {
    title: "Individual Focus",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2020/03/individualfocus.png?x61251",
  },
  {
    title: "Customised Program",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2020/03/customised-program.png?x61251",
  },
  {
    title: "Exhaustive Study Material",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2020/03/study-material.png?x61251",
  },
  {
    title: "Practice Tests",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2020/03/practice_test.png?x61251",
  },
  {
    title: "Video Lectures",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2020/03/video-lecture.png?x61251",
  },
];

function Home(props) {
  return (
    <>
      {/* banner section */}
      <Box className="banner-wrapper" mt={5} mb={5}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={2} height={"100%"}>
          <Box className="banner-first-child" p={3} display={"flex"}>
            <Box
              display={"flex"}
              flexDirection="column"
              className="banner-first-child-inside"
            >
              <Text className={"banner-heading"}>The IELTS Prep</Text>
              <Text className={"banner-para"}>
                The IELTS prep is designed to help you work, study or migrate to
                a country where English is the native language. This includes
                countries such as Australia, Canada, New Zealand, the UK, and,
                the USA.
              </Text>
              <Text
                w={{ base: "100%", md: "40%", sm: "60%", lg: "70%" }}
                className="banner-btn"
              >
                REQUEST FOR A FREE DEMO CLASS
              </Text>
            </Box>
          </Box>
          <Box className="banner-sec-child">
            <Image
              src="https://www.inspiruseducation.com/wp-content/uploads/2022/10/ielts-main-page.png"
              alt="banner-img"
            />
          </Box>
          <Box>
            <RequestForm />
          </Box>
        </SimpleGrid>
      </Box>
      {/* Choose the Program */}
      <Box>
        <Container maxW={"8xl"}>
          <Box className="ourwork-Wrapper" my={"15px"}>
            <Container maxW={"8xl"}>
              <Heading title={"Choose the Program"} />
              <Box marginTop={"20px"} p={4}>
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                  {avilableProgrames.map((item) => {
                    return (
                      <Box>
                        <Features
                          icon={
                            <Image
                              src={`${item.img}`}
                              alt={item.title}
                              w={"100%"}
                              h={"100%"}
                            />
                          }
                          title={item.title}
                          text={item.type}
                          btnName={"More Details"}
                        />
                      </Box>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
      {/* 6 Reasons Why You Must Join Inspirus IELTS Prep */}
      <Box>
        <Box className="reason-section-wrapper" my={"15px"}>
          <Container maxW={"8xl"}>
            <Heading title={"Why Choose ASPIRE ?"} />
            <SimpleGrid
              my={"20px"}
              columns={{ base: 1, md: 4, lg: 6 }}
              spacing={10}
            >
              {whyChooseusArray.map((item) => {
                return (
                  <Box>
                    <Features
                      icon={
                        <Image
                          src={`${item.img}`}
                          alt={item.title}
                          w={"100%"}
                          h={"100%"}
                        />
                      }
                      title={item.title}
                    />
                  </Box>
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
      {/* our recent high score */}
      <Box>
        <Box className="reason-section-wrapper" my={"15px"}>
          <Container maxW={"8xl"}>
            <Text className="recent-heading" textAlign={"left"}>
              Our Recent High Scores
            </Text>
            <SimpleGrid
              my={"20px"}
              columns={{ base: 1, md: 4, lg: 6 }}
              spacing={10}
            >
              <Box>
                <CircleGraph percentage={"85"} />
                <Text textAlign={"center"} mt={2}>
                  Udhaya
                </Text>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Home;
