/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import Head from "next/head";
const BlogHomePage = () => {
  const { pageTitle, setPageTitle } = React.useContext(GlobalDataContext);
  React.useLayoutEffect(() => {
    setPageTitle("@JE | Blogs");
  }, []);
  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h4>Blog HomePage here</h4>
    </Fragment>
  );
};

export default BlogHomePage;
