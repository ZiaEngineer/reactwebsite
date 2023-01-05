import React from "react";
import {NavLink} from "react-router-dom";
import web from "./images/3.jpg";
import Common from "./Common";
const About = ()=>{
    return (
        <>
        <Common
        name = 'Welcome to Our About Page'
        btname = 'Contact us'
        imgsrc = {web}
        visit = '/contact'
        />
        </>
        // <>
        // <section id="Header" className="d-flex align-items-center">
        // <div className="container-fluid">
        //     <div className="row">
        //         <div className="col-10 mx-auto">
        //         <div className="row">
        //             <div className="col-lg-6 d-flex justify-content-center flex-column order-2 order-lg-1">
        //             <h1 className="main-heading">Welcome to the about us</h1>
        //             <h1 className="secondary-heading"><strong> World Best Developer</strong></h1>
        //             <p>We have a team of talented web developer for making website</p>
        //             <NavLink className="btn my-btn" to="/contact">Contact us</NavLink>
        //             </div>
        //             <div className="col-lg-6 order-1 order-lg-2">
        //             <div className="">
        //                 <img src={web} alt="" className="img-fluid"/>
        //             </div>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </section>
        // </>
    )
}

export default About;