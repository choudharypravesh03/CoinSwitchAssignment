
export default (state = {}, action) => {
    switch(action.type) {
      case 'HOME':
        return {
          ...state,
          username: action.username
        }
      default:
        return state
    }
  }