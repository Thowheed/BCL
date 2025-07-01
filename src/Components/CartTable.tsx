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

'use client';
import React, { useState, useEffect } from "react";
import { InputNumber, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import appImages from "@/Globals/AppImages";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { updatecartListLoad } from "@/store/reducer/indexSlice";
import { getUser } from "@/Globals/Localstorage";

const CartTable = () => {
    const dispatch = useDispatch();
    const { getCartData } = useSelector((state: any) => state.bcl);

    const handleQuantityChange = (record: any, value: number) => {
        const payload = {
            userId: getUser()?.id,
            productId: record?.productId || record?.id,
            quantity: value,
            isDeleted: false,
        };
        dispatch(updatecartListLoad(payload));
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
            title: 'Product',
            dataIndex: 'productName',
            key: 'productName',
            width: 300,
            render: (_: any, record: any) => (
                <div className="flex items-center sm:flex-row">
                    <Image src={record?.productImage} alt="Product" width={50} height={50} />
                    <div className="ml-3 text-sm sm:text-base">{record?.productName}</div>
                </div>
            )
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => (
                <span className="text-sm sm:text-base">${price}</span>
            )
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (_: any, record: any) => (
                <div className="flex justify-center">
                    <InputNumber
                        min={1}
                        defaultValue={record?.quantity}
                        className="w-24"
                        onChange={(value) => handleQuantityChange(record, value)}
                    />
                </div>
            )
        },
        {
            title: 'Subtotal',
            dataIndex: 'subtotal',
            key: 'subtotal',
            render: (subtotal: number) => (
                <span className="text-sm sm:text-base">${subtotal}</span>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <DeleteOutlined className="text-red-500 cursor-pointer" />
            )
        }
    ];

    return (
        <div className="overflow-x-auto rounded-xl border-1 border-[#CCCCCCBF]">
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                scroll={{ x: 600 }}
            />
        </div>
    );
};

export default CartTable;
