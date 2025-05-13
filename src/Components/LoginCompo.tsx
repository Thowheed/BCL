'use client';
import Image from "next/image";
import Logo from "../../public/BCL-Green-1.svg"
import "../styles/Login.scss";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginListLoad } from "@/store/reducer/indexSlice";
import { setUser } from "@/Globals/Localstorage";

const tempLogin = {

    email: "",
    password: "",

}



export default function LoginCompo() {


    const [TempLoginData, setnewloginData] = useState(tempLogin)

    const router = useRouter();
    const [form] = Form.useForm();
    const [login, setLogin] = useState(true);
    const [loginDataSuccess, setLoginDataSuccess] = useState(false);

    // const handleSubmit = () => {
    //     router.push("/dashboard/reports");
    // };


    const { loginLoad, loginData } = useSelector((state: any) => state.bcl);
    console.log(loginLoad);
    console.log("loginData==>", loginData);

    const dispatch = useDispatch();


    const Loginapi = () => {

        let payload = {
            email: TempLoginData?.email,
            password: TempLoginData?.password,
        }

        dispatch(loginListLoad(payload));
        setLoginDataSuccess(true)

    
    }

    useEffect(() => {
        if(loginDataSuccess && !loginLoad) {
            console.log("inside success");
            setUser(loginData?.user?.user)
            setLoginDataSuccess(false)
            router.push("/home")
        }
    }, [loginDataSuccess,loginLoad]);


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



                    <Form form={form} onFinish={Loginapi}>

                        <p className="input-labels">Email </p>
                        
                        <Form.Item name="email" rules={[{ required: true, message: " Enter your email !" }]}>

                        <Input placeholder="Email" className="ant-input" onChange={(e: any) => setnewloginData({
                            ...TempLoginData,
                            email: e.target.value
                        })} />

                        </Form.Item>

                        <p className="input-labels">Password  </p>
                        <Form.Item name="password" rules={[{ required: true, message: " Enter your password !" }]}>

                        <Input.Password
                            className="ant-input"
                            placeholder="Password"
                            iconRender={(visible) =>
                                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                            onChange={(e: any) => setnewloginData({
                                ...TempLoginData,
                                password: e.target.value
                            })}
                        />

                        </Form.Item>

                        <div className="options-row">
                            {login && (
                             <div className="forget-password-div">   <a href="#" className="forgot-password">
                             Forgot Password?
                         </a></div>
                            )}
                        </div>
                        <Button className="sign-in-button" htmlType="submit" type="primary">
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