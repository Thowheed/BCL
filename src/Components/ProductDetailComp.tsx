'use client'
import appImages from "@/Globals/AppImages";
import { Button } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image"

const NavbarComp = dynamic(() => import('./NabarComp'));
const FooterComp = dynamic(() => import('./FooterCompo'));
const ProductSlide = dynamic(() => import('./ProductSlide'));

const ProductDetail = () => {
    let list = new Array(5).fill(0);
    return (
        <div style={{ margin: "5% 0% 1% 5%" }}>
            <div className="product-detail-container">
                <div className="product-image">
                    <Image src={appImages?.GRASS_IMAGE} alt="Product" width={700} height={700} />
                </div>
                <div className="product-detail-content">
                    <div className="product-title-conatainer">
                        <div className="product-breadcrumbs">
                            Home/Fresh Vegetables/Vallarai Keerai
                        </div>
                        <div className="product-title">Vallarai Keerai</div>
                        <div className="product-weight">100 - 150g</div>

                        <div className="border-line"></div>
                        <div className="card-price-container">
                            <div className="card-price">
                                $ 2.00
                            </div>
                            <Button className="card-button" >Add</Button>
                        </div>
                    </div>

                    <div className="product-description-container">
                        <div className="product-details">
                            <div className="product-detail-title">Product Details</div>
                        </div>
                        <div className="product-description">
                            Packed with nutritions - rich in iron, vitamin A and C, and antioxidants for a
                            healthy diet.<br />
                            Farm fresh quality - Harvest at peak freshness to retain taste and nutritions.
                            <br />
                            Versatile and Delicious - Perfect for salads, smoothies, soups and stir-fries.
                            <br />
                            Naturally grown - Sourced and from trusted farms with no harmful additives.
                            <br />
                            Boosts Health - Supports immunity, heart health, and overall wellness.
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex items-center flex-row mt-5 gap-6">
                {list.map((item: any, index: any) => {
                    return (
                        <div className="image-list-container" key={index}>
                            <Image src={appImages?.GRASS_IMAGE} alt="Product" width={123} height={150} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
const ProductDetailComp = () => {

    return (
        <div>
            <NavbarComp />

            <ProductDetail />
            <div className="text-bold mx-15">
                More Items
            </div>
            <div className="m-12">
                <ProductSlide />
            </div>
            <FooterComp />
        </div>
    )
};

export default ProductDetailComp;