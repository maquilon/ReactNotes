import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteActions from '../../actions/noteActions';

import NoteList from './noteList';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(NoteActions.loadingAsync());
  }

  render() {
    return (
      <div style={{ marginTop: 70 }} >
        <h3>Notes</h3>

        <NoteList {...this.props} />
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(Home);