import React from "react";
import "./Blog.css";
import {
  Box,
  Container,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

function Blog_3(props) {
  return (
    <>
      <Box className={"indvidual_blog_wrapper"}>
        {/* {blog section-1} */}
        <Box className="blog_3_section-1">
          <Box>
            <Box textAlign={"center"} fontSize={"xl"}>
              <Text mt={3} mb={3} color={"#799447"}>
                A Guide to ace the IELTS Exam
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
                  <Image src="../Images/Blog_3.jpg" />
                </Box>
                <Box>
                  <Text fontSize={"1rem"} lineHeight={1.9}>
                    There is no arguing that English has developed into an
                    international language. India is regarded as a non-native
                    English-speaking nation, therefore students from India who
                    want to study abroad must show they have strong English
                    communication skills in order to function both inside and
                    outside of the classroom. There are numerous tests for
                    English language proficiency easily accessible. But two of
                    the most well-known ones are undoubtedly the Test of English
                    as a Foreign Language (TOEFL) and the International English
                    Language Testing System (IELTS). We will walk you through
                    each IELTS section in the following article and provide a
                    couple of tips on how to ace the test
                  </Text>
                </Box>
                {/* The IELTS Academic Test */}
                <Box>
                  <Box className="blog_heading">
                    <Text>The IELTS Academic Test</Text>
                  </Box>
                  <Box>
                    <Text mt={2}>
                      There are two IELTS exam options: Academic and General.
                      Every student submitting applications for higher education
                      should use the Academic version. It is accepted by over
                      10,000 institutions in nearly 140 countries which include
                      universities, schools, etc. The purpose of the IELTS
                      Academic exam is to determine how well-prepared you are to
                      learn in an English-speaking classroom.
                    </Text>
                    <Text mt={3}>
                      It is crucial for an IELTS aspirant to be familiar with
                      the test structure in addition to understanding how to
                      prepare for the exam.
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Text mt={2}>
                    Let's examine each part along with some tips:
                  </Text>
                </Box>
                {/* Listening   : */}
                <Box>
                  <Box className="blog_heading">
                    <Text>Listening :</Text>
                  </Box>
                  <Box>
                    <Text mt={2}>
                      Four recordings will be provided for you to listen to and
                      are followed by questions that you must respond to.
                    </Text>
                    <Text mt={3}>
                      1. Recording 1 – Conversation (2 people) – Two individuals
                      will be speaking in English on this recording in either a
                      face-to-face conversation or a phone call. Many students
                      find this part difficult due to the fluency of the
                      speakers in the dialogue.
                    </Text>
                    <Box marginLeft={"20px"}>
                      <UnorderedList>
                        <ListItem>
                          Listen to as many English talks as you can
                        </ListItem>
                        <ListItem>
                          To observe various speaking styles, watch CNN or BBC
                          with two reporters
                        </ListItem>
                      </UnorderedList>
                    </Box>
                    <Box mt={2}>
                      <Text>
                        2. Recording 2 – A monologue or a Speech - Recognize the
                        speech's main point, the problems raised, and any
                        specific references.
                      </Text>
                    </Box>
                    <Box mt={2}>
                      <Text>
                        3. Recording 3 – Group discussion – There may be up to
                        four speakers in this audio talking about the same
                        subject. It might be perplexing so make sure to pay
                        attention to:
                      </Text>
                    </Box>
                    <Box marginLeft={"20px"}>
                      <UnorderedList>
                        <ListItem>Discussion subject</ListItem>
                        <ListItem>Group members' names</ListItem>
                        <ListItem>Particular connections</ListItem>
                      </UnorderedList>
                    </Box>
                    <Box mt={2}>
                      <Text>
                        4. Recording 4 – University lecture – A speaker will
                        address a particular topic. Keep an eye out for any
                        other speech highlights, cited sources, and the examples
                        that are used.
                      </Text>
                    </Box>
                    <Box mt={3}>
                      <Text>
                        Make sure to practice as much as possible by listening
                        to speeches, monologues, and group conversations.
                      </Text>
                    </Box>
                  </Box>
                </Box>
                {/* reading */}
                <Box>
                  <Box className="blog_heading">
                    <Text>Reading:</Text>
                  </Box>
                  <Box mt={1}>
                    <Text>
                      In this section, there will be three lengthy texts to
                      study and questions based on the texts to respond to. The
                      following advice:
                    </Text>
                  </Box>
                  <Box marginLeft={"20px"}>
                    <UnorderedList>
                      <ListItem>Create a reading routine.</ListItem>
                      <ListItem mt={1}>
                        Once you've done reading, mentally summarize the
                        passage.
                      </ListItem>
                      <ListItem mt={1}>
                        Reread the passage if necessary; DON'T GUESS
                      </ListItem>
                      <ListItem mt={1}>
                        Don't leave any questions unresolved because there is no
                        deduction of points.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
                {/* Writing */}
                <Box>
                  <Box className="blog_heading">
                    <Text>Writing :</Text>
                  </Box>
                  <Box mt={1}>
                    <Text>
                      The following section is divided into two subsections:
                    </Text>
                  </Box>
                  <Box marginLeft={"20px"}>
                    <UnorderedList>
                      <ListItem>
                        Write at least 150 words describing a graph, chart, or
                        figure. The allotted period is roughly 20 minutes.
                      </ListItem>
                      <ListItem mt={1}>
                        Write a minimum of 250-word essay in reaction to a
                        viewpoint, issue, or argument. The allotted period is
                        roughly 40 minutes.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Box>
                    <Box>
                      <Text>Some tips:</Text>
                    </Box>
                    <Box marginLeft={"20px"}>
                      <UnorderedList>
                        <ListItem>
                          Avoid using bullet points in both compositions.
                        </ListItem>
                        <ListItem mt={1}>
                          You may want to try Task 2 first since it has double
                          the points.
                        </ListItem>
                        <ListItem mt={1}>
                          Don't duplicate any information from the
                          questionnaire.
                        </ListItem>
                        <ListItem mt={1}>
                          Avoid using slang or acronyms in your writing.
                        </ListItem>
                        <ListItem mt={1}>
                          Try to avoid deviating from the subject of your essay
                          in your writing.
                        </ListItem>
                        <ListItem mt={1}>
                          Write articles frequently and have them edited to see
                          where you stand in terms of thought organization and
                          grammar usage.
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </Box>
                </Box>
                {/* Speaking */}
                <Box>
                  <Box className="blog_heading">
                    <Text>Speaking : </Text>
                  </Box>
                  <Box mt={1}>
                    <Text>
                      You will actually interact with an examiner in this part.
                      The conversation is broken up into three sections and
                      generally lasts between 11 and 14 minutes
                    </Text>
                  </Box>
                  <Box marginLeft={"20px"}>
                    <UnorderedList>
                      <ListItem>
                        Part 1: You will be asked for some basic personal
                        information, such as your family, place of education,
                        and hobbies. It should take about four to five minutes.
                      </ListItem>
                      <ListItem mt={1}>
                        Part 2: A task card with a specific subject will be
                        provided to you. After that, you will have about a
                        minute to prepare before speaking for about two minutes
                        about the subject. The evaluator will then ask you some
                        questions about the subject after this.
                      </ListItem>
                      <ListItem mt={1}>
                        Part 3: The evaluator probes deeply into the subject
                        from Part 2 and evaluates your capacity for
                        argumentation.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Box>
                    <Box>
                      <Text>Some tips:</Text>
                    </Box>
                    <Box marginLeft={"20px"}>
                      <UnorderedList>
                        <ListItem>
                          Don't be too chatty, but do add worth to your
                          responses.
                        </ListItem>
                        <ListItem mt={1}>
                          Be impulsive but not overly anxious.
                        </ListItem>
                        <ListItem mt={1}>
                          Avoid bluffing in Part 2. This is not a knowledge
                          exam. Only express what you are certain of.
                        </ListItem>
                        <ListItem mt={1}>
                          Keep in mind what you said in Part 2 for Part 3. You
                          might be forced to contradict yourself by the
                          evaluator.
                        </ListItem>
                        <ListItem mt={1}>
                          Try to come across as assured and certain in
                          everything you say.
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </Box>
                </Box>
                {/* conclusion */}
                <Box>
                  <Box className="blog_heading">
                    <Text>Conclusion</Text>
                  </Box>
                  <Box>
                    <Text>
                      In addition to the tips given above, keep in mind that
                      this is an English language exam. Therefore, it really
                      helps to have an English teacher who has expertise
                      preparing students for the IELTS exam. English proficiency
                      is the key to passing this test.
                    </Text>
                    <Text mt={2}>
                      While the majority of students can communicate in English,
                      there are some areas where they require help, and we at
                      ASPIRE understand this. Each student receives
                      individualized instruction in our IELTS Coaching classes
                      to help them strengthen their English language skills and
                      pass the test.
                    </Text>
                    <Text mt={2}>
                      Being proficient in English will be useful in life in
                      addition to helping you with the IELTS. An articulate
                      person is typically respected all over the globe.
                    </Text>
                    <Text mt={2} mb={3}>
                      In addition to helping you with the IELTS, learning
                      English will also provide you a valuable instrument for
                      life. A person with good communication skills is typically
                      respected all over the globe.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Blog_3;
