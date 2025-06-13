'use client';

import "../styles/ordertracking.scss";

const OrdertrackingCompo = () => {

    return (


        <div className="order-wrapper">

            <div className="account-header">
                <span className="account-title">My Account</span>
                <p className="account-description">Manage your account settings and preferences.</p>
            </div>


            <div className="order-profile-card">

                <span className="profile-title p-5">My Orders</span>
                <div className="divider"></div>

                <div className="order-id">

                    <div className="p-10 flex flex-col gap-5">
                        <span className="pt-2.5">Order ID: 3354654654526</span>
                        <span className="text-[#12B76A]">Will be Delivered in 5-7 Working Days</span>
                    </div>
                    <div className="divider"></div>

                    <div className="profile-title text-[#12B76A]">order-confrmed</div>

                    <div className="divider"></div>


                </div>
                <div className="p-10 flex items-center justify-between w-[100%]">
                    <span >12 items ready to shipment</span>
                    <h3>hello</h3>
                </div>

            </div>


        </div>
    )

}




export default OrdertrackingCompo;
