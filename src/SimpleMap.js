import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class SimpleMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 51.049999,
          lng: -114.066666
        }}
        zoom={15}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA2mqBLYAg35ZnYD8XJePzXfxhQSr_IJrU"
})(SimpleMap);
