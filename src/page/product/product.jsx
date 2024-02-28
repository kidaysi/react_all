import { Navigate, useParams } from "react-router-dom";
import { CARDS } from "../../component/data/data";
import img from "/catalog/product.png";
import style from "./product.module.css";

export default function Product() {
  const { id } = useParams();

  const productItem = CARDS.find((productItem) => productItem.id == id);

  return productItem ? (
    <div className="item">
      <div className="container">
        <div className="main_content">
          <div className={style.card_item_info}>
            <img src={img} alt="corm" className="img" />
            <div className={style.info}>
              <p className={style.color}>
                ID: <span className={style.text}>{id}</span>
              </p>
              <p className={style.color}>
                Name: <span className={style.text}>{productItem.title}</span>
              </p>
              <p className={style.color}>
                Price: <span className={style.text}>{productItem.price}</span>
              </p>
              <p className={style.color}>
                Category:<span className={style.text}>{productItem.category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/error" />
  );
}
