import React from "react";
import { Row, Col, Button, Form, Input } from "antd";
import { addMarker } from '../../../../reducers/Markers';
import { connect } from 'react-redux'

const AddMarkersForm =  ({ addMarker }) => {
  const [form] = Form.useForm();

  const getCoordinates = (coordinatesString) => {
    let coordinatesArr = coordinatesString.split(",");
    return {
      latitude: parseFloat((coordinatesArr[0]).trim()),
      longitude:  parseFloat((coordinatesArr[1]).trim()),
    }
  };

  const handleFormSubmit = values => {
    let markerInfo = {
      visible: true,
      id: Date.now(),
      ...getCoordinates(values.coordinates)
    };
    addMarker(markerInfo);
    form.resetFields();
  };

  return (
    <Form form={form}  onFinish={handleFormSubmit} layout="vertical">
    <Row>
      <Col span={24}>
        <Row>
          <Col span={24}>
          <Form.Item 
            name="coordinates" 
            label="Coordinates" 
            rules={[{ required: true }, { pattern: /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/g, message: 'Enter a valid latitude' }]}
            tooltip="e.g 48.8583701,2.2922926"
            >
            <Input />
          </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col >
            <Button htmlType="submit" className="add-marker-button" type={'primary'}>Add Marker</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    </Form>
  );
}

const mapDispatch = { addMarker };

export default connect(null, mapDispatch)(AddMarkersForm);
