'use client';

import { Input } from "antd";
import "../styles/userprofile.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateuserListLoad } from "@/store/reducer/indexSlice";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";




const Tempfrm = {
    id: "",
    name: "",
    email: "",
    mobileNo: "",
    password: "",
    address: "",
    temp_address: "",
    country: "",
    zip_code: "",
    location: ""

}

const Usercompo = () => {

    const [TempData, setuserFormData] = useState(Tempfrm);

    console.log(TempData);


    const { updateuserLoad, updateuserData } = useSelector((state: any) => state.bcl);
    console.log(updateuserLoad);
    console.log(updateuserData);

    const dispatch = useDispatch()

    const updateUserapi = () => {

        let payload = {

            // id: TempData?.id,
            name: TempData?.name,
            email: TempData?.email,
            mobileNo: TempData?.mobileNo,
            password: TempData?.password,
            address: TempData?.address,
            country: TempData?.country,
            zip_code: TempData?.zip_code,
            location: TempData?.location
        }

        dispatch(updateuserListLoad(payload))
    }
    useEffect(() => {
        localStorage.setItem("userFormData", JSON.stringify(TempData))
        updateUserapi()
    }, [TempData])





    return (
        <div className="user-wrapper" >
            <div className="account-header">
                <span className="account-title">My Account</span>
                <p className="account-description">Manage your account settings and preferences.</p>
            </div>

            <div className="profile-card">

                <span className="profile-title">Profile</span>


                <div className="profile-inputs" >
                    <p className="input-label">Name *</p>
                    <Input placeholder="Name" className="ant-input" onChange={(e: any) => setuserFormData({
                        ...TempData,
                        name: e.target.value
                    })} />

                    <p className="input-label">Email *</p>
                    <Input placeholder="Email" className="ant-input" onChange={(e: any) => setuserFormData({
                        ...TempData,
                        email: e.target.value
                    })} />
                    <p className="input-label">password *</p>
                    <Input placeholder="Email" className="ant-input" onChange={(e: any) => setuserFormData({
                        ...TempData,
                        password: e.target.value
                    })} />

                    <p className="input-label">Phone Number *</p>
                    <Input placeholder="Phone Number" className="ant-input" onChange={(e: any) => setuserFormData({
                        ...TempData,
                        mobileNo: e.target.value
                    })} />

                    <p className="input-label">Address *</p>
                    <Input placeholder="address" className="ant-input" onChange={(e: any) => setuserFormData({
                        ...TempData,
                        address: e.target.value
                    })} />

                    {/* <p className="input-label">Temp-Address *</p>
                    <Input placeholder="temp-address" className="ant-input" /> */}

                    <p className="input-label">Zip-code *</p>
                    <Input placeholder="zip-Code" className="ant-input" onChange={(e: any) => setuserFormData({
                        ...TempData,
                        zip_code: e.target.value
                    })} />

                    <p className="input-label">country *</p>
                    <Input placeholder="country" className="ant-input" onChange={(e: any) => setuserFormData({
                        ...TempData,
                        country: e.target.value
                    })} />



                </div>
            </div>
        </div>
    );
}

export default Usercompo;

