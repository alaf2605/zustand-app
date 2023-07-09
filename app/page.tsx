"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import images from "./images";
import Image from "next/image";

import { useProductsStore } from "../context/items";
import { useCartStore } from "@/context/shoppingCart";
import HeartIcon from "@/app/icons/heartIcon";
import FavoriteIcon from "@/app/icons/favouritesIcon";

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const totalItems = useCartStore((state) => state.totalItems);

  const [filter, setFilter] = useState("all");

  const { products, filterByPrice } = useProductsStore();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    setFilter(selectedValue);

    // Do something based on the selected value
    switch (selectedValue) {
      case "category1":
        filterByPrice("desc");
        break;
      case "category2":
        filterByPrice("asc");
        break;
      default:
        break;
    }
  };

  const addToCart = useCartStore((state) => state.addToCart);

  if (!domLoaded) return;

  return (
    <div>
      <select
        className={styles.filter}
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="category1">Порядок: Сначала дорогие</option>
        <option value="category2">Порядок: Сначала дешевые</option>
      </select>
      <div className={styles.catalog}>
        {products.map((item, index) => (
          <div className={styles.item} key={index}>
            <div
              className={styles.pictureContainer}
              style={{ position: "relative" }}
            >
              <Image
                className={styles.picture}
                src={images[item.pictureIndex]}
                alt={item.name}
              />
              <span
                className={styles.cartIcon}
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                <FavoriteIcon />
              </span>
              <span
                className={styles.heartIcon}
                style={{ position: "absolute", top: "10px", right: "50px" }}
                onClick={() => addToCart(item)}
              >
                <HeartIcon isChecked={item.checked} />
              </span>
            </div>
            <h2 className={styles.name}>{item.name}</h2>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.price}>{item.price} руб</p>
          </div>
        ))}
      </div>
    </div>
  );
}
