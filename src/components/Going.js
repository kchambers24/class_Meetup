import React, { Component } from 'react'
import '../config/api.js'
import base from '../config/base.js'
import { getAllTechMeetups, getUpcomingMeetups, getPastMeetups, getMeetupPeeps } from '../config/api'


class Going extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cohort: [],
      membersGoing: []
    }
  }
    componentDidMount () {
      this.rebaseRef = base.syncState('cohort', {
        context: this,
        state: 'cohort'
      })
      getMeetupPeeps(localStorage.token, this.props.eventId)
      .then(response => this.setState({membersGoing: response}));
    }
    componentWillUnmount () {
      base.removeBinding(this.rebaseRef)
    }

  render () {
    return (
      <div>
        <h2>Current Peeps Going</h2>
        <ul className="cohort" style={{listStyleType: "none"}}>
          {this.state.membersGoing.filter
            (member => this.state.cohort[member.member.member_id]).map
            ((member, index) => <li key={index}>{member.member.name}</li>)}
        </ul>
      </div>
    )
  }

}

export default Going;
