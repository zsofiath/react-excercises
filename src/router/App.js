import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Allquotes from "./pages/AllQuotes";
import Quotedetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <Allquotes></Allquotes>
          </Route>
          <Route path="/new-quote">
            <NewQuote></NewQuote>
          </Route>
          <Route path="/quotes/:quoteId">
            <Quotedetail></Quotedetail>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
