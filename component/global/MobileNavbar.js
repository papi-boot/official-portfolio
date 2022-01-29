/* eslint-disable react/display-name */
import React, { Fragment } from "react";
import {
  Button,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faCode } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import NavLink from "./NavLink";
import SocialMedia from "./SocialMedia";
import mobNavStyle from "styles/mobile.navbar.module.scss";

const MobileNavbar = ({ mobileNavBtnTogglerRef, isOpen, onClose }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [links, setLinks] = React.useState([
    { link_path: "", name: "Home", id: 1 },
    { link_path: "about-me", name: "About me", id: 2 },
    { link_path: "projects", name: "Projects", id: 3 },
    { link_path: "blogs", name: "Blogs", id: 4 },
  ]);
  return (
    <Fragment>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={mobileNavBtnTogglerRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>@JE</DrawerHeader>
          <Divider />
          <DrawerBody p={0}>
            <div className={mobNavStyle["mob-navbar-container"]}>
              <ul className={mobNavStyle["mob-navbar-ul"]}>
                {links.map((item) => (
                  <NavLink
                    key={item.id}
                    activeClassName={mobNavStyle["mob-navbar-active"]}
                    href={`/${item.link_path}`}
                    passHref
                  >
                    <a className={mobNavStyle["mob-navbar-li"]}>{item.name}</a>
                  </NavLink>
                ))}
              </ul>
              <Divider my="0.5" />
              <div style={{ padding: "1rem" }}>
                <Button
                  style={{ width: "100%" }}
                  variant="solid"
                  size="sm"
                  onClick={toggleColorMode}
                >
                  {colorMode === "light" ? <span>Dark</span> : <span>Light</span>}&nbsp;&nbsp;
                  {colorMode === "light" ? (
                    <FontAwesomeIcon icon="moon" width="16" />
                  ) : (
                    <FontAwesomeIcon icon="sun" width="16" />
                  )}
                </Button>
              </div>
            </div>
          </DrawerBody>
          <DrawerFooter justifyContent="center">
            <div>
              <SocialMedia />
              <Text as="p" fontSize="smaller">
                Happy {format(new Date(), "EEEE")}!&nbsp;😀•&nbsp;Made with ❤ and&nbsp;
                <span style={{ display: "inline-block" }}>
                  <FontAwesomeIcon icon="code" width="16" />
                </span>
                <br />
              </Text>
              <Text as="p" fontSize="smaller" textAlign="center">
                All right reserved {format(new Date(), "yyyy")}
              </Text>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default MobileNavbar;
