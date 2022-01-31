import React, { Fragment } from "react";
export const GlobalDataContext = React.createContext();

const GlobalDataProvider = (props) => {
  const [pageTitle, setPageTitle] = React.useState("Jason Evangelista | Home");
  
  const value = {
    pageTitle,
    setPageTitle,
  };
  return (
    <Fragment>
      <GlobalDataContext.Provider value={value}>{props.children}</GlobalDataContext.Provider>
    </Fragment>
  );
};

export default GlobalDataProvider;
