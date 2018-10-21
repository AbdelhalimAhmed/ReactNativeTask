export const getProfile = () => ({
  type: 'GET_PROFILE',
})

export const profileReceived = data => ({
  type: 'PROFILE_RECEIVED',
  data
})