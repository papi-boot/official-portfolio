/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import Head from "next/head";
const AboutMePage = () => {
  const {pageTitle, setPageTitle} = React.useContext(GlobalDataContext);
  React.useEffect(() => {
    setPageTitle("@JE | About me")
  }, [])
  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h4>About me</h4>
    </Fragment>
  );
};

export default AboutMePage;
