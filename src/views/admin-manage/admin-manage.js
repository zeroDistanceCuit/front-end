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
      // TODO 对于密码进行限制，只能为数字和字母
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
        this.POST('/api/bussiness/updatePassW', body).then(res => {
          this.dialogFormVisible = false
          Message({
            showClose: true,
            message: res.msg,
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
      this.reload()
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