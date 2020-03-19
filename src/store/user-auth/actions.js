const actions = {
    setUserAuthToken({ state }, value) {
        state.userAuthToken = value
    },
    setUserId({ state }, value) {
        state.userId = value
    },
    setShops({ state }, value) {
        state.shops = value
    }
}

export default actions; 