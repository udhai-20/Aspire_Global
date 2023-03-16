import React, { useState } from "react";
import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "./Home.css";
import RequestForm from "../../Components/RequestForm/RequestForm";
import Features from "../../Components/Feature/Features";
import Heading from "../../Components/Heading/Heading";
import CircleGraph from "../../Components/IeltsScoreCard/IeltsScoreCard";
import Carousel from "../../Components/Carousel/Carousel";
import AccordionsMenu from "../../Components/AccordionMenu/AccordionsMenu";
import Model from "../../Components/Model/Model";
import { useLocation } from "react-router-dom";
import IeltsScoreCard from "../../Components/IeltsScoreCard/IeltsScoreCard";

let avilableProgrames = [
  {
    title: "IELTS Classroom",
    type: "In-person program",
    img: "../Images/Class_Room.jpg",
    id: "1",
  },
  {
    title: "IELTS Live Online Batch",
    type: "Live online program",
    img: "../Images/Online_Class.jpg",
    id: "2",
  },
  {
    title: "IELTS One-on-one",
    type: "Personalised program",
    img: "../Images/One_on_One.jpg",
    id: "3",
  },
  {
    title: "IELTS Online Prep",
    type: "Self-learning program",
    img: "../Images/Online_Prep.jpg",
    id: "4",
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
    name: "Najeeb Mohamed",
    img: "./Images/student_2.png",
    listening: 9.0,
    reading: 9.0,
    writing: 7.0,
    speaking: 7.0,
    bandscore: 8.0,
    cefrlevel: "C1",
  },
  {
    name: "Shahid Nazeer",
    img: "./Images/student_3.png",
    listening: 9.0,
    reading: 7.5,
    writing: 7.5,
    speaking: 6.5,
    bandscore: 7.5,
    cefrlevel: "C1",
  },
  {
    name: "Ashwathi",
    img: "./Images/student_4.png",
    listening: 8.5,
    reading: 7.5,
    writing: 7.0,
    speaking: 7.5,
    bandscore: 7.5,
    cefrlevel: "C1",
  },
];

let aboutus_Accordion = [
  {
    title: "What is the IELTS test structure?",
    desc: `The IELTS consists of four subtests: listening, reading, writing and speaking examinations.  academician and general training people will take the same listening and speaking tests, but different reading and writing tests. The listening, reading and writing of all IELTS exams are done on the same day without any interval. However, the Speaking test can be scheduled a week earlier or later the examination.`,
  },
  {
    title: "How is IELTS scored?",
    desc: `The IELTS results are scored on a 9-band scale in 0.5-band increments, with 9 being the highest and 1 being the lowest. Aspirants will receive an overall band score, as well as individual band scores for each test section – (Listening, Reading, Writing, and Speaking).`,
  },
  {
    title: "How long is the IELTS?",
    desc: `The IELTS is a 2-hour and 44-minute-long test.`,
  },
  {
    title: "What is the IELTS test fee?",
    desc: `The IELTS test fee in India is INR 15,500.`,
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
    title: "Who should take up IELTS exams?",
    desc: "People who are aspirants of English language and dream to study or pursue their careers in native English speaking countries like Australia, Canada, New Zealand, the UK, and the USA.",
  },
  {
    title: "The formats of IELTS? ",
    desc: "IELTS offer two formats: IELTS Academic and IELTS General Training. IELTS Academic: Undergraduate and postgraduate students who want to continue their studies in foreign universities or colleges.IELTS General Training: People who want to  pursue secondary education , seeking job opportunities and planning to migrate to native english language speaking countries. Aspirants can apply according to their requirements.",
  },
  {
    title: "What are the modes of the IELTS test?",
    desc: "The IELTS test is conducted in two different modes: Paper-based IELTS and Computer-delivered IELTS",
  },
  {
    title: "What is Paper-based IELTS?",
    desc: "It is the traditional method where students will take up the examination in the IELTS exam centre allocated to them . For Reading, writing and listening exams Question paper and answer sheets will be given and you can answer either with Pen or HB Pencil.The speaking test is conducted one-on-one with a certified IELTS examiner.",
  },
  {
    title: "What is computer-delivered IELTS?",
    desc: `It is very similar to Paper-based IELTS except the fact that it will be taken in front of the desktop. The speaking test will be conducted in a silent room, face to face with a certified IELTS examiner
    `,
  },
  {
    title: "How long does it take to get the official IELTS score?",
    desc: `The scores of Paper-based IELTS are revealed in a period of fourteen days and the computer-delivered IELTS scores are revealed in three to five days after the examination.`,
  },
  {
    title: "For How long is the IELTS score valid?",
    desc: `IELTS scores are valid for a maximum of 2 years.
    `,
  },
  {
    title: "Is there an age limit for IELTS?",
    desc: `Aspirants above the age of 16 years can apply for the examination
    `,
  },
  {
    title: "What is the Pass mark for IELTS?",
    desc: ` Each institution sets its own minimum IELTS score to meet their requirements. The marks are scored in a 9 band system and hence there are no pass or fail mark in IELTS`,
  },
  {
    title: "What do I need to carry on the day of the IELTS test?",
    desc: `The aspirants shall carry with them the IELTS admit card , Identity proof and necessary stationeries for the examination.`,
  },
];

function Home(props) {
  const pathname = useLocation();
  console.log("pathname:", pathname);
  const [popup, setPopup] = useState(true);
  return (
    <>
      <Box className="home_Wrapper ">
        {/* banner section */}
        <Box className="banner-wrapper " mb={5}>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={1} height={"100%"}>
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
              <Image src="../Images/Banner_OPT_1.png" alt="banner-img" />
            </Box>
            <Box>
              <RequestForm />
            </Box>
          </SimpleGrid>
        </Box>
        {/* Choose the Program */}
        <Box>
          <Container id="program" maxW={"7xl"}>
            <Box className="ourwork-Wrapper" my={"15px"}>
              <Container maxW={"7xl"}>
                <Heading title={"Choose The Program"} />
                <Box marginTop={"20px"} p={4}>
                  <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                    {avilableProgrames.map((item) => {
                      return (
                        <Box key={item.id}>
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
        <Box id="testprep">
          <Box className="reason-section-wrapper" my={"15px"}>
            <Container maxW={"7xl"}>
              <Heading title={"Why Choose ASPIRE ?"} />
              <SimpleGrid
                my={"20px"}
                columns={{ base: 2, md: 4, lg: 6 }}
                spacing={5}
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
              <SimpleGrid my={"20px"} columns={{ base: 1, md: 3 }} spacing={10}>
                {highScore.map((item, i) => {
                  return (
                    <Box key={i + 1}>
                      <IeltsScoreCard
                        name={item.name}
                        listening={item.listening}
                        reading={item.reading}
                        writing={item.reading}
                        speaking={item.speaking}
                        bandscore={item.bandscore}
                        cefrlevel={item.cefrlevel}
                        imgLink={item.img}
                      />
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Container>
          </Box>
        </Box>
        {/* {testimonial sections} */}
        <Box id="testimonials">
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
        <Box id="about" className="about-section-wrapper" marginTop={"35px"}>
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
          id="faqs"
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

        {pathname.hash == "" && popup && (
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
