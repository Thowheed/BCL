'use client';
import dynamic from "next/dynamic";
import React from "react";
import homeBanner from "../../public/Images/home-banner.png"
import homeCargoBanner from "../../public/Images/home-cargo-banner.png"
import Image from "next/image"
// import CardComponent from "./CardComponent";
// import NavbarComp from "./NabarComp";
// import ProductCarousel from "./ProductSlide";

const NavbarComp = dynamic(() => import('./NabarComp'));
const ProductCarousel = dynamic(() => import('./ProductSlide'));
const FooterComp = dynamic(() => import('./FooterCompo'));

export default function HomePage() {
    return (
        <div >
            <NavbarComp />
            <div className=" mx-auto w-[90%] pt-[16vh]">
                <div className="  flex justify-between mb-4 ">
                    <Image src={homeBanner} alt="" />
                    <Image src={homeCargoBanner} alt="" />
                </div>
                <div className=' text-bold py-10 flex justify-between !text-lg' >
                    <span>Vegetables</span> 
                    <span className="text-[#2EAF4B]">View All</span> 
                </div>
                <ProductCarousel />
                <ProductCarousel />

                <div className='text-bold py-10 flex justify-between !text-lg'>
                    <span>Fruits</span> 
                    <span className="text-[#2EAF4B]">View All</span> 
                </div>
                <ProductCarousel />

                <div className='text-bold py-10 flex justify-between !text-lg'>
                    <span>Masala</span> 
                    <span className="text-[#2EAF4B]">View All</span> 
                </div>
                <ProductCarousel />
                <ProductCarousel />
            </div>
            <FooterComp />
        </div>
    );
};

// export default HomePage;