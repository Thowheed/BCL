// "use client";

// import {
//   DownOutlined,
//   RightOutlined,
//   CheckCircleFilled,
// } from "@ant-design/icons";
// import "../styles/ordertracking.scss";
// import "../styles/Faq.scss";
// import { useEffect, useState } from "react";
// import { Table, Steps } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import Image from "next/image";

// const OrdertrackingCompo = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [showItems, setShowItems] = useState<boolean>(true);
//   const [data, setData] = useState<any[]>([]);
//   const storedUser =
//     typeof window !== "undefined" ? localStorage.getItem("user") : null;
//   const user = storedUser ? JSON.parse(storedUser) : null;

//   const toggleFaq = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const toggleItems = () => {
//     setShowItems(!showItems);
//   };

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await fetch(
//           `https://api.purfull.com/order/get-all-orders?customerId=${user?.id}`
//         );
//         const resData = await res.json();
//         setData(resData?.data || []);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     if (user?.id) {
//       fetchOrders();
//     }
//   }, [user?.id]);

//   type ProductData = {
//     key: string;
//     productImage: string;
//     productName: string;
//     weight: string;
//     unit: string;
//     price: number;
//     mrp: number;
//   };

//   const columns: ColumnsType<ProductData> = [
//     {
//       title: "",
//       dataIndex: "productName",
//       key: "productName",
//       render: (_: any, record: any) => (
//         <div className="flex items-start gap-3 sm:gap-4">
//           {/* <Image
//             src={record?.productImage || "/placeholder.png"} // Fallback if no image
//             alt="Product"
//             width={50}
//             height={50}
//             className="rounded-md"
//           /> */}
//           <div className="flex flex-col leading-tight">
//             <span className="font-semibold text-sm sm:text-base">
//               {record?.productName}
//             </span>
//             <span className="text-xs text-gray-600">
//               {record?.weight} {record?.unit}
//             </span>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "",
//       dataIndex: "price",
//       key: "price",
//       align: "right",
//       render: (_: any, record: any) => (
//         <div className="text-right leading-tight">
//           <div className="text-sm sm:text-base font-semibold">
//             ₹{record.price}
//           </div>
//           {/* <div className="text-xs text-gray-400 line-through">
//             ₹{record.mrp}
//           </div> */}
//         </div>
//       ),
//     },
//   ];

//   const { Step } = Steps;
//  const getCurrentStep = (type: string) => {
//   switch (type) {
//     case "order-recived":
//       return 0;
//     case "shipped":
//       return 1;
//     case "out-for-delivery":
//       return 2;
//     case "delivered":
//       return 3;
//     default:
//       return 0;
//   }
// };


//   return (
//     <div className="order-container">
//       <div className="h-15 font-medium text-xl">My Orders</div>

//       {data.map((order, index) => (
//         <div key={index} className="faq-item">
//           <div
//             className={`faq-question ${openIndex === index ? "open" : ""}`}
//             onClick={() => toggleFaq(index)}
//             role="button"
//             tabIndex={0}
//             onKeyDown={(e) => e.key === "Enter" && toggleFaq(index)}
//           >
//             <div>
//               <span className="question-text">Order ID: {order?.id}</span>
//               <br />
//               <span className="text-[#12B76A]">
//                 🧰 Will be Delivered in 5–7 Working Days
//               </span>
//             </div>
//             {openIndex === index ? (
//               <DownOutlined style={{ fontSize: 15 }} />
//             ) : (
//               <RightOutlined style={{ fontSize: 15 }} />
//             )}
//           </div>

//           {openIndex === index && (
//             <div className="faq-answer">
//               <div className="p-10 flex flex-col gap-5">
//                 <div className="divider"></div>
//                 <Steps current={getCurrentStep(order?.type)} labelPlacement="vertical">
//   <Step
//     title="Order Confirmed"
//     description={getCurrentStep(order?.type) >= 0 ? "Completed" : "Pending"}
//     icon={getCurrentStep(order?.type) >= 0 ? <CheckCircleFilled /> : undefined}
//   />
//   <Step
//     title="Shipped"
//     description={getCurrentStep(order?.type) >= 1 ? "Completed" : "Pending"}
//     icon={getCurrentStep(order?.type) >= 1 ? <CheckCircleFilled /> : undefined}
//   />
//   <Step
//     title="Out for Delivery"
//     description={getCurrentStep(order?.type) >= 2 ? "Completed" : "Pending"}
//     icon={getCurrentStep(order?.type) >= 2 ? <CheckCircleFilled /> : undefined}
//   />
//   <Step
//     title="Delivered"
//     description={getCurrentStep(order?.type) === 3 ? "Completed" : "Pending"}
//     icon={getCurrentStep(order?.type) === 3 ? <CheckCircleFilled /> : undefined}
//   />
// </Steps>


//                 <div
//                   className="font-medium text-xl flex justify-between items-center cursor-pointer"
//                   onClick={toggleItems}
//                 >
//                   <span>
//                     {order?.order_detials?.length || 0} items ready to shipment
//                   </span>
//                   {showItems ? (
//                     <DownOutlined style={{ fontSize: 15 }} />
//                   ) : (
//                     <RightOutlined style={{ fontSize: 15 }} />
//                   )}
//                 </div>

//                 {showItems && (
//                   <Table
//                     dataSource={
//                       order?.order_detials?.map((item: any, idx: number) => ({
//                         key: idx.toString(),
//                         // productImage: item.image || "/placeholder.png",
//                         productName: item.name || "Unnamed product",
//                         // weight: item.weight || "",
//                         unit: `${item.quantity} - kg` || "",
//                         price: item.price || 0,
//                         // mrp: item.mrp || 0,
//                       })) || []
//                     }
//                     columns={columns}
//                     pagination={false}
//                     showHeader={false}
//                   />
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OrdertrackingCompo;
"use client";

import {
  DownOutlined,
  RightOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import "../styles/ordertracking.scss";
import "../styles/Faq.scss";
import { useEffect, useState } from "react";
import { Table, Steps } from "antd";
import type { ColumnsType } from "antd/es/table";

type OrderType = "order-recived" | "shipped" | "out-for-delivery" | "delivered";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  type: OrderType;
  order_detials: OrderItem[];
}

type ProductData = {
  key: string;
  productName: string;
  unit: string;
  price: number;
};

const OrdertrackingCompo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showItems, setShowItems] = useState<boolean>(true);
  const [data, setData] = useState<Order[]>([]);

  const storedUser =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const user = storedUser ? JSON.parse(storedUser) : null;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(
          `https://api.purfull.com/order/get-all-orders?customerId=${user?.id}`
        );
        const resData = await res.json();
        setData(resData?.data || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (user?.id) {
      fetchOrders();
    }
  }, [user?.id]);

  const columns: ColumnsType<ProductData> = [
    {
      title: "",
      dataIndex: "productName",
      key: "productName",
      render: (_: unknown, record: ProductData) => (
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm sm:text-base">
              {record.productName}
            </span>
            <span className="text-xs text-gray-600">{record.unit}</span>
          </div>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "price",
      key: "price",
      align: "right",
      render: (_: unknown, record: ProductData) => (
        <div className="text-right leading-tight">
          <div className="text-sm sm:text-base font-semibold">
            ₹{record.price}
          </div>
        </div>
      ),
    },
  ];

  const { Step } = Steps;

  const getCurrentStep = (type: OrderType) => {
    switch (type) {
      case "order-recived":
        return 0;
      case "shipped":
        return 1;
      case "out-for-delivery":
        return 2;
      case "delivered":
        return 3;
      default:
        return 0;
    }
  };

  return (
    <div className="order-container">
      <div className="h-15 font-medium text-xl">My Orders</div>

      {data.map((order: Order, index: number) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFaq(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleFaq(index)}
          >
            <div>
              <span className="question-text">Order ID: {order.id}</span>
              <br />
              <span className="text-[#12B76A]">
                🧰 Will be Delivered in 5–7 Working Days
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
              <div className="p-10 flex flex-col gap-5">
                <div className="divider"></div>
                <Steps
                  current={getCurrentStep(order.type)}
                  labelPlacement="vertical"
                >
                  <Step
                    title="Order Confirmed"
                    description={
                      getCurrentStep(order.type) >= 0 ? "Completed" : "Pending"
                    }
                    icon={
                      getCurrentStep(order.type) >= 0 ? (
                        <CheckCircleFilled />
                      ) : undefined
                    }
                  />
                  <Step
                    title="Shipped"
                    description={
                      getCurrentStep(order.type) >= 1 ? "Completed" : "Pending"
                    }
                    icon={
                      getCurrentStep(order.type) >= 1 ? (
                        <CheckCircleFilled />
                      ) : undefined
                    }
                  />
                  <Step
                    title="Out for Delivery"
                    description={
                      getCurrentStep(order.type) >= 2 ? "Completed" : "Pending"
                    }
                    icon={
                      getCurrentStep(order.type) >= 2 ? (
                        <CheckCircleFilled />
                      ) : undefined
                    }
                  />
                  <Step
                    title="Delivered"
                    description={
                      getCurrentStep(order.type) === 3
                        ? "Completed"
                        : "Pending"
                    }
                    icon={
                      getCurrentStep(order.type) === 3 ? (
                        <CheckCircleFilled />
                      ) : undefined
                    }
                  />
                </Steps>

                <div
                  className="font-medium text-xl flex justify-between items-center cursor-pointer"
                  onClick={toggleItems}
                >
                  <span>
                    {order?.order_detials?.length || 0} items ready to shipment
                  </span>
                  {showItems ? (
                    <DownOutlined style={{ fontSize: 15 }} />
                  ) : (
                    <RightOutlined style={{ fontSize: 15 }} />
                  )}
                </div>

                {showItems && (
                  <Table
                    dataSource={
                      order?.order_detials?.map(
                        (item: OrderItem, idx: number) => ({
                          key: idx.toString(),
                          productName: item.name || "Unnamed product",
                          unit: `${item.quantity} - kg` || "",
                          price: item.price || 0,
                        })
                      ) || []
                    }
                    columns={columns}
                    pagination={false}
                    showHeader={false}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrdertrackingCompo;
