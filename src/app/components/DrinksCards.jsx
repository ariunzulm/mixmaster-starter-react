import { useState } from "react";
import products from "./drinks";
import DrinkCard from "./DrinkCard";
import Navigation from "./Navigation";
import Search from "./Search";

export default function DrinksCards() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  const onSearch = () => {
    setSearchValue(inputValue);
  };

  return (
    <section>
      <Navigation />
      <div className="w-full py-20 px-8">
        <Search
          inputValue={inputValue}
          onChange={setInputValue}
          onSearch={onSearch}
        />

        <DrinkCard products={filteredProducts} />
      </div>
    </section>
  );
}
