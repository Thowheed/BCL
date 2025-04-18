import dynamic from 'next/dynamic';
const CartTable = dynamic(() => import('../../../Components/CartTable'));
const CartTotal = dynamic(() => import('../../../Components/CartTotal'));
const Cart = () => {
    return (
        <div className='flex flex-row'>
            <CartTable />
            <CartTotal />
        </div>
    )
};

export default Cart;