/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import {
  Box,
  Image,
  Heading,
  useColorModeValue,
  Text,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import SocialMedia from "component/global/SocialMedia";
import AboutMe from "component/about-me/AboutMe";
import homeStyle from "styles/home.module.scss";
import SkillsShowCase from "component/home/SkillsShowCase";
const HomePage = () => {
  const frontImage = "/assets/jason-plain.jpg";
  const backImage = "/assets/jason-vector.jpg";
  const invertHeadingBg = useColorModeValue(0, 1);
  const myFace = useColorModeValue(frontImage, backImage);
  const [isMobile] = useMediaQuery("(max-width: 37rem)");
  return (
    <Fragment>
      <Head>
        <title>Jason Evangelista | Home</title>
        <meta
          name="description"
          content="Hey there!, I'm Jason Evangelista your regular person and I love technology especially when creating Web applications"
        />
        <link rel="shortcut icon" href="/jason-evangelista.png" type="image/x-icon" />
      </Head>
      <section className="introduction">
        <div className={homeStyle["home-banner-container"]}>
          <div className={homeStyle["home-image-container"]}>
            <Image
              className={homeStyle["imgs-sz"]}
              src={myFace}
              alt="Jason Evangelista"
              borderRadius="full"
            />
          </div>
          <div className={homeStyle["home-intro-container"]}>
            <Heading as="h2" size={isMobile ? "md" : "lg"} fontWeight={900}>
              Hello, I am
            </Heading>
            <Heading
              as="h1"
              size={isMobile ? "3xl" : "4xl"}
              fontWeight={900}
              position="relative"
              width="max-content"
              className={homeStyle["heading-with-bg-style"]}
            >
              Jason
              <div
                className={homeStyle["heading-bg-style"]}
                style={{ filter: `invert(${invertHeadingBg})` }}
              ></div>
            </Heading>
            <Heading
              as="h1"
              size={isMobile ? "3xl" : "4xl"}
              fontWeight={900}
              position="relative"
              width={isMobile ? "max-content" : "max-content"}
              className={homeStyle["heading-with-bg-style"]}
            >
              Evangelista
              <div
                className={homeStyle["heading-bg-style"]}
                style={{ filter: `invert(${invertHeadingBg})` }}
              ></div>
            </Heading>
            <Divider my="5" />
            <Text as="p" fontSize="md" lineHeight={1.5} fontWeight={500}>
              Your regular person and I love technology especially when creating Web applications -
              <strong>&nbsp;Keep Exploring</strong>
            </Text>
            <Box my="4">
              <Text as="p" fontSize="md" lineHeight={1.5} fontWeight={500}>
                {"Let's Connect"}
              </Text>
              <SocialMedia size="2x" justifyContent="start" />
            </Box>
          </div>
        </div>
      </section>
      <Divider my={isMobile ? "1" : "9"} />
      <AboutMe />
      <Divider my={isMobile ? "1" : "9"} />
      <SkillsShowCase />
    </Fragment>
  );
};

export default HomePage;
