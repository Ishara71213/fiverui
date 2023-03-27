import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

const GigCard = ({ item }) => {
  return (
    <div className="gigCard">
      <Link to="/gig/123" className="link">
        <img src={item.gigImg} alt="gig-img" />
        <div className="info">
          <div className="user">
            <img src={item.profileImg} alt="profile-img" />
            <div className="username-level">
              <h3 className="userName">{item.userName}</h3>
              <h3 className="userLevel">{item.userLevel}</h3>
            </div>
          </div>
          <p className="description">{item.desc}</p>
          <div className="ratings">
            <img src="img/icons/star.png" alt="star-img" />
            <p className="rate">{item.rating}</p>
            <p className="rateCtn">{item.ratingCtn}</p>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="img/icons/heart.png" alt="heartImg" />
          <div className="price">
            <p>STARTING AT</p>
            <h3>
              {item.price}
              <sup>99</sup>
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GigCard;
