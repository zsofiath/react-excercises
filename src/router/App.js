import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Allquotes from "./pages/AllQuotes";
import Quotedetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import Notfound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes"></Navigate>}/>
          <Route path="/quotes" element={<Allquotes></Allquotes>}/>
          <Route path="/new-quote" element={<NewQuote></NewQuote>}/>
          <Route path="/quotes/:quoteId" element={<Quotedetail></Quotedetail>}/>
          <Route path="*" element={<Notfound></Notfound>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
