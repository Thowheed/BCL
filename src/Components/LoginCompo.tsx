'use client';
import Image from "next/image";
import Logo from "../../public/BCL-Green-1.svg"
import "../styles/Login.scss";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useState } from "react";

export default function LoginCompo() {
    const router = useRouter();
    const [form] = Form.useForm();
    const [login, setLogin] = useState(true);

    // const handleSubmit = () => {
    //     router.push("/dashboard/reports");
    // };

    return (
        <div className="login-wrapper">

            <div className="login-card">

                <div className="login-form-container">

                    <img className="brand-login" src="/BCL-Green-1.svg" alt="Logo" />

                    <div className="welcome-message">
                        <span>Complete Your Purchase – Log In to Continue!" </span>
                        <div className="small-text">
                            <span>To proceed with payment and enjoy a seamless shopping experience, please log in to your account.</span>
                        </div>
                    </div>



                    <Form form={form}>
                        <p className="input-labels">Email </p>
                        <Input placeholder="Email" className="ant-input" />
                        <p className="input-labels">Password  </p>
                        <Input.Password
                            className="ant-input"
                            placeholder="Password"
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
                        <Button className="sign-in-button" >
                            Login
                        </Button>
                    </Form>

                    <div className="divider">
                        <hr className="line" />
                        <span className="or-text">or</span>
                        <hr className="line" />
                    </div>

                    <div className="toggle-login">
                        <span className="toggle-text">
                            Don't have an account ?
                        </span>

                        {/* <span className="toggle-link"> Register</span> */}

                        <a href="#" className="toggle-link"
                            onClick={() => setLogin(!login)} > Register
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
