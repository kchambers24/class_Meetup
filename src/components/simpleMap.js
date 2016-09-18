import React, {Component} from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function SimpleMap (props) {
  return (
    <section style={{height: "400px", width: "450px"}}>
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={8}
            defaultCenter={{ lat: 28.5447246, lng: -81.37842429999999 }}
            onClick={props.onMapClick}
          >
            })}
          </GoogleMap>
        }
      />
    </section>
  );
}
