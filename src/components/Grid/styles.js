import styled from 'styled-components';

export default styled.div`
  height: 80vmin;
  width: 80vmin;
  display: grid;
  grid-template-rows: repeat(${props => props.size.numRows}, 1fr);
  grid-template-columns: repeat(${props => props.size.numCols}, 1fr);

`;
