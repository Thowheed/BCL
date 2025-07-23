'use client';


import dynamic from 'next/dynamic';

const SuccessPage = dynamic(() => import('../../../Components/Success'));

const Success = () => {
    return (
        <div>
            <SuccessPage />
        </div>
    )   
}

export default Success;