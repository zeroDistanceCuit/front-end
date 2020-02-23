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
            input: ''
        }
    },

    created() {

    },

    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        search(){
            console.log(this.input)
        }

    },

    mounted() {

    }
}