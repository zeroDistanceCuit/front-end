export const constructFilter = (filterObj) =>{
    //大多数情况下filter在界面中的data中是以对象的形式存在
    if(filterObj == null){
        return null
    }else{
        let filter = []
        for(var key in filterObj){    
            if(filterObj[key] != null && filterObj[key].length !== 0){
                filter.push({
                    name:key,
                    value:filterObj[key]
                })
            }
        }    
        if(filter.length !== 0){
            return JSON.stringify(filter)
        }else{
            return null
        }
    }
}