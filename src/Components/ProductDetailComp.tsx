'use client'
import appImages from "@/Globals/AppImages";
import { getproductusingidListLoad } from "@/store/reducer/indexSlice";
import { Button } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const NavbarComp = dynamic(() => import('./NabarComp'));
const FooterComp = dynamic(() => import('./FooterCompo'));
const ProductSlide = dynamic(() => import('./ProductSlide'));

const ProductDetail = () => {

  
    // / getproduct using id 
    
    const { getproductusingidLoad, getproductusingidData } = useSelector((state: any) => state.bcl);
    console.log(getproductusingidLoad);
    console.log(getproductusingidData);

    const dispatch = useDispatch();


    const getproductusingidapi = ()=> {

        let payload = {

            id:"1"
        }

        dispatch(getproductusingidListLoad(payload))

    }

    useEffect(()=>{
        getproductusingidapi()
    } ,[])




    let list = new Array(5).fill(0);
    return (
        <div style={{ margin: "16vh auto 0" }}>
            <div className="product-detail-container">
                <div className="product-image">
                    <Image src={appImages?.GRASS_IMAGE} alt="Product" width={600} height={200} />
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
            <div className="flex items-center flex-row mt-5 gap-6 ml-[6.5%] ">
                {list.map((item: any, index: any) => {
                    return (
                        <div className="image-list-container" key={index}>
                            <Image src={appImages?.GRASS_IMAGE} alt="Product" width={103} height={150} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
const ProductDetailComp = () => {

    return (
        <div className="">
            <NavbarComp />

            <ProductDetail />
            <div className=' text-bold py-10 flex justify-between !text-lg mx-18 mt-10' >
                <span>More Items</span>
                <span className="text-[#2EAF4B]">View All</span>
            </div>
            <div className="mx-12 pb-[8vh] ">
                <ProductSlide />
            </div>
            <FooterComp />
        </div>
    )
};

export default ProductDetailComp;