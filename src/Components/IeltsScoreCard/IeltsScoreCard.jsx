import {
  Box,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import "./IeltsScoreCard.css";
const IeltsScoreCard = ({
  name,
  listening,
  reading,
  writing,
  speaking,
  bandscore,
  cefrlevel,
  imgLink,
}) => {
  return (
    <>
      <Box className="card_wrapper">
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            padding={"5px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"100%"}
          >
            <Image w={"62%"} src={imgLink} />
          </Box>
          <Box>
            <TableContainer overflowX="hidden">
              <Table variant={"striped"} size="md">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>{name}</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Listening</Td>
                    <Td>{listening}</Td>
                  </Tr>
                  <Tr>
                    <Td>Reading</Td>
                    <Td>{reading}</Td>
                  </Tr>
                  <Tr>
                    <Td>Speaking</Td>
                    <Td>{speaking}</Td>
                  </Tr>
                  <Tr>
                    <Td>Writing</Td>
                    <Td>{writing}</Td>
                  </Tr>
                  <Tr>
                    <Td>BandScore</Td>
                    <Td>{bandscore}</Td>
                  </Tr>
                  <Tr>
                    <Td>CEFRLevel</Td>
                    <Td>{cefrlevel}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IeltsScoreCard;
