import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllCars } from "../../redux/carsSlice";
import { fetchCars } from "../../redux/carsSlice";

import DarkBackground from "./DarkBackground";
import "./Search.css";
import ListCar from "./ListCar";
import CardCar from "./CardCar";

const SearchColumn = () => {
  const cars = useSelector(selectAllCars);
  // const carStatus = useSelector(getCarsStatus);
  // const error = useSelector(getCarsError);
  const [driver, setDriver] = useState("withDriver");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState("");
  const [showdata, setShowData] = useState(false);
  // const [isDark, setIsDark] = useState(false);
  const dispatch = useDispatch();

  const showBtn = [date.length > 0, time.length > 0].every(Boolean);

  const driverHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setDriver(e.target.value);
    setShowData(false);
  };
  const dateHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setDate(e.target.value);
    setShowData(false);
  };
  const timeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setTime(e.target.value);
    setShowData(false);
  };
  const capacityHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setCapacity(e.target.value);
    setShowData(false);
  };
  const onSaveHandler = () => {
    setShowData(true);
    const passenger = capacity ? capacity : "0";
    console.log(driver);
    const filter = { date, time, passenger, driver };
    if (showBtn) {
      dispatch(fetchCars(filter));
    }
    // console.log(error);
  };
  return (
    <>
      <DarkBackground />
      <div
        id="search"
        className="container position-relative"
        style={{ zIndex: 2 }}
      >
        <div
          id="searchColumn"
          className="card-search card p-3 container-fluid"
        >
          <div className="row">
            <div id="driver-type" className="col-lg-2 col-sm-6 col-12">
              <div>
                <label>Tipe Driver</label>
              </div>
              <select
                className="form-select form-select-md mb-3"
                aria-label=".form-select-lg example"
                value={driver}
                onChange={driverHandler}
              >
                <option disabled hidden>
                  Pilih Tipe Driver
                </option>
                <option value="withDriver2" hidden>
                  Dengan Sopir
                </option>
                <option value="withDriver">Dengan Sopir</option>
                <option value="noDriver">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>
            <div id="date-input" className="col-lg-2 col-sm-6 col-12">
              <label htmlFor="inputDate">Tanggal</label>
              <input
                id="inputDate"
                className="form-control"
                type="date"
                value={date}
                onChange={dateHandler}
              />
            </div>
            <div
              id="time-input"
              className="col-lg-3 col-sm-6 col-12  form-group has-feedback"
            >
              <label htmlFor="inputTime">Waktu Jemput/ Ambil</label>
              <input
                step={1}
                id="inputTime"
                className="form-control"
                type="time"
                placeholder="Pilih Waktu"
                value={time}
                onChange={timeHandler}
              />
            </div>
            <div id="capacity-input" className="col-lg-3 col-sm-6 col-12">
              <label htmlFor="startDate">Jumlah Penumpang</label>
              <div className="input-group mb-3">
                <input
                  id="jumlahPenumpang"
                  type="number"
                  className="form-control"
                  placeholder="Jumlah Penumpang"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  aria-placeholder="Pilih Waktu"
                  value={capacity}
                  onChange={capacityHandler}
                />
              </div>
            </div>
            <div className="col-lg-2 col-sm-12 col-12 d-flex justify-content-center align-self-center">
              <button
                id="submitBtn"
                // disabled={!showBtn}
                onClick={onSaveHandler}
                onMouseLeave={(e) => {
                  e.preventDefault();
                  // setIsDark(false);
                }}
                className="btn-rent-car w-100"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
      <ListCar>
        {showdata && date.length === 0 && <p>Ngga boleh kosong</p>}
        {date.length !== 0 && time.length !== 0 && cars && (
          <CardCar cars={cars} />
        )}
      </ListCar>
    </>
  );
};

export default SearchColumn;
