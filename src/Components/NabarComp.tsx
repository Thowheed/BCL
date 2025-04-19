'use client';

import Logo from "/BCL-Green-1.svg"
import Frame from "../../public/Frame.svg"
import Search from "../../public/Framesearch (1).svg"
import { Menu, Dropdown, Button, Badge, Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import "../styles/userprofile.scss";

const NavbarComp = () => {
    const menu = (
        <Menu>
            {/* <Menu.Item key="1">Profile</Menu.Item>
            <Menu.Item key="2">Settings</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">Logout</Menu.Item> */}

            <div className="drop-down ">

                <div className="drop-down-inside ">


                    <div className="logo-username ">

                        <img src="/user.png" alt="username"  className="h-[40px] w-[40px]"/>
                        <div className="span-useername-div">
                            <span >Mohamed Uvaish</span><br></br>
                            <span>Uvaishmoahamedn@gmail.com</span>

                        </div>


                    </div>

                    <div className="line"></div>





                        <div className="small-logo">

                        <img src="/user.png" alt="username"  className="h-[20px] w-[20px]"/>
                            <span>Profile</span>
                        </div>

                        <div className="small-logo">

                        <img src="/checkout.png" alt="username"  className="h-[20px] w-[20px]"/>
                            <span>My Orders</span>
                        </div>


                        <div className="small-logo">

                        <img src="/bill.png" alt="username"  className="h-[20px] w-[20px]"/>
                            <span>Billing</span>
                        </div>





                        <div className="small-logo">

                        <img src="/location.png" alt="username"  className="h-[20px] w-[20px]"/>
                            <span>Address</span>
                        </div>


                    <div className="line"></div>


                    <div className="small-logoout">

                    <img src="/logout.png" alt="username"  className="h-[20px] w-[20px]"/>
                    <span>Log Out</span>
                    </div>
                </div>

            </div>
        </Menu>
    );
    return (
        <div className="navbar-container  ">

            <div className="inside-container">


                <img className="brand" src="/BCL-Green-1.svg" alt="Logo" />

                <div className="delivery-text">

                    <span>Delivery in 8 minutes</span><br></br>
                    <span>Select Location </span>
                </div>

                <div className="navbar-input">

                    <input className="search-input" type="text" placeholder="Search by Tomato....." />


                </div>

                <div className="login-cart-button">
                    
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <Badge dot color="green" className="avatar-badge">
                    <Avatar shape="circle" icon={<UserOutlined />} />
                </Badge>
            </Dropdown>
                    <button className="cart-button" >  <img src={Frame} alt="" /> Cart</button>


                </div>


            </div>

        </div>
    )
}

export default NavbarComp;