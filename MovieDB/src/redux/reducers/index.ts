import searchReducer from './searchReducer';
import trendingReducer from './trendingReducer';
import bookmarksReducer from './bookmarksReducer';
import similarReducer from './similarReducer';

const rootReducer = {
  trending: trendingReducer,
  search: searchReducer,
  bookmarks: bookmarksReducer,
  similar: similarReducer,
};

export default rootReducer;
