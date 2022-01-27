import React, { Fragment } from "react";
import { Container, Divider, IconButton, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import NavLink from "./NavLink";
import navStyle from "styles/navbar.module.scss";
FontAwesomeIcon;
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [links, setLinks] = React.useState([
    { link_path: "", name: "Home", id: 1 },
    { link_path: "about-me", name: "About me", id: 2 },
    { link_path: "projects", name: "Projects", id: 3 },
    { link_path: "blogs", name: "Blogs", id: 4 },
  ]);
  return (
    <Fragment>
      <header>
        <div className={navStyle["navbar-wrapper"]}>
          <Container maxW="container.lg">
            <nav className={navStyle["main-navbar"]}>
              <div className={navStyle["navbar-logo"]}>
                <NextLink href="/">
                  <h4 style={{cursor: "pointer"}}>@JE</h4>
                </NextLink>
              </div>
              <div>
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
                  <div>
                    <IconButton
                      size="sm"
                      variant="solid"
                      icon={
                        colorMode === "light" ? (
                          <FontAwesomeIcon icon={faMoon} />
                        ) : (
                          <FontAwesomeIcon icon={faSun} />
                        )
                      }
                      onClick={toggleColorMode}
                    />
                  </div>
                </ul>
              </div>
            </nav>
          </Container>
        </div>
        <Divider />
      </header>
    </Fragment>
  );
};

export default Navbar;
