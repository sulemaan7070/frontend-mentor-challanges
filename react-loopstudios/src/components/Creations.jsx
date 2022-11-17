import React from "react";
import data from "../data.mobile";

function Creations() {
  return (
    <>
      <section className="creations-mobile">
        <h2>Our Creations</h2>
        {data.map((dataOne) => {
          const { id, imageUrl, title } = dataOne;
          return (
            <article key={id}>
              <div>
                <img src={imageUrl} alt="creations card" />
                <h3>{title}</h3>
              </div>
            </article>
          );
        })}
        <div className="btn-container">
          <button className="btn">SEE ALL</button>
        </div>
      </section>
    </>
  );
}

export default Creations;
