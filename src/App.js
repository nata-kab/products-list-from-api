import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Example from "./components/Example";
import Error from "./components/Error";
import ProductsTable from "./components/ProductsTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/example" element={<Example />} />
        <Route path="/" element={<MainPage />}>
          <Route path=":id=1" element={<ProductsTable />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
