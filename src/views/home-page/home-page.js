import Nav from './components/nav/index.vue'
import Footer from "./components/footer/index.vue";
import LoginDiaLog from '../../components/login-model/login-model.vue'
import store from '../../store/user-auth/index'
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
        redirectMain(){
            this.$router.push({
                path:"/mainPage"
            })
            console.log(this.$route)
        },
        // 退出时讲store里的token重置and移除storage中的token
        openUserInfo() {
            // if (this.loginSatus && this.role === "buyer") {
            //     // this.$route.push("/")
            // }
            if (this.loginSatus && this.loginRole === "sell") {
                this.$router.push("/admin")
            }
        },
        closeDialogData(dialogFormVisible) {
            this.dialogFormVisible = dialogFormVisible
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        // TODO 控制不能为空
        search() {
            if(this.input!=null){
                let param={
                    name:this.input
                }
                this.GET('/api/shops/searchByShopName',param).then(res=>{
                    console.log(res)
                })
            }else{
                Message({
                message: "请输入搜索内容",
                duration: 2000,
                type: "info"
            })
            }
            
        },
        openShopCart() {
            Message({
                message: "请先登录",
                duration: 2000,
                type: "info"
            })
            if (!this.loginSatus) {
                // this.dialogFormVisible = true
            }
        }
    },

    mounted() {
    }
}