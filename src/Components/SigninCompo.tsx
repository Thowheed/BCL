'use client';

import "../styles/Signin.scss";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useState } from "react";

export default function LoginCompo() {
    const router = useRouter();
    const [form] = Form.useForm();
    const [login, setLogin] = useState(true);

    const handleSubmit = () => {
        router.push("/dashboard/reports");
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <div className="login-form-container">
                    <img className="brand-login" src="/BCL-Green-1.svg" alt="Logo" />

                    <div className="welcome-message">
                        <span className="title">
                            {login
                                ? "Create Your Account & Start Shopping!"
                                : "Almost There! Let’s Set Up Your Delivery Details"}
                        </span>

                        <div className="small-text">
                            <span>
                                {login
                                    ? "Sign up to explore fresh vegetables, add items to your cart, and complete your purchase seamlessly."
                                    : "To ensure smooth delivery, please provide your address"}
                            </span>
                        </div>
                    </div>

                    <Form form={form} className="login-form">
                        {login ? (
                            <>
                                <p className="input-label">Name *</p>
                                <Input type="text" placeholder="Name" className="custom-input" />
                                <p className="input-label">Email *</p>
                                <Input placeholder="Email" className="custom-input" />
                                <p className="input-label">Phone Number *</p>
                                <Input type="text" placeholder="Phone Number" className="custom-input" />
                                <p className="input-label">Password *</p>
                                <Input.Password
                                    className="custom-input"
                                    placeholder="Password"
                                    iconRender={(visible) =>
                                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                    }
                                />
                                <p className="input-label">Confirm Password *</p>
                                <Input.Password
                                    className="custom-input"
                                    placeholder="Confirm Password"
                                    iconRender={(visible) =>
                                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                    }
                                />
                            </>
                        ) : (
                            <>
                                <p className="input-label">Select Country *</p>
                                <Input placeholder="France" className="custom-input" />
                                <p className="input-label">Select Address *</p>
                                <Input type="text" placeholder="Enter your address..." className="custom-input-address" />
                                <p className="input-label">Zip Code *</p>
                                <Input type="text" placeholder="Enter your zip code" className="custom-input" />

                                <div className="gps-container ">
                                    <img src="/Vector.svg" alt="logo" />

                                    <div className="gps-text ">
                                        <span className="current-gps">Current Location</span> <br></br>
                                        <span className="using-gps">Using GPS</span>
                                    </div>
                                </div>
                            </>
                        )}



                        <Button className="sign-in-button" onClick={() => setLogin(!login)}>
                            {login ? "Continue" : "Register"}
                            {!login && <img className="arrow-logo" src="/arrow.svg" alt="arrow" />}
                        </Button>
                    </Form>

                    <div className="divider">
                        <hr className="line" />
                        <span className="or-text">or</span>
                        <hr className="line" />
                    </div>

                    <div className="toggle-login">
                        <span className="toggle-text">Already have an account ?</span>
                        <a href="#" className="toggle-link">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
