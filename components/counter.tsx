import styles from "@/app/cart/Cart.module.css";
import ArrowUp from "@/app/icons/arrowUp";
import ArrowDown from "@/app/icons/arrowDown";
import React from "react";
import {useCartStore} from "@/context/shoppingCart";


type PropsType = {
    max: number,
    type: 'increment' | 'decrement'
    item : any,
}
export const Counter: React.FC<PropsType>= ({max, type, item}) => {

    const { addToCart, removeOneItem} =
        useCartStore();
    return (
        <>

            {type === 'increment' ? (
                <button
                    className={styles.increment}
                    disabled={item.quantity === max}
                    onClick={() => addToCart(item)}
                >
                    <ArrowUp />
                </button>
            ) : (
                <button
                    className={styles.decrement}
                    disabled={item.quantity === max}
                    onClick={() => removeOneItem(item)}
                >
                    <ArrowDown />
                </button>
            ) }

            </>



    )

}