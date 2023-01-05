import React from "react";
import {NavLink} from "react-router-dom";
import web from "./images/3.jpg";
const Common = (props)=>{
    return (
        <>
        <section id="Header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center flex-column order-2 order-lg-1">
                    <h1 className="main-heading">{props.name}</h1>
                    <h1 className="secondary-heading"><strong> World Best Developer</strong></h1>
                    <p>We have a team of talented web developer for making website</p>
                    <NavLink className="btn my-btn" to={props.visit}>
                        {props.btname}
                        </NavLink>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                    <div className="">
                        <img src={props.imgsrc} alt="" className="img-fluid animate"/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Common;