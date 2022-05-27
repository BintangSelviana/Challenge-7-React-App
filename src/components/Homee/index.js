import React from "react";

import MercendesCar from "../../assets/images/Mercedes Car EQC 300kW Edition - 900x598 1.svg";
const Homee = (props) => {
  return ( 
    <section id="home">
      <div className="container d-flex">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-md-1 g-lg-2">
          <div className="col my-5">
            <h1 className="my-5 fw-bold">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam
            </p>
            <a href="/listmobil" button className="btn btn-success btn-lg">Mulai Sewa Mobil</a>
          </div>
          <div className="col my-5">
            <img
              className="img-fluid __car"
              src={MercendesCar}
              alt="Car"
            />
          </div>
        </div>
      </div>
      <div className="__stand"></div>
      </section>
  );
};

export default Homee;
