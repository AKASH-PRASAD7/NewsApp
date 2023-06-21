import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardConatiner = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data1 = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data2 = await data1.json();
      setData(data2);
      console.log(data);
    } catch (error) {
      console.log("Fetching error= " + error);
    }
  };

  return (
    <div
      className=" d-flex justify-content-evenly flex-wrap mx-auto py-5"
      style={{ width: "90%" }}
    >
      {/* {data.articles.map((element, index) => {
        return (
          <Card
            key={index}
            title={element.title}
            desc={element.description}
            link={element.url}
            image={element.urlToImage}
          />
        );
      })} */}
    </div>
  );
};

export default CardConatiner;