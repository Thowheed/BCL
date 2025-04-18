'use client';

import appImages from "@/Globals/AppImages";
import { Alert } from "antd";
import Image from "next/image";

const CartTotal = () => {
    return (
        <div className="cart-total-container">
            <div className="total-grams-container flex flex-row items-center justify-between">
                <div>
                    Total Kgs
                </div>
                <div>
                    4.5kg
                </div>
            </div>
            <div className="mt-5">
                <Alert type="warning" message="Need minimum 5.0 kg to proceed to your order" />
            </div>

            <div className="bill-details-container mt-5">
                Bill Details
            </div>

            <div className="total-item-container flex flex-row items-center justify-between mt-3">
                <div className="total-item flex flex-row items-center">
                    <Image src={appImages?.TOTAL_ITEM_IMAGE} alt="Discount" width={20} height={20} />
                    <div>Total Items</div>
                </div>
                <div className="total-item-value">$250</div>
            </div>

            <div className="total-item-container flex flex-row items-center justify-between mt-3">
                <div className="total-item flex flex-row items-center">
                    <Image src={appImages?.TOTAL_ITEM_IMAGE} alt="Discount" width={20} height={20} />
                    <div>Delivery Charges</div>
                </div>
                <div className="total-item-value">$50</div>
            </div>

            <div className="Address-details-container mt-5">
                <div>Address Details</div>

                <div className="address-payment-container flex flex-col items-center justify-between mt-3">
                    <div className="address-details flex flex-row items-center justify-between mt-3">
                        <Image src={appImages?.LOCATION_ICON} alt="Location" width={30} height={30} />
                        Willsiong street, Church colony,
                        <br />united kingdom
                        <Image src={appImages?.EDIT_ICON} alt="Delivery" width={30} height={30} />
                    </div>

                    <div className="payment-button flex flex-row items-center justify-between">
                        <div>Proceed to payment</div>
                        <div>
                            $300 Total
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default CartTotal;