'use client';
import { InputNumber, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import appImages from "@/Globals/AppImages";
import Image from "next/image";


const CartTable = () => {
    const dataSource = [
        {
            key: '1',
            productImage: appImages?.GRASS_IMAGE,
            productName: 'Vallarai Keerai',
            price: 3.99,
            quantity: 3,
            subtotal: 7.98,
            // address: '10 Downing Street',
        },
        {
            key: '2',
            productImage: appImages?.GRASS_IMAGE,
            productName: 'Vallarai Keerai',
            price: 3.99,
            quantity: 3,
            subtotal: 7.98,
        },
        {
            key: '3',
            productImage: appImages?.GRASS_IMAGE,
            productName: 'Vallarai Keerai',
            price: 3.99,
            quantity: 3,
            subtotal: 7.98,
        },
        {
            key: '4',
            productImage: appImages?.GRASS_IMAGE,
            productName: 'Vallarai Keerai',
            price: 3.99,
            quantity: 3,
            subtotal: 7.98,
        },
        {
            key: '5',
            productImage: appImages?.GRASS_IMAGE,
            productName: 'Vallarai Keerai',
            price: 3.99,
            quantity: 3,
            subtotal: 7.98,
        }
    ];

const columns = [
    {
        title: 'Product',
        dataIndex: 'productName',
        key: 'productName',
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
            <div className="flex flex-row items-center justify-between">
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
        <Table dataSource={dataSource} columns={columns} />
    </div>
)
}

export default CartTable;