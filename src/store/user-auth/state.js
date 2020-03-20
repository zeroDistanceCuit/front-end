const state = {
    // 用户从后端获取的token
    userAuthToken:  window.localStorage.getItem("token"),
    userId:"",
    shops:[],
    shopInfo:{}
}

export default state;
