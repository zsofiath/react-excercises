import {Route, Switch, BrowserRouter} from "react-router-dom";
import Addnewquote from "./pages/AddNewQuote";
import Allquotes from "./pages/AllQuotes";
import Quotedetail from "./pages/QuoteDetail";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact><Allquotes></Allquotes></Route>
      <Route path="/new-quote"><Addnewquote></Addnewquote></Route>
      <Route path="/quote-detail/:id"><Quotedetail></Quotedetail></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
