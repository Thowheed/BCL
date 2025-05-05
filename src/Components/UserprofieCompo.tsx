'use client';

import { Input } from "antd";
import "../styles/userprofile.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateuserListLoad } from "@/store/reducer/indexSlice";
import { useEffect, useState } from "react";



const Tempfrm = {
    id:"",
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

    const [TempData, setFormData] = useState(Tempfrm);



    const { updateuserLoad, updateuserData } = useSelector((state: any) => state.bcl);
    console.log(updateuserLoad);
    console.log(updateuserData);

    const dispatch = useDispatch()

    const updateUserapi = () => {

        let payload = {

            id: Tempfrm?.id,
            name: Tempfrm?.name,
            email: Tempfrm?.email,
            password:Tempfrm?.password ,
            address:Tempfrm?.address,
            country: Tempfrm?.country,
            zip_code: Tempfrm?.zip_code,
            location: Tempfrm?.location
        }

        dispatch(updateuserListLoad(payload))
    }
    useEffect(() => {
        updateUserapi()
    }, [])





    return (
        <div className="user-wrapper">
            <div className="account-header">
                <span className="account-title">My Account</span>
                <p className="account-description">Manage your account settings and preferences.</p>
            </div>

            <div className="profile-card">
                <span className="profile-title">Profile</span>

                <div className="profile-inputs">
                    <p className="input-label">Name *</p>
                    <Input placeholder="Name" className="ant-input" />

                    <p className="input-label">Email *</p>
                    <Input placeholder="Email" className="ant-input" />

                    <p className="input-label">Phone Number *</p>
                    <Input placeholder="Phone Number" className="ant-input" />

                    <p className="input-label">Address *</p>
                    <Input placeholder="address" className="ant-input" />

                    <p className="input-label">Temp-Address *</p>
                    <Input placeholder="temp-address" className="ant-input" />


                    <p className="input-label">Zip-code *</p>
                    <Input placeholder="zip-Code" className="ant-input" />



                </div>
            </div>
        </div>
    );
}

export default Usercompo;
