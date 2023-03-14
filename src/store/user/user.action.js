export const setCurrentUser = (user) => {
    const payload = {
      currentUser: user
    }

    return ({type: 'SET_CURRENT_USER', payload: payload})
}