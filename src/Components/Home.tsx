'use client';
import dynamic from "next/dynamic";
import React from "react";
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
            <div className="m-10">
                <div className='text-bold'>
                    Vegetables
                </div>
                <ProductCarousel />
                <ProductCarousel />

                <div className='text-bold'>
                    Fruits
                </div>
                <ProductCarousel />

                <div className='text-bold'>Masala</div>
                <ProductCarousel />
                <ProductCarousel />
            </div>
            <FooterComp />
        </div>
    );
};

// export default HomePage;