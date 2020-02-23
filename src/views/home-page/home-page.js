import Nav from './components/nav/index.vue'
import Footer from "./components/footer/index.vue";
export const homePage = {
    components: {
        "Nav": Nav,
        "Footer": Footer
    },
    data() {
        return {
            activeIndex: '1',
            input: '',
            currentPath: this.$route.path
        }
    },
    watch: {
        // 添加监听，手动改变activeIndex值，解决vue-router跳转，菜单仍然高亮的bug
        '$route'(to, from) {
            console.log(from)
            this.$refs.menu.activeIndex = to.path
        }
    },
    created() {

    },

    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        search() {
            console.log(this.input)
        }

    },

    mounted() {

    }
}