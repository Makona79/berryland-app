import React from "react";
import { Link } from "react-router-dom";
export const Cart = () => {
  return (
    <div className="shop__cart-box">
      <div className="shop__cart cart">
        <h4 className="cart__title">Корзина</h4>
        <div className="cart__content">
          <ul className="cart-menu__list cart-list"></ul>
        </div>
        <div className="cart__price">
          <p className="cart__descr">Подытог</p>
          <p className="cart__summ rub">184.00</p>
        </div>
        <div className="cart__button">
          <button className="cart__pay btn btn_cart">Оплатить</button>
          <Link to="/cartFull" className="cart__cart btn btn_cart2">
            Корзина
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;
