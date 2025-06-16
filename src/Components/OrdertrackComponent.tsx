'use client';

import { DownOutlined, RightOutlined } from "@ant-design/icons";
import "../styles/ordertracking.scss";
import "../styles/Faq.scss";
import { useState } from "react";

const OrdertrackingCompo = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                                    <div className="bg-[#12B76A] p-3 text-white rounded">
                                        📦 Order Tracking Box
                                    </div>
                                      <div className="  font-medium text-xl">12 items ready to shipment</div>
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
