import dynamic from 'next/dynamic';

const ProductDetailComp = dynamic(() => import('../../../Components/ProductDetailComp'));

const ProductDetail = () => {
    return (
        <div>
            <ProductDetailComp />
        </div>
    )   
}

export default ProductDetail;