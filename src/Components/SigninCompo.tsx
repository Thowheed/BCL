'use client';
import Image from "next/image";
import Logo from "../../public/BCL-Green-1.svg"
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

                {login ?
                    <div className="login-form-container">

                        <img className="brand-login" src="/BCL-Green-1.svg" alt="Logo" />

                        <div className="welcome-message">
                            <span>Create Your Account & Start Shopping!</span>


                            <div className="small-text">
                                <span>Sign up to explore fresh vegetables, add items to your cart, and complete your purchase seamlessly.</span>
                            </div>

                        </div>



                        <Form form={form}>
                            <p className="input-p-texts">Name </p>
                            <Input type="text" placeholder="Name" className="ant-input" />
                            <p className="input-p-texts">Email </p>
                            <Input placeholder="Email" className="ant-input" />
                            <p className="input-p-texts">Phone Number </p>
                            <Input type="text" placeholder="phonenumber" className="ant-input" />

                            <p className="input-p-texts">Password sign in</p>
                            <Input.Password
                                className="ant-input"
                                placeholder="Password"
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                }
                            />

                            <p className="input-p-texts">Confirm Password</p>
                            <Input.Password
                                className="ant-input"
                                placeholder="Confirm Password"
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                }
                            />


                            <div className="options-row">
                                {login && (
                                    <a href="#" className="forgot-password">
                                        Forgot Password?
                                    </a>
                                )}
                            </div>


                            <Button className="sign-in-button text-white" onClick={() => setLogin(!login)} >

                                Continue
                            </Button>


                        </Form>

                        <div className="divider">
                            <hr className="line" />
                            <span className="or-text">or</span>
                            <hr className="line" />
                        </div>

                        <div className="toggle-login">
                            <span className="toggle-text">
                                Already have an account ?
                            </span>


                            <a href="#" className="toggle-link"
                            > Login
                            </a>
                        </div>

                    </div>

                    :


                    <div className="login-form-container">

                        <img className="brand-login" src="/BCL-Green-1.svg" alt="Logo" />

                        <div className="welcome-message">
                            <span>Almost There! Let’s Set Up Your Delivery Details</span>

                            <div className="small-text">
                                <span>  To ensure smooth delivery, please provide your address</span>

                            </div>

                        </div>



                        <Form form={form}>

                            <p className="input-p-texts">Select Country* </p>
                            <Input type="" placeholder="France" className="ant-input" />
                            <p className="input-p-texts">Select Address*</p>
                            <Input type="text" placeholder="Enter your address..." className="ant-input-address" />

                            <p className="input-p-texts">Zip code*</p>
                            <Input type="text" placeholder="Enter your zip code" className="ant-input" />


                            <div className="gps flex flex-row mt-8">

                                <div className="gps-logo"><img src="/Vector.svg" alt="logo" /></div>
                                <div className="flex flex-col ml-3">
                                    <span className="current-gps">Current Location</span>
                                    <span className="using-gps">Using GPS</span>
                                </div>
                            </div>




                            <div className="options-row">
                                {login && (
                                    <a href="#" className="forgot-password">
                                        Forgot Password?
                                    </a>
                                )}
                            </div>


                            <Button className="sign-in-button !text-white" onClick={() => setLogin(!login)} >
                                {login ? "Continue" : "Register"}
                                <img className="arrow-logo" src="/arrow.svg" alt="brand" />
                            </Button>


                        </Form>

                        <div className="divider">
                            <hr className="line" />
                            <span className="or-text">or</span>
                            <hr className="line" />
                        </div>

                        <div className="toggle-login">
                            <span className="toggle-text">
                                Already have an account ?
                            </span>

                            {/* <span className="toggle-link"> Register</span> */}

                            <a href="#" className="toggle-link"
                            > Login
                            </a>
                        </div>

                    </div>



















                }
            </div>
        </div>
    );
}
