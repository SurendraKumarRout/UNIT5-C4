import {
  SEARCH_RESULT,
//   FILTER_EXPICIT,
  SORT_BY_ALPHABET,
  SORT_BY_DATE,
  SORT_BY_QUALITY,
} from "./ActionTypes";

const init = {
  data: [],
};

export const Reducer = ( store = init, { type, payload } ) => 
{
  
    switch ( type )
    {

    case SEARCH_RESULT:
      return { ...store, data: payload };
        
    case SORT_BY_ALPHABET:
            return { ...store, data: [ ...sortAlphabet( store.data ) ] };
        
    case SORT_BY_DATE:
            return { ...store, data: [ ...sortDate( store.data ) ] };
        
    case SORT_BY_QUALITY:
            return { ...store, data: [ ...sortQuality( store.data ) ] };
        
        
    default:
            return { ...store };
  }
};

 const sortAlphabet = (data) => {
  let arr = data.sort((x, y) => {
      return x.title > y.title ? 1 : x.title < y.title ? -1 : 0;
  });

  return arr;
};

const sortDate = (data) => {
  let arr = data.sort((x, y) => {
    return x.creation_date > y.creation_date
      ? 1
      : x.creation_date < y.creation_date
      ? -1
      : 0;
  });

  return arr;
};

const sortQuality = (data) => {
  let arr = data.sort((x, y) => {
    return y.quality - x.quality;
  });

  return arr;
};

// const filter = (data) => {
//   let arr = data.filter((el) => el.expilcit === true);

//   return arr;
// };
