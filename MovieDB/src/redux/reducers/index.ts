import searchReducer from './searchReducer';
import trendingReducer from './trendingReducer';

const rootReducer = {
  trending: trendingReducer,
  search: searchReducer,
};

export default rootReducer;
