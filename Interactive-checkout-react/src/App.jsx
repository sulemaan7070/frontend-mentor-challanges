import { useState, useEffect } from "react";
import "./App.css";
import desktopBg from "./images/bg-main-desktop.png";
import mobileBg from "./images/bg-main-mobile-edited.jpg";
import cardFront from "./images/bg-card-front.png";
import cardBack from "./images/bg-card-back.png";
import cardLogo from "./images/card-logo.svg";
import completeLogo from "./images/icon-complete.svg";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [month, setmonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [thank, setThank] = useState(true);
  const [nameSpan, setNameSpan] = useState("");
  const [cardNumberSpan, setCardNumberSpan] = useState("");
  const [monthSpan, setMonthSpan] = useState("");
  const [yearSpan, setYearSpan] = useState("");
  const [cvvSpan, setCvvSpan] = useState("");
  useEffect(() => {
    if (name !== "") {
      setNameSpan("");
    } else if (!/\d/.test(name)) {
      setNameSpan("");
    }
    // for card validation
    if (cardNumber !== "") {
      setCardNumberSpan("");
    } else if (!/^[A-Za-z0-9]*$/.test(cardNumber)) {
      setCardNumberSpan("");
    }
    //for month validation and year validation
    if (month !== "") {
      setMonthSpan("");
    }
    if (year !== "") {
      setYearSpan("");
    }
    // for Cvv validation
    if (cvv !== "") {
      setCvvSpan("");
    } else if (!/[A-Za-z]/.test(cvv)) {
      setCvvSpan("");
    }
  }, [name, cardNumber, year, month, cvv]);

  function setCard(e) {
    if (e.target.name === "number") {
      e.target.value = e.target.value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .replace(/^[0-9]{19}$/)
        .trim()
        .slice(0, 19);
      setCardNumber(e.target.value);
    }
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "MM") {
      e.target.value = e.target.value
        .toString()
        .replace(/[^0-9]/g, "")
        .substring(0, 2);
      setmonth(e.target.value);
    }
    if (e.target.name === "YY") {
      e.target.value = e.target.value
        .toString()
        .replace(/[^0-9]/g, "")
        .substring(0, 2);
      setYear(e.target.value);
    }
    if (e.target.name === "cvc") {
      e.target.value = e.target.value.substring(0, 4);
      setCvv(e.target.value);
    }
  }
  function handleSubmit() {
    //for user validation
    if (name === "") {
      setNameSpan("Can't be blank");
    } else if (/\d/.test(name)) {
      setNameSpan("wrong format");
    }
    // for card validation
    if (cardNumber === "") {
      setCardNumberSpan("Can't be blank");
    } else if (/^[A-Za-z0-9]*$/.test(cardNumber)) {
      setCardNumberSpan("Wrong format numbers only");
    }
    //for month validation and year validation
    if (month === "") {
      setMonthSpan("Can't be blank");
    }
    if (year === "") {
      setYearSpan("Can't be blank");
    }
    // for Cvv validation
    if (cvv === "") {
      setCvvSpan("Can't be blank");
    } else if (!/[A-Za-z]/.test(cvv)) {
      console.log(/[A-Za-z]/.test(cvv), "card");
      setCvvSpan("Wrong format numbers only");
    }
    // setThank(false);
    if (
      name !== "" &&
      !/\d/.test(name) &&
      cardNumber !== "" &&
      !/^[A-Za-z0-9]*$/.test(cardNumber) &&
      month !== "" &&
      year !== "" &&
      cvv !== "" &&
      /^[0-9]*$/.test(cvv)
    ) {
      // all conditions are satisfied
      setThank(false);
    }
    console.log(/[A-Za-z]/.test(cvv), "card");
  }
  return (
    <main className="flex flex-col  lg:flex-row">
      <div className="container relative lg:w-[600px] ">
        <picture>
          <source media="(min-width:650px)" srcset={desktopBg} />
          <source
            media="(min-width:465px)"
            srcset={mobileBg}
            className="w-[100%]"
          />
          <img src={mobileBg} alt="background" />
        </picture>

        <img
          src={cardBack}
          alt="cardback"
          className="absolute top-[24%] right-[8%] w-[60%] lg:w-[auto] lg:top-[49%] lg:left-[37%] "
        />
        <img
          src={cardFront}
          alt="cardfront"
          className="absolute top-[55%] right-[18%] w-[60%] lg:w-[auto] lg:top-[18.5%] lg:left-[25%]"
        />
        <img
          src={cardLogo}
          alt=""
          className="absolute z-20 top-[63%] left-[25%] w-[10%] lg:top-[22%] lg:left-[28.5%]"
        />
        <h2 className="absolute z-20 top-[76%] left-[25%] text-white text-l lg:text-3xl lg:top-[29%] lg:left-[31%]">
          {!cardNumber ? "0000 0000 0000 0000" : cardNumber}
        </h2>
        <p className="absolute z-20 top-[92%] left-[25%] text-white text-sm lg:text-xl lg:top-[37%] lg:left-[31%]">
          {!name ? "Jane Appleseed" : name}
        </p>
        <span className="absolute z-20 top-[92%] left-[66%] text-white text-sm lg:text-xl lg:top-[37%] lg:left-[78%]">
          {!month ? "00" : month}/{!year ? "00" : year}{" "}
        </span>
        <span className="absolute z-20 top-[45.5%] left-[75%] text-white text-sm lg:top-[61%] lg:left-[88%] lg:text-2xl">
          {!cvv ? "0000" : cvv}
        </span>
      </div>

      {thank ? (
        <>
          <div className="h-[350px] mt-[90px] mx-8 lg:mt-[200px] lg:ml-[200px] lg:w-[390px] lg:flex lg:flex-col lg:justify-between">
            <h3 className="text-sm pb-1 lg:text-xl">Cardholder name</h3>
            <input
              type="text"
              name="name"
              value={name}
              onChange={setCard}
              placeholder="eg:Jane Appleseeder"
              className={
                !nameSpan
                  ? "border border-gray-400 rounded py-2 px-2 pr-7 lg:pr-10 mb-4 lg:w-[100%] "
                  : "border border-red-500 rounded py-2 px-2 pr-7 lg:pr-10 mb-1 lg:w-[100%]"
              }
            />
            <span className="text-sm text-red-500">{nameSpan && nameSpan}</span>
            <h3 className="text-sm pb-1 lg:text-xl">Cardholder Number</h3>
            <input
              type="text"
              name="number"
              value={cardNumber}
              onChange={setCard}
              placeholder="eg:1234 5678 1234 5678"
              className={
                !cardNumberSpan
                  ? "border border-gray-400 rounded py-2 px-2 pr-7 lg:pr-10 mb-4 lg:w-[100%]"
                  : "border border-red-500 rounded py-2 px-2 pr-7 lg:pr-10 mb-1 lg:w-[100%]"
              }
            />
            <span className="text-sm text-red-500">
              {cardNumberSpan && cardNumberSpan}
            </span>
            <div className="flex p-1">
              <div className="">
                <h3 className="text-sm pb-2 lg:text-xl">Exp date (mm/yy)</h3>
                <input
                  type="text"
                  name="MM"
                  onChange={setCard}
                  placeholder="MM"
                  className={
                    !monthSpan
                      ? "border border-gray-400 w-[50px] mr-2 rounded"
                      : "border border-red-600 w-[50px] mr-2 rounded mb-2"
                  }
                />
                <input
                  type="text"
                  name="YY"
                  onChange={setCard}
                  placeholder="YY"
                  className={
                    !yearSpan
                      ? "border border-gray-400 w-[50px] rounded "
                      : "border border-red-600 w-[50px] rounded mb-2"
                  }
                />
                <span className="text-sm text-red-500 pt-1 block">
                  {(monthSpan && monthSpan) || (yearSpan && yearSpan)}
                </span>
              </div>
              {/**MM/YY */}
              <div className="pl-4">
                <h3 className="text-sm pb-1 lg:text-xl">CVC</h3>
                <input
                  type="text"
                  name="cvc"
                  onChange={setCard}
                  placeholder="eg:222"
                  className={
                    !cvvSpan
                      ? "border border-gray-400 w-[70px]  rounded"
                      : "border border-red-600 w-[70px]  rounded mb-2"
                  }
                />
                <span className="text-sm text-red-500  block">
                  {cvvSpan && cvvSpan}
                </span>
              </div>
              {/**cvc end */}
            </div>
            <button
              onClick={handleSubmit}
              className=" text-white w-[100%] rounded px-2 py-2 mt-2 "
            >
              Confirm
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-around items-center h-[250px] m-[80px] lg:mt-[200px] lg:ml-[200px] lg:w-[390px] lg:flex lg:flex-col lg:justify-around lg:items-center">
            <img src={completeLogo} className="w-[20%] lg:w-[30%]" alt="" />
            <h3 className="text-l lg:text-xl ">Thank you</h3>
            <p>we have added your details</p>
            <button
              onClick={() => {
                setThank((prev) => !prev);
                window.location.reload();
              }}
              className=" text-white w-[100%] rounded px-2 py-2 mt-2 "
            >
              Continue
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
