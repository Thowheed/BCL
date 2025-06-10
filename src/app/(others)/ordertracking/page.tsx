'use client'
import dynamic from 'next/dynamic';

const OrdertrackingCompo = dynamic(() => import('../../../Components/OrdertrackComponent'));
const NavbarComp = dynamic(() => import('../../../Components/NabarComp'));

const OrderTracking = () => {
  return (
    <div style={{ margin: 0 }}>
      <NavbarComp />
      <OrdertrackingCompo/>
    </div>
  );
};

export default OrderTracking;
