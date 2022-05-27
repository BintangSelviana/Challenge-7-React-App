import React from "react";

import Homee from "../../components/Homee";
import Navbar from "../../components/Navbar";
import CariMobil from "../../components/CariMobil";
import Footer from "../../components/Footer";
import ListCars  from "../../components/ListCars";

const ListMobil = (props) => {
    return (
      <>
    <Navbar />
     <Homee />
      <CariMobil />
      <ListCars />
      <Footer />
        </>
  );
};

export default ListMobil;
