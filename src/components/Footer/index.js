import React from "react";

const Footer = (props) => {
  return (
    <footer className="bg-dark text-right text-lg-start text-white">
    <div className="container py-3">
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              </li>
              <li>
                <p>binarcarrental@gmail.com</p>
              </li>
              <li>
                <p>081-233-334-808</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">Our Services</a>
              </li>
              <li>
                <a href="#!" className="text-white">Why Us</a>
              </li>
              <li>
                <a href="#!" className="text-white">Testimonial</a>
              </li>
              <li>
                <a href="#!" className="text-white">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <p>Connect With Us</p>
            <ul className="list-unstyled">
              <li className="py-1">
                <a
                  className="btn btn-primary btn-floating rounded-circle"
                  style={{backgroundColor: "#3b5998"}}
                  href="#!"
                  role="button"
                  ><i className="fa fa-facebook-f" aria-hidden="true"></i
                ></a>
                <a
                  className="btn btn-primary btn-floating rounded-circle"
                  style={{backgroundColor: "#cb2644"}}
                  href="#!"
                  role="button"
                  ><i className="fa fa-instagram" aria-hidden="true"></i
                ></a>
                <a
                  className="btn btn-primary btn-floating rounded-circle"
                  style={{backgroundColor: "#55acee"}}
                  href="#!"
                  role="button"
                  ><i className="fa fa-twitter" aria-hidden="true"></i
                ></a>
                <a
                  className="btn btn-primary btn-floating rounded-circle"
                  style={{backgroundColor: "#ea4335"}}
                  href="#!"
                  role="button"
                  ><i className="fa fa-envelope" aria-hidden="true"></i
                ></a>
                <a
                  className="btn btn-primary btn-floating rounded-circle"
                  style={{backgroundColor: "#8c44f7"}}
                  href="#!"
                  role="button"
                  ><i className="fa fa-twitch" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <p>Copyright Binar 2022</p>
              <a href="/" className="navbar-brand"><div className="logo"></div></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
};
export default Footer;