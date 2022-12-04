import React from "react";
import "./app.scss";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartFull from "./pages/CartFull";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="wrapper">
      <h1 className="visually-hidden">
        Вкуснейшие замороженные ягоды Berryland.
      </h1>
      <Header />
      <main className="page">
        <section className="shop">
          <div className="shop__content _container">
            <h2 className="shop__title">Замороженные ягоды</h2>
            <h3 className="shop__subtitle">Доставка на дом</h3>
            <div className="shop__body">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/berryland-app" element={<Home />} />
                <Route path="/cartFull" element={<CartFull />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
