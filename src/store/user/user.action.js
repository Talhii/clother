export const setCurrentUser = (user) => {
  const payload = {
    currentUser: user
  }

  return ({ type: 'SET_CURRENT_USER', payload: payload })
}

export const checkUserSession = () => ({ type: 'CHECK_USER_SESSION' })

export const googleSignInStart = () => ({ type: 'GOOGLE_SIGN_IN_START' })

export const emailSignInStart = (email, password) => {
  const payload = {
    email,
    password
  }

  return ({ type: 'EMAIL_SIGN_IN_START', payload: payload })
}

export const signInSuccess = (user) => {
  const payload = {
    currentUser: user
  }

  return ({ type: 'SIGN_IN_SUCCESS', payload: payload })
}

export const signInFailed = (error) => {
  const payload = {
    error: error
  }

  return ({ type: 'SIGN_IN_FAILED', payload: payload })
}

export const signUpStart = (email, password, displayName) => {
  const payload = {
    email,
    password,
    displayName,
  }

  return ({ type: 'SIGN_UP_START', payload: payload })
}

export const signUpSuccess = (user, additionalDetails) => {
  const payload = {
    currentUser: user,
    additionalDetails
  }

  return ({ type: 'SIGN_UP_SUCCESS', payload: payload })
}

export const signUpFailed = (error) => {
  const payload = {
    error: error
  }

  return ({ type: 'SIGN_UP_FAILED', payload: payload })
}

export const signOutStart = () => ({ type: 'SIGN_OUT_START' })

export const signOutSuccess = () => {
  const payload = {
    currentUser: null
  }

  return ({ type: 'SIGN_OUT_SUCCESS', payload: payload })
}
export const signOutFailed = (error) => {
  const payload = {
    error: error
  }

  return ({ type: 'SIGN_OUT_FAILED', payload: payload })
}