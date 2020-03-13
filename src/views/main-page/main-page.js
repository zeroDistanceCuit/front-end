
export const mainPage = {
    data() {
        return {
            lunboData:[{
                id:1,
                img:require('@/assets/lunbo/1.jpg')
            },{
                id:2,
                img:require('@/assets/lunbo/2.jpg')
            },{
                id:3,
                img:require('@/assets/lunbo/3.jpg')
            },{
                id:4,
                img:require('@/assets/lunbo/4.jpg')
            }]
        }
    },
    methods:{
        shopInfo(item){
            console.log(item)
        }
    }
}