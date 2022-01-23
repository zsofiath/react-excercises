import React from "react";
import { useParams } from "react-router-dom";
const Quotedetail = () => {
    let param = useParams();
    console.log(param);
  return <div>Quotedetail {param.id}</div>;
};

export default Quotedetail;
