
// 'use client';

// import "../styles/Signin.scss";
// import { useRouter } from "next/navigation";
// import { Button, Form, Input } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { siginListLoad } from "@/store/reducer/indexSlice";

// const formTemp = {
//     name: "",
//     email: "",
//     mobileNo: "",
//     password: "",
//     confirmPassword: "",
//     address: "",
//     country: "",
//     zip_code: "",
//     location: ""
// }

// export default function LoginCompo() {
//     const router = useRouter();
//     const [form] = Form.useForm();
//     const [login, setLogin] = useState(true);
//     const [formData, setFormData] = useState(formTemp);
//     const [siginDataSuccess, setsigninDataSuccess] = useState(false);
//     const [signinButtonLoading, setsigninButtonLoading] = useState(false);

//     const handleSubmit = () => {
//         router.push("/login");
//     };

//     const { siginLoad, siginData } = useSelector((state: any) => state.bcl);
//     const dispatch = useDispatch();

//     const Siginapi = () => {
//         if (!login) {
//             let payload = {
//                 name: formData?.name,
//                 email: formData?.email,
//                 phone: formData?.mobileNo,
//                 password: formData?.password,
//                 address: formData?.address,
//                 country: formData?.country,
//                 zip_code: formData?.zip_code,
//                 location: formData?.location,
//             }
//             dispatch(siginListLoad(payload));
//             setsigninDataSuccess(true);
//             setsigninButtonLoading(true);
//         } else {
//             setLogin(false);
//         }
//     }

//     useEffect(() => {
//         if (siginDataSuccess && !siginLoad) {
//             setsigninButtonLoading(false);
//             setsigninDataSuccess(false);
//             router.push("/login");
//         } else {
//             setsigninButtonLoading(false);
//         }
//     }, [siginData, siginLoad]);

//     return (
//         <div className="login-wrapper">
//             <div className="login-card">
//                 <div className="login-form-container">
//                     <img className="brand-login" src="/BCL-Green-1.svg" alt="Logo" />

//                     <div className="welcome-message">
//                         <span className="title">
//                             {login
//                                 ? "Create Your Account & Start Shopping!"
//                                 : "Almost There! Let’s Set Up Your Delivery Details"}
//                         </span>
//                         <div className="small-text">
//                             <span>
//                                 {login
//                                     ? "Sign up to explore fresh vegetables, add items to your cart, and complete your purchase seamlessly."
//                                     : "To ensure smooth delivery, please provide your address"}
//                             </span>
//                         </div>
//                     </div>

//                     <Form form={form} className="login-form" onFinish={Siginapi}>
//                         {login ? (
//                             <>
//                                 <p className="input-label">Name *</p>
//                                 <Form.Item
//                                     name="name"
//                                     rules={[{ required: true, message: "Please input your name!" }]}
//                                 >
//                                     <Input
//                                         type="text"
//                                         placeholder="Name"
//                                         className="custom-input"
//                                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                     />
//                                 </Form.Item>

//                                 <p className="input-label">Email *</p>
//                                 <Form.Item
//                                     name="email"
//                                     rules={[{ required: true, message: "Please input your Email!" },
//                                     {
//                                         pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                                         message: "Enter a valid email address"
//                                     }
//                                     ]}
//                                 >
//                                     <Input
//                                         placeholder="Email"
//                                         className="custom-input"
//                                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}

//                                     />
//                                 </Form.Item>

//                                 <p className="input-label">Phone Number *</p>
//                                 <Form.Item
//                                     name="mobileNo"
//                                     rules={[
//                                         { required: true, message: "Enter your 10 digit phone number" },
//                                         { pattern: /^\d{10}$/, message: "Phone number must be exactly 10 digits" },
//                                     ]}
//                                 >
//                                     <Input
//                                         maxLength={10}
//                                         placeholder="Phone Number"
//                                         className="custom-input"
//                                         onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
//                                     />
//                                 </Form.Item>

//                                 <p className="input-label">Password *</p>
//                                 <Form.Item
//                                     name="password"
//                                     rules={[
//                                         {
//                                             required: true,
//                                             message: "Password must contain at least one number and one special character."
//                                         }
//                                     ]}
//                                 >
//                                     <Input.Password
//                                         className="custom-input"
//                                         placeholder="Password"
//                                         iconRender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
//                                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                                     />
//                                 </Form.Item>

//                                 <p className="input-label">Confirm Password *</p>
//                                 <Form.Item
//                                     name="confirmPassword"
//                                     dependencies={['password']}
//                                     rules={[
//                                         { required: true, message: "Please confirm your password" },
//                                         ({ getFieldValue }) => ({
//                                             validator(_, value) {
//                                                 if (!value || getFieldValue('password') === value) {
//                                                     return Promise.resolve();
//                                                 }
//                                                 return Promise.reject(new Error("Passwords do not match."));
//                                             },
//                                         }),
//                                     ]}
//                                 >
//                                     <Input.Password
//                                         className="custom-input"
//                                         placeholder="Confirm Password"
//                                         iconRender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
//                                         onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                                     />
//                                 </Form.Item>
//                             </>
//                         ) : (
//                             <>
//                                 <p className="input-label">Select Country *</p>
//                                 <Form.Item
//                                     name="country"
//                                     rules={[{ required: true, message: "Select your country" }]}
//                                 >
//                                     <Input
//                                         placeholder="Country"
//                                         className="custom-input"
//                                         onChange={(e) => setFormData({ ...formData, country: e.target.value })}
//                                     />
//                                 </Form.Item>

//                                 <p className="input-label">Select Address *</p>
//                                 <Form.Item
//                                     name="address"
//                                     rules={[{ required: true, message: "Enter your address" }]}
//                                 >
//                                     <Input
//                                         type="text"
//                                         placeholder="Enter your address..."
//                                         className="custom-input-address"
//                                         onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                                     />
//                                 </Form.Item>

//                                 <p className="input-label">Zip Code *</p>
//                                 <Form.Item
//                                     name="zipcode"
//                                     rules={[
//                                         { required: true, message: "Enter your Zipcode" },
//                                         { pattern: /^\d{6}$/, message: "Zip code must be exactly 6 digits" },
//                                     ]}
//                                 >
//                                     <Input
//                                         type="text"
//                                         placeholder="Enter your zip code"
//                                         maxLength={6}
//                                         className="custom-input"
//                                         onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })}
//                                     />
//                                 </Form.Item>

//                                 <div className="gps-container">
//                                     <img src="/Vector.svg" alt="logo" />
//                                     <div className="gps-text">
//                                         <span className="current-gps">Current Location</span><br />
//                                         <span className="using-gps">Using GPS</span>
//                                     </div>
//                                 </div>
//                             </>
//                         )}

//                         <Button className="sign-in-button" type="primary" htmlType="submit" loading={signinButtonLoading}>
//                             {login ? "Continue" : "Register"}
//                             {!login && <img className="arrow-logo" src="/arrow.svg" alt="arrow" />}
//                         </Button>
//                     </Form>

//                     <div className="divider">
//                         <hr className="line" />
//                         <span className="or-text">or</span>
//                         <hr className="line" />
//                     </div>

//                     <div className="toggle-login">
//                         <span className="toggle-text">Already have an account ?</span>
//                         <a href="#" className="toggle-link" onClick={handleSubmit}>Login</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


//new code 

'use client';

import "../styles/Signin.scss";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { siginListLoad } from "@/store/reducer/indexSlice";
import Image from "next/image";

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
};

// Define the shape of the Redux state
interface BCLState {
    siginLoad: boolean;
    // siginData: any; // Replace `any` with actual data type if known
    siginData: Record<string, unknown>;

}

interface RootState {
    bcl: BCLState;
}

export default function LoginCompo() {
    const router = useRouter();
    const [form] = Form.useForm();
    const [login, setLogin] = useState(true);
    const [formData, setFormData] = useState(formTemp);
    const [siginDataSuccess, setsigninDataSuccess] = useState(false);
    const [signinButtonLoading, setsigninButtonLoading] = useState(false);

    const handleSubmit = () => {
        router.push("/login");
    };

    const { siginLoad, siginData } = useSelector((state: RootState) => state.bcl);
    const dispatch = useDispatch();

    const Siginapi = () => {
        if (!login) {
            const payload = {
                name: formData?.name,
                email: formData?.email,
                phone: formData?.mobileNo,
                password: formData?.password,
                address: formData?.address,
                country: formData?.country,
                zip_code: formData?.zip_code,
                location: formData?.location,
            };
            dispatch(siginListLoad(payload));
            setsigninDataSuccess(true);
            setsigninButtonLoading(true);
        } else {
            setLogin(false);
        }
    };

    useEffect(() => {
        if (siginDataSuccess && !siginLoad) {
            setsigninButtonLoading(false);
            setsigninDataSuccess(false);
            router.push("/login");
        } else {
            setsigninButtonLoading(false);
        }
    }, [siginData, siginLoad, siginDataSuccess, router]);

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <div className="login-form-container">
                    <Image
                        className="brand-login"
                        src="/BCL-Green-1.svg"
                        alt="Logo"
                        width={150}
                        height={50}
                    />

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
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: "Please input your name!" }]}
                                >
                                    <Input
                                        type="text"
                                        placeholder="Name"
                                        className="custom-input"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </Form.Item>

                                <p className="input-label">Email *</p>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        { required: true, message: "Please input your Email!" },
                                        {
                                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email address"
                                        }
                                    ]}
                                >
                                    <Input
                                        placeholder="Email"
                                        className="custom-input"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </Form.Item>

                                <p className="input-label">Phone Number *</p>
                                <Form.Item
                                    name="mobileNo"
                                    rules={[
                                        { required: true, message: "Enter your 10 digit phone number" },
                                        { pattern: /^\d{10}$/, message: "Phone number must be exactly 10 digits" },
                                    ]}
                                >
                                    <Input
                                        maxLength={10}
                                        placeholder="Phone Number"
                                        className="custom-input"
                                        onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
                                    />
                                </Form.Item>

                                <p className="input-label">Password *</p>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Password must contain at least one number and one special character."
                                        }
                                    ]}
                                >
                                    <Input.Password
                                        className="custom-input"
                                        placeholder="Password"
                                        iconRender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </Form.Item>

                                <p className="input-label">Confirm Password *</p>
                                <Form.Item
                                    name="confirmPassword"
                                    dependencies={['password']}
                                    rules={[
                                        { required: true, message: "Please confirm your password" },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error("Passwords do not match."));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password
                                        className="custom-input"
                                        placeholder="Confirm Password"
                                        iconRender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    />
                                </Form.Item>
                            </>
                        ) : (
                            <>
                                <p className="input-label">Select Country *</p>
                                <Form.Item
                                    name="country"
                                    rules={[{ required: true, message: "Select your country" }]}
                                >
                                    <Input
                                        placeholder="Country"
                                        className="custom-input"
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                    />
                                </Form.Item>

                                <p className="input-label">Select Address *</p>
                                <Form.Item
                                    name="address"
                                    rules={[{ required: true, message: "Enter your address" }]}
                                >
                                    <Input
                                        type="text"
                                        placeholder="Enter your address..."
                                        className="custom-input-address"
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </Form.Item>

                                <p className="input-label">Zip Code *</p>
                                <Form.Item
                                    name="zipcode"
                                    rules={[
                                        { required: true, message: "Enter your Zipcode" },
                                        { pattern: /^\d{6}$/, message: "Zip code must be exactly 6 digits" },
                                    ]}
                                >
                                    <Input
                                        type="text"
                                        placeholder="Enter your zip code"
                                        maxLength={6}
                                        className="custom-input"
                                        onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })}
                                    />
                                </Form.Item>

                                <div className="gps-container">
                                    <Image src="/Vector.svg" alt="logo" width={20} height={20} />
                                    <div className="gps-text">
                                        <span className="current-gps">Current Location</span><br />
                                        <span className="using-gps">Using GPS</span>
                                    </div>
                                </div>
                            </>
                        )}

                        <Button className="sign-in-button" type="primary" htmlType="submit" loading={signinButtonLoading}>
                            {login ? "Continue" : "Register"}
                            {!login && (
                                <Image className="arrow-logo" src="/arrow.svg" alt="arrow" width={20} height={20} />
                            )}
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
