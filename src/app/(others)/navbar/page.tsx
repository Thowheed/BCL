// import NabarComp from "@/Components/NabarComp";


import dynamic from 'next/dynamic';

const NavbarComp = dynamic(() => import('../../../Components/NabarComp'));

const NavBar = () => {
    return (
        <div>
            <NavbarComp />
        </div>
    )
}

export default NavBar;