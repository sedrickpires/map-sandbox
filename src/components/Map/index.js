import React, { useEffect, useState, useCallback } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { toggleMenu } from '../../reducers/App';


const MenuControl = ({ clickHandler }) => {
  return <div className="leaflet-top leaflet-right">
      <div className="leaflet-control leaflet-bar menu-control">
        <Button shape="circle" size="large" icon={<MenuOutlined />} onClick={clickHandler}></Button>
      </div>
  </div>
}



const MapComponent = ({ toggleMenu, markers }) => {
  const [mapInstance, setMapInstance] = useState(null);

  const handleMenuClick = () => {
    toggleMenu()
  }

  useEffect(()=>{
    
    if (mapInstance && markers) {
      // Handle Map view if only marker has to be rendered.
      if (markers.length === 1 && markers[0].visible){
        mapInstance.setView([markers[0].latitude, markers[0].longitude], mapInstance.getZoom())
      }else if (  markers.length > 1) { // Handle map view if multiple markers have to be rendered.
        let newMapBounds = [];
        markers.forEach(m => {
          if (m.visible){
            newMapBounds.push([m.latitude, m.longitude]);
          }
        });
        mapInstance.fitBounds(newMapBounds);
      }
    }
    
  },[markers, mapInstance]);

  const mapInitCallback = useCallback((map)=>{
    setMapInstance(map);
  },[])

  console.log("Markers", markers);
  return (
    <div>
      <MapContainer center={[45.4, -75.7]} zoom={12} whenCreated={mapInitCallback}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          markers?.length && markers.map(m => m.visible ? <Marker key={m.id} position={[m.latitude, m.longitude]}/> : null)
        }
        <MenuControl clickHandler={handleMenuClick}/>
      </MapContainer>
    </div>
  );
};



const mapStateToProps = state => ({
  markers: state.markers,
});

const mapDispatch = { toggleMenu }

export default connect(mapStateToProps, mapDispatch)(MapComponent);
