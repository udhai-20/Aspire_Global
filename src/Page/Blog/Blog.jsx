import { Box, Container, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Features from "../../Components/Feature/Features";
import Meta from "../../Components/Meta/Meta";

const avilableBlogs = [
  {
    title: "IELTS vs TOEFL",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_Sb0daGNaXESEzXhlljECxzbaiozf3D36Q&usqp=CAU",
    blogNumber: "1",
  },
  {
    title: "IELTS vs TOEFL",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_Sb0daGNaXESEzXhlljECxzbaiozf3D36Q&usqp=CAU",
    blogNumber: "2",
  },
  {
    title: "IELTS vs TOEFL",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_Sb0daGNaXESEzXhlljECxzbaiozf3D36Q&usqp=CAU",
    blogNumber: "3",
  },
];

function Blog(props) {
  return (
    <>
      <Meta title={"Blogs"} />
      <Box className="blog-wrapper">
        <Container maxW={"8xl"} marginTop={"2rem"} marginBottom={"2rem"}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={"20"}>
            {avilableBlogs.map((item) => {
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
