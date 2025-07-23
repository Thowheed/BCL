'use client';
interface SessionType {
  customer_details?: {
    name?: string;
    email?: string;
  };
}

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; 
import '../styles/Success.scss';

export default function Success() {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");

  const [session, setSession] = useState<SessionType | null>(null);

  useEffect(() => {
    // if (!session_id) return;

    fetch(`https://api.purfull.com/payment/get-session?session_id=${session_id}`)
      .then(res => res.json())
      .then(data => setSession(data));
  }, [session_id]);

  useEffect(() => {
    console.log("session", session);
  }, [session]);

  if (!session) return <p>Loading...</p>;

  return (
    <div>
      <p><strong>Name:</strong> {session?.customer_details?.name}</p>
      <p><strong>Email:</strong> {session?.customer_details?.email}</p>
      <p><strong>Billing Address:</strong></p>
    </div>
  );
}


// {
//     "id": "cs_test_b1FtqwENIlYOwfkCAmuWLkdDpn5fBbfa3MmNphK6Ex915gPUt3ej70two5",
//     "object": "checkout.session",
//     "adaptive_pricing": {
//         "enabled": true
//     },
//     "after_expiration": null,
//     "allow_promotion_codes": null,
//     "amount_subtotal": 6010000,
//     "amount_total": 6010000,
//     "automatic_tax": {
//         "enabled": false,
//         "liability": null,
//         "provider": null,
//         "status": null
//     },
//     "billing_address_collection": null,
//     "cancel_url": "https://yourdomain.com/cancel",
//     "client_reference_id": null,
//     "client_secret": null,
//     "collected_information": null,
//     "consent": null,
//     "consent_collection": null,
//     "created": 1753283188,
//     "currency": "usd",
//     "currency_conversion": null,
//     "custom_fields": [],
//     "custom_text": {
//         "after_submit": null,
//         "shipping_address": null,
//         "submit": null,
//         "terms_of_service_acceptance": null
//     },
//     "customer": null,
//     "customer_creation": "if_required",
//     "customer_details": {
//         "address": {
//             "city": null,
//             "country": "IN",
//             "line1": null,
//             "line2": null,
//             "postal_code": null,
//             "state": null
//         },
//         "email": "sanjaysaravanakumar31@gmail.com",
//         "name": "sanjay",
//         "phone": null,
//         "tax_exempt": "none",
//         "tax_ids": []
//     },
//     "customer_email": null,
//     "discounts": [],
//     "expires_at": 1753369588,
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
//                 "id": "li_1Ro4FUHFYikR0iYEeJpVPdZA",
//                 "object": "item",
//                 "amount_discount": 0,
//                 "amount_subtotal": 6000000,
//                 "amount_tax": 0,
//                 "amount_total": 6000000,
//                 "currency": "usd",
//                 "description": "Apple",
//                 "price": {
//                     "id": "price_1Ro4FUHFYikR0iYEi16yHQbn",
//                     "object": "price",
//                     "active": false,
//                     "billing_scheme": "per_unit",
//                     "created": 1753283188,
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
//                 "id": "li_1Ro4FUHFYikR0iYEBPSRccFN",
//                 "object": "item",
//                 "amount_discount": 0,
//                 "amount_subtotal": 10000,
//                 "amount_tax": 0,
//                 "amount_total": 10000,
//                 "currency": "usd",
//                 "description": "orange",
//                 "price": {
//                     "id": "price_1Ro4FUHFYikR0iYEMyyKER3o",
//                     "object": "price",
//                     "active": false,
//                     "billing_scheme": "per_unit",
//                     "created": 1753283188,
//                     "currency": "usd",
//                     "custom_unit_amount": null,
//                     "livemode": false,
//                     "lookup_key": null,
//                     "metadata": {},
//                     "nickname": null,
//                     "product": "prod_SjWdDygDl8ADGE",
//                     "recurring": null,
//                     "tax_behavior": "unspecified",
//                     "tiers_mode": null,
//                     "transform_quantity": null,
//                     "type": "one_time",
//                     "unit_amount": 10000,
//                     "unit_amount_decimal": "10000"
//                 },
//                 "quantity": 1
//             }
//         ],
//         "has_more": false,
//         "url": "/v1/checkout/sessions/cs_test_b1FtqwENIlYOwfkCAmuWLkdDpn5fBbfa3MmNphK6Ex915gPUt3ej70two5/line_items"
//     },
//     "livemode": false,
//     "locale": null,
//     "metadata": {},
//     "mode": "payment",
//     "origin_context": null,
//     "payment_intent": "pi_3Ro4FrHFYikR0iYE0JDOjS9o",
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
//     "saved_payment_method_options": null,
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