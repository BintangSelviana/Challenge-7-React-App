import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCars } from "../../actions/carsAction";

function ListCars() {
    const { listCarsResult,listCarsLoading,listCarsError } = useSelector((state) => state.carReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        // get action list cars
        console.log("1. use effect component did mount")
        dispatch(getListCars());
    }, [dispatch])


    return (
        <div className="container pt-2 d-flex justify-content-between">
        <div className="row p-4 ">
        <center>
        <h1>ListCars</h1>
        </center>
                {listCarsResult ? (
                    listCarsResult.map((car) => {
                                return (
                            <div className="cardd col-lg-6 col-sm-6 p-2 mb-5">
                                <img className="card-img-top"  src={car.image} alt={car.plate}style={{ height: "200px" }}  />
                                <div className="card-body">
                                
                                <h6 className="card-title" key={car.id}>{car.manufacture} - {car.type}</h6>
                                <h6 className="card-text">Kapasitas : {car.capacity}</h6>
                                <h6 className="card-text">Harga Sewa : {car.rentPerDay}</h6>
                                <button className="btn btn-primary" style={{ width: "120px" }} id="submit">Pilih Mobil</button>
                            </div>
                            </div>
                            
                            )
                    })
                ) : listCarsLoading ? (
                    <p>Loading . . . </p>
                ) : (
                    <p>{listCarsError ? listCarsError : "Data Kosong"}</p>
                )
            }
            </div>
        </div>
    );
}

export default ListCars;
