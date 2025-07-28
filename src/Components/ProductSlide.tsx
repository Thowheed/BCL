// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { Card, Button, Divider } from 'antd';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import CardComponent from './CardComponent';
// import { useDispatch, useSelector } from 'react-redux';
// import { addtocartListload } from '@/store/reducer/indexSlice';

// const cardData = Array.from({ length: 12 }, (_, i) => ({
//     title: `Product ${i + 1}`,
//     description: `This is product ${i + 1}`,
// }));

// const ProductCarousel = (props: any) => {
//     const { getallProductData } = props;

//     const containerRef = useRef<HTMLDivElement>(null);
//     const scrollAmount = 720; // adjust based on card width * number of cards to scroll

//     const scrollLeft = () => {
//         containerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//     };

//     const scrollRight = () => {
//         containerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     };

//     return (

//         <div style={{ position: 'relative', padding: '10px 0px ' }}>
//             {/* Scroll Buttons */}
//             <Button
//                 icon={<LeftOutlined style={{ color: 'white ' }} />}
//                 onClick={scrollLeft}
//                 style={{
//                     position: 'absolute',
//                     left: '0px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     zIndex: 1,
//                     borderRadius: '50%',
//                     backgroundColor: 'black',
//                 }}
//             />

        
//             <div
//                 ref={containerRef}
//                 style={{
//                     display: 'flex',
//                     overflowX: 'hidden',
//                     scrollBehavior: 'smooth',
//                     gap: '16px',
//                 }}
//             >
//                 {getallProductData?.length >= 5 ? (
                    
//                     getallProductData.map((item: any, index: number) => (
//                         <CardComponent key={index} data={item} />
                        
//                     ))
                    
//                 ) : (
//                     <div className="text-gray-500 text-center w-full">single</div>
//                 )}
                
//             </div>

//             <Button
//                 icon={<RightOutlined style={{ color: 'white ' }} />}
//                 onClick={scrollRight}
//                 style={{
//                     position: 'absolute',
//                     right: 0,
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     zIndex: 1,
//                     borderRadius: '50%',
//                     backgroundColor: 'black',
//                 }}
//             />
//         </div>
//     );
// };

// export default ProductCarousel;

'use client';

import React, { useRef } from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import CardComponent from './CardComponent';

interface ProductCarouselProps {
  getallProductData: [];
}

const ProductCarousel = ({ getallProductData }: ProductCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 720;

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  console.log(" getallProductData:", getallProductData);
  console.log("✅ getallProductData length:", getallProductData?.length);

  return (
    <div style={{ position: 'relative', padding: '10px 0px' }}>
      {/* Show left button only if enough items */}
      {getallProductData?.length >= 5 && (
        <Button
          icon={<LeftOutlined style={{ color: 'white' }} />}
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
      )}

      <div
        ref={containerRef}
        style={{
          display: 'flex',
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
          gap: '16px',
        }}
      >
        {/*  && getallProductData.length >= 5 ? */}
        {Array.isArray(getallProductData) && (
          getallProductData.map((item, index) => (
            <CardComponent key={index} data={item} />
          ))
        ) 
        // : (
        //   <div className="text-gray-500 text-center w-full ">
        //     <CardComponent data={getallProductData} />
        //   </div>
        // )
        
        }
      </div>

      {/* Right button only if enough items */}
      {getallProductData?.length >= 5 && (
        <Button
          icon={<RightOutlined style={{ color: 'white' }} />}
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
      )}
    </div>
  );
};

export default ProductCarousel;
