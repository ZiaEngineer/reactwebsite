import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
const Services = () => { 
    return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-12 pt-5">
                <h1 className="text-center">Our Services</h1>
            </div>
        </div>
        <div className="row gy-3 pt-3 pb-3">
            
                {
                    Sdata.map((val,index,arr)=>{
                        return <Card
                        key={index}
                        imgsrc={val.imgsrc}
                        name={val.name}
                        title={val.title}
                        />
                        
                    })
                }
            
        </div>
    </div>
    </>
    );
}

export default Services;