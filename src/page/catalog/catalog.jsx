import style from "./catalog.module.css";
import Card from "../../component/card/card";
import { CARDS } from "../../component/data/data";
import { useState } from "react";

export default function Catalog() {
  const [query, setQuery] = useState("");
  function search(e) {
    setQuery(e.target.value);
  }

  const filterItem = CARDS.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <main className="main">
      <div className="container">
        <div className="main_container">
          <div className="container">
            <div className="main_content">
              <h2 className="title">Товары для животных</h2>
              <div className="category">
              <div className="search">
                <div className="form">
                  <div className={style.search}>
                    <input
                      onChange={search}
                      type="search"
                      name="search"
                      className={style.search_item}
                      placeholder="search"
                    />
                  </div>
                </div>
                </div>
                <div className="category_item">
                  <a href="" className="link">
                    Все
                  </a>
                </div>
                <div className="category_item">
                  <a href="" className="link">
                    Корм
                  </a>
                </div>
                <div className="category_item">
                  <a href="" className="link">
                    Одежда
                  </a>
                </div>
              </div>
              <div className="cards">
                {filterItem.map((item, id) => {
                  return (
                    <Card
                      title={item.title}
                      category={item.category}
                      price={item.price}
                      key={id}
                      id={item.id}
                      ost={item.ost}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
