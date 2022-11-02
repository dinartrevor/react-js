import React from "react";

const ListCar = ({ children }) => {
  return (
    <div className="container mt-4">
      <div
        id="cars-container"
        className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3"
      >
        {children}
      </div>
    </div>
  );
};

export default ListCar;
