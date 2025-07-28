'use client'; 

import dynamic from 'next/dynamic';
// import { useParams } from 'next/navigation';

const ProductDetailComp = dynamic(() => import('../../../../Components/ProductDetailComp'));

const ProductDetail = () => {
//   const params = useParams()
    return (
        <div>
            <ProductDetailComp />
        </div>
    )   
}

export default ProductDetail;