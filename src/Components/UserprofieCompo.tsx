

'use client';

import { Input, Select, Dropdown, Badge, Avatar } from "antd";
import Logo from "/BCL-Green-1.svg"
import Frame from "../../public/Frame.svg"
import Search from "../../public/Framesearch (1).svg"
import { Option } from "antd/es/mentions";

const Usercompo = () => {
    return (




        <div className=" h-[100vh] w-full flex flex-col items-center justify-evenly">
            {/* <Dropdown className="avatar-dropdown" menu={{ items }} trigger={['hover']} placement="bottomRight" >
                <Badge dot color="green" className="avatar-badge">
                    <Avatar shape="circle" icon={<UserOutlined />} />
                </Badge>
            </Dropdown> */}
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

