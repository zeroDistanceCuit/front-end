const getters = {
    getUserAuthToken(state) {
        return state.userAuthToken
    },
    getUserId(state){
        return state.userId
    }
}

export default getters;