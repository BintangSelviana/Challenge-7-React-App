import React from "react";

const WhyUs = (props) => {
    return ( 
      <section id="whyus" >
      <div className="container">
          <h2>Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        <div className="row pt-3">
          <div className="col-md-4 col-xl-3">
            <div className="card order-card border">
              <div className="card-block ps-4 pt-4 pb-4">
                <span className="__wuIcon bg-warning">
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                </span>
                <h6 className="fw-bold mt-4">Mobil Lengkap</h6>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="card order-card border">
              <div className="card-block ps-3 pt-4 pb-4">
                <span className="__wuIcon" style={{backgroundColor: "#eb425e"}}
                  ><i className="fa fa-tag" aria-hidden="true"></i
                ></span>
                <h6 className="fw-bold mt-4">Harga Murah</h6>
                <p>Harga murah bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="card order-card border">
              <div className="card-block ps-3 pt-4 pb-4">
                <span className="__wuIcon" style={{backgroundColor: "#0d28a6"}}>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </span>
                <h6 className="fw-bold mt-4">Layanan 24 Jam</h6>
                <p>
                  Siap melayani kebutuhan Anda 24 jam. Kami juga tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="card order-card border">
              <div className="card-block ps-3 pt-4 pb-4">
                <span className="__wuIcon" style={{backgroundColor: "#37b643"}}>
                  <i className="fa fa-trophy" aria-hidden="true"></i>
                </span>
                <h6 className="fw-bold mt-4">Sopir Profesional</h6>
                <p>
                  Supir yang profesional, berpengalaman, jujur ramah & selalu tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);
};
export default WhyUs;
