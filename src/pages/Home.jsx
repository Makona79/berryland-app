import React from "react";
import Skeleton from "../components/Skeleton";
import Card from "../components/Card";
import Cart from "../components/Cart";
import Categories from "../components/Categories";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  //   &order=asc
  React.useEffect(() => {
    fetch(`https://63306eb9591935f3c88fd5e5.mockapi.io/berry?${category}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    //  window.scrollTo(0, 0);
  }, [categoryId]);
  return (
    <>
      <Categories
        value={categoryId}
        onClickCategory={(i) => setCategoryId(i)}
      />
      <div className="shop__filter">
        <div className="shop__menu">
          {isLoading
            ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <Card key={obj.id} {...obj} />)}
        </div>
        <Cart />
      </div>
    </>
  );
};

export default Home;
