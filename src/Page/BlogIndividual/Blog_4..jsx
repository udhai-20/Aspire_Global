import React from "react";
import "./Blog.css";
import { Box, Container, Image, Text } from "@chakra-ui/react";

const data = [
  {
    key: 1,
    desc: "TOEFL is a brand of  Educational Testing Service (ETS), which designs and administers the tests. The Test of English as a Foreign Language (TOEFL) is considered as one of the most ideal exams to assess English language ability and is required by most colleges and universities in the United States. The TOEFL is a test of basic skills - reading, listening, speaking and writing (the four parts of the test) - the same things that students learn in their school days. TOEFL is not just a test you have to pass, It is actually considered  a measure of whether  you can survive  in a university where English is the first language. Each of the four sections corresponds to something you really need to do; like reading  a textbook , listening to a teacher  taking notes for a project, etc. TOEFL comprises 100 academic questions and tasks. The TOEFL helps you demonstrate your English language skills that are  necessary to use in the academic classroom.",
  },
  {
    key: 2,
    desc: "TOEFL is a brand of  Educational Testing Service (ETS), which designs and administers the tests. The Test of English as a Foreign Language (TOEFL) is considered as one of the most ideal exams to assess English language ability and is required by most colleges and universities in the United States. The TOEFL is a test of basic skills - reading, listening, speaking and writing (the four parts of the test) - the same things that students learn in their school days. TOEFL is not just a test you have to pass, It is actually considered  a measure of whether  you can survive  in a university where English is the first language. Each of the four sections corresponds to something you really need to do; like reading  a textbook , listening to a teacher  taking notes for a project, etc. TOEFL comprises 100 academic questions and tasks. The TOEFL helps you demonstrate your English language skills that are  necessary to use in the academic classroom.",
  },
  {
    key: 3,
    desc: "TOEFL is a brand of  Educational Testing Service (ETS), which designs and administers the tests. The Test of English as a Foreign Language (TOEFL) is considered as one of the most ideal exams to assess English language ability and is required by most colleges and universities in the United States. The TOEFL is a test of basic skills - reading, listening, speaking and writing (the four parts of the test) - the same things that students learn in their school days. TOEFL is not just a test you have to pass, It is actually considered  a measure of whether  you can survive  in a university where English is the first language. Each of the four sections corresponds to something you really need to do; like reading  a textbook , listening to a teacher  taking notes for a project, etc. TOEFL comprises 100 academic questions and tasks. The TOEFL helps you demonstrate your English language skills that are  necessary to use in the academic classroom.",
  },
  {
    key: 4,
    desc: "TOEFL is a brand of  Educational Testing Service (ETS), which designs and administers the tests. The Test of English as a Foreign Language (TOEFL) is considered as one of the most ideal exams to assess English language ability and is required by most colleges and universities in the United States. The TOEFL is a test of basic skills - reading, listening, speaking and writing (the four parts of the test) - the same things that students learn in their school days. TOEFL is not just a test you have to pass, It is actually considered  a measure of whether  you can survive  in a university where English is the first language. Each of the four sections corresponds to something you really need to do; like reading  a textbook , listening to a teacher  taking notes for a project, etc. TOEFL comprises 100 academic questions and tasks. The TOEFL helps you demonstrate your English language skills that are  necessary to use in the academic classroom.",
  },
  {
    key: 5,
    desc: "TOEFL is a brand of  Educational Testing Service (ETS), which designs and administers the tests. The Test of English as a Foreign Language (TOEFL) is considered as one of the most ideal exams to assess English language ability and is required by most colleges and universities in the United States. The TOEFL is a test of basic skills - reading, listening, speaking and writing (the four parts of the test) - the same things that students learn in their school days. TOEFL is not just a test you have to pass, It is actually considered  a measure of whether  you can survive  in a university where English is the first language. Each of the four sections corresponds to something you really need to do; like reading  a textbook , listening to a teacher  taking notes for a project, etc. TOEFL comprises 100 academic questions and tasks. The TOEFL helps you demonstrate your English language skills that are  necessary to use in the academic classroom.",
  },
];

function Blog_4(props) {
  return (
    <>
      <Box className={"indvidual_blog_wrapper"}>
        <Box className="blog_4_section-1">
          <Box>
            <Box textAlign={"center"} fontSize={"xl"}>
              <Text mt={3} mb={3} color={"#799447"}>
                TOEFL - BE THE PRO OF YOUR CAREER
              </Text>
            </Box>
            <Container maxW={"8xl"}>
              <Box textAlign={"left"} className="indv_blog_inside">
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mb={2}
                >
                  <Image src="../Images/Blog_4.jpg" />
                </Box>
              </Box>
              {data.map((el) => {
                return (
                  <Box key={el.key}>
                    <Box mb={4}>
                      <Text lineHeight={2}>{el.desc}</Text>
                    </Box>
                  </Box>
                );
              })}
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Blog_4;
