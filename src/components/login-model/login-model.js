import { Message } from "element-ui";
import store from "../../store/user-auth/index";
export const loginModel = {
    inject: ['reload'],
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.registerForm.checkPass !== '') {
                    this.$refs.registerForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.registerForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            activeName: 'login',
            loginForm: {
                userName: '',
                role: 'buyer',
                password: ''
            },
            registerForm: {
                userName: '',
                role: 'buyer',
                pass: '',
                checkPass: '',
                sex: 'man',
                shopName: ''
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ]
            },
            dialogFormVisible: false
        }
    },
    store,
    methods: {
        closeDialog() {
            this.$emit('closeDialogData', this.dialogFormVisible)
        },
        handleClick() {
            // console.log(tab, event);
        },
        onSubmitLogin() {
            let param = {
                name: this.loginForm.userName,
                password: this.loginForm.password
            }
            if (this.loginForm.role === 'buyer') {
                this.POST('/api/user/login', param).then(res => {
                    // TODO 获取用户id并进行保存
                    this.$store.dispatch('setUserAuthToken', res.result.data)
                    this.storage.setItem("token", res.result.data)
                    this.storage.setItem("userId", res.userId)
                    console.log(res.result.data)
                    console.log()
                    this.reload()
                    Message({
                        message: res.result.message,
                        duration: 2000,
                        type: "success"
                    })
                    this.closeDialog()
                }).catch(e => {
                    Message({
                        message: e,
                        duration: 2000,
                        type: "error"
                    })
                })
            } else {
                this.POST('/api/bussiness/login', param).then(res => {
                    // TODO 获取用户id并进行保存
                    this.$store.dispatch('setUserAuthToken', res.result.data)
                    this.storage = window.localthis.storage
                    this.storage.setItem("token", res.result.data)
                    this.storage.setItem("userId", res.userId)
                    this.reload()
                    Message({
                        message: res.result.message,
                        duration: 2000,
                        type: "success"
                    })
                    this.closeDialog()
                }).catch(e => {
                    Message({
                        message: e,
                        duration: 2000,
                        type: "error"
                    })
                })
            }
            // 清空表单
            this.loginForm = {
                userName: '',
                role: '',
                password: ''
            }

        },

        onSubmitRegister() {
            let params = {
                name: this.registerForm.userName,
                password: String(this.registerForm.pass),
            };
            if (this.registerForm.role === "buyer") {
                params.sex = this.registerForm.sex
                this.POST("/api/user/register", params).then(res => {
                    Message({
                        message: res.message,
                        duration: 2000,
                        type: "success"
                    })
                }).catch(e => {
                    Message({
                        message: e,
                        duration: 2000,
                        type: "success"
                    })
                })
                this.closeDialog()
            } else {
                params.shopName = this.registerForm.shopName
                this.POST("/api/bussiness/register", params).then(res => {
                    Message({
                        message: res.message,
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
                this.closeDialog()
            }
            // this.registerForm = {
            //     userName: '',
            //     role: 'buyer',
            //     pass: '',
            //     checkPass: '',
            //     sex: 'man',
            //     shopName: ''
            // }
        }
    }
}