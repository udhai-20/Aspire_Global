import { Box, Container, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Features from "../../Components/Feature/Features";
import Meta from "../../Components/Meta/Meta";

const avilableBlogs = [
  {
    title: "IELTS vs TOEFL",
    img: "../Images/Blog_1.jpg",
    blogNumber: "1",
  },
  {
    title: "TOEFL - BE THE PRO OF YOUR CAREER",
    img: "../Images/Blog_2.jpg",
    blogNumber: "2",
  },
  {
    title: "A Guide to ace the IELTS Exam",
    img: "../Images/BLog_3.jpg",
    blogNumber: "3",
  },
  {
    title: "TOEFL - BE THE PRO OF YOUR CAREER",
    img: "../Images/BLog_4.jpg",
    blogNumber: "4",
  },
];

function Blog(props) {
  return (
    <>
      <Meta title={"Blogs"} />
      <Box className="blog-wrapper">
        <Container maxW={"8xl"} marginTop={"2rem"} marginBottom={"2rem"}>
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={"20"}>
            {avilableBlogs.map((item) => {
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
                    btnName={"Read More"}
                    id={item.blogNumber}
                  />
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default Blog;
