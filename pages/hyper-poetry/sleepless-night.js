import Head from "next/head";
import React, { Fragment } from "react";
import {
  Heading,
  useMediaQuery,
  useColorModeValue,
  Container,
  Text,
  Box,
} from "@chakra-ui/react";
import homeStyle from "styles/home.module.scss";
import Script from "next/script";
import Image from "next/image";

const SleepLessNight = () => {
  const [isMobile] = useMediaQuery("(max-width: 37rem)");
  const invertHeadingBg = useColorModeValue(0, 1);

  const bodyTextSize = isMobile ? "lg" : "2xl";

  return (
    <Fragment>
      <Head>
        <title>Sleepless Night - Jason Evangelista</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.jason-evangelista.me/hyper-poetry/sleepless-night"
        />
        <meta property="og:title" content="Jason Evangelista | Blogs" />
        <meta
          property="og:description"
          content="Sleepless Night - Hyper Poetry Web based, Present by Jason Evangelista BSIT 2A"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        />
      </Head>
      <div className="poet-container">
        <Heading
          as="h1"
          size={isMobile ? "2xl" : "3xl"}
          fontWeight={900}
          position="relative"
          width="max-content"
          textAlign="center"
          className={`${homeStyle["heading-with-bg-style"]}`}
          mb={5}
        >
          Sleepless Night
          <div
            className={homeStyle["heading-bg-style"]}
            style={{ filter: `invert(${invertHeadingBg})` }}
          ></div>
        </Heading>
        <Box
          paddingY={0}
          paddingX="4"
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          width="full"
          justifyContent="center"
          flexDirection={isMobile ? "column" : "row"}
          gap={5}
          mb={20}
        >
          <Box width={isMobile ? "full" : "max"}>
            <Text fontWeight={700} fontSize={bodyTextSize} mt={5}>
              We have to give it a shot,
            </Text>
            <Text fontWeight={700} fontSize={bodyTextSize} my={1}>
              Even if the solution won&apos;t give you an insight,
            </Text>
            <Text fontWeight={700} fontSize={bodyTextSize} my={1}>
              Clock is counting down and you must to fight,
            </Text>
            <Text fontWeight={700} fontSize={bodyTextSize} my={1}>
              Push the limit until the end of night.
            </Text>
          </Box>
          <Box position="relative" width={isMobile ? "full" : "max"}>
            <Image
              layout="intrinsic"
              objectFit="cover"
              width={400}
              height={300}
              loading="lazy"
              alt="Studying"
              src={`https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80`}
            />
          </Box>
        </Box>
        <Box
          paddingY={0}
          paddingX="4"
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          width="full"
          justifyContent="center"
          flexDirection={isMobile ? "column" : "row-reverse"}
          gap={5}
          mb={20}
        >
          <Box width={isMobile ? "full" : "max"}>
            <Text fontWeight={700} fontSize={bodyTextSize} mt={5}>
              Tomorrow is a great story,
            </Text>
            <Text fontWeight={700} fontSize={bodyTextSize} my={1}>
              yesterday remains history,
            </Text>
            <Text fontWeight={700} fontSize={bodyTextSize} my={1}>
              Today is a gift to fight again for victory
            </Text>
            <Text fontWeight={700} fontSize={bodyTextSize} my={1}>
              Let the positivity flown in your body
            </Text>
          </Box>
          <Box position="relative" width={isMobile ? "full" : "max"}>
            <Image
              layout="intrinsic"
              objectFit="cover"
              width={400}
              height={300}
              loading="lazy"
              alt="Studying"
              src={`https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80`}
            />
          </Box>
        </Box>
        <Box
          paddingY={0}
          paddingX="4"
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          width="full"
          justifyContent="center"
          flexDirection={isMobile ? "column" : "row"}
          gap={5}
          my={20}
        >
          <Box width={isMobile ? "full" : "max"}>
            <Text fontWeight={700} fontSize={bodyTextSize} mt={5}>
              Keep on moving forward,
            </Text>
            <Text fontWeight={700} fontSize={bodyTextSize} my={1}>
              Omit the things that keeps your way to <br />
              &nbsp;pull you backwards,
            </Text>
            <Text fontWeight={700} fontSize={bodyTextSize} my={1}>
              And as the time goes by, things may
              <br />
              &nbsp;went too hard,
            </Text>
            <Text fontWeight={700} fontSize={bodyTextSize} my={1}>
              Your hardwork will pay off and just
              <br />
              &nbsp;claim the reward
            </Text>
          </Box>
          <Box position="relative" width={isMobile ? "full" : "max"}>
            <Image
              layout="intrinsic"
              objectFit="cover"
              width={400}
              height={300}
              loading="lazy"
              alt="Studying"
              src={`https://images.unsplash.com/photo-1549633030-89d0743bad01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80`}
            />
          </Box>
        </Box>
        <Box my={5}>
          <Text textAlign="center" fontSize="sm">
            All image used was free and available at&nbsp;
            <Text
              fontWeight={800}
              as="a"
              textDecoration="underline"
              href="https://unsplash.com"
            >
              unsplash.com
            </Text>
            . &copy; 2022
          </Text>
        </Box>
      </div>
    </Fragment>
  );
};

export default SleepLessNight;
