import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item" onClick= {() => this.props.selectBook(book)}>{book.title}</li>
            )
        })
    }
    render() {
        return (
            <ul className="list-group col-sm-4">{this.renderList()}</ul>
        )
    }
}
//maps the state of all books to the state of this container
function mapStateToProps(state) {
  //property of the object - how it will appear on the props object of the container
  // value of the object - specific on index.js of reducers. 
    return {books: state.books}
}

//maps the selected book to the props of the container
function mapDispatchToProps(dispatch) {
    //calls all actions, and returns the actions  result to all reducers.
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}
//promote book from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
