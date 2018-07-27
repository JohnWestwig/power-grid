import PT from 'prop-types';

export default {
  id: PT.number.isRequired,
  squares: PT.array.isRequired,
  size: PT.shape({
    numRows: PT.number.isRequired,
    numCols: PT.number.isRequired,
  }).isRequired,
};
