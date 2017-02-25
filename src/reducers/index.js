/* beautify ignore:start */
import {combineReducers} from 'redux';
import BooksReducer from './reducer_books.js';
import activeBook from './reducer_active_book.js';
/* beautify ignore:end */

const rootReducer = combineReducers({books: BooksReducer, activeBook: activeBook});
export default rootReducer;
