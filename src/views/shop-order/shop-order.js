import { Message } from "element-ui";
export const shopOrder={
    data(){
        return{
            orderList:[]
        }
    },
    methods:{
        getOrder(){
            this.GET('/api/cart/search?userId='+Number(this.storage.getItem('userId')) + "&" + "status=finish").then(res=>{
                this.orderList=res.result.data
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
                this.orderList.splice(index,1)
            }).catch(e=>{
                Message({
                    message: e,
                    duration: 2000,
                    type: "error"
                })
            })
        }
    },
    mounted(){
        this.getOrder()
    }
}