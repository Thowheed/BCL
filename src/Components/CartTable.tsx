'use client';
import { InputNumber, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import appImages from "@/Globals/AppImages";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const CartTable = () => {

    const { getCartData } = useSelector((state: any) => state.bcl);
    console.log("getCartData==>", getCartData);

    // const dataSource = [
    //     {
    //         key: '1',
    //         productImage: appImages?.GRASS_IMAGE,
    //         productName: 'Vallarai Keerai',
    //         price: 3.99,
    //         quantity: 1,
    //         subtotal: 7.98,
    //         // address: '10 Downing Street',
    //     },
    //     {
    //         key: '2',
    //         productImage: appImages?.GRASS_IMAGE,
    //         productName: 'Vallarai Keerai',
    //         price: 3.99,
    //         quantity: 1,
    //         subtotal: 7.98,
    //     },
    //     {
    //         key: '3',
    //         productImage: appImages?.GRASS_IMAGE,
    //         productName: 'Vallarai Keerai',
    //         price: 3.99,
    //         quantity: 1,
    //         subtotal: 7.98,
    //     },
    //     {
    //         key: '4',
    //         productImage: appImages?.GRASS_IMAGE,
    //         productName: 'Vallarai Keerai',
    //         price: 3.9,
    //         quantity: 1,
    //         subtotal: 7.98,
    //     },
    //     {
    //         key: '5',
    //         productImage: appImages?.GRASS_IMAGE,
    //         productName: 'Vallarai Keerai',
    //         price: 3.99,
    //         quantity: 1,
    //         subtotal: 7.98,
    //     }
    // ];

    
    const columns = [
        {
            title: 'Product',
            dataIndex: 'productName',
            key: 'productName',
            width: 300,
            render: (text: any, record: any) => (
                <div className="flex flex-row items-center">
                    <Image src={record?.productImage} alt="Product" width={50} height={50} />
                    <div className="mx-3">{record?.productName}</div>
                </div>
            )
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text: any, record: any) => (
                <div className="flex flex-row items-center justify-center w-26">
                    <InputNumber addonBefore="-" addonAfter="+" defaultValue={record?.quantity} />
                </div>
            )
        },
        {
            title: 'Subtotal',
            dataIndex: 'subtotal',
            key: 'subtotal',
        },
        {
            // title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <DeleteOutlined />
            )

        }
    ];

    return (
        <div>
            <Table dataSource={getCartData} columns={columns} />
        </div>
    )
}

export default CartTable;