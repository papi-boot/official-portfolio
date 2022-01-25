/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import Head from "next/head";
const ProjectHomePage = () => {
  const {pageTitle, setPageTitle} = React.useContext(GlobalDataContext);
  React.useLayoutEffect(() => {
    setPageTitle("@JE | Projects");
  }, [])
  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h4>Project HomePage here</h4>
    </Fragment>
  );
};

export default ProjectHomePage;
