export const loginModel = {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
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
            console.log("dsabjhda")
        },
        handleClick() {
            // console.log(tab, event);
        },
        onSubmit() {
            this.loginForm = {
                userName: '',
                role: '',
                password: ''
            }
        }
    }
}