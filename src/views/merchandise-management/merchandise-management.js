export const merchandiseManagement = {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            input: '',
            nums: 0,
            dialogVisible: false,
            table1: [],
            shopId: 0
        }
    },
    methods: {
        search(){
            // let param={
            //     name:this.input
            // }
            this.GET('/api/shops/search?name='+this.input).then(res=>{
                this.table1=res.result.data
                console.log(res.result.data)
            })
        },
        add(row) {
            this.dialogVisible = true
            this.shopId = row.id
        },
        addAction(id) {
            console.log(id)
        },
        delete(row) {
            this.shopId = row.id
            this.dialogVisible = true
        },
        deleteAction(id) {
            console.log(id)
        }
    }
}