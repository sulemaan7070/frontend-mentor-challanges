import React from "react";
import dataDesktop from "../data.desktop";

function CreationsDesktop() {
  return (
    <>
      <section className="creations-desktop">
        <div className="title">
          <h2>Our Creations</h2>

          <button className="btn-desktop">SEE ALL</button>
        </div>
        <div className="grid-container">
          {dataDesktop.map((dataDesktopOne) => {
            const { id, imageUrl, title } = dataDesktopOne;
            return (
              <article key={id}>
                <div>
                  <img src={imageUrl} alt="creations card" />
                  <h3>{title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default CreationsDesktop;
