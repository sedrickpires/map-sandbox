import React from 'react';
import { connect } from 'react-redux';

const MarkersList = ({ markers }) => {
console.log("MArkers", markers);
return (
    <table>
      <thead>
      <tr>
        <th>Visibility</th>
        <th>Label</th>
        <th>Coordinates</th>
        <th>Options</th>
      </tr>
      </thead>
      <tbody>
        {
          (markers || []).map((m,i) => (
            <tr key={i}>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>) )
        }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  markers: state.markers
})

export default connect(mapStateToProps, null)(MarkersList);