import {
  SEARCH_RESULT,
  SORT_BY_ALPHABET,
  SORT_BY_DATE,
  SORT_BY_QUALITY,
} from "./ActionTypes";

export const searchResult = (payload) => ({
        type: SEARCH_RESULT,
        payload, 
} );

export const sortAlphabet = () => ( {
    type: SORT_BY_ALPHABET,
} );

export const sortDate = () => ( {
    type: SORT_BY_DATE,
} ); 

export const sortQuality = () => ({
  type: SORT_BY_QUALITY,
} );

