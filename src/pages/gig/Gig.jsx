import React from "react";
import Slide from "../../components/slide/Slide";
import Ratings from "../../components/ratings/Ratings";
import "./Gig.scss";
import Review from "../../components/review/Review";

const Gig = () => {
  const gigDescription = [
    {
      title: "About This Gig",
      desc: "About This Gig In this gig, I'll create amazing 3d character design, and digital art, using AI! for your personal or commercial use. I will make any style according to your request, All I need is your idea or image reference. If you don't have any of these, don't worry just INBOX me so that we can discuss and bring your design to life. What You Will Get: -100% Satisfaction -High Quality Art -Different Styles -Commercial Rights -Unlimited Revisions -Friendly Communication -Fast Delivery The Artwork can be used for: -Printings / Poster -Cover Art -Character Design -Concept Art -Logo Design -Digital Art NOTE : If you need extra Photoshop editing work then it's extra charges. Please contact me before placing your order! REGARDS: NA_365!",
    },
  ];
  return (
    <div className="gig">
      <div className="container">
        <div className="grid">
          <div className="left">
            <div className="breadcrumbs">
              <p>Fiver &gt; Graphic & Design</p>
            </div>
            <h1 className="gigName">
              I will do stunning 3d ai art character design, digital art using
              mid journey
            </h1>
            <div className="profile">
              <img
                className="profileImg"
                src="/download.jpg"
                alt="profilepic"
              />
              <span className="userName">Ishara</span>
              <p className="divider">|</p>
              <Ratings ratings={5} ratingCount={50} />
              {/* <div className="rating">
              <img className="star" src="/img/icons/star.png" alt="star" />
              <img className="star" src="/img/icons/star.png" alt="star" />
              <img className="star" src="/img/icons/star.png" alt="star" />
              <img className="star" src="/img/icons/star.png" alt="star" />
              <img className="star" src="/img/icons/star.png" alt="star" />
              <p className="ratingNum">5</p>
              <div className="totalRatings">(20)</div>
            </div> */}
              <div className="ordersQueue">7 Orders in Queue </div>
            </div>
            <div className="gigImgSlider">
              <Slide slidesToShow={1} arrowsScroll={1}>
                <img
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/303435398/original/ed11a940da975ec21ffb6f72cc1c6da16e89401d/do-stunning-3d-ai-art-character-design-digital-art-using-mid-journey.jpg"
                  alt="gigImg1"
                />
                <img
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/303435398/original/3986c2fac1673e4d7118ce14489463b6b56f7ef0/do-stunning-3d-ai-art-character-design-digital-art-using-mid-journey.jpg"
                  alt="gigImg2"
                />
                <img
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/303435398/original/ad57c0c7e9eafcf62a86f129c401c3e0c97ee23f/do-stunning-3d-ai-art-character-design-digital-art-using-mid-journey.jpg"
                  alt="gigImg3"
                />
              </Slide>
            </div>
            <div className="gigDescription">
              <h2 className="title">{gigDescription[0].title}</h2>
              <p className="desc">{gigDescription[0].desc}</p>
            </div>
            {/* -----------------seller details ---------------------------------------- */}
            <h1 className="aboutTheSeller">About The Seller</h1>
            <section className="profileCard">
              <div className="sellerInfo">
                <img src="/download.jpg" alt="" className="profileImg" />
                <div className="details">
                  <h2 className="sellerName">Ishara</h2>
                  <p className="services">
                    Web Designing, WordPress, Web Development,Logo Design
                  </p>
                  <div className="rating">
                    <Ratings ratings={5} ratingCount={50} />
                  </div>
                  <button className="contactBtn">Contact Me</button>
                </div>
              </div>
              <div className="sellerDesc">
                <div className="top">
                  <ul className="content-wrapper">
                    <li className="content">
                      From
                      <strong>Sri lanka</strong>
                    </li>
                    <li className="content">
                      Member since
                      <strong>Feb 2019</strong>
                    </li>
                    <li className="content">
                      Avg. response time
                      <strong>1 hour</strong>
                    </li>
                    <li className="content">
                      Last delivery
                      <strong>about 1 hour</strong>
                    </li>
                    <li className="content">
                      Languages
                      <strong>English, Sinhala</strong>
                    </li>
                  </ul>
                </div>
                <hr className="devider" />
                <div className="bottom">
                  <p>
                    We are a Professional WordPress Designer & Developer with 5+
                    years of industry experience. We are very keen to share our
                    expertise in WordPress globally and help out those who don t
                    know about WordPress but want to use it. We believe in a
                    simple, inspirational, unique and attractive design, with
                    having a fresh and positive vision, to make that possible.
                    We build the website of your dreams because customer
                    satisfaction is our first priority.
                  </p>
                </div>
              </div>
            </section>
            <section className="reviews-wrap">
              <Review
                userName="anthonybeierly"
                country="United States"
                ratings={5}
                duration="3 weeks ago"
                profileImgUrl="/download.jpg"
              />
              <Review
                userName="JohnSmith400"
                country="United States"
                ratings={4}
                duration="1 month ago"
                profileImgUrl="/download.jpg"
              />
              <Review
                userName="Andrew-James"
                country="United States"
                ratings={2}
                duration="3 months ago"
                profileImgUrl="/download.jpg"
              />
            </section>
          </div>
          <div className="right">
            <div className="titleAndPrice">
              <h2 className="title">Ai generated image</h2>
              <h2 className="price">$59.99</h2>
            </div>
            <p className="packageDesc">
              Selected three in 4000 x 4000 px + PNG with transparent background
              + PSD
            </p>
            <div className="deliveryDetails">
              <span className="deliveryAndRevision">
                <img
                  src="/img/icons/clock.png"
                  alt="delivery-time"
                  width={16}
                  height={16}
                />
                <p>2 Days Delivery</p>
              </span>
              <span className="deliveryAndRevision">
                <img
                  src="/img/icons/recycle.png"
                  alt="revision"
                  width={16}
                  height={16}
                />
                <p>3 Revisions</p>
              </span>
            </div>
            <ul className="services">
              <li className="service">
                <img
                  src="/img/icons/greencheck.png"
                  alt="check"
                  width={16}
                  height={16}
                />
                Prompt writing
              </li>
              <li className="service">
                <img
                  src="/img/icons/greencheck.png"
                  alt="check"
                  width={16}
                  height={16}
                />
                Prompt delivery
              </li>
              <li className="service">
                <img
                  src="/img/icons/greencheck.png"
                  alt="check"
                  width={16}
                  height={16}
                />
                Instructions
              </li>
              <li className="service">
                <img
                  src="/img/icons/greencheck.png"
                  alt="check"
                  width={16}
                  height={16}
                />
                Artwork delivery
              </li>
              <li className="service">
                <img
                  src="/img/icons/greencheck.png"
                  alt="check"
                  width={16}
                  height={16}
                />
                Image upscaling
              </li>
            </ul>
            <button className="continueBtn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
