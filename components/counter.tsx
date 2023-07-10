import styles from "@/app/cart/Cart.module.css";
import ArrowUp from "@/app/icons/arrowUp";
import ArrowDown from "@/app/icons/arrowDown";
import React from "react";
import {useCartStore} from "@/context/shoppingCart";


type PropsType = {
    type: 'increment' | 'decrement'
    item : any,
}
export const Counter: React.FC<PropsType>= ({ type, item}) => {

    const { addToCart, removeOneItem} =
        useCartStore();
    return (
        <>

            {type === 'increment' ? (
                <button
                    className={styles.increment}
                    onClick={() => addToCart(item)}
                >
                    <ArrowUp />
                </button>
            ) : (
                <button
                    className={styles.decrement}
                    onClick={() => removeOneItem(item)}
                >
                    <ArrowDown />
                </button>
            ) }

            </>



    )

}