const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return { ...state, loading: true }
    case 'PROFILE_RECEIVED':
      return { ...state, profile: action.data, loading: false }
    default:
      return state
  }
}
export default reducer
