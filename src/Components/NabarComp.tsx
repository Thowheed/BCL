'use client';

import { Input } from "antd";
import Logo from "/BCL-Green-1.svg"
import Frame from "../../public/Frame.svg"
import Search from "../../public/Framesearch (1).svg"

const NavbarComp = () => {
    return (
        <div className="navbar-container  ">

            <div className="inside-container">


                <img className="brand" src="/BCL-Green-1.svg" alt="Logo" />

                <div className="delivery-text">

                    <span>Delivery in 8 minutes</span><br></br>
                    <span>Select Location </span>
                </div>

                <div className="navbar-input">

                    <input className="search-input" type="text" placeholder="Search by Tomato....." />


                </div>

                <div className="login-cart-button">
                    <button >  Login</button>
                    <button className="cart-button" >  <img src={Frame} alt="" /> Cart</button>


                </div>


            </div>

        </div>
    )
}

export default NavbarComp;