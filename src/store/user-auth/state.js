const state = {
    // 用户从后端获取的token
    userAuthToken: window.localStorage.getItem("token"),
    userId: "",
    shops: [],
    shopInfo: {},
    modelInfo: {
        modelId: 0,
        type: ''
    }
}

export default state;
