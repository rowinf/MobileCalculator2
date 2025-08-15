import Types from '../Actions/Types'

export const INITIAL_STATE = {
  username: null,
  errorCode: null,
  attempting: false
}

// login attempts
const attempt = (state, action) =>
  ({ ...state, attempting: true })

// successful logins
const success = (state, action) =>
  ({ ...state, attempting: false, errorCode: null, username: action.username })

// login failure
const failure = (state, action) =>
  ({ ...state, attempting: false, errorCode: action.errorCode })

// logout
const logout = (state, action) =>
  ({ ...state, username: null })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN_ATTEMPT]: attempt,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
}

export default (state = INITIAL_STATE, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
