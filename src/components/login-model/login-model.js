import { Message } from "element-ui";

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
                    this.$store.dispatch('setUserAuthToken', res.result.data)
                    let storage = window.localStorage
                    storage.setItem("token", res.result.data)
                    this.reload()
                    Message({
                        message: res.message,
                        duration: 2000,
                        type: "success"
                    })
                    this.closeDialog()
                }).catch(e => {
                    console.log(e)
                })
            }
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
                    console.log(e)
                })
                this.closeDialog()
            }
        }
    }
}