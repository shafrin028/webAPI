import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

function Catsdetails() {
  let params = useParams();
  let navigate = useNavigate();

  function goHome() {
    navigate("/cats");
  }
  return (
    <React.Fragment>
      <h1>Cats Details</h1>
      <h2>Cat Id: {params.catId} </h2>
      <button onClick={goHome}>Go To Cats Page</button>
    </React.Fragment>
  );
}

export default Catsdetails;
