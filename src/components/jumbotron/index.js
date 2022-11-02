import React from "react";
import JumbotronImage from '../../assets/img/img_car.png';

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row mb-5 mt-5">
          <div className="col-md m-auto">
            <h1 className="text-justify">
              Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)
            </h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div className="col-md">
            <img
              src={JumbotronImage}
              className="img-fluid img-car"
              alt="GambarMobil"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
