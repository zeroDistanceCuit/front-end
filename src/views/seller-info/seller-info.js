import {
  Message
} from 'element-ui'
export const sellerInfo = {
  data() {
    return {
      username: null,
      shopName: null,
      tableData: []
    }
  },
  created() {
  },
  methods: {
    getPersonalInfo() {
      let userId = null
      userId = parseInt(this.storage.getItem('userId'))
      this.GET('/api/bussiness/getOneBussiness/' + userId).then(res => {
        this.username = res.result.data.Name
        this.shopName = res.result.data.ShopName
      }).catch(e => {
        Message({
          showClose: true,
          message: e,
          type: 'error',
          duration: 1000
        })
      })
    },
    getCourseGradeById() {
      this.GET('/api/cart/search?bussinessId=' + this.storage.getItem('userId') + "&status=finish&userId=0").then(res => {
        let data = res.result.data

        // 先取出对象数组的index属性的值，然后根据该值进行操作
        let time = []
        data.forEach(item => {
          time.push(item.Time)
        })
        let newTime = time.filter(function (item, index, array) {
          return array.indexOf(item) === index;
        })
        // 

        newTime.forEach(item=>{
          let sum=0
          let money=0
          data.forEach(it=>{
            if(it.Time==item){
              sum+=it.Num
              money+=Number(it.Shops.Goods.Money)
            }
          })
          this.tableData.push({
            time:item,
            sum:sum+" 件",
            money:"￥ "+money
          })
        })
      })
    }
  },
  mounted() {
    this.getPersonalInfo()
    this.getCourseGradeById()
  }
}