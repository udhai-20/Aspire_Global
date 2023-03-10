import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
  Select,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
const user = {
  name: "",
  email: "",
  mobilenumber: "",
  program: "",
  message: "",
};
function Model({ check }) {
  const [formdata, setFormData] = useState(user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { name, email, mobilenumber, program, message } = formdata;
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formdata, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("chiking", e.target);
    onClose();

    emailjs
      .sendForm(
        "service_t78aj5w",
        "template_kfwsj7p",
        e.target,
        "OTViQfEUQojir13_q"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setFormData({
            ...formdata,
            name: "",
            email: "",
            mobilenumber: "",
            program: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Error sending email.");
        }
      );
  };
  useEffect(() => {
    onOpen();
  }, [onOpen]);
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>Contact Us</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type={"text"}
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  type={"email"}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  placeholder="Mobile Number"
                  name="mobilenumber"
                  value={mobilenumber}
                  onChange={handleChange}
                  type={"email"}
                />
              </FormControl>
              <FormControl id="program" mt={4}>
                <Select
                  name="program"
                  value={program}
                  onChange={handleChange}
                  placeholder="program"
                >
                  <option value="ielts_calssroom">IELTS Classroom</option>
                  <option value="ielts_online_batch">IELTS Online Batch</option>
                  <option value="one_on_one">IELTS One-On-One</option>
                  <option value="online_prep">IELTS Online Prep</option>
                </Select>
              </FormControl>
              <FormControl>
                <Textarea
                  mt={4}
                  value={message}
                  name="message"
                  onChange={handleChange}
                  placeholder="message"
                  size="sm"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default Model;
