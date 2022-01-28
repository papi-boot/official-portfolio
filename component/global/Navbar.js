import React, { Fragment } from "react";
import {
  Container,
  Divider,
  Box,
  IconButton,
  useColorMode,
  useMediaQuery,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import NavLink from "./NavLink";
import navStyle from "styles/navbar.module.scss";
import MobileNavbar from "./MobileNavbar";
FontAwesomeIcon;
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 36rem)");
  const headerBg = useColorModeValue("#fff", "#1a202c");
  const [links, setLinks] = React.useState([
    { link_path: "", name: "Home", id: 1 },
    { link_path: "about-me", name: "About me", id: 2 },
    { link_path: "projects", name: "Projects", id: 3 },
    { link_path: "blogs", name: "Blogs", id: 4 },
  ]);
  const mobileNavBtnTogglerRef = React.useRef(null);
  return (
    <Fragment>
      <Box
        bg={headerBg}
        style={{
          position: "sticky",
          top: "0",
          zIndex: "2",
        }}
      >
        <div className={navStyle["navbar-wrapper"]}>
          <Container maxW="container.lg">
            <nav className={navStyle["main-navbar"]}>
              <div className={navStyle["navbar-logo"]}>
                <NextLink href="/">
                  <h4 style={{ cursor: "pointer", fontWeight: "800" }}>@JE</h4>
                </NextLink>
              </div>
              <div>
                {isMobile ? (
                  <Fragment>
                    <div>
                      <IconButton
                        ref={mobileNavBtnTogglerRef}
                        size="sm"
                        variant="solid"
                        icon={<FontAwesomeIcon size="1x" icon={faAngleRight} />}
                        onClick={onOpen}
                      />
                    </div>
                    <MobileNavbar
                      mobileNavBtnTogglerRef={mobileNavBtnTogglerRef}
                      isOpen={isOpen}
                      onClose={onClose}
                    />
                  </Fragment>
                ) : (
                  <Fragment>
                    <ul className={navStyle["navbar-ul"]}>
                      {links.map((item) => (
                        <li key={item.id}>
                          <NavLink
                            activeClassName={navStyle["navlink-is-active"]}
                            href={`/${item.link_path}`}
                            passHref
                          >
                            <a>{item.name}</a>
                          </NavLink>
                        </li>
                      ))}
                      <IconButton
                        size="sm"
                        variant="solid"
                        icon={
                          colorMode === "light" ? (
                            <FontAwesomeIcon size="1x" icon={faMoon} />
                          ) : (
                            <FontAwesomeIcon size="1x" icon={faSun} />
                          )
                        }
                        onClick={toggleColorMode}
                      />
                    </ul>
                  </Fragment>
                )}
              </div>
            </nav>
          </Container>
        </div>
        <Divider />
      </Box>
    </Fragment>
  );
};

export default Navbar;
