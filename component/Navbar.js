import React, { Fragment } from "react";
import navStyle from "styles/navbar.module.scss";
import NavLink from "./NavLink";
import { useRouter } from "next/router";
import { Container, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
FontAwesomeIcon;
const Navbar = () => {
  const router = useRouter();
  const [links, setLinks] = React.useState([
    { link_path: "", name: "Home", id: 1 },
    { link_path: "#about-me", name: "About me", id: 2 },
    { link_path: "projects", name: "Projects", id: 3 },
    { link_path: "blogs", name: "Blogs", id: 4 },
  ]);
  return (
    <Fragment>
      <header>
        <div className={navStyle["navbar-wrapper"]}>
          <Container maxW="container.xl">
            <nav className={navStyle["main-navbar"]}>
              <div className={navStyle["navbar-logo"]}>
                <h4>@JE</h4>
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
                    <FontAwesomeIcon icon={faMoon} />
                  </div>
                </ul>
              </div>
            </nav>
          </Container>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
