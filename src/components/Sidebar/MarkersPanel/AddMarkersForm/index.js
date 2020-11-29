import React from "react";
import { Row, Col, Button, Form, Input } from "antd";
import { addMarker } from '../../../../reducers/Markers';
import { connect } from 'react-redux'

const AddMarkersForm =  ({ addMarker }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = values => {
    addMarker(values);
  };

  return (
    <Form form={form}  onFinish={handleFormSubmit}>
    <Row>
      <Col>
        <Row>
          <Col>
          <Form.Item name="latitude" label="Latitude" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          </Col>
          <Col>
            <Form.Item name="longitude" label="Logitude" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="label" label="Label" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button htmlType="submit">Add Marker</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    </Form>
  );
}

const mapDispatch = { addMarker };

export default connect(null, mapDispatch)(AddMarkersForm);
