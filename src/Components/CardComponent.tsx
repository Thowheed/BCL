'use client'
import appImages from "@/Globals/AppImages";
import { Button } from "antd"
import Image from "next/image"
import { useRouter } from "next/navigation";

const CardComponent = () => {
    const router = useRouter();
    return (
        <div className="card-container" style={{ flex: '0 0 auto', cursor:'pointer' }} onClick={() => router.push('/productdetail')}>
            <div className="image-container" >
                <Image src={appImages?.GRASS_IMAGE} height={200} width={200} alt={""} />
            </div>
            <div className="card-title">
                Vallarai Keerai
            </div>
            <div className="card-weight">
                100 - 150g
            </div>
            <div className="card-price-container">
                <div className="card-price">
                    $ 2.00
                </div>
                <Button className="card-button" >Add</Button>
            </div>
        </div>
    )
}

export default CardComponent;