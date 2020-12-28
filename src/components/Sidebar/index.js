import React from "react";
import { Drawer, Collapse, Row, Col, Button } from "antd";
import { connect } from "react-redux";
import { toggleMenu } from "../../reducers/App";
import MarkersPanel from './MarkersPanel';
import { MenuUnfoldOutlined } from '@ant-design/icons';


const { Panel } = Collapse;


const renderMenuTitle = (toggleMenu) => (
  <Row>
    <Col span={12}>
      <span className="drawer-title">Map Sandbox</span>
    </Col>
    <Col span={12}>
      <Button icon={<MenuUnfoldOutlined/>} type='primary' style={{float:'right'}} onClick={toggleMenu}/>
    </Col>
  </Row>
)

const Sidebar = ({ menuVisible, toggleMenu }) => {
  return (
    <Drawer
      title={renderMenuTitle(toggleMenu)}
      placement="right"
      width={400}
      closable={false}
      onClose={toggleMenu}
      visible={menuVisible}
      headerStyle={{background: '#1890ff', color: '#FFF'}}
    >
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Markers" key="1">
          <div>
            <MarkersPanel />
          </div>
        </Panel>
        <Panel header="Polylines - Coming soon" key="2" disabled>
          <p></p>
        </Panel>
        <Panel header="Polygons - Coming soon" key="3" disabled>
          <p></p>
        </Panel>
      </Collapse>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  menuVisible: state.app.menuOpen,
});

const mapDispatch = { toggleMenu };

export default connect(mapStateToProps, mapDispatch)(Sidebar);
