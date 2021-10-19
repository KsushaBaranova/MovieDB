import filmInfoReducer from './filmInfoReducer';
import searchReducer from './searchReducer';
import trendingReducer from './trendingReducer';

const rootReducer = {
  trending: trendingReducer,
  search: searchReducer,
  info: filmInfoReducer,
};

export default rootReducer;
