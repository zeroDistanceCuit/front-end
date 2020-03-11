import { Message } from "element-ui";
export const merchandiseManagement = {
    data() {
        return {
            options: [{
                value: 't-shirt',
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
            nums: 0,
            dialogVisible: false,
            dialogDeleteVisible: false,
            table1: [],
            shopId: 0
        }
    },
    methods: {
        // TODO 类型选择还没有完成
        search() {
            this.GET('/api/shops/search?name=' + this.input + '&type=' + this.value).then(res => {
                this.table1 = res.result.data
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
            }).catch(e => {
                Message({
                    message: e,
                    duration: 2000,
                    type: "error"
                })
            })
            this.dialogVisible = false
        },
        delete(row) {
            this.shopId = row.id
            this.dialogDeleteVisible = true
        },
        deleteAction(id) {
            console.log(id)
        }
    }
}