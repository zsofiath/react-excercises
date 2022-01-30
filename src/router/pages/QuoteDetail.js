import React, { useEffect } from "react";
import {
  Route,
  useParams,
  Link,
  useMatch,
  Routes,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Quotedetail = () => {
  let param = useParams();
  const match = useMatch();
  const {
    sendRequest,
    status,
    error,
    data: quote,
  } = useHttp(getSingleQuote, true);
  const { quoteId } = param;
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (!quote.text) return <>No quote found</>;
  console.log(1111);
  return (
    <>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      {/* <Routes>
        <Route path='' element={<div className="centered">
            <Link className="btn--flat" to='comments'>
              Comment
            </Link>
          </div>}/>
        <Route path='comments' element={<Comments></Comments>}/>
      </Routes> */}
    </>
  );
};

export default Quotedetail;
