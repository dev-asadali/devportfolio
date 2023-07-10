import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";
import "./styles/logo.css";

const Logo=(props)=>{
    let {width,link}=props;
    link= (link===undefined ? true :link);
    const imageElement =(
        <img src={INFO.main.logo}  alt="logo" className="logo" width={width}/>
    );
    return (
        <React.Fragment>
            {link ?<Link to="/">{imageElement}</Link> :imageElement};
        </React.Fragment>
    );
}
export default Logo;