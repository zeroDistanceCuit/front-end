import { Message } from "element-ui";
export const merchandiseManagement = {
    data() {
        return {
            options: [{
                value: 'T-shirt',
                label: 'T裇'
            }, {
                value: 'insert',
                label: '内衣'
            }, {
                value: 'frock',
                label: '上衣'
            }, {
                value: 'pants',
                label: '裤款'
            }, {
                value: 'new',
                label: '其他新款'
            }],
            value: '',
            input: '',
            nums: 1,
            num2:0,
            dialogVisible: false,
            dialogDeleteVisible: false,
            table1: [],
            table2: [],
            shopId: 0
        }
    },
    created() {
        this.hasAddShops()
    },
    methods: {
        //  类型选择还没有完成
        search() {
            this.GET('/api/shops/search?name=' + this.input + '&type=' + this.value).then(res => {
                this.table1 = res.result.data
            }).catch(e=>{
                Message({
                    message: e,
                    duration: 2000,
                    type: "error"
                })
            })
        },
        add(row) {
            this.dialogVisible = true
            this.shopId = row.Id
        },
        addAction() {
            let param = {
                bussinessId: Number(this.storage.getItem("userId")),
                goodsId: this.shopId,
                nums: this.nums
            }
            this.POST('/api/shops/addShops', param).then(res => {
                Message({
                    message: res.result.message,
                    duration: 2000,
                    type: "success"
                })
                this.hasAddShops()
                this.nums=1
            }).catch(e => {
                Message({
                    message: e,
                    duration: 2000,
                    type: "error"
                })
            })
            this.dialogVisible = false
        },
        hasAddShops() {
            this.GET('/api/shops/searchByUserId?bussinessId=' + Number(this.storage.getItem("userId"))).then(res => {
                this.table2 = res.result.data

            }).catch(e=>{
                Message({
                    message: e,
                    duration: 2000,
                    type: "error"
                })
            })
        },
        update(row) {
            this.shopId = row.Id
            this.num2=row.Num
            this.dialogDeleteVisible = true
        },
        updateAction() {
             let param = {
                bussinessId: Number(this.storage.getItem("userId")),
                goodsId: this.shopId,
                nums: this.num2
            }
             this.POST('/api/shops/updateShops', param).then(res => {
                Message({
                    message: res.result.message,
                    duration: 2000,
                    type: "success"
                })
                this.hasAddShops()
                this.nums=1
            }).catch(e => {
                Message({
                    message: e,
                    duration: 2000,
                    type: "error"
                })
            })
            this.dialogDeleteVisible = false
        }
    }
}