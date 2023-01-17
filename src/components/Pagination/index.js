import React from "react";
import "./Pagination.css";

const Pagination = ({ selectedPage, setSelectedPage }) => {
  const handleChangePage = (action) => {
    let pageNumber = selectedPage;

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

    setSelectedPage(pageNumber);
  };

  return (
    <div className="pagination">
      {selectedPage !== 1 && (
        <button onClick={() => handleChangePage("previous")}>Previous</button>
      )}
      <p className="page">{selectedPage}</p>
      {selectedPage !== 3 && (
        <button onClick={() => handleChangePage("next")}>Next</button>
      )}
    </div>
  );
};
export default Pagination;
