import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({ selectedPageNumber, setSelectedPageNumber }) => {
  let navigate = useNavigate();
  const handleChangePage = (action) => {
    let pageNumber = selectedPageNumber;

    switch (action) {
      case "next":
        ++pageNumber;
        break;
      case "previous":
        --pageNumber;
        break;
      default:
        ++pageNumber;
    }
    // navigate(`products/${pageNumber}`);
    setSelectedPageNumber(pageNumber);
  };

  return (
    <div className="pagination">
      {selectedPageNumber !== 1 && (
        <button onClick={() => handleChangePage("previous")}>Previous</button>
      )}
      <p className="page">{selectedPageNumber}</p>
      {selectedPageNumber !== 3 && (
        <button onClick={() => handleChangePage("next")}>Next</button>
      )}
    </div>
  );
};
export default Pagination;
