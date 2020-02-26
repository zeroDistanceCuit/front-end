export const sellerInfo = {
  data() {
    return {
      username: null,
      role: null,
      class: null,
      tel: null,
      stuNumber: null,
      sex: null,
      startDate:null,
      studentId:null,
      tableData: []
    }
  },
  created() {
  },
  methods: {
    isHaveStudentId(){
      this.studentId=this.$route.query.userId
      // console.log(this.studentId)
      if(this.$route.query.userId != null){
        this.getPersonalInfo(1)
        this.getCourseGradeById(1)
      }else{
        this.getPersonalInfo(0)
        this.getCourseGradeById(0)
      }
    },
    getPersonalInfo() {
    //   let userId=null
    //   if(flag){
    //     userId = this.studentId
    //   }else{
    //     userId = parseInt(localStorage.getItem('userId'))
    //   }
    //   let param = {
    //     userId: userId
    //   }
    //   this.GET('/api/user/find', param).then(res => {
    //     this.username=res.data.username,
    //     this.role=res.data.roleByRoleId.role
    //     this.sex=res.data.sex == 1?'男':'女'
    //     this.startDate=res.data.startDate
    //     this.tel=res.data.tel,
    //     this.stuNumber=res.data.studentId

    //   })
    },
    getCourseGradeById(){
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
  mounted() {}
}