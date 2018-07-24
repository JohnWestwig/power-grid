import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { testAction } from './actions';

class GridContainer extends PureComponent {
  render() {
    return <div onClick={this.props.testAction} >Hi</div>;
  }
}

function mapStateToProps(state) {
  return state.grid;
}

function mapDispatchToProps(dispatch) {
  return {
    testAction: () => dispatch(testAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
