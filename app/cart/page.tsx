"use client";
import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Image from "next/image";
import images from "@/app/images";
import { useCartStore } from "@/context/shoppingCart";
import ArrowUp from "@/app/icons/arrowUp";
import ArrowDown from "@/app/icons/arrowDown";
import Link from "next/link";

const Cart: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const { addToCart, removeOneItem, clearCart, removeFromCart } =
    useCartStore();

  if (!domLoaded) return;

  return (
    <div className={styles.cart}>
      {cart.length === 0 ? (
        <p className={styles.emptyContainer}>
          Корзина пуста, но в нашем&nbsp;<Link href="/">каталоге</Link>&nbsp;- много
          интересного &#128525;
        </p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <div className={styles.titleContainer}>
              <span className={styles.title}>Товар</span>
              <span className={styles.titleQt}>Количество</span>
            </div>
            <div className={styles.item}>
              <Image
                className={styles.picture}
                src={images[item.pictureIndex]}
                alt={item.name}
              />
              <div className={styles.details}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.description}>{item.price} руб</p>
                <p
                  className={styles.removeItem}
                  onClick={() => removeFromCart(item)}
                >
                  Удалить
                </p>
              </div>
              <div className={styles.quantityWrapper}>
                <div className={styles.quantity}>
                  <span>{item.quantity}</span>
                  <div className={styles.quantityContainer}>
                    <button
                      className={styles.increment}
                      onClick={() => addToCart(item)}
                      disabled={item.quantity === 1}
                    >
                      <ArrowUp />
                    </button>
                    <button
                      className={styles.decrement}
                      onClick={() => removeOneItem(item)}
                      disabled={item.quantity === 1}
                    >
                      <ArrowDown />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <div className={styles.rightContainer}>
        <p className={styles.orderDetails}>Оформление заказа</p>
        <form className={styles.form}>
          <input
            className={styles.formField}
            type="text"
            placeholder="Имя Фамилия"
          />
          <input
            className={styles.formField}
            type="text"
            placeholder="Телефон"
          />
          <input
            className={styles.formField}
            type="text"
            placeholder="Адрес доставки"
          />
        </form>
        <p className={styles.totalPrice}>Итого: {totalPrice} руб</p>
        <button className={styles.buttonOrder}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default Cart;
