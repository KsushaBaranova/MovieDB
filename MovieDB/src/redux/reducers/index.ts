import bookmarksReducer from './bookmarksReducer';
import filmsReducer from './filmsReducer';

const rootReducer = {
  films: filmsReducer,
  bookmarks: bookmarksReducer,
};

export default rootReducer;
