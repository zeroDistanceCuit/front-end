import Nav from './components/nav/index.vue'
import Footer from "./components/footer/index.vue";
import LoginDiaLog from '../../components/login-model/login-model.vue'
import store from '../../store/user-auth/index'
export const homePage = {
    components: {
        "Nav": Nav,
        "Footer": Footer,
        "LoginDiaLog": LoginDiaLog
    },
    data() {
        return {
            input: '',
            currentPath: this.$route.path,
            gridData: [],
            dialogFormVisible: false,
            loginSatus: localStorage.getItem("token") == null?false:true
        }
    },
    store,
    computed: {
        // getUserAuthToken() {
        //     return this.$store.getters.getUserAuthToken
        // }
    },
    watch: {
        // 添加监听，手动改变activeIndex值，解决vue-router跳转，菜单仍然高亮的bug
        '$route'(to, from) {
            console.log(from)
            this.$refs.menu.currentPath = to.path
        },
        // getUserAuthToken(val) {
        //     this.loginSatus = val == "" ? false : true
        // }

    },
    created() {

    },

    methods: {
        openUserInfo(){
            localStorage.removeItem("token")
        },
        closeDialogData(dialogFormVisible) {
            this.dialogFormVisible = dialogFormVisible
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        search() {
            console.log(this.input)
        },
        openShopCart() {
            if (!this.loginSatus) {
                this.dialogFormVisible = true
            }
        }
    },

    mounted() {
    }
}