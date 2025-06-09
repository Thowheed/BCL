'use client';
import { addtocartListload, getCartLoad, updatecartListLoad } from '@/store/reducer/indexSlice';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import dynamic from 'next/dynamic';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "@/Globals/Localstorage";
import {updateCartItems} from "@/Globals/Localstorage";

// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

const CartTable = dynamic(() => import('./CartTable'));
const CartTotal = dynamic(() => import('./CartTotal'));
const NavbarComp = dynamic(() => import('./NabarComp'));
const FooterComp = dynamic(() => import('./FooterCompo'));

const CartComponent = () => {

    // const stripePromise = loadStripe("pk_test_51RU1gz4PZ1SAYE9m9zH48m4U8MlksNFmsLpfY3D48fOFaR5sWWZsDAWCbeITBPceq0e6BbZZFyZNJh4wxa0ZNZ4m00SXMNPIlq");

    const options: any = {
        mode: 'payment',
        amount: 30000, // in cents ($300)
        currency: 'usd',
        appearance: {
            theme: 'stripe',
        },
    };

    const { addtocartLoad, addtocartData } = useSelector((state: any) => state.bcl);
    console.log(addtocartLoad);
    console.log(addtocartData);


    const dispatch = useDispatch();

    const Cartapi = () => {

        let payload = {

            userId: getUser()?.id,
        }

        dispatch(getCartLoad(payload))

    }

    useEffect(() => {

        Cartapi()

    }, [])

    //update cart
    const updateCart = () => {

        let payload = {

            userId: updateCartItems()?.id,
            productId: "",
            isDeleted: "",
        }

        dispatch(updatecartListLoad(payload))
        
    }

    useEffect(() => {

        updateCart()

    }, [])
    
    const router = useRouter();
    return (
        <div>
            <NavbarComp />
            <div className='flex flex-col'>
                <div className=' pt-[5vh] mx-10  sm:pt-[16vh] sm:mx-30'>
                    <div className='flex flex-row items-center justify-between w-[80px] cursor-pointer' onClick={() => router.push('/home')}>
                        <ArrowLeftOutlined />
                        <span>My Cart</span>
                    </div>
                </div>
                <div className='flex sm:flex-row justify-center mt-10 flex-col'>
                    <CartTable />
                    <CartTotal />

                    {/* <Elements stripe={stripePromise} options={options}>
                        <CartTotal />
                    </Elements> */}

                </div>

                <div className=' mx-5 my-5 sm:my-2  sm:mx-40 '>
                    <Button className='flex flex-row items-center justify-between' onClick={() => router.push('/home')}>
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

