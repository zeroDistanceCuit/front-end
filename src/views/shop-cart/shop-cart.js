import { Message } from "element-ui";
export const shopCart = {
    data() {
        return {
            cartList: [],
            num: 0
        }
    },
    methods: {
        getCartList() {
            this.GET('/api/cart/search?userId=' + Number(this.storage.getItem('userId')) + "&" + "status=onGoing").then(res => {
                this.cartList = res.result.data
            })
        },
        numChange($event) {
            this.num = $event
        },
        finishPay(index,item) {
            console.log(item)
            let time = new Date()
            let param = {
                id: item.Id,
                userId:item.UserId,
                bussinessId:item.BussinessId,
                shopsId: item.Shops.Id,
                status: "finish",
                time: time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate(),
                num: item.Num,
                order: JSON.stringify(Date.parse(time))
            }
            this.POST('/api/cart/order', param).then(res => {
                Message({
                    message: res.result.message,
                    duration: 2000,
                    type: "success"
                })
                this.cartList.splice(index,1)
            }).catch(e=>{
                Message({
                    message: e,
                    duration: 2000,
                    type: "error"
                })
            })
        },
        removeCart(index,id){
            let param={
                id:id
            }
            this.POST('/api/cart/remove',param).then(res => {
                Message({
                    message: res.result.message,
                    duration: 2000,
                    type: "success"
                })
                this.cartList.splice(index,1)
            }).catch(e=>{
                Message({
                    message: e,
                    duration: 2000,
                    type: "error"
                })
            })
        }
    },
    mounted() {
        this.getCartList()

    }
}