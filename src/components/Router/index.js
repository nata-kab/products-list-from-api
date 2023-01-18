import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../MainPage";
import Error from "../Error";
import ProductsTable from "../ProductsTable";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/:pageNumber/:productId?" element={<ProductsTable />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
