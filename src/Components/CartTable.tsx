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

    const { getCartData } = useSelector((state: any) => state.bcl);
    console.log("getCartData==>", getCartData);

    
    // const dataSource = [
        const [data, setData] = useState([]);
    const handleDelete = (key: string) => {
        const filteredData = data.filter(item => item.key !== key);
        setData(filteredData);
    };


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
                <Popconfirm
                    title="Are you sure you want to delete this item?"
                    onConfirm={() => handleDelete(record.key)}
                    okText="Yes"
                    cancelText="No"
                >
                    <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
                </Popconfirm>
            ) 

    }
];  


return (
    <div>
        <Table dataSource={data} columns={columns} />
    </div>
)

}

export default CartTable;