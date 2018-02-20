import React, { Component } from 'react'


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return (
            <div>
            <Map google={this.props.google} zoom={14}>

                <Marker
                  name={'Current location'} />
                <InfoWindow >
                    <div>
                        <h1>place</h1>
                    </div>
                </InfoWindow>
            </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('Key')
})(MapContainer)


