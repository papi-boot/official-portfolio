/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import Head from "next/head";
import ProjectMetaTags from "component/meta-tags/ProjectMetaTags";
import Footer from "component/global/Footer";
const ProjectHomePage = () => {
  return (
    <Fragment>
      <Head>
        <ProjectMetaTags />
        <title>Jason Evangelista | Projects</title>
        <link rel="shortcut icon" href="/jason-evangelista.png" type="image/x-icon" />
      </Head>
      <h4>Project HomePage here</h4>
      <Footer />
    </Fragment>
  );
};

export default ProjectHomePage;
