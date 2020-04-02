import { Message } from "element-ui";
import store from '@/store/user-auth/index'
export const shopInfo = {
    data() {
        return {
            shopInfo: {},
            num: 1
        }
    },
    store,
    created() {
        this.shopInfo = this.$store.getters.getShopInfo
    },

    // TODO 通过vuex获取数据
    methods: {
        numChange(value) {
            if (value == this.shopInfo.Goods.Num) {
                Message({
                    message: "对不起，库存数量已经不足，请等待货物增加！",
                    duration: 2000,
                    type: "warning"
                })
            }
        },
        // TODO 
        addCart() {
            let time=new Date(); 
            let param = {
                userId: Number(this.storage.getItem('userId')),
                num:this.num,
                shopsId:this.shopInfo.Id,
                bussinessId:this.shopInfo.Bussiness.Id,
                status:"onGoing",
                time:time.getFullYear()+"-"+JSON.stringify(Number(time.getMonth())+1)+"-"+time.getDate()
            }
            this.POST("/api/cart/add",param).then(res=>{
               Message({
                        message: res.result.message,
                        duration: 2000,
                        type: "info"
                    })
            })
        }
    },
    mounted() {
        // https://www.cnblogs.com/xujiazheng/p/6287172.html
    }
}