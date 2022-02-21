import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  searchResult,
  sortAlphabet,
  sortDate,
  sortQuality,
} from "../store/Actions";
import { Navbar } from "./Navbar";

export const Search = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q");
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getResult();
  }, []);

  const getResult = () => {
    axios
      .get(`https://fast-reef-22226.herokuapp.com/data?q=${query}`)
      .then((res) => {
        
        dispatch(searchResult(res.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSortAlbhabet = () => {
    dispatch(sortAlphabet());
  };

  const handleSortDate = () => {
    dispatch(sortDate());
  };

  const handleSortQuality = () => {
    dispatch(sortQuality());
  };

  return (
    <div id="searchpage">
      <Navbar input={query} />
      <div id="filter-sort">
        <button id="sort-alphabetically" onClick={handleSortAlbhabet}>
          Sort Alphabet
        </button>
        <button id="sort-by-date" onClick={handleSortDate}>
          Sort by Date
        </button>
        <button id="sort-by-quality" onClick={handleSortQuality}>
          Sort by quality
        </button>
      </div>
          <div id="search-result">
              
              { data.map( ( el, i ) =>
              {
            
          return (
            <div className="result" key={i}>
              <Link className="title" to={`/page/${el.id}`}>
                {el.title}
              </Link>
              <p className="author">{el.author}</p>
              <p>Creation Date: </p>
              <p className="creation-date">{el.creation_date}</p>
              <p>Quality %: </p>
              <p className="quality">{el.quality}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
