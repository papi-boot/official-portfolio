import React, { Fragment } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  useMediaQuery,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homeStyle from "styles/home.module.scss";
import IconReact from "component/svg/IconReact";
import IconTypescript from "component/svg/IconTypescript";
import IconPostgres from "component/svg/IconPostgres";
const SkillsShowCase = () => {
  const [isMobile] = useMediaQuery("(max-width: 37rem)");
  const invertHeadingBg = useColorModeValue(0, 1);
  const skillBrandIconColor = useColorModeValue("#1a202c", "#fff");
  return (
    <Fragment>
      <section style={{ margin: "3rem 0" }} id="skills">
        <div className={homeStyle["home-banner-container"]}>
          <Box>
            <Heading
              as="h1"
              size="2xl"
              width={isMobile ? "max-content" : "max-content"}
              position="relative"
              className={homeStyle["heading-with-bg-style"]}
            >
              Skills
              <div
                className={homeStyle["heading-bg-style"]}
                style={{ filter: `invert(${invertHeadingBg})` }}
              ></div>
            </Heading>
          </Box>
          <Box py="3">
            <Text as="p" fontSize="lg" lineHeight={1.8} letterSpacing={0.3} fontWeight={700}>
              Tools that i use everyday and keep exploring to improve my arsenal.
            </Text>
          </Box>
        </div>
      </section>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="3rem" my="10">
        <GridItem w="100%">
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <FontAwesomeIcon
              icon={["fab", "js"]}
              size={isMobile ? "6x" : "5x"}
              width={isMobile ? "6rem" : "5rem"}
            />
            <Heading as="h3" size="lg">
              Javascript
            </Heading>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            pt="3"
          >
            <IconTypescript color={skillBrandIconColor} size={isMobile ? "6rem" : "4.9rem"} />
            <Heading as="h3" size="lg">
              Typescript
            </Heading>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            pt="3"
          >
            <IconReact color={skillBrandIconColor} size={isMobile ? "6rem" : "5.5rem"} />
            <Heading as="h3" size="lg">
              ReactJS
            </Heading>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <FontAwesomeIcon
              icon={["fab", "node"]}
              size={isMobile ? "6x" : "5x"}
              width={isMobile ? "6rem" : "7rem"}
            />
            <Heading as="h3" size="lg">
              NodeJS
            </Heading>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <IconPostgres color={skillBrandIconColor} size={isMobile ? "6rem" : "5.5rem"} />
            <Heading as="h3" size="lg">
              PostgreSQL
            </Heading>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <FontAwesomeIcon
              icon={["fab", "sass"]}
              size={isMobile ? "6x" : "5x"}
              width={isMobile ? "6rem" : "7.3rem"}
            />
            <Heading as="h3" size="lg">
              SCSS
            </Heading>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <FontAwesomeIcon
              icon={["fab", "bootstrap"]}
              size={isMobile ? "6x" : "5x"}
              width={isMobile ? "6rem" : "6.7rem"}
            />
            <Heading as="h3" size="lg">
              Bootstrap
            </Heading>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <FontAwesomeIcon
              icon={["fab", "html5"]}
              size={isMobile ? "6x" : "5x"}
              width={isMobile ? "6rem" : "4.6rem"}
            />
            <Heading as="h3" size="lg">
              HTML5
            </Heading>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <FontAwesomeIcon
              icon={["fab", "css3"]}
              size={isMobile ? "6x" : "5x"}
              width={isMobile ? "6rem" : "5.5rem"}
            />
            <Heading as="h3" size="lg">
              CSS3
            </Heading>
          </Box>
        </GridItem>
      </Grid>
    </Fragment>
  );
};

export default SkillsShowCase;
