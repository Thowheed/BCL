'use client';

import React, { useEffect, useRef } from 'react';
import { Card, Button, Divider } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import CardComponent from './CardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { addtocartListload } from '@/store/reducer/indexSlice';

const cardData = Array.from({ length: 12 }, (_, i) => ({
    title: `Product ${i + 1}`,
    description: `This is product ${i + 1}`,
}));

const ProductCarousel = (props: any) => {
    const { getallProductData } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 720; // adjust based on card width * number of cards to scroll

    const scrollLeft = () => {
        containerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (
        <div style={{ position: 'relative', padding: '10px 0px ' }}>
            {/* Scroll Buttons */}
            <Button
                icon={<LeftOutlined style={{ color: 'white ' }} />}
                onClick={scrollLeft}
                style={{
                    position: 'absolute',
                    left: '0px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    borderRadius: '50%',
                    backgroundColor: 'black',
                }}
            />

            <div
                ref={containerRef}
                style={{
                    display: 'flex',
                    overflowX: 'hidden',
                    scrollBehavior: 'smooth',
                    gap: '16px',
                    // padding: '0 40px', // space for arrows
                }}
            >
                {getallProductData?.map((item: any, index: any) => (
                    //   <Card
                    //     key={index}
                    //     title={item.title}
                    //     bordered={false}
                    //     style={{
                    //       width: 240,
                    //       flex: '0 0 auto',
                    //     }}
                    //   >
                    //     <p>{item.description}</p>
                    //   </Card>
                    <CardComponent key={index} data={item}/>
                ))}
            </div>

            <Button
                icon={<RightOutlined style={{ color: 'white ' }} />}
                onClick={scrollRight}
                style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    borderRadius: '50%',
                    backgroundColor: 'black',
                }}
            />
        </div>
    );
};

export default ProductCarousel;
