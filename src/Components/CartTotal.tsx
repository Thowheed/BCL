'use client';

import appImages from "@/Globals/AppImages";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Alert } from "antd";
import Image from "next/image";
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRouter } from "next/navigation";

const CartTotal = () => {
  const router = useRouter();

  const stripePublishableKey: any = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(stripePublishableKey);

  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const items = [
      {
        name: 'Wireless Mouse',
        amount: 1499,
        quantity: 2,
        currency: 'inr',
      },
      {
        name: 'Mechanical Keyboard',
        amount: 4999,
        quantity: 1,
        currency: 'inr',
      }
    ];

    const res = await fetch('http://localhost:4400/payment/create-checkout-session', {
      method: 'POST',
      body: JSON.stringify({ items, payment_methods: ['card'] }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // const { id } = await res.json();
    // const { url } = await res.json();

    // console.log("Checkout URL:", url);
    // alert("Checkout URL: " + url);
    // window.location.href = "https://checkout.stripe.com/c/pay/cs_test_b1xuNcYRzzU9uCkXTvaue2UFtUKhiiFdiUMiUaFe9OdQl67HzTRfA0FGFg#fidkdWxOYHwnPyd1blpxYHZxWjA0V1JOZlZNQ1xsblc1bFxAfHFGXGh0VGRhUkA9VX1ScDc8Z0RPaHRfQXI3ZEhJdjFOQ3BAZkh%2FR3dpfEZBY392Tkd9QmNufG1ucHRKQT1odGZ9NmdMbjRjNTVHMHVJMX93aScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl";
    // if (url) {
    //  router.push(url);
    // } else {
    //   alert('Something went wrong');
    // }
    // const stripe: any = await stripePromise;
    // window.open("https://checkout.stripe.com/c/pay/cs_test_b1xuNcYRzzU9uCkXTvaue2UFtUKhiiFdiUMiUaFe9OdQl67HzTRfA0FGFg#fidkdWxOYHwnPyd1blpxYHZxWjA0V1JOZlZNQ1xsblc1bFxAfHFGXGh0VGRhUkA9VX1ScDc8Z0RPaHRfQXI3ZEhJdjFOQ3BAZkh%2FR3dpfEZBY392Tkd9QmNufG1ucHRKQT1odGZ9NmdMbjRjNTVHMHVJMX93aScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl", '_blank');

    // const { error } = await stripe.redirectToCheckout({
    //   sessionId: "https://checkout.stripe.com/c/pay/cs_test_b1xuNcYRzzU9uCkXTvaue2UFtUKhiiFdiUMiUaFe9OdQl67HzTRfA0FGFg#fidkdWxOYHwnPyd1blpxYHZxWjA0V1JOZlZNQ1xsblc1bFxAfHFGXGh0VGRhUkA9VX1ScDc8Z0RPaHRfQXI3ZEhJdjFOQ3BAZkh%2FR3dpfEZBY392Tkd9QmNufG1ucHRKQT1odGZ9NmdMbjRjNTVHMHVJMX93aScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl",
    // });

    // if (error) console.error(error.message);

    // setLoading(false);
  };

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
          <form className="w-full mt-5" onSubmit={handleClick}>
            {/* <PaymentElement /> */}
            <button
              type="submit"

              // disabled={!stripe || !elements}
              className="payment-button flex flex-row items-center justify-between mt-5"
            // onClick={handlePaymentClick}
            >
              <div>Proceed to payment</div>
              <ArrowRightOutlined />
              <div>$300 Total</div>
            </button>
            {/* {errorMessage && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
};


export default CartTotal;
