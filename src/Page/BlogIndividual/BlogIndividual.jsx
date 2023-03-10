import React from "react";
import { useParams } from "react-router-dom";
import Meta from "../../Components/Meta/Meta";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import "./Blog.css";

function BlogIndividual(props) {
  const { id } = useParams();
  return (
    <>
      {id}
      <Meta title={`Blogs/${id}`} />
      <Box className={"indvidual_blog_wrapper"}>
        <Box textAlign={"center"} fontSize={"xl"}>
          <Text mb={2}>
            <strong>IELTS </strong>vs<strong>TOEFL :</strong> Which is preferred
            more ?
          </Text>
        </Box>
        <Container maxW={"8xl"}>
          <Box textAlign={"left"} className="indv_blog_inside">
            <Box mb={2}>
              <Image src="https://www.inspiruseducation.com/wp-content/uploads/2023/01/GUIDE-TO-UK-UCAT-MEDICAL-SCHOOL.png" />
            </Box>
            <Box>
              <Text fontSize={"1rem"} lineHeight={1.9}>
                An English language test is mandatory for people whose regional
                language is not English and want to enroll themselves in foreign
                universities. IELTS and TOEFL are the two most common and widely
                accepted examinations. In both these exams, the student has to
                complete four parts - reading, listening, speaking and writing.
                Although the two tests have the same purpose, they differ
                significantly and This article will help you choose between
                IELTS and TOEFL for your dream of studying abroad.
              </Text>
            </Box>
            <Box>
              <Text>
                1. IELTS has a better scope when compared to TOEFL IELTS has a
                wider scope compared to TOEFL because it is not only used as an
                English language test for those who want to study abroad, but
                also for professional and immigration purposes in
                English-speaking countries. The TOEFL is used for academic
                purposes and is taken by students who want to enroll in
                English-language universities. Whereas IELTS offers the same and
                also indulge people who want to settle abroad.
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default BlogIndividual;
