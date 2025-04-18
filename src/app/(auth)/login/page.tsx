import dynamic from 'next/dynamic';

const LoginCompo = dynamic(() => import('../../../Components/LoginCompo'));
const SigninCompo = dynamic(() => import('../../../Components/SigninCompo'));
const FooterCompo = dynamic(() => import("../../../Components/FooterCompo"));

const UserprfoileCompo = dynamic(() => import("../../../Components/UserprofieCompo"))



const LoginPage = () => {

    return (
        <div style={{ margin: 0 }}>
            {/* <LoginCompo /> */}

            {/* <SigninCompo /> */}

            {/* <FooterCompo /> */}

            <UserprfoileCompo />
        </div>
    )
}

export default LoginPage; // ✅ this is the fix
