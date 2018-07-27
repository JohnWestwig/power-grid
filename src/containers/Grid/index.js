import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateSquare, focusSquare, focusNeighbor } from './actions'
import { squares } from './selectors'
import Grid from '../../components/Grid'

class GridContainer extends PureComponent {
  render() {
    return <Grid {...this.props} />
  }
}

const mapStateToProps = state => ({
  ...state.grid,
  squares: squares(state),
})

export default connect(
  mapStateToProps,
  { updateSquare, focusSquare, focusNeighbor }
)(GridContainer)
