// 'use client';
// import { useEffect, useState } from "react";
// import CartTable from "./CartTable";
// import CartTotal from "./CartTotal";
// import appImages from "@/Globals/AppImages";

// const CartPage = () => {
//   const [cartData, setCartData] = useState([
//     {
//       key: '1',
//       productImage: appImages?.GRASS_IMAGE,
//       productName: 'Vallarai Keerai',
//       price: 3.99,
//       quantity: 1,
//       subtotal: 7.98,
//     },
//     {
//       key: '2',
//       productImage: appImages?.GRASS_IMAGE,
//       productName: 'Vallarai Keerai',
//       price: 3.99,
//       quantity: 1,
//       subtotal: 7.98,
//     },
//     {
//       key: '3',
//       productImage: appImages?.GRASS_IMAGE,
//       productName: 'Vallarai Keerai',
//       price: 3.99,
//       quantity: 1,
//       subtotal: 7.98,
//     },
//     {
//       key: '4',
//       productImage: appImages?.GRASS_IMAGE,
//       productName: 'Vallarai Keerai',
//       price: 3.9,
//       quantity: 1,
//       subtotal: 7.98,
//     },
//     {
//       key: '5',
//       productImage: appImages?.GRASS_IMAGE,
//       productName: 'Vallarai Keerai',
//       price: 3.99,
//       quantity: 1,
//       subtotal: 7.98,
//     }
//   ]);

//   const [totalQty, setTotalQty] = useState(0);

//   useEffect(() => {
//     const total = cartData.reduce((sum, item) => sum + Number(item.quantity), 0);
//     setTotalQty(total);
//   }, [cartData]);

//   return (
//     <div className="flex flex-col md:flex-row gap-10">
//       <CartTable cartData={cartData} setCartData={setCartData} />
//       <CartTotal totalQty={totalQty} />
//     </div>
//   );
// };

// export default CartPage;
