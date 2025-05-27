'use client';

import "../styles/Signin.scss";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { siginListLoad } from "@/store/reducer/indexSlice";
import { setUser } from "@/Globals/Localstorage";


const formTemp = {
    name: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
    address: "",
    country: "",
    zip_code: "",
    location: ""
}
export default function LoginCompo() {
    const router = useRouter();
    const [form] = Form.useForm();
    const [login, setLogin] = useState(true);

    const [formData, setFormData] = useState(formTemp);

    const [siginDataSuccess, setsigninDataSuccess] = useState(false);


    const handleSubmit = () => {
        router.push("/login");
    };

    const { siginLoad, siginData } = useSelector((state: any) => state.bcl);

    const dispatch = useDispatch();


    // api intergration 

    const Siginapi = () => {
        console.log("formData==>", formData)
        if (login == false) {
            let payload = {

                name: formData?.name,
                email: formData?.email,
                password: formData?.password,
                address: formData?.address,
                country: formData?.country,
                zip_code: formData?.zip_code,
                location: formData?.location,

            }
            console.log("payload==>", payload)

            dispatch(siginListLoad(payload))
            setsigninDataSuccess(true)

        } else {
            setLogin(!login);
        }

    }
    useEffect(() => {
        if (siginDataSuccess && !siginLoad) {
        
                console.log("inside success");
                // setUser(siginData?.user?.user);                
                setsigninDataSuccess(false);
                router.push("/login");
           
        }
    }, [siginData, siginLoad]);




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

                    <Form form={form} className="login-form" onFinish={Siginapi}>
                        {login ? (
                            <>
                                <p className="input-label">Name *</p>
                                <Form.Item name="name" rules={[{ required: true, message: "Please input your name!" }]}>
                                    <Input type="text" placeholder="Name" className="custom-input" onChange={(e: any) => setFormData({
                                        ...formData,
                                        name: e.target.value
                                    })} />
                                </Form.Item>


                                <p className="input-label">Email *</p>
                                <Form.Item name="email" rules={[{ required: true, message: "Please input your Email!" }]}>
                                    <Input placeholder="Email" className="custom-input" onChange={(e: any) => setFormData({
                                        ...formData,
                                        email: e.target.value
                                    })} />
                                </Form.Item>


                                <p className="input-label">Phone Number *</p>

                                <Form.Item name="mobileNo" rules={[{ required: true, message: "Enter your 10 digit phone number " }]}>

                                    <Input type="text" placeholder="Phone Number" className="custom-input" onChange={(e: any) => setFormData({
                                        ...formData,
                                        mobileNo: e.target.value
                                    })} />

                                </Form.Item>


                                <p className="input-label">Password *</p>

                                <Form.Item name="password" rules={[{ required: true, message: "Password must contain at least one number and one special character." }]}>

                                    <Input.Password
                                        className="custom-input"
                                        placeholder="Password"
                                        iconRender={(visible) =>
                                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                        }

                                        onChange={(e: any) => setFormData({
                                            ...formData,
                                            password: e.target.value
                                        })}
                                    />

                                </Form.Item>



                                <p className="input-label">Confirm Password *</p>
                                <Form.Item name="confirmPassword" rules={[{ required: true, message: "Passwords do not match." }]}>

                                    <Input.Password
                                        className="custom-input"
                                        placeholder="Confirm Password"
                                        iconRender={(visible) =>
                                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                        }

                                        onChange={(e: any) => setFormData({
                                            ...formData,
                                            confirmPassword: e.target.value
                                        })}
                                    />
                                </Form.Item>


                            </>
                        ) : (
                            <>
                                <p className="input-label">Select Country *</p>

                                <Form.Item name="country" rules={[{ required: true, message: "Select your country" }]}>

                                    <Input placeholder="country" className="custom-input" onChange={(e: any) => setFormData({
                                        ...formData,
                                        country: e.target.value
                                    })} />

                                </Form.Item>


                                <p className="input-label">Select Address *</p>

                                <Form.Item name="" rules={[{ required: true, message: "Enter your address" }]}>

                                    <Input type="text" placeholder="Enter your address..." className="custom-input-address"
                                        onChange={(e: any) => setFormData({
                                            ...formData,
                                            address: e.target.value
                                        })} />
                                </Form.Item>


                                <p className="input-label">Zip Code *</p>

                                <Form.Item name="password" rules={[{ required: true, message: "Enter your Zipcode" }]}>

                                    <Input type="text" placeholder="Enter your zip code" className="custom-input"
                                        onChange={(e: any) => setFormData({
                                            ...formData,
                                            zip_code: e.target.value
                                        })} />
                                </Form.Item>

                                <div className="gps-container ">
                                    <img src="/Vector.svg" alt="logo" />

                                    <div className="gps-text ">
                                        <span className="current-gps">Current Location</span> <br></br>
                                        <span className="using-gps">Using GPS</span>
                                    </div>
                                </div>
                            </>
                        )}



                        <Button className="sign-in-button" type="primary" htmlType="submit" >
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
                        <a href="#" className="toggle-link" onClick={handleSubmit}>Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
