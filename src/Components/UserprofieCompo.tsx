'use client';

import { Input } from "antd";
import "../styles/userprofile.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateuserListLoad } from "@/store/reducer/indexSlice";
import { useEffect } from "react";

const Usercompo = () => {

    const { updateuserLoad, updateuserData } = useSelector((state: any) => state.bcl);
    console.log(updateuserLoad);
    console.log(updateuserData);

    const dispatch = useDispatch()

    const updateUserapi = () => {

        let payload = {
            
            id:1,
            name: "1",
            email: "1",
            password: "1",
            address: "1",
            country: "1",
            zip_code: "1",
            location: "1"
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
                    <p className="input-label">Name*</p>
                    <Input placeholder="Name" className="ant-input" />

                    <p className="input-label">Email</p>
                    <Input placeholder="Email" className="ant-input" />

                    <p className="input-label">Phone Number</p>
                    <Input placeholder="France" className="ant-input" />

                    <p className="input-label">Address</p>
                    <Input placeholder="France" className="ant-input" />
                </div>
            </div>
        </div>
    );
}

export default Usercompo;
