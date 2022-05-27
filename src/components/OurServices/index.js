import React from "react";

import HappyGirl from "../../assets/images/Happy Girl.svg";
import Check from "../../assets/icons/check.svg";
const OurServices = (props) => {
  return ( 
 <section id="ourservices">
      <div className="container d-flex my-5">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-md-1 g-lg-2">
          <div className="col my-5">
            <img className="img-fluid" src={HappyGirl} alt="Car" />
          </div>
          <div className="col my-5">
            <h2 className="__osHeader my-3">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h2>
            <p className="__osParagraph justify">
              Sewa mobil (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="list-group justify">
              <li className="list-group-item __osSuperiority justify">
                <span className="__osIcon bg-primary bg-opacity-25 justify"
                  ><img src={Check}
                /></span>
                Sewa Mobil Dengan Supir 12 Jam
              </li>
              <li className="list-group-item __osSuperiority">
                <span className="__osIcon bg-primary bg-opacity-25"
                  ><img src={Check}
                /></span>
                Sewa Mobil Lepas Kunci 24 Jam
              </li>
              <li className="list-group-item __osSuperiority">
                <span className="__osIcon bg-primary bg-opacity-25"
                  ><img src={Check}
                /></span>
                Sewa Mobil Jangka Panjang Bulan
              </li>
              <li className="list-group-item __osSuperiority">
                <span className="__osIcon bg-primary bg-opacity-25"
                  ><img src={Check}
                /></span>
                Gratis Antar - Jemput di Bandara
              </li>
              <li className="list-group-item __osSuperiority">
                <span className="__osIcon bg-primary bg-opacity-25"
                  ><img src={Check}
                /></span>
                Layanan Airport Transfer / Drop In
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
