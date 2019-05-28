import React from "react";
import { Map, GoogleApiWrapper as googleApiWrapper } from "google-maps-react";
const mapStyles = {
  height: "100%"
};
const Maps = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lng: 3.4145,
        lat: 6.4443
      }}
    />
  );
};
export default googleApiWrapper({
  apiKey: "AIzaSyDTpDMmyWINZhlX-zFNEXltuDmQ9WLhBuQ"
})(Maps);
