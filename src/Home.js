import React from "react";
import {NavLink} from "react-router-dom";
import web from "./images/3.jpg";
import Common from "./Common";
const Home = () => { 
    return (
        <>
        <Common
        name = 'Welcome to Our Services'
        btname = 'Services'
        imgsrc = {web}
        visit = '/services'
        />
        </>
        )
}

export default Home;