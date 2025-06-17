'use client';

import { DownOutlined, RightOutlined } from "@ant-design/icons";
import "../styles/ordertracking.scss";
import "../styles/Faq.scss";
import { useState } from "react";
import { Table, Steps } from "antd";
import type { ColumnsType } from 'antd/es/table';
import appImages from "@/Globals/AppImages";
import Image from "next/image";
import { CheckCircleFilled } from '@ant-design/icons';


const OrdertrackingCompo = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [showItems, setShowItems] = useState<boolean>(true);
    const [orederedIems, setOrderedItems] = useState([]);

    const faqData = [
        {
            tittle: "Order ID: 3354654654526",
            contentType: "text",
            answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusantium veritatis sed a ut ducimus similique veniam eligendi dicta, placeat nisi aspernatur, quaerat dolore molestiae! Quidem atque labore ipsa neque.",
        },
        // {
        //     tittle: "12 items ready to shipment",
        //     contentType: "list", // ✅ this was missing!
        //     shipments: [
        //         {
        //             productimg: "", // Later you can replace with actual image
        //             productname: "Mango Juice",
        //             productMg: "500ml",
        //             productUnit: "2 units",
        //             orignalPrice: "₹100",
        //             offerprice: "₹80",
        //         },
        //         {
        //             productimg: "",
        //             productname: "Phone Cover",
        //             productMg: "-",
        //             productUnit: "1 unit",
        //             orignalPrice: "₹299",
        //             offerprice: "₹199",
        //         },
        //         {
        //             productimg: "",
        //             productname: "T-Shirt",
        //             productMg: "Size M",
        //             productUnit: "1 unit",
        //             orignalPrice: "₹599",
        //             offerprice: "₹449",
        //         },
        //     ],
        // },
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const toggleItems = () => {
        setShowItems(!showItems);
      };


    //dummy table items
    const dataSource = [
        {
          key: '1',
          productImage: appImages?.GRASS_IMAGE,
          productName: 'வல்லாரை கீரை',
          weight: '150g.',
          unit: '2 unit',
          price: 20,
          mrp: 25,
        },
        {
          key: '2',
          productImage: appImages?.GRASS_IMAGE,
          productName: 'வல்லாரை கீரை',
          weight: '150g.',
          unit: '2 unit',
          price: 20,
          mrp: 25,
        },
        {
            key: '3',
            productImage: appImages?.GRASS_IMAGE,
            productName: 'வல்லாரை கீரை',
            weight: '150g.',
            unit: '2 unit',
            price: 20,
            mrp: 25,
          },
          {
            key: '4',
            productImage: appImages?.GRASS_IMAGE,
            productName: 'வல்லாரை கீரை',
            weight: '150g.',
            unit: '2 unit',
            price: 20,
            mrp: 25,
          },
          {
            key: '5',
            productImage: appImages?.GRASS_IMAGE,
            productName: 'வல்லாரை கீரை',
            weight: '150g.',
            unit: '2 unit',
            price: 20,
            mrp: 25,
          },
       
      ];
      type ProductData = {
        key: string;
        productImage: string;
        productName: string;
        weight: string;
        unit: string;
        price: number;
        mrp: number;
      };
      
      const columns: ColumnsType<ProductData> = [
        {
          title: '',
          dataIndex: 'productName',
          key: 'productName',
          render: (_: any, record: any) => (
            <div className="flex items-start gap-3 sm:gap-4">
              <Image
                src={record?.productImage}
                alt="Product"
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-sm sm:text-base">{record?.productName}</span>
                <span className="text-xs text-gray-600">{record?.weight} {record?.unit}</span>
              </div>
            </div>
          ),
        },
        {
          title: '',
          dataIndex: 'price',
          key: 'price',
          align: 'right',
          render: (_: any, record: any) => (
            <div className="text-right leading-tight">
              <div className="text-sm sm:text-base font-semibold">₹{record.price}</div>
              <div className="text-xs text-gray-400 line-through">₹{record.mrp}</div>
            </div>
          ),
        },
      ];
    
    
        const { Step } = Steps;

      
        return (
            <div className="order-container">
                <div className=" h-15 font-medium text-xl">My Orders</div>

                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div
                            className={`faq-question ${openIndex === index ? "open" : ""}`}
                            onClick={() => toggleFaq(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && toggleFaq(index)}
                        >
                            <div className="">
                                
                            <span className="question-text">{item.tittle}</span><br />
                                        <span className="text-[#12B76A]">
                                            🧰 Will be Delivered in 5-7 Working Days
                                        </span>
                            </div>
                            {openIndex === index ? (
                                <DownOutlined style={{ fontSize: 15 }} />
                            ) : (
                                <RightOutlined style={{ fontSize: 15 }} />
                            )}
                        </div>

                        {openIndex === index && (
                            <div className="faq-answer">
                                {item.contentType === "text" && (
                                    <div className="p-10 flex flex-col gap-5">
                                        <div className="divider"></div>
                                            <Steps current={0} labelPlacement="vertical">
                                                <Step
                                                title="Order Confirmed"
                                                description="Wed, 11th Jan"
                                                icon={<CheckCircleFilled />}
                                                />
                                                <Step
                                                title="Shipped"
                                                description="Wed, 11th Jan"
                                                />
                                                <Step
                                                title="Out of Delivery"
                                                description="Wed, 11th Jan"
                                                />
                                                <Step
                                                title="Delivered"
                                                description="Mon, 16th Jan"
                                                />
                                            </Steps>
                                        {/* <div className="bg-[#12B76A] p-3 text-white rounded">
                                            📦 Order Tracking Box
                                        </div> */}
                                        <div className="font-medium text-xl flex justify-between items-center cursor-pointer" onClick={toggleItems}>
                                            <span>12 items ready to shipment </span>
                                            {showItems ? (
                                                <DownOutlined style={{ fontSize: 15 }} />
                                            ) : (
                                                <RightOutlined style={{ fontSize: 15 }} />
                                            )}
                                        </div>

                                        {showItems && (
                                        <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} /> 
                                        )}  
                                    </div>


                                )}

                            
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

export default OrdertrackingCompo;
