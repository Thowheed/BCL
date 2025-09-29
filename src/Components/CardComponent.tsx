"use client";
// import appImages from "@/Globals/AppImages";
// import { getUser } from "@/Globals/Localstorage";
import {
  // addtocartListload,
  getProductWiseIdLoad,
} from "@/store/reducer/indexSlice";
import { Button, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, 
  // useSelector
 } from "react-redux";

const CardComponent = (props: any) => {
  const {  i18n } = useTranslation();

  const { data } = props;
  const router = useRouter();
  // const { addtocartLoad, addtocartData } = useSelector(
  //   (state: any) => state.bcl
  // );
  const [productLoad, setProductLoad] = useState(false);
  const [isadded, setnewadded] = useState(false);
  // const user = getUser();
  const dispatch = useDispatch();

  const Cartapi = async (e: any) => {
    if (isadded) {
      router.push("/cart");
      return;
    }
    e.stopPropagation();

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const payload = {
      productId: data?.id,
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
        setnewadded(true);
        message.success("Product added successfully");
        // optionally show a toast or update UI
      } else {
        console.error("Failed to add to cart:", result.message || result);
        // optionally show error toast
      }
    } catch (error) {
      console.error("Network or server error:", error);
      // optionally show error toast
    }

    // if (result?.success) {
    //   setnewadded(true);
    //   message.success("Product added successfully");
    // }
  };

  const handleSetRedux = () => {
    dispatch(getProductWiseIdLoad(data));
    setProductLoad(true);
  };

  useEffect(() => {
    if (productLoad) {
      router.push(`/productdetail/${data?.id}`);
      setProductLoad(false);
    }
  }, [productLoad]);

  // Get name and description based on current language
  const lang = i18n.language;
  console.log("gggg", lang, data?.name?.en);

  // Parse name and description
type LangMap = {
  [key: string]: string;
};

let parsedName: LangMap = {};
// let parsedDescription: LangMap = {};

try {
  parsedName = JSON.parse(data?.name || "{}");
} catch (err) {
  console.error("Failed to parse name:", err);
}

// try {
//   parsedDescription = JSON.parse(data?.description || "{}");
// } catch (err) {
//   console.error("Failed to parse description:", err);
// }

const productName = parsedName[lang] || "No name";
// const productDescription = parsedDescription[lang] || "";


  return (
    <div
      className="card-container"
      style={{ flex: "0 0 auto", cursor: "pointer" }}
    >
      <div className="image-container" onClick={handleSetRedux}>
        <Image
          src={data?.thumbnailImage || "/Images/Grass.svg"}
          height={200}
          width={200}
          alt={productName}
        />
      </div>
      <div className="card-title" onClick={handleSetRedux}>
        {productName}
      </div>
      <div className="card-weight" onClick={handleSetRedux}>
        {data?.quantity_available || 0} kg
      </div>
      <div className="card-price-container" onClick={handleSetRedux}>
        <div className="card-price">₹ {data?.price || 0}</div>
        <Button className="card-button" onClick={Cartapi}>
          {isadded ? "View Cart" : "Add"}
        </Button>
      </div>
    </div>
  );
};

export default CardComponent;
