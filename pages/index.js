/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import Head from "next/head";
import style from "styles/main.module.scss";
const HomePage = () => {
  const { pageTitle, setPageTitle } = React.useContext(GlobalDataContext);
  React.useLayoutEffect(() => {
    setPageTitle("@JE | Home");
  }, []);
  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1 className={style.custom}>Hello World</h1>
    </Fragment>
  );
};

export default HomePage;
