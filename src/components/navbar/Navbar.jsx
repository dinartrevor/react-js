import React from "react";

const Navbar = (props) => {
  let navStyle = "";
  if (props.fix === true) {
    navStyle = "hero fixed-top bg-light";
  } else {
    navStyle = "hero";
  }
  return (
    <div className={navStyle}>
      <div className="container py-1">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="logo text-dark text-center">
              Dinar Abdul Hollik Firdaus
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <div className="nav-link active" aria-current="page">
                    <span>Our Services</span>
                  </div>
                </li>
                <li className="nav-item  ms-2">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#why"
                  >
                    <span>Why Us</span>
                  </a>
                </li>
                <li className="nav-item  ms-2">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#testimonial"
                  >
                    <span>Testimonial</span>
                  </a>
                </li>
                <li className="nav-item  ms-2">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#FAQ"
                  >
                    <span>FAQ</span>
                  </a>
                </li>
                <li className="nav-item  ms-2 mt-2">
                  <a href="/cars" className="btn-rent-car text-decoration-none">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
