import React from "react";
import Band from "./Band";

const BrandsList = ({bands, changeCurrentBand}) => {
    const AllBands = bands.map(band=>{
        return (
            <div className="col-6" key={band.id}>
                <Band band={band} changeCurrentBand={changeCurrentBand}/>
            </div>
            
        )
    })


    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        {AllBands}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandsList;