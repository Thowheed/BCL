
import dynamic from 'next/dynamic';
const CartComponent = dynamic(() => import('../../../Components/CartComponent'));

const Cart = () => {
    return (
        <div>
            <CartComponent />
        </div>
    )
};

export default Cart;