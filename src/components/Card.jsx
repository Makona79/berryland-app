import React from "react";
import { useState } from "react";

export const Card = ({
  title,
  imageUrlS,
  imageUrl,
  priceNew,
  priceOld,
  sizes,
}) => {
  const [cardCount, setCardCount] = useState(1);
  const plusCountCard = () => {
    setCardCount(cardCount + 1);
  };
  const minusCountCard = () => {
    setCardCount(cardCount - 1);
  };
  return (
    <article className="shop__card card" data-item="berry" data-pid="1">
      <h4 className="card__title">{title}</h4>
      <a href="#" className="card__image">
        <picture>
          <source srcSet={imageUrlS} type="image/webp" />
          <img src={imageUrl} alt={title} />
        </picture>
      </a>
      <div className="card__box-price">
        <div className="card__price card__price_new rub">{priceNew}.00</div>
        <div className="card__price_old rub">{priceOld}</div>
        <div className="card__volume">за {sizes} кг</div>
      </div>
      <div className="card__box-button">
        <div className="card__quantity">
          <div className="quantity">
            <div
              onClick={minusCountCard}
              className="quantity__button quantity__button_minus"
            ></div>
            <div className="quantity__input">
              <i>{cardCount}</i>

              {/* <input autoComplete="off" type="text" name="form[]" value="2" /> */}
            </div>
            <div
              onClick={plusCountCard}
              className="quantity__button quantity__button_plus"
            ></div>
          </div>
        </div>
        <button className="card__btn btn btn_card">В корзину</button>
      </div>
    </article>
  );
};
export default Card;
