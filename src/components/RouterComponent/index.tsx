import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../MainPage";
import PageNotFound from "../PageNotFound";
import ProductsTable from "../ProductsTable";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route
            path="/products/:pageNumber/:productId?"
            element={<ProductsTable />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
