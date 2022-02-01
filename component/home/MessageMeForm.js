/* eslint-disable react-hooks/rules-of-hooks  */
import React, { Fragment } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  useMediaQuery,
  useColorModeValue,
  Container,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useFetch } from "api/useFetch";
import homeStyle from "styles/home.module.scss";
const MessageMeForm = () => {
  const [isMobile] = useMediaQuery("(max-width: 37rem)");
  const invertHeadingBg = useColorModeValue(0, 1);
  const toast = useToast();
  return (
    <Fragment>
      <section style={{ margin: "3rem 0" }}>
        <Box>
          <Heading
            as="h1"
            size="2xl"
            width={isMobile ? "max-content" : "max-content"}
            position="relative"
            className={homeStyle["heading-with-bg-style"]}
          >
            {"I'm Ready"}
            <div
              className={homeStyle["heading-bg-style"]}
              style={{ filter: `invert(${invertHeadingBg})` }}
            ></div>
          </Heading>
        </Box>
        <Container maxW="container.xl" px={0} my="10">
          <Formik
            initialValues={{ email: "", name: "", message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Oops, Email is required.";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
              }
              if (!values.name) {
                errors.name = "Let's be friend 😃";
              }

              if (!values.message) {
                errors.message = "Leave me a message...";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              useFetch(values, "POST", "message")
                .then((res) => {
                  if (res) {
                    if (res.success) {
                      toast({
                        title: res.message,
                        description: "Gotcha!, I will response to your message as soon as possible",
                        status: "success",
                        duration: 6000,
                        isClosable: true,
                        position: "top",
                      });
                      setSubmitting(false);
                    } else {
                      toast({
                        title: "Something's went wrong",
                        description: res.message,
                        status: "error",
                        duration: 6000,
                        isClosable: true,
                        position: "top",
                      });
                      setSubmitting(false);
                    }
                  } else {
                    throw new Error(
                      "Something went wrong. Please try again later or direct message me on any social media platform above"
                    );
                  }
                })
                .catch((err) => {
                  toast({
                    title: "Something's went wrong",
                    description: err.message,
                    status: "error",
                    duration: 6000,
                    isClosable: true,
                    position: "top",
                  });
                  setSubmitting(false);
                });
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <Box display="flex" gap={4} mb="4" flexDirection={isMobile ? "column" : "row"}>
                  <FormControl isRequired isInvalid={errors.email && touched.email ? true : false}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      type="email"
                      name="email"
                      as={Input}
                      placeholder="your-awesome-email@gmail.com"
                    />
                    {errors.email && touched.email ? (
                      <FormHelperText color="red.400" fontWeight={600} fontSize="xs">
                        {errors.email}
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                  <FormControl isRequired isInvalid={errors.name && touched.name ? true : false}>
                    <FormLabel htmlFor="email">Name</FormLabel>
                    <Field type="text" name="name" as={Input} placeholder="Your awesome Name" />
                    {errors.name && touched.name ? (
                      <FormHelperText color="red.400" fontWeight={600} fontSize="xs">
                        {errors.name}
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                </Box>
                <FormControl
                  isRequired
                  isInvalid={errors.message && touched.message ? true : false}
                >
                  <FormLabel htmlFor="email">Message</FormLabel>
                  <Field
                    name="message"
                    as={Textarea}
                    rows={5}
                    placeholder="Your message is so much appreciated..."
                  />
                  {errors.message && touched.message ? (
                    <FormHelperText color="red.400" fontWeight={600} fontSize="xs">
                      {errors.message}
                    </FormHelperText>
                  ) : null}
                </FormControl>
                <Box display="flex" justifyContent="end" my="3">
                  <Button
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    width={isMobile ? "100%" : "max-content"}
                    isLoading={isSubmitting}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Container>
      </section>
    </Fragment>
  );
};
export default MessageMeForm;
