import Counter from "./components/Counter";
import "./index.css";
import { Provider } from "react-redux";
 import store from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
