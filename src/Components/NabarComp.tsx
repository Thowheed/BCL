'use client';

import { Dropdown, Badge, Avatar, Input } from 'antd';
import { DownOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import "../styles/userprofile.scss";

const NavbarComp = () => {
    const dropdownContent = (
        
        <div className="drop-down">
            <div className="drop-down-inside">

                <div className="user-info">
                    <img src="/user.png" alt="user" className="avatar" />
                    <div className="user-details">
                        <span className="name">Mohamed Uvaish</span>
                        <span className="email">Uvaishmoahamedn@gmail.com</span>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="menu-item">
                    <img src="/user.png" alt="profile" className="icon" />
                    <span>Profile</span>
                </div>

                <div className="menu-item">
                    <img src="/checkout.png" alt="orders" className="icon" />
                    <span>My Orders</span>
                </div>

                <div className="divider"></div>

                <div className="menu-item logout">
                    <img src="/logout.png" alt="logout" className="icon" />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="navbar">

            <img className="logo" src="/BCL-Green-1.svg" alt="Logo" />

            <div className="delivery">
                <span className="delivery-time">Delivery in 8 minutes</span>
                <div className="location">
                    <span>Select Location</span>
                    <img src="./Border.svg" alt="dropdown" />
                </div>
            </div>

            <div className="search">
                <Input
                    className="search-input"
                    placeholder="Search by Tomato....."
                    prefix={<SearchOutlined />}
                    style={{ fontSize: 16, fontWeight: 400 }}
                />
            </div>

            <div className="actions">
                <Dropdown overlay={dropdownContent} trigger={['click']} placement="bottomRight">
                    <Badge dot color="green" className="avatar-badge">
                        <Avatar shape="circle" icon={<UserOutlined />} />
                    </Badge>
                </Dropdown>
                <button className="cart-button">
                    <img src="./Vectora.svg" alt="cart" />
                    <span>Cart</span>
                </button>
            </div>
        </div>
    )
}

export default NavbarComp;
