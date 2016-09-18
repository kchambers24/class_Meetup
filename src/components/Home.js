import React, {Component} from 'react'
import Event from './Event'
import makeAuthenticatedRequest from '../config/api'
import base from '../config/base'
import { getAllTechMeetups, getUpcomingMeetups, getPastMeetups } from '../config/api'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: {
        all: [],
        rsvp: [],
        past: []
      },
      selected: 'all'
    }
  }

  componentDidMount() {
    let accessToken = this.props.location.hash.split("access_token=")[1].split("&")[0];
    localStorage.setItem('token', accessToken);
    getAllTechMeetups(accessToken)
    .then(response => this.setState({meetups: Object.assign(this.state.meetups, {all: response})}));
    getUpcomingMeetups(accessToken)
    .then(response => this.setState({meetups: Object.assign(this.state.meetups, {rsvp: response})}));
    getPastMeetups(accessToken)
    .then(response => this.setState({meetups: Object.assign(this.state.meetups, {past: response})}));
  }
  handleClick(selected) {
    this.setState({selected});
  }

  render() {
    let events = this.state.meetups[this.state.selected];
    let eventListings = events.map(listing => (
      <Event
        key={listing.id}
        info={listing}
        handleClick={this.props.handleClick}/>));
    return (
      <div style={{display: "flex"}}>
        <section className="events">
          <ul className="events-container">{eventListings}</ul>
        </section>
        <section className="meetups-filter">
          <ul style={{listStyleType: "none", width: "40%", border: "1px solid rgba(0,0,0,.3)", padding: "0", maxHeight: "200px", display: "inline-block"}}>
            <li onClick={this.handleClick.bind(this, 'all')} style={this.state.selected === 'all' ? {borderLeft: "3px solid blue", color: "blue", fontWeight: "bold"} : null}>All Tech Meetups</li>
            <li onClick={this.handleClick.bind(this, 'rsvp')} style={this.state.selected === 'rsvp' ? {borderLeft: "3px solid blue", color: "blue", fontWeight: "bold"} : null}>My Upcoming Meetups</li>
            <li onClick={this.handleClick.bind(this, 'past')} style={this.state.selected === 'past' ? {borderLeft: "3px solid blue", color: "blue", fontWeight: "bold"} : null}>My Previous Meetups</li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Home;
