'use client'
import appImages from "@/Globals/AppImages";
import { addtocartListload } from "@/store/reducer/indexSlice";
import { Button } from "antd"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardComponent = (props: any) => {
    const { data } = props;
    const router = useRouter();
    const { addtocartLoad, addtocartData } = useSelector((state: any) => state.bcl);

    const dispatch = useDispatch();

    const Cartapi = () => {

        let payload = {

            userId: 4,
            productId: data?.id,
            quantity: 1
        }

        dispatch(addtocartListload(payload))

    }

  
    return (
        <div className="card-container" style={{ flex: '0 0 auto', cursor: 'pointer' }} onClick={() => router.push('/productdetail')}>
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
                <Button className="card-button" onClick={Cartapi}>Add</Button>
            </div>
        </div>
    )
}

export default CardComponent;