export function testAction() {
  return function(dispatch){
    setTimeout(() => {
      dispatch({
        type: 'TEST',
      })
    }, 1000);
  }
}
