import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({ selectedPage, setSelectedPage }) => {
  let navigate = useNavigate();
  const handleChangePage = (action) => {
    let pageNumber = selectedPage;
    // let navigate = useNavigate();

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

    navigate("/example");
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
