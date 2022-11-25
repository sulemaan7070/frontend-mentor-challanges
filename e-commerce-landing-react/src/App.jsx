import "./App.css";
import logo from "./images/logo.svg";
import avatar from "./images/image-avatar.png";
import data from "./data";
import { useState } from "react";

import minusSvg from "./images/icon-minus.svg";
import plusSvg from "./images/icon-plus.svg";
import menu from "./images/icon-menu.svg";
import rightArrow from "./images/icon-next.svg";
import leftArrow from "./images/icon-previous.svg";
import cartSvg from "./images/icon-cart.svg";
import deleteSvg from "./images/icon-delete.svg";
import cartThumnail from "./images/image-product-1-thumbnail.jpg";
import closeSvg from "./images/icon-close.svg";

function App() {
  const [value, setValue] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [viewCart, setViewCart] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [ismenu, setMenu] = useState(false);
  const mainImage = data[value].mainImage;
  return (
    <div className="App">
      <header className="  shadow-sm flex justify-between  ">
        <ul className="flex justify-between">
          <li
            onClick={() => {
              setMenu(true);
              setOverlay(true);
            }}
            className=" pt-1 hover:cursor-pointer"
          >
            <img className="menu hidden 2xl:block" src={menu} alt="" />
          </li>
          <li>
            <img src={logo} alt="" />
          </li>
          <li className="desk decor">
            <button>Collections</button>
          </li>
          <li className="desk decor ">
            <button>Men</button>
          </li>
          <li className="desk decor">
            <button>Women</button>
          </li>
          <li className="desk decor">
            <button>About</button>
          </li>
          <li className="desk decor">
            <button>Contact</button>
          </li>
        </ul>
        <div className="cart-button flex justify-between relative ">
          {/**cart button */}
          <button
            onClick={() => {
              setViewCart((prev) => !prev);
            }}
            className="relative pr-2"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="2.5rem"
              width="2.5rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
            </svg>
            <span
              className={
                cartItems === 0
                  ? "hidden"
                  : "rounded-lg w-5 h-6 bg-red-500 absolute top-0 right-0 "
              }
              cartItems
            >
              {cartItems === 0 ? "" : 1}
            </span>
          </button>

          <img className="w-16 avatar pb-1" src={avatar} alt="" />
          {/**cart place */}
          {/**cart place */}
          {/**cart place */}
          <div
            className={
              viewCart
                ? "z-50 cart-div absolute p-5 top-14 right-3 rounded-md shadow-lg w-[390px] h-[330px] bg-white cart-div flex justify-between flex-col   hidden"
                : " z-50 cart-div absolute p-5 top-14 right-3 rounded-md shadow-lg w-[390px] h-[330px] bg-white cart-div flex justify-between flex-col "
            }
          >
            {/**checking if cart is empty */}
            {cartItems === 0 ? (
              <h4 className="flex justify-center items-center mt-3 font-bold">
                Your cart is empty
              </h4>
            ) : (
              <>
                <h4 className="p-2 font-bold text-xl">cart</h4>
                <hr className="bg-black" />
                <div className="flex justify-center">
                  <img className="w-20 h-20 mt-2 " src={cartThumnail} alt="" />
                  <p className="p-5 text-zinc-600">
                    fall limited edition... <br /> $125 * {cartItems}
                    <span className=" font-bold text-xl ml-2">
                      {"    "}${cartItems * 125}{" "}
                      <button onClick={() => setCartItems(0)} className="pl-3 ">
                        <img src={deleteSvg} className="w-4" alt="" />
                      </button>
                    </span>
                  </p>
                </div>
                <button className="text-zinc-50 bg-orange-500 p-5 rounded-lg check-out">
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      <main className="flex justify-center  m-auto  ">
        <article className="flex-1 flex justify-between flex-col items-center">
          <div className="carousel flex justify-center items-center relative">
            <img
              className="w-[75%] flex-1 rounded-[15px] main-image "
              src={mainImage}
              alt=""
            />
            <button
              onClick={() => {
                if (value >= 1) {
                  console.log(value);
                  setValue(value - 1);
                } else {
                  setValue(3);
                }
              }}
              className=" absolute left-0 cursor-pointer bg-white p-4 rounded-full  lg:hidden xl:hidden "
            >
              <img className="w-4" src={leftArrow} alt="" />
            </button>

            <button
              onClick={() => {
                if (value <= 2) {
                  console.log(value);
                  setValue(value + 1);
                } else {
                  setValue(0);
                }
              }}
              className="absolute right-0 cursor-pointer  bg-white p-4 rounded-full lg:hidden xl:hidden "
            >
              <img className="w-4" src={rightArrow} alt="" />
            </button>
          </div>

          <ul className=" desk flex justify-center items-center pt-5 ">
            {data.map((dat, i) => (
              <li
                key={dat.id}
                onClick={() => setValue(i)}
                className=" flex justify-center items-centercursor-pointer  hover:opacity-[75%]"
              >
                <img
                  className="w-[80%] rounded-[15px]"
                  src={dat.thumbnail}
                  alt="img"
                />
              </li>
            ))}
          </ul>
        </article>
        <article id="imp" className="flex-1 flex flex-col justify-evenly ">
          <h4 className="text-orange-500 tracking-widest pb-1">
            SNEAKER COMPANY
          </h4>
          <h1 className="text-5xl font-bold pb-1">
            Fall Limited Edition Sneakers
          </h1>
          <p className="leading-8 extra-info ">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <h1 className="text-5xl font-bold pl-7 ">
            $125
            <span className="text-3xl pl-5 striked">$250</span>
            <span className=" text-xl p-2 fifty ml-5 fifty">50%</span>
          </h1>

          {/***button secttion */}
          {/***button secttion */}
          {/***button secttion */}
          <div className=" button-wrap wrapper flex items-center justify-evenly px-7">
            <div className=" mb-2 flex  w-[180px] p-5 rounded-lg  bg-gray-100 justify-evenly items-center">
              <button
                className=" rounded-sm "
                disabled={productCount === 0}
                onClick={() => {
                  setProductCount(productCount - 1);
                }}
              >
                <img src={minusSvg} alt="" />
              </button>
              <span className="">{productCount}</span>

              <button
                className="rounded-sm bg-gray-100"
                onClick={() => {
                  setProductCount(productCount + 1);
                }}
              >
                <img src={plusSvg} alt="" />
              </button>
            </div>
            <button
              className="add-to-cart "
              disabled={productCount === 0}
              onClick={() => {
                setCartItems(productCount);
                setProductCount(0);
              }}
            >
              <span>
                <img className="inline pl-" src={cartSvg} alt="" />
                Add to cart
              </span>
            </button>
          </div>
        </article>
      </main>
      {/**overlay for smoothness */}
      <div
        onClick={() => {
          setViewCart(true);
          setOverlay((prev) => !prev);
          setMenu(false);
        }}
        className={overlay ? "overlay cursor-pointer" : null}
      />
      {/**mobile menu sectio */}
      <div
        className={
          ismenu
            ? "mobile-menu absolute h-screen w-[50%] left-0 bg-white top-0 z-20"
            : "mobile-menu absolute h-screen w-[50%] left-0 bg-white top-0 z-20 hidden"
        }
      >
        <ul className="font-bold text-xl p-10 cursor-pointer">
          <li
            onClick={() => {
              setMenu(false);
              setOverlay(false);
            }}
            className="pt-5 text-4xl"
          >
            <img className="w-6" src={closeSvg} alt="" />
          </li>
          <li className="pt-5">
            <button>Collections</button>
          </li>
          <li className="pt-5">
            <button>Men</button>
          </li>
          <li className="pt-5">
            <button>Women</button>
          </li>
          <li className="pt-5">
            <button>About</button>
          </li>
          <li className="pt-5">
            <button>Contact</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
