export default function (state = {}, action) {
  switch (action.type) {
    case 'TEST':
      return {
        test: true
      };
    default:
      return state;
  }
}
