import React from 'react';
import { connect } from 'react-redux';

const Tags = props => (
  <div style={{ marginTop: 70 }} >
    <h1>Tags</h1>
    <p>Tags page</p>
  </div>
);

const mapStateToProps = state => ({
  routing: state.routing.location
});

export default connect(mapStateToProps)(Tags);