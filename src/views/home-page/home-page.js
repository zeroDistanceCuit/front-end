import Nav from './components/nav/index.vue'
import Footer from "./components/footer/index.vue";
import LoginDiaLog from '../../components/login-model/login-model.vue'
import store from '../../store/user-auth/index'
// import storeShop from "@/store/shops/index";
import { Message } from "element-ui";
export const homePage = {
    inject: ['reload'],
    components: {
        "Nav": Nav,
        "Footer": Footer,
        "LoginDiaLog": LoginDiaLog
    },
    data() {
        return {
            input: '',
            loginRole: this.storage.getItem("role"),
            currentPath: this.$route.path,
            gridData: [],
            dialogFormVisible: false,
            loginSatus: this.storage.getItem("token") == null || this.storage.getItem("token") == "null" ? false : true
        }
    },
    store,
    computed: {
    },
    watch: {
        // TODO 未测试
        // 添加监听，手动改变activeIndex值，解决vue-router跳转，菜单仍然高亮的bug
        // '$route'(to, from) {
        //     console.log(from)
        //     this.$refs.menu.currentPath = to.path
        // },

    },
    created() {

    },

    methods: {
        // TODO 未测试
        // 默认主页
        redirectMain() {
            this.$router.push({
                path: "/mainPage"
            })
        },
        // 退出时讲store里的token重置and移除storage中的token
        logout() {
            if (this.loginSatus && this.loginRole === "buyer") {
                this.$router.push({
                        path: '/'
                    })
                this.storage.removeItem('userId')
                this.storage.removeItem('token')
                this.storage.removeItem('role')
                this.reload()
            } 
        },
        closeDialogData(dialogFormVisible) {
            this.dialogFormVisible = dialogFormVisible
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },

        // TODO 控制不能为空,也不能为空格
        // TODO 主页搜索自动调转
        search() {
            if (this.input != null) {
                this.GET('/api/shops/searchByShopName?name=' + this.input).then(res => {
                    this.$store.dispatch('setShops', res.result.data)
                    this.$router.push({
                        path: '/shopInfo/type'
                    })
                    this.input = ""
                })
            } else {
                Message({
                    message: "请输入搜索内容",
                    duration: 2000,
                    type: "info"
                })
            }

        },
        openShopCart() {
            if (!this.loginSatus || this.loginRole != "buyer") {
                Message({
                message: "请先登录",
                duration: 2000,
                type: "info"
            })
            }else{
                this.$router.push({
                    path:'/user'
                })
            }
        }
    },

    mounted() {
        if(this.loginSatus && this.loginRole === "sell"){
           this.$router.push({
               path:"/admin"
           })
        }
    }
}