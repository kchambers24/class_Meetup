import React, {Component} from 'react'
import {initMap, calculateAndDisplayRoute} from '../lib/MapStuff'
import $ from 'jquery'

class Directions extends Component {
  constructor(){
       super();
       this.state = {
         beginLat: '28.5447246',
         beginLon: '-81.37842429999999'
       }
     }
   componentDidMount() {
     initMap(this.refs.map, this.refs.rightPanel, this.refs.floatingPanel, this.refs.begin, this.refs.end)
     let self = this;
     navigator.geolocation.getCurrentPosition(function(position) {
       self.setState({
         beginLat: position.coords.latitude,
         beginLon: position.coords.longitude
       })
      console.log(position.coords.latitude, position.coords.longitude);
      console.log(self.state.beginLat, self.state.beginLon);
      calculateAndDisplayRoute(`${self.state.beginLat} ${self.state.beginLon}`, `${self.props.endLat} ${self.props.endLon}`);
     });

   }
    render() {
        return (
            <div style={{width:"900px", margin: "auto"}}>
                <div ref="floatingPanel" style={{
                    opacity: "0",
                    position: "absolute",
                    top: "10px",
                    left: "25%",
                    zIndex: "5",
                    backgroundColor: "#fff",
                    padding: "5px",
                    border: "1 px solid #999",
                    textAlign: "center",
                    fontFamily: 'Roboto',
                    lineHeight: "30px",
                    paddingLeft: "10px",
                    background: "#fff",
                    padding: "5px",
                    fontSize: "14px",
                    fontFamily: "Arial",
                    border: "1 px solid #ccc",
                    boxShadow:" 0 2px 2px rgba(33, 33, 33, 0.4)",
                    display: "none"
                }}>
                    <strong>Start:</strong>
                    <input type="text" ref="begin" style={{}}/>
                    <br/>
                    <strong>End:</strong>
                    <input type="text" ref="end" style={{}}/>
                </div>
                <div ref="rightPanel" style={{
                    fontFamily: 'Roboto',
                    lineHeight: "30px",
                    paddingLeft: "10px",
                    height: "100%",
                    float: "right",
                    width: "390px",
                    overflow: "auto",
                }}></div>
                <div ref="map" style={{
                    width: "500px",
                    height: "500px"
                }}></div>
            </div>

        );
    }
}

export default Directions;
