import React, { useState, useEffect } from "react";
import "../App.css";
import Loader from "./Loader";

const HeroCarosel = () => {
  const [data, setData] = useState({});

  const [loading, isLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const url = process.env.REACT_APP_API_KEY;
      const data1 = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${url}&page=1&pageSize=5`
      );
      const data2 = await data1.json();
      setData({ data: data2.articles });

      isLoading(false);
    } catch (error) {
      console.log("Fetching error= " + error);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div
        id="carouselExampleCaptions"
        className="carousel slide m-2"
        style={{ height: "60vh" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={
                loading
                  ? `https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png`
                  : data.data[0].urlToImage
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>
                {loading ? `loading..` : data.data[0].description.toUpperCase()}
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={
                loading
                  ? `https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png`
                  : data.data[1].urlToImage
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>
                {loading
                  ? `loading..`
                  : data.data[1].description
                  ? data.data[1].description.toUpperCase()
                  : data.data[1].title.toUpperCase()}
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={
                loading
                  ? `https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png`
                  : data.data[2].urlToImage
              }
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>
                {loading
                  ? `loading..`
                  : data.data[2].description
                  ? data.data[2].description.toUpperCase()
                  : data.data[2].title.toUpperCase()}
              </h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HeroCarosel;
