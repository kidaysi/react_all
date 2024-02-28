import { useState } from "react";
import style from "./add.module.css";

export default function Add() {
  const [message, setMessage] = useState();
  function Create(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: data,
    });
    event.target.reset();
    setMessage("Отправлено");
  }
  return (
    <div className="add">
      <div className="container">
        <div className={style.content}>
          <h2 className="title">Добавление товара</h2>
          <form action="" onSubmit={Create} className={style.form}>
            <input
              type="text"
              name="title"
              id=""
              placeholder="title"
              className={style.input}
            />
            <input
              type="text"
              name="body"
              id=""
              placeholder="body"
              className={style.input}
            />
            <input type="submit" value="Добавить товар" className="btn" />
            {message}
          </form>
        </div>
      </div>
    </div>
  );
}
