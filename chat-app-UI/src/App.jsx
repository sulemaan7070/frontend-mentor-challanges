import { useState } from "react";
import "./App.css";
import avatar from "./images/avatar.jpg";
import dogImg1 from "./images/dog-image-1.jpg";
import dogImg2 from "./images/dog-image-2.jpg";
import dogImg3 from "./images/dog-image-3.jpg";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <main>
        <div className="right-decor">
          <div className="chat-screen">
            <div className="contact-info">
              <img className="avatar" src={avatar} alt="" />

              <div className="name">
                <h6>Samuel Green</h6>
                <p>Available to Walk</p>
                <div className="notch"></div>
              </div>
              <div className="more-svg">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path>
                </svg>
              </div>
              <div className="back-nav">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                  ></path>
                </svg>
              </div>
            </div>
            {/**chat body */}
            <div className="chat-body">
              <div className="other-person">
                {/**some animation to make it look nice */}
                <motion.p
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 1.0,
                  }}
                  viewport={{ once: true }}
                >
                  That sounds great. I’d be happy to discuss more.
                </motion.p>
                <motion.p
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 1.3,
                  }}
                  viewport={{ once: true }}
                >
                  That sounds great. I’d be happy to discuss more.
                </motion.p>
              </div>
              <div className="first-person">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: [0.3, 0.5, 0.7, 1.0],
                    y: 0,
                  }}
                  animate={{ y: [100, 200, 0, 100] }}
                  transition={{
                    ease: "easeOut",
                    duration: 2.0,
                  }}
                  viewport={{ once: true }}
                  className="dog-imgs-div"
                >
                  <img src={dogImg1} alt="dog-img1" />
                  <img src={dogImg2} alt="dog-img2" />
                  <img src={dogImg3} alt="dog-img3" />
                </motion.div>
                <motion.p
                  initial={{
                    opacity: 0,
                    x: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 2.2,
                  }}
                  viewport={{ once: true }}
                >
                  Here are a few pictures she's a happy girl!!
                </motion.p>
                <motion.p
                  initial={{
                    opacity: 0,
                    x: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 2.7,
                  }}
                  viewport={{ once: true }}
                >
                  Can you make it?
                </motion.p>
              </div>
              <div className="negotiate">
                <motion.p
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 3.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  She looks so happy! The time we discussed works. How long
                  shall I take her out for?
                </motion.p>
                {/**price animate section */}
                {/**price animate section */}
                {/**price animate section */}
                {/**price animate section */}
                <motion.p
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 3.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <input type="radio" name="price" value="29" /> 30 minutes walk{" "}
                  <motion.span
                    initial={{
                      opacity: 1,
                    }}
                    animate={{
                      scale: [1, 1.2, 1.3, 1.4, 1.3, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,

                      ease: "easeIn",
                    }}
                    className="price"
                  >
                    $29
                  </motion.span>
                </motion.p>

                <motion.p
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 3.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <input type="radio" name="price" value="49" /> 1 hr walk{" "}
                  <motion.span
                    initial={{
                      opacity: 1,
                    }}
                    animate={{
                      scale: [1, 1.2, 1.3, 1.4, 1.3, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,

                      ease: "easeIn",
                    }}
                    className="price"
                  >
                    $49
                  </motion.span>
                </motion.p>
              </div>
              <div className="typing-space">
                <input
                  className="type"
                  type="text"
                  placeholder="type a message..."
                />
                <button className="send-button">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 256 512"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/**end of chat screen */}
        <div className="hero-info">
          <h1>Simple booking</h1>
          <p>
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
        <div className="bottom-decor" />
      </main>
    </div>
  );
}

export default App;
