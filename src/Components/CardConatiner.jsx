import React, { useState, useEffect } from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const CardConatiner = ({ category, country }) => {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [length, setLength] = useState(0);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);
  const url = process.env.REACT_APP_API_KEY;
  const fetchData = async () => {
    try {
      const data1 = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${url}&page=${page}&pageSize=8`
      );
      const data2 = await data1.json();
      setData(data2.articles);

      setTotal(data2.totalResults);
      setLength(data.length);
      isLoading(false);
    } catch (error) {
      console.log("Fetching error= " + error);
    }
  };

  const fetchMoreData = async () => {
    isLoading(true);
    const data1 = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${url}&page=${
        page + 1
      }&pageSize=8`
    );
    setPage(page + 1);
    const data2 = await data1.json();
    setLength(data.length);
    const newData = data2.articles;
    setData((prev) => [...prev, ...newData]);

    isLoading(false);
  };
  function capitalizeFirst(string) {
    if (typeof string !== "string") {
      throw new Error("Input is not a string");
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <h1 className="w-full mt-4 text-white text-center">{`Top Headlines On ${capitalizeFirst(
        category
      )}`}</h1>
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={length}
        next={fetchMoreData}
        hasMore={data.length !== total}
        loader={<Loader />}
      >
        <div
          className=" d-flex justify-content-evenly flex-wrap mx-auto py-5"
          style={{ width: "90%" }}
        >
          {data.map((element, index) => {
            return (
              <Card
                key={index}
                title={element.title ? element.title : ""}
                desc={element.description ? element.description : ""}
                source={element.source.name}
                author={element.author}
                date={element.publishedAt}
                link={element.url}
                image={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://images.moneycontrol.com/static-mcnews/2022/10/deal-770x433.jpg"
                }
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default CardConatiner;
