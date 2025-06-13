'use client';

import { Form, Input, Button } from "antd";
import "../styles/userprofile.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateuserListLoad } from "@/store/reducer/indexSlice";
import { useEffect } from "react";
import { getUser } from "@/Globals/Localstorage";

const Usercompo = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const userList = getUser();

    const { updateuserLoad, updateuserData } = useSelector((state: any) => state.bcl);

    // Update API call
    const updateUserapi = (values: any) => {
        console.log("values", values)
        const payload = {
            id: userList?.id,
            name: values?.name,
            email: values?.email,
            mobileNo: values?.mobileNo,
            password: values?.password,
            address: values?.address,
            country: values?.country,
            zip_code: values?.zip_code,
            location: values?.location
        };
        dispatch(updateuserListLoad(payload));
    };

    // Pre-populate form when userList data is available
    useEffect(() => {
        if (userList) {
            form.setFieldsValue({
                id: userList?.id,
                name: userList?.name,
                email: userList?.email,
                mobileNo: userList?.mobileNo,
                address: userList?.address,
                country: userList?.country,
                zip_code: userList?.zip_code,
                location: userList?.location,
            });
        }
    }, [userList, form]);

    return (
        <div className="user-wrapper">
            <div className="account-header">
                <span className="account-title">My Account</span>
                <p className="account-description">Manage your account settings and preferences.</p>
            </div>

            <div className="profile-card">
                <span className="profile-title">Profile</span>

                <Form form={form} onFinish={updateUserapi}>
                    <div className="profile-inputs">
                        <p className="input-label">Name *</p>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Name" className="ant-input" />
                        </Form.Item>

                        <p className="input-label">Email *</p>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Email" className="ant-input" />
                        </Form.Item>

                        <p className="input-label">Phone Number *</p>
                        <Form.Item
                            name="mobileNo"
                            rules={[{ required: true, message: 'Please input your mobile number!' }]}
                        >
                            <Input placeholder="Phone Number" className="ant-input" />
                        </Form.Item>

                        <p className="input-label">Address *</p>
                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Please input your address!' }]}
                        >
                            <Input placeholder="Address" className="ant-input" />
                        </Form.Item>

                        <p className="input-label">Zip-code *</p>
                        <Form.Item
                            name="zip_code"
                            rules={[{ required: true, message: 'Please input your zip code!' }]}
                        >
                            <Input placeholder="Zip Code" className="ant-input" />
                        </Form.Item>

                        <p className="input-label">Country *</p>
                        <Form.Item
                            name="country"
                            rules={[{ required: true, message: 'Please input your country!' }]}
                        >
                            <Input placeholder="Country" className="ant-input" />
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Update Profile</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Usercompo;

