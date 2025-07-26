"use client";
// import appImages from "@/public/Images/Grass.svg";
import { Button } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
// import i18n from "@/lib/i18n";
import { useTranslation } from "react-i18next";

const NavbarComp = dynamic(() => import("./NabarComp"));
const FooterComp = dynamic(() => import("./FooterCompo"));
const ProductSlide = dynamic(() => import("./ProductSlide"));

const ProductDetail = () => {
  const { t, i18n } = useTranslation();
const [product, setProduct] = useState<any>(null);
  const [imageList, setImageList] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          // ?catagory=${catagory}
          `https://api.purfull.com/product/get-product/${params.data}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const list = [
          "/Images/Grass.svg",
          "/Images/next.svg",
          "/Images/Grass.svg",
        ];
        const result = await response.json();

        setProduct(result.data);
        setImageList(result.data?.galleryImage);
        setSelectedImage(result.data?.galleryImage[0]);
      } catch (error) {
        console.error("Suggestion error:", error);
      }
      // try {
      //   // Dummy image list
      //   const list = [
      //     "/Images/Grass.svg",
      //     "/Images/next.svg",
      //     "/Images/Grass.svg",
      //   ];

      //   // Dummy product details
      //   const data = {
      //     id: 1,
      //     name: "Fresh Organic Grass",
      //     price: 39,
      //     quantity_available: 250,
      //     description:
      //       "Grown naturally without pesticides. Ideal for pets and eco-living. Rich in nutrients and freshness.",
      //   };

      //   setProduct(data);
      //   setImageList(list);
      //   setSelectedImage(list[0]);
      // } catch (error) {
      //   console.error("Error fetching product:", error);
      // }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    console.log("gggggg");
  }, [selectedImage]);

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const payload = {
      productId: product.id,
      quantity: 1,
      userId: user?.id,
    };
    try {
      const response = await fetch("https://api.purfull.com/cart/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Added to cart successfully:", result);
        // optionally show a toast or update UI
      } else {
        console.error("Failed to add to cart:", result.message || result);
        // optionally show error toast
      }
    } catch (error) {
      console.error("Network or server error:", error);
      // optionally show error toast
    }
  };

  if (!product) return <div className="p-8 text-lg">Loading product...</div>;

  const lang = i18n.language;
  console.log("llllllllllll", lang);

  const productName = product?.name?.[lang] || product?.name?.en || "Unnamed";
  const productDescription =
    product?.description?.[lang] ||
    product?.description?.en ||
    "No description available";

  if (!product) return <div className="p-8 text-lg">Loading product...</div>;

  return (
    <div className="product-main p-8 ">
      <div className="product-detail-container">
        <div className="product-image ">
          <img
            src={selectedImage}
            alt="Selected Product"
            // width={600}
            // height={400}
            className="carousel-main-image rounded shadow"
          />

          <div className="product-box-row-img flex gap-4 mt-4">
            {imageList?.map((item, index) => (
              <div
                key={index}
                // onClick={() => setSelectedImage(item)}
                onClick={() => {
                  console.log("Clicked image:", item);
                  setSelectedImage(item);
                }}
                className={`cursor-pointer p-1 border-2 rounded-xl ${
                  selectedImage === item
                    ? "border-green-200"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={item}
                  alt={`Product ${index}`}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="product-detail-content">
          <div className="product-title-conatainer">
            <div className="product-breadcrumbs text-gray-500">
              {productName}
            </div>
            <div className="product-title text-xl font-bold">{productName}</div>
            <div className="product-weight text-sm">
              {product?.quantity_available} gm
            </div>
            <div className="border border-gray-300 my-4"></div>

            <div className="card-price-container flex justify-between items-center">
              <div className="card-price text-2xl font-semibold text-green-700">
                $ {product?.price}
              </div>
              <Button
                className="card-button bg-green-500 text-white"
                onClick={handleAddToCart}
              >
                Add
              </Button>
            </div>
          </div>

          <div className="product-description-container mt-8">
            <div className="product-details">
              <div className="product-detail-title font-semibold text-lg mb-2">
                Product Details
              </div>
            </div>
            <div className="product-description text-gray-700 leading-relaxed">
              {productDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDetailComp = () => {
  const [allProduct, setAllProduct] = useState<any>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          // ?catagory=${catagory}
          `https://api.purfull.com/product/get-all-product`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        setAllProduct(result.data);
      } catch (error) {
        console.error("Suggestion error:", error);
      }
    };

    fetchProduct();
  }, []);
  return (
    <div className="">
      <NavbarComp />

      <ProductDetail />

      <div className="text-bold py-10 flex justify-between !text-lg mx-18 mt-10">
        <span>More Items</span>
        <span className="text-[#2EAF4B] cursor-pointer">View All</span>
      </div>

      <div className="mx-12 pb-[8vh] ">
        <ProductSlide getallProductData={allProduct} />
      </div>

      <FooterComp />
    </div>
  );
};

export default ProductDetailComp;
