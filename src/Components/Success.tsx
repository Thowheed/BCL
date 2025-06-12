'use client';

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // ✅ Correct hook for App Router
import '../styles/Success.scss';

export default function Success() {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");

  const [session, setSession] = useState(null);

  useEffect(() => {
    // if (!session_id) return;

    fetch(`https://api.purfull.com/payment/get-session?session_id=cs_test_b1ZXWM1QV4fxdW2Xs8TVkSGvinHNWyrPEtgjHBtr6ijCdySYgdKSXxXCGx`)
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
