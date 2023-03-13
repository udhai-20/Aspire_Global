import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meta from "../../Components/Meta/Meta";
import {
  Box,
  Container,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import "./Blog.css";
import Blog_3 from "./Blog_3";
import Blog_4 from "./Blog_4.";

const data = [
  {
    blogNo: 1,
    title: "IELTS vs TOEFL: Which is preferred more ?",
    description:
      "An English language test is mandatory for people whose regional language is not English and want to enroll themselves in foreign universities. IELTS and TOEFL are the two most common and widely accepted examinations. In both these exams, the student has to complete four parts - reading, listening, speaking and writing. Although the two tests have the same purpose, they differ significantly and This article will help you choose between IELTS and TOEFL for your dream of studying abroad",
    img: "../Images/Blog_1.jpg",
    fields: [
      {
        heading: "1. IELTS has a better scope when compared to TOEFL",
        ans: "IELTS has a wider scope  compared to TOEFL because it is not only used as an English language test for those who want to study abroad, but also for professional and immigration purposes  in English-speaking countries. The TOEFL is used for academic purposes and is taken by students who want to enroll in English-language universities. Whereas IELTS offers the same and also indulge people who want to settle abroad.",
      },
      {
        heading: "2. Test method: IELTS vs. TOEFL ",
        ans: "IELTS is administered in two different modes: paper based and computer delivered whereas TOEFL offers two modes: Internet-based test (iBT) and paper-delivered test.",
      },
      {
        heading: "3.It depends on which country you want to  study abroad.",
        ans: " TOEFL scores are accepted at more than 11,000 universities in 150 countries. TOEFL is preferred more in the United States, whereas IELTS is preferred in the United Kingdom, Canada, Australia, New Zealand, France and Germany ",
      },
      {
        heading: `4. Duration of the test`,
        ans: "The IELTS exam can be completed in 2 hours and 45 minutes whereas  The  Internet- based TOEFL is scheduled for 3 hours while the paper delivered exam is 2 and a half hours.",
      },
      {
        heading: "5. Speaking English section",
        ans: "Students need to directly communicate with the examiner for the IELTS speaking section test. TOEFL is a completely computer-based exam  Where , students do not interact personally with the examiners. For the TOEFL speaking section, students are required to record and send over their speech for checking. The student is given 4 tasks the results of which are scored by an examiner. In one task a student speaks about a familiar topic and In the rest 3 integrated Speaking Tasks are given where  students read or listen  or are requested to do both and then speak on the given topic. ",
      },
      {
        heading: "6. Reading section",
        ans: "The TOEFL reading section requires university-level texts to test the student’s reading and comprehension capabilities.. The students have to  read 3-4 paragraphs and About 10 questions will be asked from these. In IELTS a student is generally given 3 passages and students are asked to answer different types of questions from the same. It helps the examiner to find the capabilities of the student.",
      },
      {
        heading: "7. Listening section",
        ans: " The purpose of the TOEFL Listening section is to assess the student's ability to listen to  lectures and classroom discussions. Students are asked to answer questions based on 3- 4 lectures and 2-3 discussions. Each lecture is followed by 6 questions and each discussion is followed by approximately 5 questions. As for the  listening section of the IELTS, its purpose is  to find how well a student understands a conversation, listens and records important and specific facts. Students are presented with  recorded monologues or conversations divided into parts. The first two monologues deal with social needs, while the last two deal with the field of education. The questions are asked only once.",
      },
      {
        heading: "8. Writing Section",
        ans: "The writing section of the TOEFL tests  the student's ability to plan and present their ideas clearly. Students have to complete two tasks - one integrated task which includes reading (3 minutes), listening (2 minutes) and writing (15 minutes). This is followed by an independent essay assignment. The IELTS Writing section tests the same writing skills of the student. They have to write a short essay and another long essay. ",
      },
      {
        heading: " 9. Exam dates and Frequency",
        ans: " The TOEFL iBT test is conducted more than 60 times a year at  authorized testing centers around the world. The new TOEFL iBT Home Edition test can be taken  any four days  a week. Whereas the  IELTS test can be taken once a week. it  48 times a year",
      },
      {
        heading: "10. Results ",
        ans: " Students can check their TOEFL scores 6-10 days after the test date. As for IELTS test results, they are available within a week (online) or  13 days (offline) of the test date.",
      },
    ],
  },
];

const blog2_contents = [
  {
    title: " 1. Prepare ",
    content:
      " Start studying for the test as early as possible. This way you will have enough time to plan  your studies before they start. The more you practice, the more confident you will be on test day. Use only the best study material for your IELTS preparation; a good counselor can help you with this.",
  },
  {
    title: " 2. Accept guidance",
    content:
      " You may feel like the smartest Homosapiens, but IELTS is not the place to test it. It is always recommended to get help from professionals who have been preparing students for IELTS for years. If not, you can also enroll in one of the best coaching centers or courses available online. This way you will get a professional understanding and get a better result in your exam. ",
  },
  {
    title: " 3. Do several dry calculations.",
    content:
      "  Practice is your holy grail to achieve better IELTS scores. The more you practice, the better your score will be. So watch some good speeches and read some real books today. Also try to solve as many IELTS sample questions as possible. It will not only help you improve your language skills, but at the same time it will also help you increase your confidence. ",
  },
  {
    title: "4. Work on your language",
    content:
      " To pass IELTS, you need to have pretty good language skills, and a combination of good vocabulary and flawless grammar skills. Also, make sure you know how to use punctuation because it counts a lot in the writing section.",
  },
  {
    title: "  5. Be quick ",
    content:
      "For the IELTS test, you need to be quite fast to read and answer. While you practice, take timed tests so  you can finish taking the tests ahead of time. This way you can also develop a good writing speed, which is useful in the writing part where you have to write a long essays",
  },
  {
    title: "  6. Don't skip a question  ",
    content:
      " This is a really important indicator. You should try to answer  every question even if you are not sure about some places. Why? you ask Well, although you may not know, IELTS does not have a negative marking system. So even if you are in the wrong place, you will not lose points. So test your intuitions as well, knowing that some of them will only help you score better. ",
  },
  {
    title: "  7. Don't Panic",
    content:
      " Finally, be very  calm. Don't push yourself too hard, because the stress and panic can cost you some points. Especially when it comes to speaking, you need to sound confident, nervousness or panic can be really dangerous for you at this time. Trust yourself and your preparation, hope for the best and give it your all regardless of the outcome. ",
  },
];

function BlogIndividual(props) {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);

  const fetchData = () => {
    const filterData = data.filter((el) => {
      return el.blogNo == id;
    });
    setBlogData(filterData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log("checking", filterData);
  return (
    <>
      <Meta title={`Blogs/${id}`} />
      {id == 1 && (
        <Box className={"indvidual_blog_wrapper"}>
          {blogData &&
            blogData.length > 0 &&
            blogData?.map((item) => {
              return (
                <Box key={item.title}>
                  <Box textAlign={"center"} fontSize={"xl"}>
                    <Text mt={3} mb={3} color={"#799447"}>
                      {item.title}
                      {/* <strong>IELTS </strong>vs<strong>TOEFL :</strong> Which is preferred
             more ? */}
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
                        <Image src={item.img} />
                      </Box>
                      <Box>
                        <Text fontSize={"1rem"} lineHeight={1.9}>
                          {item.description}
                        </Text>
                      </Box>
                      {item.fields.map((el, i) => {
                        return (
                          <Box key={i} className="blogs_parent">
                            <Box className="blog_heading">
                              <Text>{el.heading}</Text>
                            </Box>
                            <Box>
                              <Text className="blog_ans">{el.ans}</Text>
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  </Container>
                </Box>
              );
            })}
        </Box>
      )}
      {/* blog2 */}
      {id == 2 && (
        <Box className={"indvidual_blog_wrapper"}>
          <Box>
            <Box textAlign={"center"} fontSize={"xl"}>
              <Text mt={3} mb={3} color={"#799447"}>
                A Guide For IELTS Preparation
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
                  <Image src="../Images/Blog_2.jpg" />
                </Box>
                <Box>
                  <Text fontSize={"1rem"} lineHeight={1.9}>
                    Aspirants who want to pursue their studies or career abroad
                    can definitely take up the IELTS examination. IELTS is
                    widely accepted tests worldwide Especially in countries like
                    the UK, IELTS is the only secure English language test
                    accepted for both domestic and foreign visas. Although
                    scoring well in the IELTS exam is often considered a tough
                    nut to crack, it's actually not that difficult. You just
                    need to prepare well for this.
                    <br />
                    When it comes to the preparation of exams, the hardest part
                    for one to decide is how to start preparing for the IELTS
                    test. You need someone to guide you through the entire IELTS
                    preparation process. Well guess what? We have heard your
                    wish and we are here to help you prepare to crack IELTS. We
                    tell you everything about IELTS, from how to prepare for
                    each section. To know more about preparation for IELTS keep
                    reading more.
                  </Text>
                </Box>

                <Box className="blogs_parent">
                  <Box className="blog_heading">
                    <Text>Table Of Contents</Text>
                  </Box>
                  <Box>
                    <UnorderedList>
                      <ListItem>What is IELTS?</ListItem>
                      <ListItem>SECTION-WISE IELTS PREPARATION GUIDE</ListItem>
                      <ListItem>TIPS TO PREPARE FOR IELTS EXAM</ListItem>
                      <ListItem>IELTS Study Plan</ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
                <Box className="blog_heading">
                  <Text>What is IELTS?</Text>
                </Box>
                <Box>
                  <Text>
                    The International Testing System of the English Language
                    (IELTS), it is one of the most globally recognized English
                    proficiency tests Aspirants who wish to study or pursue a
                    career abroad can take this.
                  </Text>
                  <UnorderedList>
                    <ListItem marginLeft={"20px"} className="blog_heading">
                      Why is this so important?{" "}
                    </ListItem>
                  </UnorderedList>
                  <Text>
                    IELTS ensures that everyone understands and speaks English
                    fluently, as it is an important aspect while applying in an
                    English-speaking country. IELTS exam can be divided into two
                    types: Academic and general. They are basically the same
                    IELTS tests, the only difference is While academic IELTS is
                    taken for higher studies at a good foreign university,
                    general IELTS is usually taken by people who want to go
                    abroad for secondary education, gain work experience or move
                    temporarily. IELTS is divided into 4 parts; listening,
                    speaking, reading and writing. You shall prepare for each
                    part of the exam separately. and here are some tips to help
                    you.
                  </Text>
                </Box>
                <Box className="blog_heading">
                  <Text>SECTION-WISE IELTS PREPARATION GUIDE</Text>
                </Box>
                {/* section-listening */}
                <Box className="blog_heading">
                  <Text>Listening:</Text>
                </Box>
                <Box>
                  <UnorderedList>
                    <ListItem marginTop={"10px"}>
                      In the first recording, you should listen to a
                      conversation between two people and answer the questions
                      asked to you. Now these recordings can be in any accent
                      like American, British, Australian or even Asian English.
                      To prepare for this, you need to familiarise yourself with
                      these accents, and how do you do that? Well, you have to
                      watch videos, lots and lots of videos. We encourage you to
                      watch Ted Talks or debates on BBC or CNN.{" "}
                    </ListItem>
                    <ListItem marginTop={"10px"}>
                      The second recording is a monologue from a social context
                      and the fourth is a university speech. When preparing both
                      recordings, it is important to pay attention to the
                      central idea of ​​the recording. Along with that, you also
                      need to understand what else is being emphasised in the
                      recording and how the speaker expresses his thoughts.
                    </ListItem>
                    <ListItem marginTop={"10px"}>
                      The third recording is usually a group discussion . It is
                      very important to understand the main topic of the
                      conversation..It will be really helpful if you remember
                      the names and specific references of the people involved
                      in the conversation. While watching videos try to start
                      watching videos with subtitles as they will help you
                      understand much better and improve your vocabulary at the
                      same time.
                    </ListItem>
                    <ListItem>
                      Finally, listen to each recording patiently and try to
                      remember the most important parts. Be patient to analyse
                      the details.
                    </ListItem>
                  </UnorderedList>
                </Box>

                {/* speaking */}
                <Box>
                  <Box className="blog_heading">
                    <Text>Speaking:</Text>
                  </Box>
                  <Box>
                    <Text mt={2}>
                      Speaking skill is a very tiring and most important aspect
                      of the examination.{" "}
                    </Text>
                    <UnorderedList>
                      <ListItem marginTop={"10px"}>
                        The first task consists of personal questions, it is
                        better to avoid too much conversation and be crisp with
                        your answers
                      </ListItem>
                      <ListItem marginTop={"10px"}>
                        In the second task a certain topic will be given and you
                        have to speak for about 2 minutes. Try to be convincing
                        here. Use facts to support your answer, facts that you
                        are definitely sure of. Do not use misleading facts or
                        scams as they can get you into trouble. Be brief,
                        specific and confident in everything you say.
                      </ListItem>
                      <ListItem marginTop={"10px"}>
                        The third task requires you to answer the examiner's
                        questions based on the topic you are talking about.
                        Again, be specific and confident in what you are talking
                        about. Be sure of what you are saying because the
                        examiner may ask you difficult questions and put you in
                        a spot. Don't feel too excited or even nervous when
                        answering the examiner.Answer calmly and wisely.
                      </ListItem>
                      <ListItem>
                        For questions you don't know the answer to, try not to
                        come up with incomplete answers with corrupted facts.
                        Just answer as much as you know and tell the examiner if
                        you don't know.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
                {/* Reading */}
                <Box>
                  <Box className="blog_heading">
                    <Text>Reading:</Text>
                  </Box>
                  <Box>
                    <UnorderedList>
                      <ListItem marginTop={"10px"}>
                        Read and answer the questions in three long passages of
                        about 300 words each. The first thing you need to learn
                        is speed reading. You can develop this skill only if you
                        develop the habit of reading. Read a lot before taking
                        the exam. Try to understand the passages from the very
                        first reading because you won't have much time to read
                        them again.
                      </ListItem>
                      <ListItem marginTop={"10px"}>
                        Try to summarise the main idea of ​​the paragraphs in
                        your head. This will help you answer the questions
                        correctly. Remember what the writer wants to say in
                        these paragraphs and how he builds his argument around
                        it.
                      </ListItem>
                      <ListItem marginTop={"10px"}>
                        When writing your answers, be very specific and
                        confident about each answer. Try to be as accurate as
                        possible.
                      </ListItem>
                      <ListItem>
                        Form the habit of reading a lot before exams. This is
                        the only way to get more points in this section. Also
                        practise your vocabulary. The best way to do this is to
                        go through old sample papers or good IELTS books
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
                {/* Writing */}
                <Box>
                  <Box className="blog_heading">
                    <Text>Writing:</Text>
                  </Box>
                  <Box>
                    <UnorderedList>
                      <ListItem marginTop={"10px"}>
                        In this section you have to complete two tasks; A
                        150-word description of a given figure or diagram and a
                        250-word essay, both in 60 minutes. It is wisest to
                        finish the essay first as it takes more time and then
                        move on to Task 1.
                      </ListItem>
                      <ListItem marginTop={"10px"}>
                        When writing an essay, make sure that you convey the
                        main idea of ​​the essay accurately and clearly. Also,
                        make the argumentation of the topic smooth, so that each
                        paragraph seems to relate to the previous one. You don't
                        want your essay to look like a random collection of
                        facts, but rather a strong piece of writing that
                        explains the topic.
                      </ListItem>
                      <ListItem marginTop={"10px"}>
                        In the first task,try to understand graphs and tables.
                        You must clearly understand the idea conveyed by the
                        given diagram. Also understand the given values ​​and
                        make a description using the comparison of these values.
                        Do not make any part of the description too long; keep
                        it to the point and simple. A clear and appropriate
                        description is what you want to present to the
                        researcher.
                      </ListItem>
                      <ListItem>
                        Develop a good vocabulary and increase writing speed.
                        Completing both tasks in 60 minutes is a challenge.
                        Also, don't do punctuation or use abbreviations as these
                        can affect your score. Use productive language in your
                        essay.
                      </ListItem>
                    </UnorderedList>
                    <Text>
                      These IELTS preparation guides will help you prepare
                      easily for each part of the IELTS exam. But is that all?
                      Well, just preparing each section is not enough, there are
                      some more general guidelines that you should keep in mind
                      and we have noted them down. Go read!!
                    </Text>
                  </Box>
                </Box>
                {/* TIPS  FOR PREPARING FOR THE IELTS EXAM: */}
                <Box>
                  <Box className="blog_heading">
                    <Text>TIPS FOR PREPARING FOR THE IELTS EXAM:</Text>
                  </Box>
                </Box>
                {/* tips for preparing the IELTS EXAMS */}
                <Box>
                  {blog2_contents.map((item, i) => {
                    return (
                      <Box key={i}>
                        <Box className="blog_heading">
                          <Text> {item.title} </Text>
                        </Box>
                        <Box>
                          <Box>
                            <UnorderedList>
                              <ListItem marginTop={"10px"}>
                                {item.content}
                              </ListItem>
                            </UnorderedList>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                {/* IELTS Syllabus */}
                <Box>
                  <Box className="blog_heading">
                    <Text> IELTS Syllabus</Text>
                  </Box>
                  <Box>
                    <Text mt={2}>
                      Now that we know the IELTS preparation guide, let's now
                      look at the IELTS syllabus.
                    </Text>
                    <Text mt={2}>
                      The time it takes to prepare for IELTS depends on how well
                      you know English. If you are confident in your language
                      skills, you don't need much time to prepare for IELTS.
                      However, if you are not confident enough, you should
                      improve your skills first. Read lots of newspapers and
                      magazines and watch English language news channels like
                      the BBC
                    </Text>
                  </Box>
                </Box>
                {/* Here is an example of an IELTS study guide:  */}
                <Box>
                  <Box className="blog_heading">
                    <Text>Here is an example of an IELTS study guide: </Text>
                  </Box>
                  <Box>
                    <UnorderedList>
                      <ListItem marginTop={3}>
                        Spend 1-2 hours a day on IELTS preparation, depending on
                        how much preparation you need.
                      </ListItem>
                      <ListItem marginTop={3}>
                        Divide your time and give each part enough time. For
                        example, if you spend 2 hours studying, allocate 30
                        minutes to each section
                      </ListItem>
                      <ListItem marginTop={3}>
                        Once you have gained enough confidence, take practice
                        tests to assess yourself.
                      </ListItem>
                      <ListItem marginTop={3}>
                        Depending on how well you score in your practice tests,
                        spend more time preparing for the missing part
                      </ListItem>
                      <ListItem marginTop={3}>
                        <ListItem marginTop={3}>
                          Follow your IELTS syllabus religiously and you will
                          definitely do well.
                        </ListItem>
                      </ListItem>
                    </UnorderedList>
                    <Box>
                      <Text marginTop={3} marginBottom={3}>
                        IELTS may seem like a tough cookie, but it is not that
                        difficult if you prepare well. Be confident and crack
                        your exam.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      )}
      {/* blog3 */}
      {id == 3 && <Blog_3 />}
      {/* blog 4 */}
      {id == 4 && <Blog_4 />}
    </>
  );
}

export default BlogIndividual;
