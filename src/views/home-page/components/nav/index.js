export const Nav = {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        }
    },

    created() {

    },

    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },

    mounted() {

    }
}