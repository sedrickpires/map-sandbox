import React from "react";
import { Drawer, Collapse } from "antd";
import { connect } from "react-redux";
import { toggleMenu } from "../../reducers/App";
import MarkersPanel from './MarkersPanel';


const { Panel } = Collapse;

const Sidebar = ({ menuVisible, toggleMenu }) => {
  return (
    <Drawer
      title="Map Sandbox"
      placement="right"
      width={400}
      closable={false}
      onClose={() => toggleMenu()}
      visible={menuVisible}
    >
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Markers" key="1">
          <div>
            <MarkersPanel />
          </div>
        </Panel>
        <Panel header="Polylines" key="2">
          <p></p>
        </Panel>
        <Panel header="Polygons" key="3" disabled>
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
