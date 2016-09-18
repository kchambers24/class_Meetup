import React, { Component } from 'react';
import './Comment.css'

class CommentForm extends Component {

  handleSubmit(event) {
    console.log("I'm submitting")
    event.preventDefault()
    let author = localStorage.user
    let body = this.body
    this.props.addComment(author.value, body.value)
    event.target.elements[0].value = '';
  }

  render() {
    return(
      <form className="CommentForm" onSubmit={this.handleSubmit.bind(this)} style={{display: "flex", justifyContent: "center"}}>
        <input type="text" className="form-control" placeholder="Comment:" style={{margin: "0 0"}} ref={(input) => this.body = input}/>
        <button type="submit" className="btn btn-primary">Comment</button>
      </form>
    )
  }
}

export default CommentForm;
