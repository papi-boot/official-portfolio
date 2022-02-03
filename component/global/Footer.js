import React, { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import SocialMedia from "./SocialMedia";
const Footer = () => {
  return (
    <Fragment>
      <footer style={{ padding: "2rem 0" }}>
        <SocialMedia size="2x" justifyContent="center" />
        <Text as="p" textAlign="center">
          Happy {format(new Date(), "EEEE")}!&nbsp;😀•&nbsp;Made with ❤ and&nbsp;
          <span style={{ display: "inline-block" }}>
            <FontAwesomeIcon icon="code" width="16" />
          </span>
          &nbsp;- All Right Reserved.&nbsp;{format(new Date(), "yyyy")}
        </Text>
      </footer>
    </Fragment>
  );
};

export default Footer;
