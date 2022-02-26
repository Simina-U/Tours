import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [allInfo, setAllInfo] = useState(false);
  const readLess = `${info.substring(0, 100)}...`;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{allInfo ? info : readLess}</p>
        <button onClick={() => setAllInfo(!allInfo)}>
          {allInfo ? `Show Less` : `Read More`}
        </button>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Remove from view
        </button>
      </footer>
    </article>
  );
};

export default Tour;
