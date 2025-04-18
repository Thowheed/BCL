import dynamic from 'next/dynamic';

const ProductDetailComp = dynamic(() => import('../../../Components/ProductDetailComp'));

const ProductDetail = () => {
    return (
        <div className="product-detail-container">
            <ProductDetailComp />
        </div>
    )   
}

export default ProductDetail;