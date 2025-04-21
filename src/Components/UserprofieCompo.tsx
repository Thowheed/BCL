'use client';

import { Input } from "antd";
import "../styles/userprofile.scss";

const Usercompo = () => {
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
