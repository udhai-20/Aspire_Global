import React, { useState } from "react";
import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "./Home.css";
import RequestForm from "../../Components/RequestForm/RequestForm";
import Features from "../../Components/Feature/Features";
import Heading from "../../Components/Heading/Heading";
import CircleGraph from "../../Components/CircleGraph/CircleGraph";
import Carousel from "../../Components/Carousel/Carousel";
import AccordionsMenu from "../../Components/AccordionMenu/AccordionsMenu";
import Model from "../../Components/Model/Model";

let avilableProgrames = [
  {
    title: "IELTS Classroom",
    type: "In-person program",
    img: "../Images/Class_Room.jpg",
  },
  {
    title: "IELTS Live Online Batch",
    type: "Live online program",
    img: "../Images/Online_Class.jpg",
  },
  {
    title: "IELTS One-on-one",
    type: "Personalised program",
    img: "../Images/One_on_one.jpg",
  },
  {
    title: "IELTS Online Prep",
    type: "Self-learning program",
    img: "../Images/Online_Prep.jpg",
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
    title: "Study Material",
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
let highScore = [
  {
    name: "Udhaya",
    score: 85,
  },
  {
    name: "Roger",
    score: 85,
  },
  {
    name: "Shan",
    score: 85,
  },
  {
    name: "Roger",
    score: 85,
  },
  {
    name: "Shan",
    score: 85,
  },
  {
    name: "Shan",
    score: 85,
  },
  {
    name: "Udhaya",
    score: 80,
  },
  {
    name: "Roger",
    score: 80,
  },
  {
    name: "Shan",
    score: 80,
  },
  {
    name: "Roger",
    score: 80,
  },
  {
    name: "Shan",
    score: 80,
  },
  {
    name: "Shan",
    score: 80,
  },
];

let aboutus_Accordion = [
  {
    title: "What is the IELTS test structure?",
    desc: `The IELTS test consists of four sub-tests: Listening, Reading, Writing, and Speaking. For Academic and General Training, you take the same Listening and Speaking tests but different Reading and Writing tests,
   The Listening, Reading, and Writing sections of all IELTS tests are completed on the same day with no breaks in between them.
   The Speaking test, however, may be scheduled up to a week before or after the other tests.`,
  },
  {
    title: "How is IELTS scored?",
    desc: `The IELTS results are reported on a 9-band scale in 0.5-band increments. 1 band is the lowest and 9 band is the highest. You will receive an overall band score, as well as individual band scores for each test section – Listening, Reading, Writing, and Speaking.`,
  },
  {
    title: "How long is the IELTS?",
    desc: `The IELTS is a 2-hour and 44-minute-long test.`,
  },
  {
    title: "What is the IELTS test fee?",
    desc: `The IELTS test fee in India is INR 15.500.`,
  },
  {
    title: "How can I register for IELTS?",
    desc: `You have to register for your IELTS exam through the IELTS IDP India website. To know more about the process of registration visit: https://www.ieltsidpindia.com/registration/registration`,
  },
];

let faqs_Accordion = [
  {
    title: "What is the full form of IELTS?",
    desc: "The IELTS stands for “International English Language Testing System”.",
  },
  {
    title: "Who owns IELTS?",
    desc: "The IELTS is jointly owned by the British Council, IDP: IELTS Australia, and Cambridge English.",
  },
  {
    title: "What is the purpose of IELTS?",
    desc: "The IELTS is designed to help you work, study or migrate to a country where English is the native language. This includes countries such as Australia, Canada, New Zealand, the UK, and the USA.",
  },
  {
    title: "What are the modes of the IELTS test?",
    desc: "The IELTS test is conducted via 2 different modes: Paper-based IELTS and Computer-delivered IELTS",
  },
  {
    title: "What is Paper-based IELTS?",
    desc: "In paper-based IELTS, you’ll take the test in a traditional manner – at a desk with question papers and answer sheets for Listening, Reading, and Writing tests in an official IELTS test centre. You’ll have to write your answers in either pen or HB pencils. The Speaking test will be carried out one-on-one with a certified IELTS examiner.",
  },
  {
    title: "What is computer-delivered IELTS?",
    desc: "The question pattern, format, level of difficulty, and scoring remain the same as paper-based IELTS. You’ll be taking the Listening, Reading, and Writing test on a computer. The Speaking test will continue to be taken face-to-face by a certified IELTS examiner in a quiet room.",
  },
  {
    title: "How long is an IELTS score valid?",
    desc: `An IELTS Test Report Form (TRF) is valid for two (2) years.`,
  },
  {
    title: "How soon can a candidate reappear for the test?",
    desc: `A candidate may reappear for the IELTS test at any time.`,
  },
  {
    title: "What is the age limit for IELTS?",
    desc: `The IELTS Test is not recommended for candidates under 16 years. However, if they wish to take the test, they may.`,
  },
  {
    title: "What is the ‘pass mark’ for the IELTS test?",
    desc: `There is no pass or fail mark in IELTS. Scores are graded on the 9-band system. Each educational institution or organization sets its own minimum IELTS scores to meet its individual requirements.`,
  },
  {
    title: "What do I need to carry on the day of the IELTS test?",
    desc: `A Valid passport (your ID proof)
    The acknowledgment letter/admit card (IELTS registration)
    A pencil, pen, and an eraser for the paper-based test`,
  },
];

function Home(props) {
  const [popup, setPopup] = useState(true);
  return (
    <>
      <Box className="home_Wrapper ">
        {/* banner section */}
        <Box className="banner-wrapper " mb={5}>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={2} height={"100%"}>
            <Box className="banner-first-child" p={3} display={"flex"}>
              <Box
                display={"flex"}
                flexDirection="column"
                className="banner-first-child-inside"
              >
                <Text className={"banner-heading"}>The IELTS Prep</Text>
                <Text className={"banner-para"}>Plan your study aborad</Text>
                <Text className={"banner-para"}>Dream with Aspire Today</Text>

                <Text
                  w={{ base: "100%", md: "100%", sm: "100%", lg: "100%" }}
                  className="banner-btn"
                >
                  REQUEST FOR A FREE DEMO CLASS
                </Text>
              </Box>
            </Box>
            <Box className="banner-sec-child">
              <Image src="../Images/Banner_OPT_1.jpg" alt="banner-img" />
            </Box>
            <Box>
              <RequestForm />
            </Box>
          </SimpleGrid>
        </Box>
        {/* Choose the Program */}
        <Box>
          <Container maxW={"7xl"}>
            <Box className="ourwork-Wrapper" my={"15px"}>
              <Container maxW={"7xl"}>
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
            <Container maxW={"7xl"}>
              <Heading title={"Why Choose ASPIRE ?"} />
              <SimpleGrid
                my={"20px"}
                columns={{ base: 1, md: 4, lg: 6 }}
                spacing={10}
              >
                {whyChooseusArray.map((item) => {
                  return (
                    <Box key={item.title}>
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
          <Box
            className="reason-section-wrapper"
            marginTop={"35px"}
            // border={"1px"}
          >
            <Container maxW={"7xl"}>
              <Text className="recent-heading" textAlign={"left"}>
                Our Recent High Scores
              </Text>
              <SimpleGrid
                my={"20px"}
                columns={{ base: 1, md: 4, lg: 6, sm: 3 }}
                spacing={10}
              >
                {highScore.map((item, i) => {
                  return (
                    <Box key={i + 1}>
                      <CircleGraph percentage={item.score} />
                      <Text fontWeight={600} textAlign={"center"} mt={2}>
                        {item.name}
                      </Text>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Container>
          </Box>
        </Box>
        {/* {testimonial sections} */}
        <Box>
          <Box
            className="reason-section-wrapper"
            marginTop={"35px"}
            // border={"1px"}
          >
            <Container maxW={"7xl"}>
              <Text className="testimonial-heading" textAlign={"left"}>
                What Our Students Say About Us
              </Text>
              <Box className="carousel_parent">
                <Carousel />
              </Box>
            </Container>
          </Box>
        </Box>
        {/* about us */}
        <Box className="about-section-wrapper" marginTop={"35px"}>
          <Container maxW={"7xl"}>
            <Text className="recent-heading" textAlign={"left"}>
              About IELTS™
            </Text>
            <Box className="about_acordion">
              {aboutus_Accordion.map((item) => {
                return (
                  <Box key={item.title}>
                    <AccordionsMenu title={item.title} desc={item.desc} />
                  </Box>
                );
              })}
            </Box>
          </Container>
        </Box>
        {/* faq Section */}
        <Box
          className="about-section-wrapper"
          marginBottom={"35px"}
          marginTop={"35px"}
        >
          <Container maxW={"7xl"}>
            <Text className="faqs-heading" textAlign={"left"}>
              FAQs
            </Text>
            <Box className="about_acordion">
              {faqs_Accordion.map((item) => {
                return (
                  <Box key={item.title}>
                    <AccordionsMenu title={item.title} desc={item.desc} />
                  </Box>
                );
              })}
            </Box>
          </Container>
        </Box>

        {popup && (
          <Box className="popup">
            <Box>
              <Model />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Home;
