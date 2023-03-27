import React from "react";
import "./Ratings.scss";

const Ratings = ({ ratings, ratingCount }) => {
  const rating = [];

  for (let i = 1; i <= ratings; i++) {
    rating.push(i);
  }

  console.log(rating);

  return (
    <div className="rating">
      {rating.map((id) => (
        <img className="star" src="/img/icons/star.png" alt="star" key={id} />
      ))}
      <p className="ratingNum">{ratings}</p>
      {ratingCount && <div className="totalRatings">({ratingCount})</div>}
    </div>
  );
};

export default Ratings;
