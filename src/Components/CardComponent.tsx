'use client'
import appImages from "@/Globals/AppImages";
import { getUser } from "@/Globals/Localstorage";
import { addtocartListload, getProductWiseIdLoad } from "@/store/reducer/indexSlice";
import { Button, message } from "antd"
import { get } from "http";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardComponent = (props: any) => {
    const { data } = props;
    const router = useRouter();
    const { addtocartLoad, addtocartData } = useSelector((state: any) => state.bcl);
    const [productLoad, setProductLoad] = useState(false);
    const [isadded, setnewadded] = useState(false)
    const user = getUser();
    const dispatch = useDispatch();

    const Cartapi = async(e: any) => {
        e.stopPropagation();
        let payload = {

            userId: user?.id,
            productId: data?.id,
            quantity: 1
        }

        const a :any = await dispatch(addtocartListload(payload))

        console.log("aaaaaa",a);
        
        a.success && setnewadded (true);
        message.success("product added successfully");

    }

    const handleSetRedux = () => {
        dispatch(getProductWiseIdLoad(data))
        setProductLoad(true)
    };

    useEffect(() => {
        if (productLoad) {
            router.push('/productdetail');
            setProductLoad(false)
        }
    }, [productLoad])


    return (
        <div className="card-container" style={{ flex: '0 0 auto', cursor: 'pointer' }} onClick={handleSetRedux}>
            <div className="image-container" >
                <Image src={appImages?.GRASS_IMAGE} height={200} width={200} alt={""} />
            </div>
            <div className="card-title">
                {data?.name}
            </div>
            <div className="card-weight">
                {data?.quantity} kg
            </div>
            <div className="card-price-container">
                <div className="card-price">
                    $ {data?.price}
                </div>
                <Button className="card-button" onClick={Cartapi}  disabled={isadded}> {isadded? "View Cart" :"Add"} </Button>
            </div>
        </div>
    )
}

export default CardComponent;