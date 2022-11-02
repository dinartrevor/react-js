import React from "react";

const CardCar = ({ cars }) => {
  return cars.map((car) => (
    <div key={car.id}>
      <div className="carContainer align-items-stretch">
        <div className="card p-3">
          <div className="image-card">
            <img
              src={car.image}
              className="w-100"
              alt=""
              style={{ maxHeight: "180px", objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="fw-bold mt-1">
              {car.manufacture}/{car.model}
            </p>
          </div>
          <div>
            <h5 className="fw-bolder">Rp. {car.rentPerDay} / hari</h5>
          </div>
          <div>
            <p className="car-desc">
              {" "}
              {car.description !== ""
                ? car.description
                : "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia exercitationem vel iure! Eligendi, delectus."}
            </p>
          </div>
          <div>
            <span>
              <i className="bi bi-people me-3"></i>
              {car.capacity} Orang
            </span>
          </div>
          <div>
            <span>
              <i className="bi bi-gear me-3"></i>
              {car.transmission}
            </span>
          </div>
          <div>
            <span>
              <i className="bi bi-calendar me-3"></i>Tahun {car.year}
            </span>
          </div>
          <button className="btn btn-success"> Pilih Mobil</button>
        </div>
      </div>
    </div>
  ));
};

export default CardCar;
