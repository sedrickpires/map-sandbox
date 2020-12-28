import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, DeleteOutlined } from '@ant-design/icons';
import './index.scss'
import { removeMarker, toggleMakerVisible } from '../../../../reducers/Markers'


const MarkersList = ({ markers, removeMarker, toggleMakerVisible }) => {

const handleMarkerDelete = useCallback((marker)=>{
  const { id } = marker;
  removeMarker({id});
},[removeMarker]);

const handleMarkerHide = useCallback((marker)=> {
  const { id } = marker;
  toggleMakerVisible({id});
},[toggleMakerVisible]);
 

const getColumns = () => (
  [
    {
      title: 'Visibility',
      dataIndex: 'visible',
      key: 'visibility',
      render: (text, record) => <Button icon={record.visible ? <EyeOutlined /> : <EyeInvisibleOutlined />} type={record.visible ? "primary": "default"} shape="circle" onClick={()=> handleMarkerHide(record)}></Button>
    },
    {
      title: 'Coordiantes',
      dataIndex: 'coordinates',
      key: 'coordinates',
      render: (text, record) => <div className="cooridnates">{`${record.latitude}, ${record.longitude}`}</div>
    },
    {
      title: 'Options',
      key: 'options',
      align: 'center',
      render: (text, record) => (<DeleteOutlined onClick={() => handleMarkerDelete(record)}/>)
    }
  ]
)  

return (
  <Table columns={getColumns()} dataSource={markers} pagination={false}  footer={null} size={'small'} bordered/>
  )
}

const mapStateToProps = state => ({
  markers: state.markers
});

const mapDispatch = { removeMarker, toggleMakerVisible };

export default connect(mapStateToProps, mapDispatch)(MarkersList);