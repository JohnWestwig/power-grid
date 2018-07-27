import { combineReducers } from 'redux';
import gridReducer from '../Grid/reducer';

/* Data model
{
  grid: {
    id: number,
    squares: [...squareIds]
    size: {
      numRows: number,
      numCols: number,
    },
  },
  squares: [...squareIds]

}
*/

export default combineReducers({
  grid: gridReducer,
});
