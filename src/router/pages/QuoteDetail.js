import React from "react";
import {Route, Switch, useParams, Redirect} from "react-router-dom";
import Comments from "../components/comments/Comments";

const Quotedetail = () => {
  let param = useParams();
  console.log(param);
  return (
    <>
      <div>Quotedetail {param.quoteId}</div>
      <Route path={`/quotes/${param.quoteId}/comments`}><Comments></Comments></Route>
    </>
  );
};

export default Quotedetail;
