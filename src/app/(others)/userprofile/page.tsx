import dynamic from 'next/dynamic';

const UserprfoileCompo = dynamic(() => import("../../../Components/UserprofieCompo"));

const NavbarComp = dynamic(() => import('../../../Components/NabarComp'));


const Useprofile = () => {

    return (
        <div style={{ margin: 0 }}>

            <NavbarComp/>
            <UserprfoileCompo />


        </div>
    )
}

export default Useprofile;
