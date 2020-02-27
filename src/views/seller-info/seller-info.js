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
      //   let userId=null
      //   if(flag){
      //     userId = this.studentId
      //   }else{
      //     userId = parseInt(localStorage.getItem('userId'))
      //   }
      //   let param = {
      //     studentId: userId
      //   }
      //   this.get('/api/userCourse/selectCourseByStudentId',param).then(res=>{
      //     this.tableData=res.data
      //   })
    }
  },
  mounted() {
this.getPersonalInfo()
   }
}