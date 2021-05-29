import { useState } from 'react';
import ReactMapGL, { GeolocateControl } from "react-map-gl";
import './App.css';

function App() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 44.162217568752425,
    longitude: 12.272382205085062,
    zoom: 14
  });

  const props = {
    scrollZoom: false,
    attributionControl: false,
    dragRotate: false,
    mapboxApiAccessToken: "",
    onViewportChange: (nextViewport: any) => setViewport({ ...nextViewport, width: "100%", height: "100%" }),
  }

  return (
    <div className="App">
      <ReactMapGL
        {...props}
        {...viewport}
      >
        <GeolocateControl />
      </ReactMapGL>
    </div>
  );
}

export default App;
