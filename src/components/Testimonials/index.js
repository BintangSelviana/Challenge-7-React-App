import React from "react";

import Image1 from "../../assets/images/photo6104919300138708754.jpg";
import Image2 from "../../assets/images/photo6104919300138708754.jpg";
import Image3 from "../../assets/images/photo6104919300138708755.jpg";
import Image4 from "../../assets/images/photo6104919300138708756.jpg";
import Image5 from "../../assets/images/photo6104919300138708755.jpg";
import Image6 from "../../assets/images/photo6104919300138708756.jpg";
import Image7 from "../../assets/images/photo6104919300138708754.jpg";
import Image8 from "../../assets/images/photo6104919300138708755.jpg";
import Image9 from "../../assets/images/photo6104919300138708756.jpg";
import Image10 from "../../assets/images/photo6104919300138708754.jpg";

const Testimonials = (props) => {
  return ( 
<section id="testimonials">
      <div className="container py-5 justify-content-center align-items-center">
        <h2>Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>
        <div className="container justify-content-center">
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators visually-hidden">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active bg-primary"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className="bg-primary"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className="bg-primary"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                className="bg-primary"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
                className="bg-primary"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
                className="bg-primary"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="6"
                aria-label="Slide 7"
                className="bg-primary"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="7"
                aria-label="Slide 8"
                className="bg-primary"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="8"
                aria-label="Slide 9"
                className="bg-primary"
              ></button>
            </div>
            <div className="carousel-inner">
              {/* <!-- tester1 --> */}
              <div className="carousel-item active">
                <div className="card shadow bg-$purple-100 bg-opacity-25">
                  <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                    <div className="card-img mx-3">
                      <img
                        src={Image1}
                        alt="1"
                        className="card-img rounded-circle"
                      />
                    </div>
                    <div className="card-text p-2">
                      <div className="__fiveStars">
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <p className="text-start">
                        ““Lorem, ipsum dolor Eget nunc lobortis 
                        mattis aliquam faucibus purus in massa tempor. 
                        Lobortis elementum nibh tellus molestie nunc non. 
                        Pretium viverra suspendisse potenti nullam ji
                        faretoriqa vas mefat yujikk"”
                      </p>
                      <h6 className="text-start fw-bold card-title">
                        Bintang Selviana, Karawang
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end tester1 -->
              <!-- tester2 --> */}
              <div className="carousel-item">
                <div className="card shadow bg-purple-100 bg-opacity-25">
                  <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                    <div className="card-img mx-3">
                      <img
                        src={Image2}
                        alt="1"
                        className="card-img rounded-circle"
                      />
                    </div>
                    <div className="card-text p-2">
                      <div className="__fiveStars">
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <p className="text-start">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ,sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Pharetra pharetra massa massa ultricies 
                        mi. Montes nascetur ridiculus mus mauris vitae ultricies”
                      </p>
                      <h6 className="text-start fw-bold card-title">
                        Bintang Selviana, Karawang
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end tester2 -->
              <!-- tester3 --> */}
              <div className="carousel-item">
                <div className="card shadow bg-purple-100 bg-opacity-25">
                  <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                    <div className="card-img mx-3">
                      <img
                        src={Image3}
                        alt="1"
                        className="card-img rounded-circle"
                      />
                    </div>
                    <div className="card-text p-2">
                      <div className="__fiveStars">
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <p className="text-start">
                        “Lorem ipsum Scelerisque felis imperdiet 
                        proin fermentum leo vel orci porta non. 
                        Gravida dictum fusce ut placerat orci nulla 
                        pellentesque dignissim enim. Arcu cursus euismod
                        peretritis colores amor”
                      </p>
                      <h6 className="text-start fw-bold card-title">
                        Bintang Selviana, Karawang
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end tester3 -->
              <!-- tester4 --> */}
              <div className="carousel-item">
                <div className="card shadow bg-purple-100 bg-opacity-25">
                  <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                    <div className="card-img mx-3">
                      <img
                        src={Image4}
                        alt="1"
                        className="card-img rounded-circle"
                      />
                    </div>
                    <div className="card-text p-2">
                      <div className="__fiveStars">
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <p className="text-start">
                        “Lorem, ipsum dolor Eget nunc lobortis 
                        mattis aliquam faucibus purus in massa tempor. 
                        Lobortis elementum nibh tellus molestie nunc non. 
                        Pretium viverra suspendisse potenti nullam ji
                        faretoriqa vas mefat”
                      </p>
                      <h6 className="text-start fw-bold card-title">
                        Bintang Selviana, Karawang
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end tester4 -->
              <!-- tester5 --> */}
              <div className="carousel-item">
                <div className="card shadow bg-purple-100 bg-opacity-25">
                  <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                    <div className="card-img mx-3">
                      <img
                        src={Image5}
                        alt="1"
                        className="card-img rounded-circle"
                      />
                    </div>
                    <div className="card-text p-2">
                      <div className="__fiveStars">
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <p className="text-start">
                        “Lorem ipsum dolor uis viverra nibh cras pulvinar 
                        mattis nunc. Pellentesque id nibh tortor id aliquet. 
                        Tincidunt praesent semper feugiat nibh sed. 
                        Facilisis leo vel fringilla est ullamcorper eget nulla 
                        facilisi”
                      </p>
                      <h6 className="text-start fw-bold card-title">
                        Bintang Selviana, Karawang
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end tester5 -->
              <!-- tester6 --> */}
              <div className="carousel-item">
                <div className="card shadow bg-purple-100 bg-opacity-25">
                  <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                    <div className="card-img mx-3">
                      <img
                        src={Image6}
                        alt="1"
                        className="card-img rounded-circle"
                      />
                    </div>
                    <div className="card-text p-2">
                      <div className="__fiveStars">
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <p className="text-start">
                        “Lorem ipsum dolor Eget mi proin sed libero. 
                        In hac habitasse platea dictumst quisque sagittis 
                        purus sit. Sagittis aliquam malesuada bibendum arcu 
                        vitae elementum curabitur vitae. Malesuada fames ac 
                        turpis egestas”
                      </p>
                      <h6 className="text-start fw-bold card-title">
                        Bintang Selviana, Karawang
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end tester6 -->
              <!-- tester7 --> */}
              <div className="carousel-item">
                <div className="card shadow bg-purple-100 bg-opacity-25">
                  <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                    <div className="card-img mx-3">
                      <img
                        src={Image7}
                        alt="1"
                        className="card-img rounded-circle"
                      />
                    </div>
                    <div className="card-text p-2">
                      <div className="__fiveStars">
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <p className="text-start">
                        “Lorem, ipsum dolor Odio morbi quis commodo odio 
                        aenean sed. Consectetur adipiscing elit duis 
                        tristique sollicitudin nibh sit amet commodo. 
                        Arcu odio ut sem nulla pharetra diam. 
                        Cras tincidunt lobortis feugiat vivamus”
                      </p>
                      <h6 className="text-start fw-bold card-title">
                        Bintang Selviana, Karawang
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end tester7 -->
              <!-- tester8 --> */}
              <div className="carousel-item">
                <div className="card shadow bg-purple-100 bg-opacity-25">
                  <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                    <div className="card-img mx-3">
                      <img
                        src={Image8}
                        alt="1"
                        className="card-img rounded-circle"
                      />
                    </div>
                    <div className="card-text p-2">
                      <div className="__fiveStars">
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <p className="text-start">
                        “Lorem ipsum dolor Commodo quis imperdiet 
                        massa tincidunt nunc pulvinar sapien. 
                        Parturient montes nascetur ridiculus mus 
                        mauris vitae ultricies leo. Aliquet enim 
                        tortor at auctor urna nunc faredo fis 
                        alageuna”
                      </p>
                      <h6 className="text-start fw-bold card-title">
                        Bintang Selviana, Karawang
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end tester8 -->
              <!-- tester9 --> */}
              <div className="carousel-item">
                <div className="card shadow bg-purple-100 bg-opacity-25">
                  <div className="d-flex d-xs-block d-sm-block d-md-flex p-5">
                    <div className="card-img mx-3">
                      <img
                        src={Image9}
                        alt="1"
                        className="card-img rounded-circle"
                      />
                    </div>
                    <div className="card-text p-2">
                      <div className="__fiveStars">
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <p className="text-start">
                        ““Lorem ipsum dolor Dui faucibus in ornare quam viverra
                        orci sagittis eu. Amet nisl purus in mollis nunc sed.
                        Aliquam ut porttitor leo a diam sollicitudin tempor id eu. 
                        Phasellus egestas tellus rutrum tellus pellentesque”
                      </p>
                      <h6 className="text-start fw-bold card-title">
                        Bintang Selviana, Karawang
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end tester9 --> */}
            </div>
          </div>
        </div>
        {/* <!-- Button Next Prev --> */}
        <div className="d-flex justify-content-center align-items-center py-3">
          <button
            className="carousel-control-prev bg-danger rounded-circle __preNext"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next bg-success rounded-circle __preNext"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- end bun Prev Next --> */}
      </div>
    </section>
  );
};
export default Testimonials;