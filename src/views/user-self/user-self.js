import ThreeModel from '@/components/three-model/three-model.vue';
import store from "@/store/user-auth/index";
export const userSelf = {
    components: {
        ThreeModel: ThreeModel
    },
    store,
    created() {
        this.GET('/api/user/getUserInfo?id=' + Number(this.storage.getItem('userId'))).then(res => {
                let modelInfo={
                    type:"user",
                    modelId:res.result.data.UserModelId
                }
                this.$store.dispatch('setModel',modelInfo)
            })
    },
    methods: {
    }
}