const getters = {
    getUserAuthToken(state) {
        return state.userAuthToken
    },
    getUserId(state) {
        return state.userId
    },
    getShops(state) {
        return state.shops
    },
    getShopInfo(state) {
        return state.shopInfo
    },
    getModel(state) {
        return state.modelInfo
    }
}

export default getters;