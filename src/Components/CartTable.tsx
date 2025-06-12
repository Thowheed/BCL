// 'use client';
// import { InputNumber, Table } from "antd";
// import { DeleteOutlined } from "@ant-design/icons";
// import appImages from "@/Globals/AppImages";
// import Image from "next/image";


// const CartTable = () => {
//     const dataSource = [
//         {
//             key: '1',
//             productImage: appImages?.GRASS_IMAGE,
//             productName: 'Vallarai Keerai',
//             price: 3.99,
//             quantity: 1,
//             subtotal: 7.98,
//             // address: '10 Downing Street',
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
//     ];

// const columns = [
//     {
//         title: 'Product',
//         dataIndex: 'productName',
//         key: 'productName',
//         width: 300,
//         render: (text: any, record: any) => (
//             <div className="flex flex-row items-center">
//                  <Image src={record?.productImage} alt="Product" width={50} height={50} />
//                  <div className="mx-3">{record?.productName}</div>
//             </div>
//         )
//     },
//     {
//         title: 'Price',
//         dataIndex: 'price',
//         key: 'price',
//     },
//     {
//         title: 'Quantity',
//         dataIndex: 'quantity',
//         key: 'quantity',
//         render: (text: any, record: any) => (
//             <div className="flex flex-row items-center justify-center w-26">
//                  <InputNumber addonBefore="-" addonAfter="+" defaultValue={record?.quantity} />
//             </div>
//         )
//     },
//     {
//         title: 'Subtotal',
//         dataIndex: 'subtotal',
//         key: 'subtotal',
//     },
//     {
//         // title: 'Action',
//         key: 'action',
//         render: (_: any, record: any) => (
//                     <DeleteOutlined />
//             )         

//     }
// ];

// return (
//     <div>
//         <Table dataSource={dataSource} columns={columns} />
//     </div>
// )
// }

// export default CartTable;

// 'use client';
// import { InputNumber, Table } from "antd";
// import { DeleteOutlined } from "@ant-design/icons";
// import appImages from "@/Globals/AppImages";
// import Image from "next/image";


// const CartTable = () => {
//     const dataSource = [
//         {
//             key: '1',
//             productImage: appImages?.GRASS_IMAGE,
//             productName: 'Vallarai Keerai',
//             price: 3.99,
//             quantity: 1,
//             subtotal: 7.98,
//             // address: '10 Downing Street',
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
//     ];

// const columns = [
//     {
//         title: 'Product',
//         dataIndex: 'productName',
//         key: 'productName',
//         width: 300,
//         render: (text: any, record: any) => (
//             <div className="flex flex-row items-center">
//                  <Image src={record?.productImage} alt="Product" width={50} height={50} />
//                  <div className="mx-3">{record?.productName}</div>
//             </div>
//         )
//     },
//     {
//         title: 'Price',
//         dataIndex: 'price',
//         key: 'price',
//     },
//     {
//         title: 'Quantity',
//         dataIndex: 'quantity',
//         key: 'quantity',
//         render: (text: any, record: any) => (
//             <div className="flex flex-row items-center justify-center w-26">
//                  <InputNumber addonBefore="-" addonAfter="+" defaultValue={record?.quantity} />
//             </div>
//         )
//     },
//     {
//         title: 'Subtotal',
//         dataIndex: 'subtotal',
//         key: 'subtotal',
//     },
//     {
//         // title: 'Action',
//         key: 'action',
//         render: (_: any, record: any) => (
//                     <DeleteOutlined />
//             )         

//     }
// ];

// return (
//     <div>
//         <Table dataSource={dataSource} columns={columns} />
//     </div>
// )
// }

// export default CartTable;

'use client';
import React, { useState } from "react";
import { InputNumber, Table, Popconfirm} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import appImages from "@/Globals/AppImages";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { updatecartListLoad } from "@/store/reducer/indexSlice";
import { getUser } from "@/Globals/Localstorage";

import { useSelector } from "react-redux";
import { useEffect } from "react";

const CartTable = () => {
    const dataSource = [
          {
              key: '1',
              productImage: appImages?.GRASS_IMAGE,
              productName: 'Vallarai Keerai',
              price: 3.99,
              quantity: 1,
              subtotal: 7.98,
               address: '10 Downing Street',
          },
          {
              key: '2',
              productImage: appImages?.GRASS_IMAGE,
              productName: 'Vallarai Keerai',
              price: 3.99,
              quantity: 1,
              subtotal: 7.98,
          },
          {
              key: '3',
              productImage: appImages?.GRASS_IMAGE,
              productName: 'Vallarai Keerai',
              price: 3.99,
              quantity: 1,
              subtotal: 7.98,
          },
          {
              key: '4',
              productImage: appImages?.GRASS_IMAGE,
              productName: 'Vallarai Keerai',
              price: 3.9,
              quantity: 1,
              subtotal: 7.98,
          },
          {
              key: '5',
              productImage: appImages?.GRASS_IMAGE,
              productName: 'Vallarai Keerai',
              price: 3.99,
              quantity: 1,
              subtotal: 7.98,
        }
        // ...repeat items
    ];

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
                <span className="text-sm sm:text-base">${price.toFixed(2)}</span>
            )
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (_: any, record: any) => (
                <div className="flex justify-center">
                    <InputNumber
                        addonBefore="-"
                        addonAfter="+"
                        defaultValue={record?.quantity}
                        className="w-24"
                    />
                </div>
            )
        },
        {
            title: 'Subtotal',
            dataIndex: 'subtotal',
            key: 'subtotal',
            render: (subtotal: number) => (
                <span className="text-sm sm:text-base">${subtotal.toFixed(2)}</span>
            )
        },
        {
            key: 'action',
            render: () => (
                <DeleteOutlined className="text-red-500 cursor-pointer" />
            )
        }
    ];

    return (
        <div className="overflow-x-auto">
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                scroll={{ x: 600 }} // Ensures horizontal scroll on small devices
            />
        </div>
    );

    const { getCartData } = useSelector((state: any) => state.bcl);
    console.log("getCartData==>", getCartData);

    
    // const dataSource = [
        const [data, setData] = useState([]);
    const handleDelete = (key: string) => {
        const filteredData = data.filter(item => item.key !== key);
        setData(filteredData);
    };


// const columns = [
//     {
//         title: 'Product',
//         dataIndex: 'productName',
//         key: 'productName',
//         width: 300,
//         render: (text: any, record: any) => (
//             <div className="flex flex-row items-center">
//                  <Image src={record?.productImage} alt="Product" width={50} height={50} />
//                  <div className="mx-3">{record?.productName}</div>
//             </div>
//         )
//     },
//     {
//         title: 'Price',
//         dataIndex: 'price',
//         key: 'price',
//     },
//     {
//         title: 'Quantity',
//         dataIndex: 'quantity',
//         key: 'quantity',
//         render: (text: any, record: any) => (
//             <div className="flex flex-row items-center justify-center w-26">
//                  <InputNumber addonBefore="-" addonAfter="+" defaultValue={record?.quantity} />
//             </div>
//         )
//     },
//     {
//         title: 'Subtotal',
//         dataIndex: 'subtotal',
//         key: 'subtotal',
//     },
//     {
//         // title: 'Action',
//         key: 'action',
//             render: (_: any, record: any) => (
//                 <Popconfirm
//                     title="Are you sure you want to delete this item?"
//                     onConfirm={() => handleDelete(record.key)}
//                     okText="Yes"
//                     cancelText="No"
//                 >
//                     <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
//                 </Popconfirm>
//             ) 

//     }
// ];  

// const columns = [
//     {
//         title: 'Product',
//         dataIndex: 'productName',
//         key: 'productName',
//         width: 300,
//         render: (text: any, record: any) => (
//             <div className="flex flex-row items-center">
//                  <Image src={record?.productImage} alt="Product" width={50} height={50} />
//                  <div className="mx-3">{record?.productName}</div>
//             </div>
//         )
//     },
//     {
//         title: 'Price',
//         dataIndex: 'price',
//         key: 'price',
//     },
//     {
//         title: 'Quantity',
//         dataIndex: 'quantity',
//         key: 'quantity',
//         render: (text: any, record: any) => (
//             <div className="flex flex-row items-center justify-center w-26">
//                  <InputNumber addonBefore="-" addonAfter="+" defaultValue={record?.quantity} />
//             </div>
//         )
//     },
//     {
//         title: 'Subtotal',
//         dataIndex: 'subtotal',
//         key: 'subtotal',
//     },
//     {
//         // title: 'Action',
//         key: 'action',
//             render: (_: any, record: any) => (
//                 <Popconfirm
//                     title="Are you sure you want to delete this item?"
//                     onConfirm={() => handleDelete(record.key)}
//                     okText="Yes"
//                     cancelText="No"
//                 >
//                     <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
//                 </Popconfirm>
//             ) 

//     }
// ];  


// return (
//     <div>
//         <Table dataSource={data} columns={columns} />
//     </div>
// )

}

export default CartTable;
