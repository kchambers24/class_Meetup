import React, { Component } from 'react'
import CommentBox from './CommentBox'
import moment from 'moment'
import axios from 'axios';
import Directions from './Directions'
import Going from './Going'
import { onClickRSVP } from '../config/api.js'


class Details extends Component {
  constructor(){
    super();
    this.state = {
      rsvp: false
    }
  }

  render() {

    let buttonText = "RSVP"
    if (this.state.rsvp) {
      buttonText = "Change RSVP"
    }
    console.log(this.props.clickedMeetup);
    return (
      <div>
        <h2>{this.props.clickedMeetup.group.name}</h2>
        <p>{this.props.clickedMeetup.venue.address_1}</p>
        <p>{this.props.clickedMeetup.venue.city}</p>
        <p>{moment(this.props.clickedMeetup.time).format ('MMMM Do')}</p>
        <button type="submit" onClick={onClickRSVP.bind(this)} className="btn btn-success">{buttonText}</button>
        <CommentBox meetupId={this.props.clickedMeetup.id}/>
        <Directions endLat={this.props.clickedMeetup.venue.lat} endLon={this.props.clickedMeetup.venue.lon}/>

          <div className="going">
            <Going eventId={this.props.clickedMeetup.id}/>
          </div>
      </div>

    );
  }
}

export default Details;
