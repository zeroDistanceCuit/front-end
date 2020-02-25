const actions = {
    setUserAuthToken({ state }, value) {
        state.userAuthToken = value
    },
    setUserId({ state }, value) {
        state.userId = value
    }
}

export default actions; 