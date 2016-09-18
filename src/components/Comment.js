import React, { Component } from 'react';
import moment from 'moment';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {/* <p className="comment-header">{this.props.author}</p> */}
        <p className="comment-body">{this.props.author}: {this.props.body} {moment(this.props.time).calendar()}</p>
      </div>
    )
  }
}


export default Comment;
