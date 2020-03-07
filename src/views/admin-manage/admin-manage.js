import {
  Message
} from 'element-ui'
export const adminManage = {
  data() {
    return {
      // isCollapse:false
      dialogFormVisible: false,
      userId: this.storage.getItem('userId'),
      centerDialogVisible: false,
      menus: [],
      form: {
        newPwd: null,
        newPwdAgain: null
      },
      mianStyle: {
        marginTop: '10px',
        height: '440px'

      }
    }
  },
  created() {
    this.mianStyle.height = screen.availHeight - 424 + 'px'
  },
  methods: {
    modifyPwdAction() {
      if (this.form.newPwd === this.form.newPwdAgain) {
        let body = {
          // id: this.storage.getItem('userId'),
          name:"pangagou",
          password: this.form.newPwd,
        }
        this.POST("/api/bussiness/updatePassW/"+this.storage.getItem('userId'), body).then(res => {
          this.dialogFormVisible = false
          Message({
            showClose: true,
            message: res.result.message,
            type: 'success',
            duration: 1000
          })
        }).catch(error => {
          Message({
            showClose: true,
            message: error,
            type: 'error',
            duration: 1000
          })
        })
      } else {
        Message({
          showClose: true,
          message: "两次输入不相等，请重新修改",
          type: 'error',
          duration: 1000
        })
      }
    },
    modifyPwd() {
      this.dialogFormVisible = true
      this.centerDialogVisible = false
    },
    userInfo() {
      this.$router.push({
        path: '/admin/sellerInfo'
      })
      this.centerDialogVisible = false
    },
    exit() {
      this.storage.removeItem('userId')
      this.storage.removeItem('token')
      this.storage.removeItem('role')
      this.$router.push({
        path: "/"
      })
    },
    popover() {
      if (this.centerDialogVisible == false) {
        this.centerDialogVisible = true
      } else {
        this.centerDialogVisible = false
      }
    },
    pageActions() {
      this.menus = [{
        name: '商家信息',
        path: '/admin/sellerInfo',
        icon: "fa fa-braille"
      },{
        name:'商品管理',
        path:'/admin/merchandiseManagement',
        icon:'fa fa-shopping-cart'
      },{
        name:'销量监控',
        path:'/admin/salesManage',
        icon:'fa fa-line-chart'
      },{
        name:'顾客反馈',
        path:'/admin/clientFeedback',
        icon:'fa fa-bullhorn'
      }]
      //   if (1==1){
      //       this.menus=[]
      //   } else {
      //     Message({
      //       showClose: true,
      //       message: "系统发生错误",
      //       type: 'error',
      //       duration: 1000
      //     })
      //   }
    }

  },
  mounted() {
    this.pageActions()
  },
}