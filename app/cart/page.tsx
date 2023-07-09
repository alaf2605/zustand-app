import React from 'react';
import { useRouter } from 'next/router';

const Cart: React.FC = () => {
    const router = useRouter();

    return (
        <div>
            <h1>Cart Page</h1>
            <p>Your cart content goes here.</p>
            <button onClick={() => router.push('/catalog')}>Back to Catalog</button>
        </div>
    );
};

export default Cart;