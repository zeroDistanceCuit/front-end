import store from '@/store/user-auth/index'
export const shopInfo={
    data(){
        return{
            shopInfo:{}
        }
    },
    store,
    created(){
        this.shopInfo=this.$store.getters.getShopInfo
    },

    // TODO 通过vuex获取数据
    methods:{

    }
}