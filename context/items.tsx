import { create } from "zustand";

export const items = [
  {
    id: 1,
    name: "Кровать TATRAN",
    description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    pictureIndex: 0,
    price: 120000,
    quantity: 0,
    checked: false,
  },
  {
    id: 2,
    name: "Кресло VILORA",
    description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
    pictureIndex: 1,
    price: 21000,
    quantity: 0,
    checked: false,
  },
  {
    id: 3,
    name: "Стол MENU",
    description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    pictureIndex: 2,
    price: 34000,
    quantity: 0,
    checked: false,
  },
  {
    id: 4,
    name: "Диван ASKESTA",
    description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    pictureIndex: 3,
    price: 68000,
    quantity: 0,
    checked: false,
  },
  {
    id: 5,
    name: "Кресло LUNAR",
    description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    pictureIndex: 4,
    price: 40000,
    quantity: 0,
    checked: false,
  },
  {
    id: 6,
    name: "Шкаф Nastan",
    description:
      "Мебель может быть оснащена разнообразными системами подсветки.",
    pictureIndex: 5,
    price: 80000,
    quantity: 0,
    checked: false,
  },
  // Add more items here...
];

type Product = (typeof items)[0];

type State = {
  products: Product[];
  filteredProducts: Product[];
  filterByPrice: (order: "asc" | "desc") => void;
};

export const useProductsStore = create<State>((set) => ({
  products: items,
  filteredProducts: items,
  filterByPrice: (order) => {
    set((state) => ({
      ...state,
      filteredProducts: state.products.sort((a, b) =>
        order === "asc" ? a.price - b.price : b.price - a.price,
      ),
    }));
  },
}));
