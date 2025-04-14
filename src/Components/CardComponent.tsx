'use client'
import appImages from "@/Globals/AppImages";
import { Button } from "antd"
import Image from "next/image"

const CardComponent = () => {
    return (
        <div className="card-container" style={{ flex: '0 0 auto'}}>
            <div className="image-container">
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