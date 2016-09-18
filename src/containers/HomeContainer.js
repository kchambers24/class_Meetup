import React, { Component, cloneElement } from 'react';
import Home from '../components/Home';

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {clickedMeetup: null}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(clickedMeetup) {
    this.setState({clickedMeetup});
    this.context.router.push('/home/details');
  }
  render() {
    return (
      <div>
        {cloneElement(this.props.children, {
          currentUser: this.props.currentUser,
          handleClick: this.handleClick,
          clickedMeetup: this.state.clickedMeetup
        })}
      </div>
    )
  }
}

HomeContainer.contextTypes = {router: React.PropTypes.object.isRequired};

export default HomeContainer;
