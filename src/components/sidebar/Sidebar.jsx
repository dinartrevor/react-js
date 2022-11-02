import React from "react";

const Sidebar = () => {
  return (
    <div
      className="offcanvas offcanvas-end w-50"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header pb-0">
        <h5 id="offcanvasRightLabel" className="mt-2 fw-bold">
          BCR
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body pt-0">
        <ul className="navbar-nav pt-0">
          <li>
            <a className="nav-link active" aria-current="page" href="#serv">
              <span className="text-black">Our Services</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#why">
              <span className="text-black">Why Us</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#testimonial">
              <span className="text-black">Testimonial</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#FAQ">
              <span className="text-black">FAQ</span>
            </a>
          </li>
          <li>
            <a href="/cars" className="btn-rent-car">
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
