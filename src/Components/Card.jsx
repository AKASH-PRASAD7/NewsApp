import React from "react";
import "../App.css";
const Card = (props) => {
  const limitWords = (text, limit) => {
    const words = text.split(" ");
    const limitedWords = words.slice(0, limit);
    return limitedWords.join(" ");
  };
  return (
    <div>
      <div className="card mb-4 shadow bg-dark top" style={{ width: "18rem" }}>
        <span className="badge rounded-pill bg-danger source">
          {props.source}
        </span>
        <img
          src={
            !props.image
              ? `https://www.newscaststudio.com/wp-content/uploads/2018/06/cnn-breaking-news-new-day.jpg`
              : props.image
          }
          className="card-img-top"
          style={{ height: "10rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-white">
            {limitWords(props.title, 13)}...
          </h5>
          <p className="card-text text1 ">{limitWords(props.desc, 14)}...</p>
          <p className="card-text">
            {" "}
            <small className=" text1">
              By {!props.author ? "Unknown" : props.author} on{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </p>

          <a
            target="_blank"
            rel="noreferrer"
            href={props.link}
            className="btn btn-success"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
