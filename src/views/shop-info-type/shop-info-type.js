import store from "@/store/user-auth/index";
export const shopInfoType = {
    props: {
        shopType: {
            type: String
        }
    },
    data() {
        return {
            btnFlag: false,
            money1: 0,
            money2: 0,
            shopName: "",
            shopsList:[]
        }
    },
    store,
    watch: {
        '$store.getters.getShops': {
            handler(cur, old) {
                if (cur != old) {
                    this.getShopsList(cur)
                }
            }
        }
    },
    methods: {
        // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop() {
            const that = this
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if (that.scrollTop === 0) {
                    clearInterval(timer)
                }
            }, 16)
        },

        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop() {
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if (that.scrollTop > 0) {
                that.btnFlag = true
            } else {
                that.btnFlag = false
            }
        },
        getShopsList(shops){
            this.shopsList=shops
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollToTop)
    }
}