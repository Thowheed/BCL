// 'use client';
// import { addtocartListload, getCartLoad, updatecartListLoad } from '@/store/reducer/indexSlice';
// import { ArrowLeftOutlined } from '@ant-design/icons';
// import { Button } from 'antd';
// import dynamic from 'next/dynamic';
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser } from "@/Globals/Localstorage";
// import {updateCartItems} from "@/Globals/Localstorage";

// // import { Elements } from '@stripe/react-stripe-js';
// // import { loadStripe } from '@stripe/stripe-js';

// const CartTable = dynamic(() => import('./CartTable'));
// const CartTotal = dynamic(() => import('./CartTotal'));
// const NavbarComp = dynamic(() => import('./NabarComp'));
// const FooterComp = dynamic(() => import('./FooterCompo'));

//     // const stripePromise = loadStripe("pk_test_51RU1gz4PZ1SAYE9m9zH48m4U8MlksNFmsLpfY3D48fOFaR5sWWZsDAWCbeITBPceq0e6BbZZFyZNJh4wxa0ZNZ4m00SXMNPIlq");

// const options: any = {
//     mode: 'payment',
//     amount: 30000, // in cents ($300)
//     currency: 'usd',
//     appearance: {
//         theme: 'stripe',
//     },
// };

// const CartComponent = () => {

//     const [loading, setLoading] = useState(false);

//     const { addtocartLoad, addtocartData } = useSelector((state: any) => state.bcl);
//     console.log(addtocartLoad);
//     console.log(addtocartData);

//     const dispatch = useDispatch();

//     const handlePaymentClick = () => {
//         // CheckoutPage({ loading, setLoading });
//     }

//     const Cartapi = () => {

//         let payload = {

//             userId: getUser()?.id,
//         }

//         dispatch(getCartLoad(payload))

//     }

//     useEffect(() => {

//         Cartapi()

//     }, [])

//     //update cart
//     const updateCart = () => {

//         let payload = {

//             userId: updateCartItems()?.id,
//             productId: "",
//             isDeleted: "",
//         }

//         dispatch(updatecartListLoad(payload))

//     }

//     // useEffect(() => {

//     //     updateCart()

//     // }, [])

//     const router = useRouter();
//     return (
//         <div>
//             <NavbarComp />
//             <div className='flex flex-col'>
//                 <div className=' pt-[50px] mx-10  sm:pt-[120px] sm:mx-30'>
//                     <div className='flex flex-row items-center justify-between w-[80px] cursor-pointer' onClick={() => router.push('/home')}>
//                         <ArrowLeftOutlined />
//                         <span>Home</span>
//                     </div>
//                 </div>
//                 <div className=' flex sm:flex-row justify-center mt-10 flex-col'>
//                     <CartTable />
//                     <CartTotal />

//                     {/* {/* <Elements stripe={stripePromise} options={options}> */}
//                         {/* <CartTotal /> */}
//                     {/* </Elements> */}

//                 </div>

//                 {/* <div className=' mx-5 my-5 sm:my-2  sm:mx-40 '>
//                     <Button className='flex flex-row items-center justify-between' onClick={() => router.push('/home')}>
//                         <ArrowLeftOutlined />
//                         <div>Continue Shopping</div>
//                     </Button>
//                 </div> */}
//             </div>
//             <FooterComp />
//         </div>
//     )
// };

// export default CartComponent;

// "use client";

// import {
//   // addtocartListload,
//   getCartLoad,
//   updatecartListLoad,
// } from "@/store/reducer/indexSlice";
// import { ArrowLeftOutlined } from "@ant-design/icons";
// // import { Button } from "antd";
// import dynamic from "next/dynamic";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "@/Globals/Localstorage";
// import { updateCartItems } from "@/Globals/Localstorage";
// import "../styles/CartComponent.scss";

// const CartTable = dynamic(() => import("./CartTable"));
// const CartTotal = dynamic(() => import("./CartTotal"));
// const NavbarComp = dynamic(() => import("./NabarComp"));
// const FooterComp = dynamic(() => import("./FooterCompo"));

// const CartComponent = () => {
//   const [loading, setLoading] = useState(false);
//   const [reRun, setReRun] = useState(false);
//   const [cartData, setCartData] = useState([]);
//   const { addtocartLoad, addtocartData } = useSelector(
//     (state: any) => state.bcl
//   );

//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handlePaymentClick = () => {
//     // CheckoutPage({ loading, setLoading });
//   };

//   const fetchCart = () => {
//     let payload = {
//       userId: getUser()?.id,
//     };
//     dispatch(getCartLoad(payload));
//   };

//   const updateCart = () => {
//     let payload = {
//       userId: updateCartItems()?.id,
//       productId: "",
//       isDeleted: "",
//     };
//     dispatch(updatecartListLoad(payload));
//   };
//   const user = JSON.parse(localStorage.getItem("user") || "{}");
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await fetch(
//           `https://api.purfull.com/cart/get-cart?userId=${user.id}`
//         );
//         const result = await response.json();

//         if (response.ok) {
//           setCartData(result.data); // Adjust based on your API's response structure
//           console.log("Cart loaded:", result.data);
//         } else {
//           console.error("Failed to fetch cart:", result.message || result);
//         }
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     if (user?.id) {
//       fetchCart();
//     }
//   }, [user?.id, reRun]);

//   return (
//     <div className="cart-container">
//       <NavbarComp />

//       <div className="cart-content">
//         <div className="cart-header">
//           <div className="back-to-home" onClick={() => router.push("/home")}>
//             <ArrowLeftOutlined />
//             <span>Home</span>
//           </div>
//         </div>

//         <div className="cart-body">
//           <CartTable data={cartData} reRun={setReRun} />
//           <CartTotal data={cartData} reRun={setReRun} />
//         </div>
//       </div>

//       <FooterComp />
//     </div>
//   );
// };

// export default CartComponent;
// "use client";

// import { getCartLoad, updatecartListLoad } from "@/store/reducer/indexSlice";
// import { ArrowLeftOutlined } from "@ant-design/icons";
// import dynamic from "next/dynamic";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { getUser } from "@/Globals/Localstorage";
// import "../styles/CartComponent.scss";

// // Lazy-loaded components
// const CartTable = dynamic(() => import("./CartTable"));
// const CartTotal = dynamic(() => import("./CartTotal"));
// const NavbarComp = dynamic(() => import("./NabarComp"));
// const FooterComp = dynamic(() => import("./FooterCompo"));

// // Define cart item type (optional, based on your API structure)
// type CartItem = {
//   id: string;
//   productId: string;
//   quantity: number;
//   price: number;
//   // Add other properties from your cart item
// };

// const CartComponent = () => {
//   const [reRun, setReRun] = useState(false);
//   const [cartData, setCartData] = useState<CartItem[]>([]);

//   const dispatch = useDispatch();
//   const router = useRouter();
//   const user = JSON.parse(localStorage.getItem("user") || "{}");

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await fetch(
//           `https://api.purfull.com/cart/get-cart?userId=${user.id}`
//         );
//         const result = await response.json();

//         if (response.ok) {
//           setCartData(result.data);
//           console.log("Cart loaded:", result.data);
//         } else {
//           console.error("Failed to fetch cart:", result.message || result);
//         }
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     if (user?.id) {
//       fetchCart();
//     }
//   }, [user?.id, reRun]);

//   return (
//     <div className="cart-container">
//       <NavbarComp />

//       <div className="cart-content">
//         <div className="cart-header">
//           <div className="back-to-home" onClick={() => router.push("/home")}>
//             <ArrowLeftOutlined />
//             <span>Home</span>
//           </div>
//         </div>

//         <div className="cart-body">
//           <CartTable data={cartData} reRun={setReRun} />
//           <CartTotal data={cartData} reRun={setReRun} />
//         </div>
//       </div>

//       <FooterComp />
//     </div>
//   );
// };

// export default CartComponent;

"use client";

import appImages from "@/Globals/AppImages";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Alert } from "antd";
import Image from "next/image";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
// import { useRouter } from "next/navigation";

// 🟢 Move stripePromise outside component
const stripePromise = loadStripe(
  "pk_test_51RWKcSHFYikR0iYEytCYmqQadWE8PxWu29bAJmqZDw2aMLs4KFuEcMzBrlyCDfzsKBxGfkyhkuqOD8mqcx3bIk1f00B5pL4zrl"
);

// ✅ Define proper types
interface Product {
  name: { en: string };
  price: string;
}

interface CartItem {
  Product: Product;
  quantity: number;
}

const CartTotal = ({ data }: { data: CartItem[] }) => {
  const [loading, setLoading] = useState(false);
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  // const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState(user?.address?.address || "");
  const [zipCode, setZipCode] = useState(user?.address?.zip_code || "");
  const [country, setCountry] = useState(user?.address?.country || "");

  const handleSave = () => {
    setIsEditing(false);
  };

  const totalKg = data?.reduce((sum, item) => sum + item.quantity, 0);

  const totalCost = data?.reduce((sum, item) => {
    const price = parseFloat(item?.Product?.price || "0");
    return sum + item.quantity * price;
  }, 0);

  const handleClick = async () => {
    setLoading(true);

    const stripeItems = data.map((item) => {
      const price = parseFloat(item?.Product?.price || "0");
      return {
        name: item?.Product?.name?.en || "Unknown Product",
        amount: Math.round(price * 100),
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
            customer_info: {
              name: user?.name,
              email: user?.email,
              phone: user?.phone,
              address: {
                line1: address,
                postal_code: zipCode,
                country: country,
              },
            },
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
                      style={{ border: "1px solid #CCCCCCBF" }}
                    />
                    <input
                      type="text"
                      placeholder="Zip Code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className=" rounded px-2 py-1"
                      style={{ border: "1px solid #CCCCCCBF" }}
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className=" rounded px-2 py-1"
                      style={{ border: "1px solid #CCCCCCBF" }}
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
                          {address}, {zipCode}, {country}
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
              loading || totalKg < 150 || isEditing ? "" : "active"
            }`}
            onClick={handleClick}
            disabled={loading || totalKg < 150 || isEditing}
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
