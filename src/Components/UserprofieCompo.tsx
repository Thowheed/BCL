'use client';

import { Input } from "antd";
import "../styles/userprofile.scss";

const Usercompo = () => {

    // const menu = (
    //     <Menu>


    //         <div className="drop-down ">

    //             <div className="drop-down-inside ">


    //                 <div className="logo-username ">

    //                     <img src="" alt="username" />
    //                     <div className="span-useername-div">
    //                         <span >Mohamed Uvaish</span><br></br>
    //                         <span>Uvaishmoahamedn@gmail.com</span>

    //                     </div>


    //                 </div>

    //                 <div className="line"></div>


    //                 <div className="button-user">

    //                     <div className="small-logo">

    //                         <img src="" alt="logo" />
    //                         <span>Profile</span>
    //                     </div>

    //                     <div className="small-logo">

    //                         <img src="" alt="logo" />
    //                         <span>My Orders</span>
    //                     </div>


    //                     <div className="small-logo">

    //                         <img src="" alt="logo" />
    //                         <span>Billing</span>
    //                     </div>





    //                     <div className="small-logo">

    //                         <img src="" alt="logo" />
    //                         <span>Address</span>
    //                     </div>


    //                 </div>

    //                 <div className="line"></div>


    //                 <div className="small-logoout">

    //                     <img src="" alt="logo" />
    //                     <span>Log Out</span>
    //                 </div>

    //             </div>

    //         </div>
    //     </Menu>
    // );
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
