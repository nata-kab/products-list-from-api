import { Provider } from "react-redux";
import store from "./store/store";
import RouterComponent from "./components/RouterComponent";

function App() {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
}

export default App;
