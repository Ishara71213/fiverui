import React, { useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { gigData } from "../../data/gigData";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(!open);
  };

  return (
    <div className="gigs">
      <div className="container">
        <div className="headSection">
          <div className="breadcrumbs">
            <p>Fiver &gt; Graphic & Design</p>
          </div>
          <h1>AI Artists</h1>
          <p className="title-description">
            Explore the boundaries of art and technology with Fiverr&apos;s AI
            artists
          </p>
          <div className="sort">
            <div className="left">
              <p>Budget</p>
              <input
                className="budgetInput"
                placeholder="min"
                type="text"
                name="min"
              />
              <input
                className="budgetInput"
                placeholder="max"
                type="text"
                name="max"
              />
              <button>Apply</button>
            </div>
            <div className="right">
              Sort by
              <span>{sort === "sales" ? "Best Selling" : "Newest"}</span>
              <img
                src="/img/icons/down.png"
                alt="downArrow"
                onClick={() => setOpen(!open)}
              />
              <div className={`sortCat ${!open && "none"}`}>
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="gigContainer">
          {gigData.map((data) => (
            <GigCard item={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
