// 'use client';
// // import Image from "next/image";
// // import Logo from "../../public/BCL-Green-1.svg"
// import "../styles/Login.scss";
// import { useRouter } from "next/navigation";
// import { Button, Form, Input, message } from "antd";

// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginListLoad } from "@/store/reducer/indexSlice";
// import { setUser } from "@/Globals/Localstorage";
// import 'antd/dist/reset.css'; // for Ant Design v5

// const tempLogin = {

//     email: "",
//     password: "",

// }



// export default function LoginCompo() {


//     const [TempLoginData, setnewloginData] = useState(tempLogin)

//     const router = useRouter();
//     const [form] = Form.useForm();
//     const [login, setLogin] = useState(true);
//     const [loginDataSuccess, setLoginDataSuccess] = useState(false);

//     const [messageApi, contextHolder] = message.useMessage();

//     //spinner
//     const [loginButtonLoading, setLoginButtonLoading] = useState(false);

//     const handleSubmit = () => {
//         router.push("/signin")

//     }
    
//     const { loginLoad, loginData } = useSelector((state: any) => state.bcl);
//     console.log(loginLoad);
//     console.log("loginData==>", loginData);

//     const dispatch = useDispatch();


//     const Loginapi = () => {

//         let payload = {
//             email: TempLoginData?.email,
//             password: TempLoginData?.password,
//         }

//         dispatch(loginListLoad(payload));
//         setLoginDataSuccess(true)
//         setLoginButtonLoading(true);
//     }

//     useEffect(() => {

        

//         if (loginDataSuccess && !loginLoad) {
//             console.log("inside success");
//             setUser(loginData?.user?.user)
//             setLoginDataSuccess(false);
//             setLoginButtonLoading(false);
//             console.log("login success");
//             messageApi.open({ type: "success", content: "login successfully" })
//             router.push("/home")
//         }
//         else {
//             console.log("llllllllll",loginData);
            

//             setLoginButtonLoading(false); // ✅ Hide spinner
//             messageApi.open({ type: "error", content: "Login failed" });

//             if (loginData?.message === "Invalid credentials") {
//                 console.log("innnnnnnnnn");
                
//                 // setinvaildcreaditdata("Invalid email or password"); // ⬅️ Set custom field error
//             } else {
//                 messageApi.open({ type: "error", content: "Login failed" });
//             }
//         }
//     }, [loginDataSuccess, loginLoad]);


//     return (
//         <div className="login-wrapper">

//             <div className="login-card">

//                 <div className="login-form-container">

//                     <img className="brand-login" src="/BCL-Green-1.svg" alt="Logo" />

//                     <div className="welcome-message">
//                         <span>Complete Your Purchase – Log In to Continue!" </span>
//                         <div className="small-text">
//                             <span>To proceed with payment and enjoy a seamless shopping experience, please log in to your account.</span>
//                         </div>
//                     </div>



//                     <Form form={form} onFinish={Loginapi} className="gap-4" >

//                         <p className="input-labels">Email </p>

//                         <Form.Item name="email" rules={[{ required: true, message: " Enter your email !" }]}>

//                             <Input placeholder="Email" className="ant-input" onChange={(e: any) => setnewloginData({
//                                 ...TempLoginData,
//                                 email: e.target.value
//                             })} />

//                         </Form.Item>

//                         <p className="input-labels">Password  </p>
//                         <Form.Item name="password" rules={[{ required: true, message: " Enter your password !" }]}>

//                             <Input.Password
//                                 className="ant-input"
//                                 placeholder="Password"
//                                 iconRender={(visible) =>
//                                     visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//                                 }
//                                 onChange={(e: any) => {
//                                     setnewloginData({
//                                         ...TempLoginData,
//                                         password: e.target.value
//                                     })
//                                 }}
//                             />

//                         </Form.Item>


//                         <div className="options-row">
//                             {login && (
//                                 <div className="forget-password-div">   <a href="#" className="forgot-password">
//                                     Forgot Password?
//                                 </a></div>
//                             )}
//                         </div>
//                         <Button className="Login-button" htmlType="submit" type="primary" loading={loginButtonLoading}>
//                             Login
//                         </Button>


//                     </Form>

//                     <div className="divider">
//                         <hr className="line" />
//                         <span className="or-text">or</span>
//                         <hr className="line" />
//                     </div>

//                     <div className="toggle-login">
//                         <span className="toggle-text">
//                             Don't have an account ?
//                         </span>

//                         {/* <span className="toggle-link"> Register</span> */}

//                         <a href="#" className="toggle-link" onClick={handleSubmit}
//                         > Register
//                         </a>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }


'use client';

import Image from "next/image";
import Logo from "../../public/BCL-Green-1.svg";
import "../styles/Login.scss";
import { useRouter } from "next/navigation";
import { Button, Form, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginListLoad } from "@/store/reducer/indexSlice";
import { setUser } from "@/Globals/Localstorage";
import 'antd/dist/reset.css';
import type { RootState } from "@/store"; // Make sure your tsconfig has "@/store": ["src/store"]

interface LoginState {
  email: string;
  password: string;
}

const tempLogin: LoginState = {
  email: "",
  password: "",
};

export default function LoginCompo() {
  const [TempLoginData, setnewloginData] = useState<LoginState>(tempLogin);
  const router = useRouter();
  const [form] = Form.useForm();
  const [loginDataSuccess, setLoginDataSuccess] = useState(false);
  const [loginButtonLoading, setLoginButtonLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const { loginLoad, loginData } = useSelector((state: RootState) => state.bcl);
  const dispatch = useDispatch();

  const Loginapi = () => {
    const payload = {
      email: TempLoginData.email,
      password: TempLoginData.password,
    };

    dispatch(loginListLoad(payload));
    setLoginDataSuccess(true);
    setLoginButtonLoading(true);
  };

  useEffect(() => {
    if (loginDataSuccess && !loginLoad) {
      if (loginData?.user?.user) {
        setUser(loginData.user.user);
        setLoginDataSuccess(false);
        setLoginButtonLoading(false);
        messageApi.success("Login successfully");
        router.push("/home");
      } else if (loginData?.message === "Invalid credentials") {
        setLoginButtonLoading(false);
        messageApi.error("Invalid email or password");
      } else {
        setLoginButtonLoading(false);
        messageApi.error("Login failed");
      }
    }
  }, [loginDataSuccess, loginLoad, loginData, router, messageApi]);

  return (
    <>
      {contextHolder}
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-form-container">
            <Image className="brand-login" src={Logo} alt="Logo" width={200} height={60} />

            <div className="welcome-message">
              <span>Complete Your Purchase – Log In to Continue! </span>
              <div className="small-text">
                <span>
                  To proceed with payment and enjoy a seamless shopping experience, please log in to your account.
                </span>
              </div>
            </div>

            <Form form={form} onFinish={Loginapi} className="gap-4">
              <p className="input-labels">Email</p>
              <Form.Item name="email" rules={[{ required: true, message: "Enter your email!" }]}>
                <Input
                  placeholder="Email"
                  className="ant-input"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setnewloginData({
                      ...TempLoginData,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Item>

              <p className="input-labels">Password</p>
              <Form.Item name="password" rules={[{ required: true, message: "Enter your password!" }]}>
                <Input.Password
                  className="ant-input"
                  placeholder="Password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setnewloginData({
                      ...TempLoginData,
                      password: e.target.value,
                    })
                  }
                />
              </Form.Item>

              <div className="options-row">
                <div className="forget-password-div">
                  <a href="#" className="forgot-password">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <Button className="Login-button" htmlType="submit" type="primary" loading={loginButtonLoading}>
                Login
              </Button>
            </Form>

            <div className="divider">
              <hr className="line" />
              <span className="or-text">or</span>
              <hr className="line" />
            </div>

            <div className="toggle-login">
              <span className="toggle-text">Don&apos;t have an account?</span>
              <a href="#" className="toggle-link" onClick={() => router.push("/signin")}>
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
