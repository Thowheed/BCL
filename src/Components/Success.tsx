"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "../styles/Success.scss";
import axios from "axios";

interface AddressType {
  city?: string | null;
  country?: string | null;
  line1?: string | null;
  line2?: string | null;
  postal_code?: string | null;
  state?: string | null;
}

interface LineItem {
  description: string;
  quantity: number;
  amount_total: number;
  currency: string;
}

interface SessionType {
  customer_details?: {
    name?: string;
    email?: string;
    address?: AddressType;
    phone?: string;
  };
  amount_total?: number;
  currency?: string;
  payment_status?: string;
  line_items?: {
    data: LineItem[];
  };
}

export default function Success() {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");

  const [session, setSession] = useState<SessionType | null>(null);
  const [orderCreated, setOrderCreated] = useState(false);
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    if (!session_id) return;

    const fetchSessionAndCreateOrder = async () => {
      try {
        const res = await fetch(`https://api.purfull.com/payment/get-session?session_id=${session_id}`);
        const data = await res.json();
        setSession(data);

        // Create order once session is received
        if (!orderCreated) {
          await createOrder(data);
          setOrderCreated(true); // Avoid duplicate orders
        }
      } catch (error) {
        console.error("Error fetching session or creating order:", error);
      }
    };

    fetchSessionAndCreateOrder();
  }, []);

  const createOrder = async (data: SessionType) => {
    try {
      const payload = {
        customer_id: user?.id , // Replace if available
        payment_id: data?.id,
        customer_detials: {
          name: data.customer_details?.name || "",
          email: data.customer_details?.email || "",
          phone: data.customer_details?.phone || "",
          address: data.customer_details?.address || {},
        },
        order_detials: data.line_items?.data.map((item) => ({
          name: item.description,
          quantity: item.quantity,
          price: item.amount_total / 100,
          currency: item.currency,
        })) || [],
        asign_to: null,
        totalValue: data?.amount_total! / 100,
        type: "Online",
        remarks: "Created from success page",
        status: "Pending",
      };

      await axios.post("https://api.purfull.com/order/create-order", payload);
      console.log("Order created successfully.");
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };

  if (!session) return <div className="success-loader">Loading...</div>;

  return (
    <div className="success-wrapper">
      <div className="success-card">
        <img src="/success.png" alt="Success" className="success-icon" />
        <h1 className="success-title">Payment Successful</h1>
        <p className="success-message">
          Thank you, <strong>{session.customer_details?.name || "Customer"}</strong>!
        </p>
        <p className="success-subtext">
          A receipt has been sent to <strong>{session.customer_details?.email}</strong>
        </p>

        <div className="success-summary">
          <p>
            <strong>Total Paid:</strong> ${(session.amount_total! / 100).toFixed(2)}
          </p>
          <p>
            <strong>Status:</strong> {session.payment_status}
          </p>
          <p>
            <strong>Address:</strong> {session.customer_details?.address?.line1},{" "}
            {session.customer_details?.address?.postal_code},{" "}
            {session.customer_details?.address?.country}
          </p>
        </div>

        <div className="success-items">
          <h3>Order Summary</h3>
          {session.line_items?.data.map((item, index) => (
            <div key={index} className="item-row">
              <div className="item-info">
                <p className="item-name">{item.description}</p>
                <p className="item-qty">Qty: {item.quantity}</p>
              </div>
              <p className="item-price">
                ${(item.amount_total / 100).toFixed(2)}{" "}
                {item.currency.toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        <a href="/" className="back-home-button">← Back to Home</a>
      </div>
    </div>
  );
}


// {
//     "id": "cs_test_b1broQk0cDVSA6iGG3a23X415qoRAlOu4iVyAZyC3U18KzpJ7FbLP0fcYW",
//     "object": "checkout.session",
//     "adaptive_pricing": {
//         "enabled": true
//     },
//     "after_expiration": null,
//     "allow_promotion_codes": null,
//     "amount_subtotal": 6001400,
//     "amount_total": 6001400,
//     "automatic_tax": {
//         "enabled": false,
//         "liability": null,
//         "provider": null,
//         "status": null
//     },
//     "billing_address_collection": null,
//     "cancel_url": "http://localhost:3000/cancel",
//     "client_reference_id": null,
//     "client_secret": null,
//     "collected_information": {
//         "shipping_details": null
//     },
//     "consent": null,
//     "consent_collection": null,
//     "created": 1753526289,
//     "currency": "usd",
//     "currency_conversion": null,
//     "custom_fields": [],
//     "custom_text": {
//         "after_submit": null,
//         "shipping_address": null,
//         "submit": null,
//         "terms_of_service_acceptance": null
//     },
//     "customer": "cus_SkafYqlWHqyU4f",
//     "customer_creation": null,
//     "customer_details": {
//         "address": {
//             "city": null,
//             "country": "India",
//             "line1": "54 test asdnflkan sdhfhsdaio iosdafoiajdoifh",
//             "line2": null,
//             "postal_code": "629002",
//             "state": null
//         },
//         "email": "sanjay@gmail.com",
//         "name": "sanjay",
//         "phone": null,
//         "tax_exempt": "none",
//         "tax_ids": []
//     },
//     "customer_email": null,
//     "discounts": [],
//     "expires_at": 1753612689,
//     "invoice": null,
//     "invoice_creation": {
//         "enabled": false,
//         "invoice_data": {
//             "account_tax_ids": null,
//             "custom_fields": null,
//             "description": null,
//             "footer": null,
//             "issuer": null,
//             "metadata": {},
//             "rendering_options": null
//         }
//     },
//     "line_items": {
//         "object": "list",
//         "data": [
//             {
//                 "id": "li_1Rp5UTHFYikR0iYEkS225wMc",
//                 "object": "item",
//                 "amount_discount": 0,
//                 "amount_subtotal": 6000000,
//                 "amount_tax": 0,
//                 "amount_total": 6000000,
//                 "currency": "usd",
//                 "description": "Apple",
//                 "price": {
//                     "id": "price_1Rp5UTHFYikR0iYEGeDjoQvJ",
//                     "object": "price",
//                     "active": false,
//                     "billing_scheme": "per_unit",
//                     "created": 1753526289,
//                     "currency": "usd",
//                     "custom_unit_amount": null,
//                     "livemode": false,
//                     "lookup_key": null,
//                     "metadata": {},
//                     "nickname": null,
//                     "product": "prod_SjWdO0vIgak3ea",
//                     "recurring": null,
//                     "tax_behavior": "unspecified",
//                     "tiers_mode": null,
//                     "transform_quantity": null,
//                     "type": "one_time",
//                     "unit_amount": 30000,
//                     "unit_amount_decimal": "30000"
//                 },
//                 "quantity": 200
//             },
//             {
//                 "id": "li_1Rp5UTHFYikR0iYEug6IfDGY",
//                 "object": "item",
//                 "amount_discount": 0,
//                 "amount_subtotal": 1400,
//                 "amount_tax": 0,
//                 "amount_total": 1400,
//                 "currency": "usd",
//                 "description": "Unknown Product",
//                 "price": {
//                     "id": "price_1Rp5UTHFYikR0iYEZ0Q46PwT",
//                     "object": "price",
//                     "active": false,
//                     "billing_scheme": "per_unit",
//                     "created": 1753526289,
//                     "currency": "usd",
//                     "custom_unit_amount": null,
//                     "livemode": false,
//                     "lookup_key": null,
//                     "metadata": {},
//                     "nickname": null,
//                     "product": "prod_SjWA5vqWabWi2M",
//                     "recurring": null,
//                     "tax_behavior": "unspecified",
//                     "tiers_mode": null,
//                     "transform_quantity": null,
//                     "type": "one_time",
//                     "unit_amount": 1400,
//                     "unit_amount_decimal": "1400"
//                 },
//                 "quantity": 1
//             }
//         ],
//         "has_more": false,
//         "url": "/v1/checkout/sessions/cs_test_b1broQk0cDVSA6iGG3a23X415qoRAlOu4iVyAZyC3U18KzpJ7FbLP0fcYW/line_items"
//     },
//     "livemode": false,
//     "locale": null,
//     "metadata": {},
//     "mode": "payment",
//     "origin_context": null,
//     "payment_intent": "pi_3Rp5UyHFYikR0iYE1HCUFtTk",
//     "payment_link": null,
//     "payment_method_collection": "if_required",
//     "payment_method_configuration_details": null,
//     "payment_method_options": {
//         "card": {
//             "request_three_d_secure": "automatic"
//         }
//     },
//     "payment_method_types": [
//         "card"
//     ],
//     "payment_status": "paid",
//     "permissions": null,
//     "phone_number_collection": {
//         "enabled": false
//     },
//     "recovered_from": null,
//     "saved_payment_method_options": {
//         "allow_redisplay_filters": [
//             "always"
//         ],
//         "payment_method_remove": "disabled",
//         "payment_method_save": null
//     },
//     "setup_intent": null,
//     "shipping_address_collection": null,
//     "shipping_cost": null,
//     "shipping_options": [],
//     "status": "complete",
//     "submit_type": null,
//     "subscription": null,
//     "success_url": "http://localhost:3000/success-page?session_id={CHECKOUT_SESSION_ID}",
//     "total_details": {
//         "amount_discount": 0,
//         "amount_shipping": 0,
//         "amount_tax": 0
//     },
//     "ui_mode": "hosted",
//     "url": null,
//     "wallet_options": null
// }
