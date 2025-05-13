'use client';

import { Input } from "antd";
import Logo from "/BCL-Green-1.svg"
import Frame from "../../public/Frame.svg"
import Search from "../../public/Framesearch (1).svg"
import "../styles/Fotter.scss";


const FotterComp = () => {
    return (

        <div className="footer-main-con">

            <div className="footer-inside-con ">

                <div className="first-con">

                    <img className="" src="/BCL-Green-1.svg" alt="Logo" />

                    <div className="span-first-con">
                        <span >Bringing Sri Lanka’s finest veggies and cargo to the UK & France—fresh, fast, and reliable. Quality you trust, delivered with care!</span>

                    </div>

                    <div className="footer-first-logo-session ">
                        <img className="" src="/fb.svg" alt="Logo" />
                        <img className="" src="/instagram.svg" alt="Logo" />
                        <img className="" src="/x.svg" alt="Logo" />

                    </div>
                </div>


                <div className="footer-second-con">

                    <span>Home</span>
                    <span>Shop</span>
                    <span>Contact</span>
                    <span>FAQs</span>


                </div>

                <div className="footer-third-con">

                    <span>My Account</span>
                    <span>Track Order</span>
                    <span>Shipping Policy</span>
                    <span>Returns & Refunds</span>
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>

                </div>


                {/* //mobile design // */}

                <div className="mobile-design-two-and-third n">


                    <div className="mobile-footer-second-con">

                        <span>Home</span>
                        <span>Shop</span>
                        <span>Contact</span>
                        <span>FAQs</span>


                    </div>

                    <div className="mobile-footer-third-con">

                        <span>My Account</span>
                        <span>Track Order</span>
                        <span>Shipping Policy</span>
                        <span>Returns & Refunds</span>
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>

                    </div>

                </div>




                <div className="footer-fourth-con">
                    <div className="logo-text">
                        <img className="icon-margin-top" src="/location.svg" />
                        <span>
                            123 Harvest Lane,<br />
                            Freshville, CA 12345
                        </span>
                    </div>

                    <div className="logo-text margin-top-20">
                        <img src="/phone.svg" />
                        <span>(234) 567-8900</span>
                    </div>

                    <div className="logo-text margin-top-20">
                        <img src="/message.svg" />
                        <span>info@veggieverse.com</span>
                    </div>

                    <div className="margin-top-20">
                        <span>
                            Monday - Friday: 8:00 AM - 6:00 PM<br />
                            Saturday: 9:00 AM - 5:00 PM<br />
                            Sunday: Closed
                        </span>
                    </div>

                    <div></div>
                </div>



            </div>

        </div>
    )
}

export default FotterComp;