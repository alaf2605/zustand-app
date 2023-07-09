"use client";
import styles from './page.module.css'
import {useState} from "react";
import images from './images';
import Image from "next/image";


export default function Home() {

    const [filter, setFilter] = useState('all');

    const items = [
        {
            name: 'Кровать TATRAN',
            description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
            pictureIndex: 0,
        },
        {
            name: 'Кресло VILORA',
            description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ',
            pictureIndex: 1,
        },
        {
            name: 'Стол MENU',
            description: 'Европейский дуб - отличается особой прочностью и стабильностью.',
            pictureIndex: 2,
        },
        {
            name: 'Диван ASKESTA',
            description: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',
            pictureIndex: 3,
        },
        {
            name: 'Кресло LUNAR',
            description: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки',
            pictureIndex: 4,
        },
        {
            name: 'Шкаф Nastan',
            description: 'Мебель может быть оснащена разнообразными системами подсветки.',
            pictureIndex: 5,
        },
        // Add more items here...
    ];




    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    };


    return (
        <div>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navLinks}>
                        <li className={styles.navLink}>
                            <a href="/">Catalog</a>
                        </li>
                        <li className={styles.navLink}>
                            <a href="/cart">Cart</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <select className={styles.filter} value={filter} onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
            </select>

            <div className={styles.catalog}>
                {items.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.pictureContainer}>
                            <Image className={styles.picture} src={images[item.pictureIndex]} alt={item.name} />
                            <span className={styles.cartIcon}>&#128722;</span> {/* Index icon */}
                        </div>
                        <h2 className={styles.name}>{item.name}</h2>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
  );
};




