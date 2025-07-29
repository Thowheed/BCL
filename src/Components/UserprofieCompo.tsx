// "use client";
// interface Address {
//   address: string;
//   zip_code: string;
//   country: string;
//   location: string;
// }

// interface UserData {
//   name: string;
//   email: string;
//   phone: string;
//   address: Address;
// }

// import { Form, Input, Button } from "antd";
// import "../styles/userprofile.scss";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getUserListLoad,
//   updateuserListLoad,
// } from "@/store/reducer/indexSlice";
// import { useEffect, useState } from "react";
// import { getUser } from "@/Globals/Localstorage";

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const Usercompo = () => {
//   const [form] = Form.useForm();
//   const [userData, setUserData] = useState<UserData | null>(null);
//   const [reRun, setRerun] = useState(false)
//   const dispatch = useDispatch();
//   const userList = getUser();
  
//   const user = JSON.parse(localStorage.getItem("user") || "{}");
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await fetch(
//           `https://api.purfull.com/user/get-user/${user?.id}`
//         );
//         const result = await response.json();

//         if (response.ok) {
//           setUserData(result.data); // Adjust based on your API's response structure
//           console.log("Cart loaded:", result.data);
//         } else {
//           console.error("Failed to fetch cart:", result.message || result);
//         }
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     if (user?.id) {
//       fetchCart();
//     }
//   }, [user?.id, reRun]);

//   const { updateuserLoad, updateuserData } = useSelector(
//     (state: any) => state.bcl
//   );
//   console.log("updateuserData", updateuserLoad);

//   // Update API call
//   const updateUserapi = (values: any) => {
//     console.log("values", values);
//     const payload = {
//       id: userList?.id,
//       name: values?.name,
//       email: values?.email,
//       phone: values?.phone,
//       password: userList?.password,
//       address: {
//         address: values?.address,
//         country: values?.country,
//         zip_code: values?.zip_code,
//         location: values?.location,
//       },
//     };
//     const result = dispatch(updateuserListLoad(payload));
//     console.log(result);
    
//   };

//   // Pre-populate form when userList data is available
//   useEffect(() => {
//     if (userData) {
//       form.setFieldsValue({
//         name: userData?.name,
//         email: userData?.email,
//         phone: userData?.phone,
//         address: userData?.address?.address,
//         zip_code: userData?.address?.zip_code,
//         country: userData?.address?.country,
//         location: userData?.address?.location,
//       });
//     }
//   }, [userData, form]);

//   return !updateuserLoad ? (
//     <div className="user-wrapper">
//       <div className="account-header">
//         <span className="account-title">My Account</span>
//         <p className="account-description">
//           Manage your account settings and preferences.
//         </p>
//       </div>

//       <div className="profile-card">
//         <span className="profile-title">Profile</span>

//         <Form form={form} onFinish={updateUserapi}>
//           <div className="profile-inputs">
//             <p className="input-label">Name *</p>
//             <Form.Item
//               name="name"
//               rules={[{ required: true, message: "Please input your name!" }]}
//             >
//               <Input placeholder="Name" className="ant-input" />
//             </Form.Item>

//             <p className="input-label">Email *</p>
//             <Form.Item
//               name="email"
//               rules={[{ required: true, message: "Please input your email!" }]}
//             >
//               <Input placeholder="Email" className="ant-input" />
//             </Form.Item>

//             <p className="input-label">Phone Number *</p>
//             <Form.Item
//               name="phone"
//               rules={[
//                 { required: true, message: "Please input your mobile number!" },
//               ]}
//             >
//               <Input placeholder="Phone Number" className="ant-input" />
//             </Form.Item>

//             <p className="input-label">Address *</p>
//             <Form.Item
//               name="address"
//               rules={[
//                 { required: true, message: "Please input your address!" },
//               ]}
//             >
//               <Input placeholder="Address" className="ant-input" />
//             </Form.Item>

//             <p className="input-label">Zip-code *</p>
//             <Form.Item
//               name="zip_code"
//               rules={[
//                 { required: true, message: "Please input your zip code!" },
//               ]}
//             >
//               <Input placeholder="Zip Code" className="ant-input" />
//             </Form.Item>

//             <p className="input-label">Country *</p>
//             <Form.Item
//               name="country"
//               rules={[
//                 { required: true, message: "Please input your country!" },
//               ]}
//             >
//               <Input placeholder="Country" className="ant-input" />
//             </Form.Item>

//             {/* Submit Button */}
//             <Form.Item>
//               <Button className="primary-button" htmlType="submit">
//                 Update Profile
//               </Button>
//             </Form.Item>
//           </div>
//         </Form>
//       </div>
//     </div>
//   ) : (
//     <Skeleton />
//   );
// };

// export default Usercompo;


"use client";
interface Address {
  address: string;
  zip_code: string;
  country: string;
  location: string;
}

interface UserData {
  name: string;
  email: string;
  phone: string;
  address: Address;
}

import { Form, Input, Button } from "antd";
import "../styles/userprofile.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  // getUserListLoad,
  updateuserListLoad,
} from "@/store/reducer/indexSlice";
import { useEffect, useState } from "react";
import { getUser } from "@/Globals/Localstorage";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip_code: string;
  country: string;
  location: string;
}
const Usercompo = () => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [reRun,] = useState(false)
  const dispatch = useDispatch();
  const userList = getUser();
  
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(
          `https://api.purfull.com/user/get-user/${user?.id}`
        );
        const result = await response.json();

        if (response.ok) {
          setUserData(result.data); // Adjust based on your API's response structure
          console.log("Cart loaded:", result.data);
        } else {
          console.error("Failed to fetch cart:", result.message || result);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    if (user?.id) {
      fetchCart();
    }
  }, [user?.id, reRun]);

  const { updateuserLoad,  // updateuserData 
 } = useSelector(
    (state: any) => state.bcl
  );
  console.log("updateuserData", updateuserLoad);

  // Update API call
  const updateUserapi = (values: FormValues) => {
    console.log("values", values);
    const payload = {
      id: userList?.id,
      name: values?.name,
      email: values?.email,
      phone: values?.phone,
      password: userList?.password,
      address: {
        address: values?.address,
        country: values?.country,
        zip_code: values?.zip_code,
        location: values?.location,
      },
    };
    const result = dispatch(updateuserListLoad(payload));
    console.log(result);
    
  };

  // Pre-populate form when userList data is available
  useEffect(() => {
    if (userData) {
      form.setFieldsValue({
        name: userData?.name,
        email: userData?.email,
        phone: userData?.phone,
        address: userData?.address?.address,
        zip_code: userData?.address?.zip_code,
        country: userData?.address?.country,
        location: userData?.address?.location,
      });
    }
  }, [userData, form]);

  return !updateuserLoad ? (
    <div className="user-wrapper">
      <div className="account-header">
        <span className="account-title">My Account</span>
        <p className="account-description">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="profile-card">
        <span className="profile-title">Profile</span>

        <Form form={form} onFinish={updateUserapi}>
          <div className="profile-inputs">
            <p className="input-label">Name *</p>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Name" className="ant-input" />
            </Form.Item>

            <p className="input-label">Email *</p>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" className="ant-input" />
            </Form.Item>

            <p className="input-label">Phone Number *</p>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input your mobile number!" },
              ]}
            >
              <Input placeholder="Phone Number" className="ant-input" />
            </Form.Item>

            <p className="input-label">Address *</p>
            <Form.Item
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input placeholder="Address" className="ant-input" />
            </Form.Item>

            <p className="input-label">Zip-code *</p>
            <Form.Item
              name="zip_code"
              rules={[
                { required: true, message: "Please input your zip code!" },
              ]}
            >
              <Input placeholder="Zip Code" className="ant-input" />
            </Form.Item>

            <p className="input-label">Country *</p>
            <Form.Item
              name="country"
              rules={[
                { required: true, message: "Please input your country!" },
              ]}
            >
              <Input placeholder="Country" className="ant-input" />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button className="primary-button" htmlType="submit">
                Update Profile
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  ) : (
    <Skeleton />
  );
};

export default Usercompo;
