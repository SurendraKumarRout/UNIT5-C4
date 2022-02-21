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

const sortAlphabet = ( data ) => 
{
  let arr = data.sort((a, b) => {
      return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
  });

  return arr;
};

const sortDate = ( data ) => 
{
  let arr = data.sort((a, b) => {
    return a.creation_date > b.creation_date
      ? 1
      : a.creation_date < b.creation_date
      ? -1
      : 0;
  });

  return arr;
};

const sortQuality = (data) => 
{
  let arr = data.sort((a, b) => {
    return b.quality - a.quality;
  });

  return arr;
};
