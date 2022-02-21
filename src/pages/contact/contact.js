import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Alert,
  AlertIcon,
  useColorModeValue,
  Textarea,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { IoIosReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useLang } from "../../context/langContext";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function Contact() {
  const bg = useColorModeValue("white.100", "gray.700");
  const textColor = useColorModeValue("black", "white");
  const btnColor = useColorModeValue("white.50", "gray.600");
  const { lang } = useLang();
  const { colorMode } = useColorMode();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        emailjs.send(
          "gmail",
          process.env.REACT_APP_TEMPLATE_ID,
          values,
          process.env.REACT_APP_EMAIL_ID
        );
        console.log("SUCCESS!");
        resetForm();
        Swal.fire({
          position: "center",
          icon: "success",
          title: lang === "tr-TR" ? "Mesajınız gönderildi." : "Message sent.",
          showConfirmButton: false,
          background: colorMode === "dark" ? "#2D3748" : "",
          color: colorMode === "dark" ? "#fff" : "",
          timer: 2000,
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Flex align="center" width="full" justifyContent="center">
      <Box position={"absolute"} top={"5"} left={"5"} mt="3">
        <Link to="/">
          <IconButton icon={<IoIosReturnLeft />} bgColor={btnColor} />
        </Link>
      </Box>

      <Box
        bgColor={bg}
        boxShadow="dark-lg"
        p="10"
        mt="100px"
        boxSize={"lg"}
        mx="10px"
        borderRadius="lg"
        maxHeight={"fit-content"}
      >
        <Box textAlign="center">
          <Heading color={textColor}>
            <FormattedMessage id="contact" />
          </Heading>
        </Box>

        <Box my={5}>
          {formik.errors.general && (
            <Alert
              status="error"
              color="white"
              bgColor="red.600"
              borderRadius="lg"
            >
              <AlertIcon color="red.900" />
              {formik.errors.general}
            </Alert>
          )}
        </Box>

        <Box my="5" textAlign="left">
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel color={textColor}>
                <FormattedMessage id="formName" />
              </FormLabel>
              <Input
                name="name"
                color={textColor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                isInvalid={formik.touched.name && formik.errors.name}
                placeholder={
                  lang === "tr-TR"
                    ? "İsiminizi girin"
                    : "Please enter your name"
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color={textColor}>E-Mail</FormLabel>
              <Input
                name="email"
                color={textColor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                autoComplete="none"
                isInvalid={formik.touched.email && formik.errors.email}
                placeholder={
                  lang === "tr-TR"
                    ? "Mailinizi girin"
                    : "Please enter your email"
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color={textColor}>
                <FormattedMessage id="formMessage" />
              </FormLabel>
              <Textarea
                name="message"
                color={textColor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                autoComplete="none"
                isInvalid={formik.touched.message && formik.errors.message}
                maxHeight="100px"
                resize={"none"}
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" width="full" mt={4}>
              <FormattedMessage id="formSubmit" />
            </Button>
          </form>
          <Link to="/">
            <Button
              colorScheme="teal"
              variant="link"
              width="full"
              mt={3}
              color="gray.500"
              fontSize="md"
            >
              <FormattedMessage id="btn_404" />
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}

export default Contact;
