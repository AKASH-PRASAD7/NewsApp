import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardConatiner = () => {
  const [data, setData] = useState({});
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const url = process.env.REACT_APP_API_KEY;
      const data1 = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${url}&page=1&pageSize=10`
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
      <h1 className="w-25 mx-auto ">TOP HEADLINES</h1>
      <div
        className=" d-flex justify-content-evenly flex-wrap mx-auto py-5"
        style={{ width: "90%" }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.data.map((element, index) => {
            return (
              <Card
                key={index}
                title={element.title ? element.title : ""}
                desc={element.description ? element.description : ""}
                link={element.url}
                image={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://images.moneycontrol.com/static-mcnews/2022/10/deal-770x433.jpg"
                }
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default CardConatiner;
