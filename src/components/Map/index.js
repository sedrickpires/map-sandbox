import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { toggleMenu } from '../../reducers/App';

const MenuControl = ({clickHandler}) => {
  return <div className="leaflet-top leaflet-right">
      <div className="leaflet-control leaflet-bar menu-control">
        <Button shape="circle" size="large" icon={<MenuOutlined />} onClick={clickHandler}></Button>
      </div>
  </div>
}

const MapComponent = ({ toggleMenu }) => {

  const handleMenuClick = () => {
    toggleMenu()
  }

  return (
    <div>
      <MapContainer center={[45.4, -75.7]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MenuControl clickHandler={handleMenuClick}/>
      </MapContainer>
    </div>
  );
};



const mapDispatch = { toggleMenu }

export default connect(null, mapDispatch)(MapComponent);
