import React, { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const SocialMedia = () => {
  return (
    <Fragment>
      <Box display="flex" alignContent="center" justifyContent="center" my="3" gap="1rem">
        <a href="https://www.facebook.com/Jasonevangelista.1122/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="lg" icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/potato_jason/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="lg" icon={faInstagram} />
        </a>
        <a href="https://twitter.com/JasonEvans1122" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="lg" icon={faTwitter} />
        </a>
        <a href="https://github.com/papi-boot" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/evangelista-jason-t-4683961b4/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faLinkedin} />
        </a>
      </Box>
    </Fragment>
  );
};

export default SocialMedia;
