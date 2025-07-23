"use client";

import appImages from "@/Globals/AppImages";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Alert } from "antd";
import Image from "next/image";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

// 🟢 Move stripePromise outside component
const stripePromise = loadStripe(
  "pk_test_51RWKcSHFYikR0iYEytCYmqQadWE8PxWu29bAJmqZDw2aMLs4KFuEcMzBrlyCDfzsKBxGfkyhkuqOD8mqcx3bIk1f00B5pL4zrl"
);

const CartTotal = ({ data, reRun }: { data: any; reRun: any }) => {
  const [loading, setLoading] = useState(false);
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState(user?.address?.address || "");
  const [zipCode, setZipCode] = useState(user?.address?.zip_code || "");
  const [country, setCountry] = useState(user?.address?.country || "");

  const handleSave = () => {
    // You can send updated values to the backend here if needed
    setIsEditing(false);
  };
  const totalKg = data?.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  const totalCost = data?.reduce((sum: number, item: any) => {
    const price = parseFloat(item?.Product?.price || "0");
    return sum + item.quantity * price;
  }, 0);
  const handleClick = async () => {
    setLoading(true);

    const items = [
      {
        name: "Wireless Mouse",
        amount: 2000,
        quantity: 2,
        currency: "usd",
      },
      {
        name: "Mechanical Keyboard",
        amount: 3000,
        quantity: 1,
        currency: "usd",
      },
    ];
    const stripeItems = data.map((item: any) => {
      const price = parseFloat(item?.Product?.price || "0");

      return {
        name: item?.Product?.name?.en || "Unknown Product",
        amount: Math.round(price * 100), // amount in cents
        currency: "usd",
        quantity: item.quantity || 1,
      };
    });
    try {
      const res = await fetch(
        "https://api.purfull.com/payment/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: stripeItems,
            payment_methods: ["card"],
          }),
        }
      );

      const { id } = await res.json();
      const stripe = await stripePromise;

      if (!stripe) throw new Error("Stripe failed to load");

      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      if (error) console.error("Stripe Checkout error:", error.message);
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-total-container">
      <div className="total-grams-container flex flex-row items-center justify-between">
        <div className="text-bold">Total Kgs</div>
        <div>{totalKg}</div>
      </div>

      <div className="mt-5">
        <Alert
          type="warning"
          message="Need minimum 150 kg to proceed to your order"
        />
      </div>

      <div className="bill-details-container mt-5 text-bold">Bill Details</div>

      <div className="total-item-container flex flex-row items-center justify-between mt-3">
        <div className="total-item flex flex-row items-center">
          <Image
            src={appImages?.TOTAL_ITEM_IMAGE}
            alt="Discount"
            width={20}
            height={20}
          />
          <div>Total Items</div>
        </div>
        <div className="total-item-value">${totalCost}</div>
      </div>

      <div className="total-item-container flex flex-row items-center justify-between mt-3">
        <div className="total-item flex flex-row items-center">
          <Image
            src={appImages?.TOTAL_ITEM_IMAGE}
            alt="Discount"
            width={20}
            height={20}
          />
          <div>Delivery Charges</div>
        </div>
        <div className="total-item-value">Free</div>
      </div>

      <div className="Address-details-container mt-5">
        <div className="text-bold">Address Details</div>

        <div className="address-payment-container flex flex-col items-center justify-between mt-3">
          <div className="address-details flex flex-row items-center justify-between w-[90%]">
            <div className="flex flex-row items-center w-full">
             
              <div className="my-3 mx-2 w-full">
                {isEditing ? (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className=" rounded px-2 py-1"
                      style={{border: "1px solid #CCCCCCBF"}}
                    />
                    <input
                      type="text"
                      placeholder="Zip Code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className=" rounded px-2 py-1"
                      style={{border: "1px solid #CCCCCCBF"}}
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className=" rounded px-2 py-1"
                      style={{border: "1px solid #CCCCCCBF"}}
                    />
                    <button
                      onClick={handleSave}
                      className="bg-[#4CAF50] text-white px-3 py-2 rounded w-full"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  user && (
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex">
                        
                       <Image
                src={appImages?.LOCATION_ICON}
                alt="Location"
                width={30}
                height={30}
              />
                    <div className="my-3 mx-2">
                      {user.address?.address}, {user.address?.zip_code},{" "}
                      {user.address?.country}
                    </div>
                      </div>
            <Image
              src={appImages?.EDIT_ICON}
              alt="Edit"
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={() => setIsEditing(true)}
            />
                    </div>
                  )
                )}
              </div>
            </div>

          </div>

          <button
            type="button"
            className={`payment-button flex flex-row items-center justify-between mt-5 ${
              (loading || totalKg < 150 || isEditing) ? "" : "active"
            }`}
            onClick={handleClick}
            disabled={(loading || totalKg < 150 || isEditing)}
          >
            <div>{loading ? "Processing..." : "Proceed to payment"}</div>
            <ArrowRightOutlined />
            <div>${totalCost} Total</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
