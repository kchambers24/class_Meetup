import axios from 'axios';


function getAllTechMeetups(accessToken) {
  return axios.get(`https://api.meetup.com/2/open_events?category=34&zip=32801&access_token=${accessToken}`)
  .then(response => response.data.results)
}

function getUpcomingMeetups(accessToken) {
  return axios.get(`https://api.meetup.com/2/events?member_id=self&rsvp=yes&status=upcoming&access_token=${accessToken}`)
  .then(response => response.data.results)
}

function getPastMeetups(accessToken) {
  return axios.get(`https://api.meetup.com/self/events?fields=status=past&member_id=self&access_token=${accessToken}`)
  .then(response => response.data.filter(meetup => meetup.status === 'past'))
}

function onClickRSVP(event_id, rsvp) {
   axios.post(`https://api.meetup.com/2/rsvp?event_id=${this.props.clickedMeetup.id}&rsvp=yes&access_token=${localStorage.token}`)
  .then(function(response) {
    return response;
  })
  this.setState({
    rsvp: !this.state.rsvp
  })
}

function getMeetupPeeps(accessToken, eventId) {
  return axios.get(`https://api.meetup.com/2/rsvps?&sign=true&photo-host=public&rsvp=yes&event_id=${eventId}&page=20&access_token=${accessToken}`)
  .then(response => response.data.results)
}

export { getAllTechMeetups, getUpcomingMeetups, getPastMeetups, onClickRSVP, getMeetupPeeps };
