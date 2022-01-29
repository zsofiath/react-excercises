import React from "react";
import classes from "./Layout.module.css";
import Mainnavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <Mainnavigation></Mainnavigation>
      <div className={classes.main}>{props.children}</div>
    </>
  );
};

export default Layout;
