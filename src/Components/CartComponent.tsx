'use client';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import dynamic from 'next/dynamic';
import { useRouter } from "next/navigation";

const CartTable = dynamic(() => import('./CartTable'));
const CartTotal = dynamic(() => import('./CartTotal'));
const NavbarComp = dynamic(() => import('./NabarComp'));
const FooterComp = dynamic(() => import('./FooterCompo'));
const CartComponent = () => {
    const router = useRouter();
    return (
        <div>
            <NavbarComp />
            <div className='flex flex-col'>
                <div className='pt-[16vh] mx-30'>
                    <div className='flex flex-row items-center justify-between w-[80px] cursor-pointer' onClick={() => router.push('/home')}>
                        <ArrowLeftOutlined />
                        <span>My Cart</span>
                    </div>
                </div>
                <div className='flex flex-row justify-center mt-10'>
                    <CartTable />
                    <CartTotal />

                </div>

                <div className=' mx-30'>
                    <Button className='flex flex-row items-center justify-between ' onClick={() => router.push('/home')}>
                        <ArrowLeftOutlined />
                        <div>Continue Shopping</div>
                    </Button>
                </div>
            </div>
            <FooterComp />
        </div>
    )
};

export default CartComponent;