'use client';

import appImages from "@/Globals/AppImages";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Alert } from "antd";
import Image from "next/image";
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from "react";

const CartTotal = () => {
  // const stripe = useStripe();
  // const elements = useElements();
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);


  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  // if (!elements || !stripe) {
  //   return;
  // }

  // const { error: submitError } = await elements.submit();
  // if (submitError) {
  //   setErrorMessage(submitError.message || "Submission error");
  //   return;
  // }

  // const res = await fetch('/api/create-intent', {
  //   method: 'POST',
  // });

  //   const { client_secret: clientSecret } = await res.json();

  //   const { error } = await stripe.confirmPayment({
  //     // elements,
  //     clientSecret,
  //     confirmParams: {
  //       return_url: 'https://your-domain.com/order-complete',
  //     },
  //   });

  //   if (error) {
  //     setErrorMessage(error.message || "Payment confirmation error");
  //   }
  // };

  return (
    <div className="cart-total-container">
      <div className="total-grams-container flex flex-row items-center justify-between">
        <div className="text-bold">Total Kgs</div>
        <div>4.5kg</div>
      </div>

      <div className="mt-5">
        <Alert type="warning" message="Need minimum 5.0 kg to proceed to your order" />
      </div>

      <div className="bill-details-container mt-5 text-bold">Bill Details</div>

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
        <div className="text-bold">Address Details</div>

        <div className="address-payment-container flex flex-col items-center justify-between mt-3">
          <div className="address-details flex flex-row items-center justify-between w-[90%]">
            <div className="flex flex-row items-center">
              <Image src={appImages?.LOCATION_ICON} alt="Location" width={30} height={30} />
              <div className="my-3 mx-2">
                Willsiong street, Church colony,<br />United Kingdom
              </div>
            </div>
            <Image src={appImages?.EDIT_ICON} alt="Edit" width={30} height={30} />
          </div>

          {/* Stripe Payment Form */}
          {/* <form onSubmit={handleSubmit} className="w-full mt-5">
            <PaymentElement />
            <button
              type="submit"
              disabled={!stripe || !elements}
              className="payment-button flex flex-row items-center justify-between mt-5"
            >
              <div>Proceed to payment</div>
              <ArrowRightOutlined />
              <div>$300 Total</div>
            </button>
            {errorMessage && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
          </form> */}
          <button
            type="button"
            className="payment-button flex flex-row items-center justify-between mt-5"
          >
            <div>Proceed to payment</div>
            <ArrowRightOutlined />
            <div>$300 Total</div>
          </button>

        </div>
      </div>
    </div>
  );
};


export default CartTotal;
