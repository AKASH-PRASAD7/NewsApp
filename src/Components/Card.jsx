import React from "react";

const Card = (props) => {
  const limitWords = (text, limit) => {
    const words = text.split(" ");
    const limitedWords = words.slice(0, limit);
    return limitedWords.join(" ");
  };
  return (
    <div>
      <div className="card mb-4 shadow" style={{ width: "18rem" }}>
        <img
          src={props.image}
          className="card-img-top"
          style={{ height: "10rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{limitWords(props.title, 13)}...</h5>
          <p className="card-text">{limitWords(props.desc, 14)}...</p>
          <a target="_blank" href={props.link} className="btn btn-success">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
