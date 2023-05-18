import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const Map = () => {
    const containerStyle = {
        width: '400px',
        height: '250px'
    };

    const center = {
        lat: 25.101086331278037,
        lng: 89.03498708465926
    };

    const markerPositions = [
        { lat: 25.101086331278037, lng: 89.03498708465926 }
    ];

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={containerStyle}
            >
                {markerPositions.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
