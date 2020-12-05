import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Visibility',
    dataIndex: 'visible',
    key: 'visibility',
    render: (text, record) => <Button icon={record.visible ? <EyeOutlined /> : <EyeInvisibleOutlined />} type={record.visible ? "primary": "default"} shape="circle"></Button>
  },
  {
    title: 'Coordiantes',
    dataIndex: 'coordinates',
    key: 'coordinates',
    render: (text, record) => (`${record.latitude}, ${record.longitude}`)
  },
  {
    title: 'Options',
    key: 'options',
    align: 'center',
    render: (text, record) => (<DeleteOutlined />)
  }
]

const MarkersList = ({ markers }) => {

return (
  <Table columns={columns} dataSource={markers} pagination={null}  footer={null}/>
  )
}

const mapStateToProps = state => ({
  markers: state.markers
})

export default connect(mapStateToProps, null)(MarkersList);