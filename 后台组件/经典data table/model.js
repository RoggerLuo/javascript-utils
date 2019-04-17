import { Model } from 'dvax'
import constants from 'utils/constants'
Model.create({
    namespace: 'current',
    state: {
        data: [],
        courseLabel:'',
        tagsList: [],
        pagination:{
            current:1,
            defaultCurrent: 1,
            pageSize: constants.PAGESIZE,
            total: 0,
            showQuickJumper: true 
        },
        query:{}
    },
    effects:{
        * get({fetch,get,change}){
            const {current,pageSize} = get().pagination
            const skip = current
            const limit = pageSize
            const res = yield fetch(`auth`,{query:{state:'during',...get().query,skip,limit}})
            if(res.hasErrors) return
            yield change('data',res.data.result)
            yield change('pagination.total',res.data.size)
        },
        * changePage({put,fetch,get,change},{pageInfo}){
            yield change('pagination.pageSize',pageInfo.pageSize)
            yield change('pagination.current',pageInfo.current)            
            yield put({type:'get'})
        }
    }
})
