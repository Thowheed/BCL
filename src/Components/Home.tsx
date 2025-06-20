'use client';

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect } from "react";
import homeBanner from "../../public/Images/home-banner.png";
import homeCargoBanner from "../../public/Images/home-cargo-banner.png";
import { useDispatch, useSelector } from "react-redux";
import { getallproductListLoad } from "@/store/reducer/indexSlice";
import { Carousel, Skeleton } from 'antd';
import "../styles/home.scss";

// Lazy loaded components
const NavbarComp = dynamic(() => import('./NabarComp'));
const ProductCarousel = dynamic(() => import('./ProductSlide'));
const FooterComp = dynamic(() => import('./FooterCompo'));
const TestimonialComp = dynamic(() => import('./TestimonialCarosel'));
const FaqCompo = dynamic(() => import('./FaqComponent'));

// Skeleton loader for carousel
const ProductSkeleton = () => (
  <div className="px-4">
    <Skeleton active title={{ width: 100 }} paragraph={{ rows: 2 }} />
    <div className="flex gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton.Input key={i} active style={{ width: 150, height: 150, borderRadius: 8 }} />
      ))}
    </div>
  </div>
);

export default function HomePage() {
  const dispatch = useDispatch();
  const { getallProductLoad, getallProductData } = useSelector((state: any) => state.bcl);

  const getAllproductapi = () => {
    dispatch(getallproductListLoad());
  };

  useEffect(() => {
    getAllproductapi(); // fetch products on mount
  }, []);

  // Reusable loader or carousel renderer
  const RenderCarousel = () =>
    getallProductLoad ? <ProductSkeleton /> : <ProductCarousel getallProductData={getallProductData} />;

  return (
    <div className="home-wrapper">
      <NavbarComp />
      <div className="home-content">
        {/* Banner Section */} 
        <div className="banner-section">
          <div className="forBanner">
            <Carousel autoplay dots>
              <div><Image src={homeBanner} alt="Banner 1" className="img-1 carousel-image" /></div>
              <div><Image src={homeBanner} alt="Banner 2" className="carousel-image" /></div>
              <div><Image src={homeBanner} alt="Banner 3" className="carousel-image"/></div>
            </Carousel>
          </div>
          <div className="forCargoBanner"><Image src={homeCargoBanner} alt="Cargo" /></div>
        </div>

        {/* Vegetables */}
        <div className="text-bold py-10 flex justify-between !text-lg">
          <span className="section-title">Vegetables</span>
          <span className="view-all">View All</span>
        </div>
        <RenderCarousel />
        <RenderCarousel />

        {/* Fruits */}
        <div className="text-bold py-10 flex justify-between !text-lg">
          <span className="section-title">Fruits</span>
          <span className="view-all">View All</span>
        </div>
        <RenderCarousel />

        {/* Masala */}
        <div className="text-bold py-10 flex justify-between !text-lg">
          <span className="section-title">Masala</span>
          <span className="view-all">View All</span>
        </div>
        <RenderCarousel />
        <RenderCarousel />
      </div>

      {/* Footer Components */}
      <TestimonialComp />
      <FaqCompo />
      <FooterComp />
    </div>
  );
}
