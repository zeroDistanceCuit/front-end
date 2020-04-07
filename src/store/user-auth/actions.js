const actions = {
    setUserAuthToken({ state }, value) {
        state.userAuthToken = value
    },
    setUserId({ state }, value) {
        state.userId = value
    },
    setShops({ state }, value) {
        state.shops = value
    },
    setShopInfo({ state }, value) {
        state.shopInfo = value
    },
    setModel({ state }, value) {
        state.modelInfo = value
    }
}

export default actions; 