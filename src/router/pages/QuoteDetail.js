import React from "react";
import { Route, Switch, useParams, Redirect, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "id1", author: "dsxc", text: "...." },
  { id: "id2", author: "dsxc", text: "...." },
  { id: "id3", author: "dsxc", text: "...." },
  { id: "id4", author: "dsxc", text: "...." },
  { id: "id5", author: "dsxc", text: "...." },
];
const Quotedetail = () => {
  let param = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);

  if (!quote) return <>No quote found</>;

  return (
    <>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route exact path={`/quotes/${param.quoteId}`}>
        <Link className="btn--flat" to={`/quotes/${param.quoteId}/comments`}>
          Comment
        </Link>
      </Route>
      <div>Quotedetail {param.quoteId}</div>
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  );
};

export default Quotedetail;
