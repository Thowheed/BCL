'use client';

import { Input, Select, Badge, Avatar } from "antd";

import "../styles/userprofile.scss";

import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

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




        <div className=" h-[100vh] w-full flex flex-col items-center justify-evenly">

            <div className="p-3 w-[75%] text-[black] flex flex-col items-start justify-center gap-4">


                <span className="font-[700] text-[20px]">My Account</span>
                <p>Manage your account settings and preferences.</p>

            </div>


            <div className="p-8 w-[75%] border-1 border-[#CCCCCC] rounded-md">
                <span className="text-[black] font-[700] ml-6 text-[18px]">Profile</span>

                <div className="profile-inputs p-6">
                    <p className="input-p-texts">Name* </p>
                    <Input type="" placeholder="Name" className="ant-input" />

                    <p className="input-p-texts">Email</p>
                    <Input type="" placeholder="Email" className="ant-input" />
                    <p className="input-p-texts">Phone Number </p>
                    <Input type="" placeholder="France" className="ant-input" />
                    <p className="input-p-texts">Address </p>
                    <Input type="" placeholder="France" className="ant-input" />





                </div>
            </div>
        </div>

    )
}

export default Usercompo;

