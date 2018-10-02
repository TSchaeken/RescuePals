import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default class SimpleExample extends Component {
  state = {
    lat: 33.5927081,
    lng: -111.7087532,
    zoom: 16
  };

  render() {
    const position: any = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <a href="http://www.palsinnpetresort.com/">Pal's Inn Pet Resort</a>
            <br />
            11669 N. Saguaro Blvd. 
            <br />            
            Fountain Hills, AZ. 85268
          </Popup>
        </Marker>
      </Map>
    );
  }
}
