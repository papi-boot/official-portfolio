import React, { Fragment } from "react";
import { Heading, Text, Box, useMediaQuery, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homeStyle from "styles/home.module.scss";
const AboutMe = () => {
  const [isMobile] = useMediaQuery("(max-width: 37rem)");
  const invertHeadingBg = useColorModeValue(0, 1);
  return (
    <Fragment>
      <section
        id="about-me"
        className={homeStyle["home-banner-container"]}
        style={{ margin: "3rem 0" }}
      >
        <Box>
          <Heading
            as="h1"
            size="2xl"
            width={isMobile ? "max-content" : "max-content"}
            position="relative"
            className={homeStyle["heading-with-bg-style"]}
          >
            About me
            <div
              className={homeStyle["heading-bg-style"]}
              style={{ filter: `invert(${invertHeadingBg})` }}
            ></div>
          </Heading>
        </Box>
        <Box py="3">
          <Text as="p" fontSize="lg" lineHeight={1.8} letterSpacing={.3} fontWeight={500}>
            I am pursuing my career as a Web Developer and soon to be as Software Developer. I am
            currently completing the required degree in Technology field by taking Bachelor of
            Science in Information Technology(<strong>BSIT</strong>) at&nbsp;
            <Text
              as="a"
              href="https://www.evsu.edu.ph/"
              target="_blank"
              rel="noreferrer"
              textDecor="underline"
            >
              Eastern Visayas State University(<strong>EVSU</strong>)&nbsp;&nbsp;
              <FontAwesomeIcon icon="external-link-alt" width="20" size="sm" />.
            </Text>
            &nbsp; I code everyday and I just love to be consistent {" cuz' "} Skills takes time to
            obtain and yep, Consistency is the key.
          </Text>
        </Box>
      </section>
    </Fragment>
  );
};

export default AboutMe;
