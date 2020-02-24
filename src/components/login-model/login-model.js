export const loginModel = {
    data() {
        return {
            activeName: 'login',
            form: {
                userName: '',
                role: '',
                password: ''
            }
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        onSubmit(){
            console.log(this.form)
            this.form={
                userName: '',
                role: '',
                password: ''
            }
        }
    }
}