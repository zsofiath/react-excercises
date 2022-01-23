import {Route, Switch, BrowserRouter} from "react-router-dom";
import Allquotes from "./pages/AllQuotes";
import Quotedetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/quotes" exact><Allquotes></Allquotes></Route>
      <Route path="/new-quote"><NewQuote></NewQuote></Route>
      <Route path="/quotes/:quoteId"><Quotedetail></Quotedetail></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
