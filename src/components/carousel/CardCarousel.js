import React from "react";

const CardCarousel = () => {
  return (
    <div className="item p-4 ">
      <div className="row justify-content-center align-items-center ">
        <div className="col-3">
          <img
            src="./assets/img_photo1.png"
            alt=""
            style={{ width: "80px" }}
            className="mx-auto"
          />
        </div>
        <div className="col-9">
          <i
            className="bi bi-star-fill"
            style={{
              color: "#f9cc00",
            }}
          ></i>
          <i
            className="bi bi-star-fill"
            style={{
              color: "#f9cc00",
            }}
          ></i>
          <i
            className="bi bi-star-fill"
            style={{
              color: "#f9cc00",
            }}
          ></i>
          <i
            className="bi bi-star-fill"
            style={{
              color: "#f9cc00",
            }}
          ></i>
          <i
            className="bi bi-star-fill"
            style={{
              color: "#f9cc00",
            }}
          ></i>
          <div className="comment">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            aliquid obcaecati quibusdam repellendus suscipit doloremque beatae
            iure odit. Totam libero odit facilis iste consectetur numquam!"
          </div>
          <div
            className="profile mt-2"
            style={{
              fontSize: "18px",
              fontWeight: "bolder",
            }}
          >
            Ash 20, Singapore
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
