// 'use client';
// import React, { useState } from "react";

// import { InputNumber, Table, Popconfirm, Skeleton } from "antd";

// import { DeleteOutlined } from "@ant-design/icons";
// import appImages from "@/Globals/AppImages";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { updatecartListLoad } from "@/store/reducer/indexSlice";
// import { getUser } from "@/Globals/Localstorage";

// import { useSelector } from "react-redux";
// import { useEffect } from "react";

// // import Skeleton from 'react-loading-skeleton';
// // import 'react-loading-skeleton/dist/skeleton.css';

// const CartTable = () => {
//     const { getCartData, getCartListLoad } = useSelector((state: any) => state.bcl);
//     const [data, setData] = useState([]);
//     console.log("getCartData==>", getCartData);

//     const dataSource = [
//         {
//             key: '1',
//             productImage: appImages?.GRASS_IMAGE,
//             productName: 'Vallarai Keerai',
//             price: 3.99,
//             quantity: 1,
//             subtotal: 7.98,
//             address: '10 Downing Street',
//         },
//         {
//             key: '2',
//             productImage: appImages?.GRASS_IMAGE,
//             productName: 'Vallarai Keerai',
//             price: 3.99,
//             quantity: 1,
//             subtotal: 7.98,
//         },
//         {
//             key: '3',
//             productImage: appImages?.GRASS_IMAGE,
//             productName: 'Vallarai Keerai',
//             price: 3.99,
//             quantity: 1,
//             subtotal: 7.98,
//         },
//         {
//             key: '4',
//             productImage: appImages?.GRASS_IMAGE,
//             productName: 'Vallarai Keerai',
//             price: 3.9,
//             quantity: 1,
//             subtotal: 7.98,
//         },
//         {
//             key: '5',
//             productImage: appImages?.GRASS_IMAGE,
//             productName: 'Vallarai Keerai',
//             price: 3.99,
//             quantity: 1,
//             subtotal: 7.98,
//         }
//         // ...repeat items
//     ];

//     const columns = [
//         {
//             title: 'Product',
//             dataIndex: 'productName',
//             key: 'productName',
//             width: 300,
//             render: (_: any, record: any) => (
//                 <div className="flex items-center sm:flex-row">
//                     <Image src={record?.productImage} alt="Product" width={50} height={50} />
//                     <div className="ml-3 text-sm sm:text-base">{record?.productName}</div>
//                 </div>
//             )
//         },
//         {
//             title: 'Price',
//             dataIndex: 'price',
//             key: 'price',
//             render: (price: number) => (
//                 <span className="text-sm sm:text-base">${price}</span>
//             )
//         },
//         {
//             title: 'Quantity',
//             dataIndex: 'quantity',
//             key: 'quantity',
//             render: (_: any, record: any) => (
//                 <div className="flex justify-center">
//                     <InputNumber
//                         addonBefore="-"
//                         addonAfter="+"
//                         defaultValue={record?.quantity}
//                         className="w-24"
//                     />
//                 </div>
//             )
//         },
//         {
//             title: 'Subtotal',
//             dataIndex: 'subtotal',
//             key: 'subtotal',
//             render: (subtotal: number) => (
//                 <span className="text-sm sm:text-base">${subtotal}</span>
//             )
//         },
//         {
//             key: 'action',
//             render: () => (
//                 <DeleteOutlined className="text-red-500 cursor-pointer" />
//             )
//         }
//     ];

//     // const dataSource = [
//     const handleDelete = (key: string) => {
//         const filteredData = data.filter((item: any) => item.key !== key);

//         setData(filteredData);
//     };

//     return (
//         <div className="overflow-x-auto rounded-xl border-1 border-[#CCCCCCBF] ">
//             {<Table
//                 dataSource={dataSource}
//                 columns={columns}
//                 pagination={false}
//                 scroll={{ x: 600 }}
//             />}
//         </div>
//     );

// }

// export default CartTable;

//2.....
// 'use client';
// import React, { useState } from "react";

// import { InputNumber, Table, Popconfirm, Skeleton } from "antd";

// import { DeleteOutlined } from "@ant-design/icons";
// import appImages from "@/Globals/AppImages";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { updatecartListLoad } from "@/store/reducer/indexSlice";
// import { getUser } from "@/Globals/Localstorage";

// import { useSelector } from "react-redux";
// import { useEffect } from "react";

// // import Skeleton from 'react-loading-skeleton';
// // import 'react-loading-skeleton/dist/skeleton.css';

// const CartTable = () => {
//     const { getCartData, getCartListLoad } = useSelector((state: any) => state.bcl);
//     const [data, setData] = useState([]);
//     console.log("getCartData==>", getCartData);

//     const dataSource = getCartData.map((item: any, index: Number) => ({
//         key: item?.id || index.toString(),
//         productImage: item?.productImage || appImages?.GRASS_IMAGE,
//         productName: item?.productName,
//         price: item?.price,
//         quantity: item?.quantity,
//         subtotal: (item?.price * item?.quantity).toFixed(2),
//     }))

//     const columns = [
//         {
//             title: 'Product',
//             dataIndex: 'productName',
//             key: 'productName',
//             width: 300,
//             render: (_: any, record: any) => (
//                 <div className="flex items-center sm:flex-row">
//                     <Image src={record?.productImage} alt="Product" width={50} height={50} />
//                     <div className="ml-3 text-sm sm:text-base">{record?.productName}</div>
//                 </div>
//             )
//         },
//         {
//             title: 'Price',
//             dataIndex: 'price',
//             key: 'price',
//             render: (price: number) => (
//                 <span className="text-sm sm:text-base">${price}</span>
//             )
//         },
//         {
//             title: 'Quantity',
//             dataIndex: 'quantity',
//             key: 'quantity',
//             render: (_: any, record: any) => (
//                 <div className="flex justify-center">
//                     {/* <InputNumber
//                         addonBefore="-"
//                         addonAfter="+"
//                         defaultValue={record?.quantity}
//                         className="w-24"
//                     /> */}
//                     <InputNumber
//                         min={1}
//                         defaultValue={record?.quantity}
//                         className="w-24"
//                         onChange={(value) => handleQuantityChange(record, value)}
//                     />
//                 </div>
//             )
//         },
//         {
//             title: 'Subtotal',
//             dataIndex: 'subtotal',
//             key: 'subtotal',
//             render: (subtotal: number) => (
//                 <span className="text-sm sm:text-base">${subtotal}</span>
//             )
//         },
//         {
//             key: 'action',
//             render: () => (
//                 <DeleteOutlined className="text-red-500 cursor-pointer" />
//             )
//         }
//     ];

//     // const dataSource = [
//     const handleDelete = (key: string) => {
//         const filteredData = data.filter((item: any) => item.key !== key);

//         setData(filteredData);
//     };

//     return (
//         <div className="overflow-x-auto rounded-xl border-1 border-[#CCCCCCBF] ">
//             {<Table
//                 dataSource={dataSource}
//                 columns={columns}
//                 pagination={false}
//                 scroll={{ x: 600 }}
//             />}
//         </div>
//     );

// }

// export default CartTable;

"use client";
// import React, { useState, useEffect } from "react";
import { InputNumber, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import appImages from "@/Globals/AppImages";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
// import { updatecartListLoad } from "@/store/reducer/indexSlice";
// import { getUser } from "@/Globals/Localstorage";

const CartTable = ({ data, reRun }: { data: any; reRun: any }) => {
  const dispatch = useDispatch();
  const { getCartData } = useSelector((state: any) => state.bcl);

  const handleDeleteProduct = async (record: any,) => {
    console.log(record);
     const cartItemId = record?.id; // Adjust based on your data shape

    if (!cartItemId) {
      console.error("Cart item ID is missing");
      return;
    }

    try {
      const response = await fetch(
        `https://api.purfull.com/cart/delete-item/${cartItemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error(
          "Failed to update cart:",
          result.error || response.statusText
        );
      } else {
        console.log("Cart updated successfully:", result);
        reRun((prev: boolean) => !prev);
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
    
  }
  const handleQuantityChange = async (record: any, value: number) => {
    const cartItemId = record?.id; // Adjust based on your data shape

    if (!cartItemId) {
      console.error("Cart item ID is missing");
      return;
    }

    try {
      const response = await fetch(
        `https://api.purfull.com/cart/update-cart/${cartItemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity: value }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error(
          "Failed to update cart:",
          result.error || response.statusText
        );
      } else {
        console.log("Cart updated successfully:", result);
        reRun((prev: boolean) => !prev);
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const dataSource = getCartData?.map((item: any, index: number) => ({
    key: item?.id || index.toString(),
    productId: item?.productId || item?.id,
    productImage: item?.productImage || appImages?.GRASS_IMAGE,
    productName: item?.productName,
    price: item?.price,
    quantity: item?.quantity,
    subtotal: (item?.price * item?.quantity).toFixed(2),
  }));

  const columns = [
    {
      title: "Product",
      dataIndex: "productName",
      key: "productName",
      width: 300,
      render: (_: any, record: any) => (
        <div className="flex items-center sm:flex-row">
          <Image
            src={record?.productImage}
            alt="Product"
            width={50}
            height={50}
          />
          <div className="ml-3 text-sm sm:text-base">
            {record?.Product?.name?.en}
          </div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_: any, record: any) => (
        <div className="flex items-center sm:flex-row">
          <div className="ml-3 text-sm sm:text-base">
            {record?.Product?.price}
          </div>
        </div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (_: any, record: any) => (
        <div className="flex justify-center">
          <InputNumber
            min={1}
            defaultValue={record?.quantity}
            className="w-24"
            onChange={(value) => handleQuantityChange(record, value)}
          />
        </div>
      ),
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      render: (_: any, record: any) => (
        <div className="flex items-center sm:flex-row">
          <div className="ml-3 text-sm sm:text-base">
            {record?.Product?.price * record?.quantity}
          </div>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div className="flex justify-center">
          <DeleteOutlined className="text-red-500 cursor-pointer" onClick={() => handleDeleteProduct(record )} />
        </div>
      )
    },
  ];

  return (
    <div className="overflow-x-auto rounded-xl border-1 border-[#CCCCCCBF]">
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        scroll={{ x: 600 }}
      />
    </div>
  );
};

export default CartTable;
