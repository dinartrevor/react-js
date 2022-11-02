import React from "react";
import "./Why.css";

const Why = () => {
  return (
    <div id="why" className="container mt-5 pt-5">
      <div className="why-header pt-4">
        <h2 className="fw-bold">Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="row g-3">
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="card-body">
              <img src="./assets/icon_complete.png" className="mb-3" alt="" />
              <h5 className="mb-3 fw-bold">Mobil Lengkap</h5>
              <p className>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="card-body">
              <img src="./assets/icon_price.png" className="mb-3" alt="" />
              <h5 className="mb-3 fw-bold">Harga Murah</h5>
              <p className>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="card-body">
              <img src="./assets/icon_24hrs.png" className="mb-3" alt="" />
              <h5 className="mb-3 fw-bold">Layanan 24 Jam</h5>
              <p className>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="card-body">
              <img
                src="./assets/icon_professional.png"
                className="mb-3"
                alt=""
              />
              <h5 className="mb-3 fw-bold">Sopir Profesional</h5>
              <p className>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
