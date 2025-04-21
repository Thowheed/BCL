// import NabarComp from "@/Components/NabarComp";


import dynamic from 'next/dynamic';

const NavbarComp = dynamic(() => import('../../../Components/NabarComp'));
const CardComponent = dynamic(() => import('../../../Components/CardComponent'));
const ProductCarousel = dynamic(() => import('../../../Components/ProductSlide'));

const NavBar = () => {
    return (
        <div>
            <NavbarComp />
            <CardComponent />
            <ProductCarousel />
        </div>
    )
}

export default NavBar;