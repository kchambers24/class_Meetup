import React, { Component } from 'react';
import moment from 'moment';

const grey = "rgba(0,0,0,.4)"
let styles = {
  listItem: {
    display: "flex",
    border: "1px solid rgba(0,0,0,.3)",
    borderRadius: "4px",
    margin: "10px 0"
  },
  divs: {
    display: "flex",
    flexDirection: "column"
  },
  rsvpCount: {
    fontSize: "15px",
    color: grey
  },
  h2: {
    display: "inline-block"
  }
}

const Event = props => {
  let { info, handleClick } = props;
  return (
    <li style={styles.listItem}>
      <div className="time-container">
        <h2
          onClick={handleClick.bind(this, info)}
          style={{cursor: "pointer", color: grey, fontSize: "17px"}}>
          {moment(info.time).format('LT')}
        </h2>
      </div>
      <div style={{...styles.divs, width: "90%"}}>
        <h2
          onClick={handleClick.bind(this, info)}
          style={{cursor: "pointer", color: grey}}>
          {moment(info.time).format('MMMM Do')}
        </h2>
        <h2
          onClick={handleClick.bind(this, info)}
          style={{cursor: "pointer"}}>{info.name}
        </h2>
        <h2
          style={{...styles.rsvpCount, color: grey}}>
          {info.yes_rsvp_count} {info.group.who} going!
        </h2>
      </div>
    </li>
  )
}

export default Event;
