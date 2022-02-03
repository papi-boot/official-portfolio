import React, { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mobNavbarStyle from "styles/mobile.navbar.module.scss";
const SocialMedia = ({ size, justifyContent }) => {
  return (
    <Fragment>
      <Box display="flex" alignContent="center" justifyContent={justifyContent} my="3" gap="1rem">
        <a
          href="https://www.facebook.com/Jasonevangelista.1122/"
          target="_blank"
          rel="noreferrer"
          className={mobNavbarStyle["social-media-effect"]}
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} width="20" size={`${size}`} />
        </a>
        <a
          href="https://www.instagram.com/potato_jason/"
          target="_blank"
          rel="noreferrer"
          className={mobNavbarStyle["social-media-effect"]}
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} width="20" size={`${size}`} />
        </a>
        <a
          href="https://twitter.com/JasonEvans1122"
          target="_blank"
          rel="noreferrer"
          className={mobNavbarStyle["social-media-effect"]}
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} width="20" size={`${size}`} />
        </a>
        <a
          href="https://github.com/papi-boot"
          target="_blank"
          rel="noreferrer"
          className={mobNavbarStyle["social-media-effect"]}
        >
          <FontAwesomeIcon icon={["fab", "github"]} width="20" size={`${size}`} />
        </a>
        <a
          href="https://www.linkedin.com/in/evangelista-jason-t-4683961b4/"
          target="_blank"
          rel="noreferrer"
          className={mobNavbarStyle["social-media-effect"]}
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} width="20" size={`${size}`} />
        </a>
      </Box>
    </Fragment>
  );
};

export default SocialMedia;
