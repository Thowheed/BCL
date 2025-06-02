'use client';

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect } from "react";
import homeBanner from "../../public/Images/home-banner.png";
import homeCargoBanner from "../../public/Images/home-cargo-banner.png";
// import succulentImg from "../../public/Images/succulent.jpg";
// import greenboardImg from "../../public/Images/greenboard.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getallproductListLoad, getUserListLoad } from "@/store/reducer/indexSlice";
import { get } from "http";
import { getUser } from "@/Globals/Localstorage";
import "../styles/home.scss";
import { Carousel } from 'antd';

// import CardComponent from "./CardComponent";
// import NavbarComp from "./NabarComp";
// import ProductCarousel from "./ProductSlide";

const NavbarComp = dynamic(() => import('./NabarComp'));
const ProductCarousel = dynamic(() => import('./ProductSlide'));
const FooterComp = dynamic(() => import('./FooterCompo'));
const TestimonialComp = dynamic(() => import('./TestimonialCarosel'));
const FaqCompo = dynamic(() => import('./FaqComponent'))

export default function HomePage() {

    // const { userListLoad, userListData } = useSelector((state: any) => state.bcl);
    // console.log("userListLoad", userListLoad, "userListData", userListData);

    const dispatch = useDispatch();

    const { getallProductLoad, getallProductData } = useSelector((state: any) => state.bcl);
    console.log("getallProductData==>", getallProductData);


    const getAllproductapi = () => {

        dispatch(getallproductListLoad(""))
    }

    useEffect(() => {
        // getAllproductapi()

    }, [])



    return (
        <div className="home-wrapper">
            <NavbarComp />
            <div className="home-content">
                <div className="banner-section ">
                   <div className="forBanner">
                    <Carousel autoplay dots>
                    <div>
                        <Image src={homeBanner} alt="Banner 1" />
                    </div>
                    {/* <div>
                        <Image src={homeBanner} alt="Banner 1" />
                    </div>
                    <div>
                        <Image src={homeBanner} alt="Banner 1" />
                    </div> */}
                    {/* <div>
                        <Image src={succulentImg} alt="Banner 2" />
                    </div>
                    <div>
                        <Image src={greenboardImg} alt="Banner 3" />
                    </div>  */}
                    </Carousel>
                   </div>
                
                    <div className="forCargoBanner"><Image src={homeCargoBanner} alt="" /></div>
                </div>
                <div className=' text-bold py-10 flex justify-between !text-lg' >
                    <span className="section-title">Vegetables</span>
                    <span className="view-all ">View All</span>
                </div>
                <ProductCarousel getallProductData={getallProductData} />
                <ProductCarousel getallProductData={getallProductData} />

                <div className='text-bold py-10 flex justify-between !text-lg'>
                    <span className="section-title">Fruits</span>
                    <span className="view-all ">View All</span>
                </div>
                <ProductCarousel getallProductData={getallProductData} />

                <div className='text-bold py-10 flex justify-between !text-lg'>
                    <span className="section-title">Masala</span>
                    <span className="view-all ">View All</span>
                </div>
                <ProductCarousel getallProductData={getallProductData} />
                <ProductCarousel getallProductData={getallProductData} />
            </div>
            <TestimonialComp />

            <FaqCompo />
            <FooterComp />
        </div>
    );
};

// export default HomePage;


