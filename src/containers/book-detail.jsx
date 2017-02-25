import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if (this.props.activeBook) {
            return (
                <div>
                    <div>{this.props.activeBook.title}</div>
                    <div>{this.props.activeBook.pages}</div>
                </div>
            )
        } else {
            return (
                <div>
                    please select something ...
                </div>
            )
        };
    }

}
function mapStateToProps(state) {
    //property of the object - how it will appear on the props object of the container
    // value of the object - specific on index.js of reducers.
    return {activeBook: state.activeBook}
}

export default connect(mapStateToProps)(BookDetail);
