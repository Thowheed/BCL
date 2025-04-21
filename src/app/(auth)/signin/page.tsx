import dynamic from 'next/dynamic';


const SigninCompo = dynamic(() => import('../../../Components/SigninCompo'));


const SigninPage = () => {

    return (
        <div style={{ margin: 0 }}>
        

            <SigninCompo />

           
        </div>
    )
}

export default SigninPage; // ✅ this is the fix