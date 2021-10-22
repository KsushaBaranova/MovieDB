import filmInfoReducer from './filmInfoReducer';
import searchReducer from './searchReducer';
import trendingReducer from './trendingReducer';
import bookmarksReducer from './bookmarksReducer';

const rootReducer = {
  trending: trendingReducer,
  search: searchReducer,
  info: filmInfoReducer,
  bookmarks: bookmarksReducer,
};

export default rootReducer;
