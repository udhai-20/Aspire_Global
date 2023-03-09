import React from "react";
import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "./Home.css";
import RequestForm from "../../Components/RequestForm/RequestForm";
import Features from "../../Components/Feature/Features";
import Heading from "../../Components/Heading/Heading";

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
          {/* Our Works Section */}
          <Box className="ourwork-Wrapper" my={"15px"}>
            <Container maxW={"8xl"}>
              <Heading title={"Choose the Program"} />
              <Box marginTop={"30px"} p={4}>
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                  <Features
                    icon={
                      <Image
                        src="https://www.inspiruseducation.com/wp-content/uploads/2022/09/group-offlice.png?x61251"
                        w={"100%"}
                        h={"100%"}
                      />
                    }
                    title={"IELTS Classroom"}
                    text={"In-person program"}
                  />
                  <Features
                    icon={
                      <Image
                        src="https://www.inspiruseducation.com/wp-content/uploads/2022/09/group-offlice.png?x61251"
                        w={"100%"}
                        h={"100%"}
                      />
                    }
                    title={"IELTS Classroom"}
                    text={"In-person program"}
                  />
                  <Features
                    icon={
                      <Image
                        src="https://www.inspiruseducation.com/wp-content/uploads/2022/09/group-offlice.png?x61251"
                        w={"100%"}
                        h={"100%"}
                      />
                    }
                    title={"IELTS Classroom"}
                    text={"In-person program"}
                  />
                  <Features
                    icon={
                      <Image
                        src="https://www.inspiruseducation.com/wp-content/uploads/2022/09/group-offlice.png?x61251"
                        w={"100%"}
                        h={"100%"}
                      />
                    }
                    title={"IELTS Classroom"}
                    text={"In-person program"}
                  />
                </SimpleGrid>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;
