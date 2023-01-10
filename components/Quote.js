import React, { Fragment, useCallback, useEffect, useState } from "react";
import Card from "./Card";
import classes from "./Quote.module.css";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../Slices/quoteSlice";

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const [value, setValue] = useState("-");

  const getquote = useCallback(async () => {
    const get = await fetch("https://api.quotable.io/random");
    const getData = await get.json();
    setQuote(getData);

    console.log(getData);
  },[]);


  useEffect(() => {
    getquote();
  }, [counter]);

  const onAddBookmark = () => {
    dispatch({ type: add, input: quote });
  };

  console.log(quote);

  const searchByTag = async (input) => {
    const get = await fetch(`https://api.quotable.io/random?tags=${input}`);
    const getData = await get.json();
    setQuote(getData);
    setValue("-");
  };

  return (
    <Fragment>
      <div className={classes.box}>
        <Card
          quote={quote.content}
          author={quote.author}
          bookmark={
            <button onClick={onAddBookmark} className={classes.addbm}>
              <img
                className={classes.image}
                src="https://cdn-icons-png.flaticon.com/512/3916/3916593.png"
              />{" "}
            </button>
          }
        />
        <select
          value={value}
          onChange={() => {
            searchByTag(event.target.value);
          }}
          className={classes.drpdn}
        >
          <option value="-">-</option>
          <option value={quote.tags}>{quote.tags}</option>
        </select>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          className={classes.but}
        >
          Next Quote
        </button>
      </div>
    </Fragment>
  );
};

export default Quote;
