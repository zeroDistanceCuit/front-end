import { constructFilter } from '@/utils/filter-construct-helper.js'
import { Message } from 'element-ui'
export class BaseService{

    constructor(){
        
    }
    
    requestSuccess(response,onSuccess){
        if(onSuccess != null){
            onSuccess(response)
        }
    }

    requestError(error,onError){
        if(onError !=null){
            onError(error)
        }
        Message({
            message:error,
            type:'error',
            duration:1000
        })
    }

    request(method,url,param,body,onSuccess,onError){
        const methods = {
            get:this.GET,
            post:this.POST
        }
        let formterParam = null
        if(param != null){ 
            formterParam = {}
            for(let key in param) {
                if(key === 'filter'){
                   formterParam.filter = constructFilter(param.filter)
                }else if( key === 'sort'){
                    formterParam.sort = JSON.stringify(param.sort)
                }else if(key ==='page'){
                    formterParam.page = JSON.parse(JSON.stringify(param.page))
                    if(formterParam.page.totalElements != null){
                        delete formterParam.page.totalElements
                    }
                }else{
                    formterParam[key] = param[key]
                }
            }
        }
        let formterBody = null 
        if(body != null){
            for(let key in body){
                if(body[key] != null){
                    if(formterBody == null){
                       formterBody = {}
                    }
                    formterBody[key] = body[key]
                }
            }
        }
        methods[method](url,formterParam,formterBody).then((response) =>{
            this.requestSuccess(response,onSuccess)
        }).catch((error) =>{
            this.requestError(error,onError)
        })
    }
}

