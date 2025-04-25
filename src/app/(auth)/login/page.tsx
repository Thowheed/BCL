import dynamic from 'next/dynamic';

const LoginCompo = dynamic(() => import('../../../Components/LoginCompo'));


const FooterCompo = dynamic(() => import("../../../Components/FooterCompo"));




const LoginPage = () => {

    return (
        <div style={{ margin: 0 }}>
            <LoginCompo />


        </div>
    )
}

export default LoginPage; 
