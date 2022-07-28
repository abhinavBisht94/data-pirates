
import {obj} from './actions'

const init = {

        todoArr  : [],
        isLoading : false,
        isError : false

}


export default function reducer(state=init,action){
    const{type,payload} = action
    switch(type){
        case obj.GET_TODOS_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false
            }

        case obj.GET_TODOS_SUCESS :
            return {
                ...state,
                todoArr : payload,
                isLoading : false,
                isError : true
            }

        case obj.GET_TODOS_FAILURE :
            return {
                ...state,
                isLoading :false,
                isError : true
            }

        default :
        return state
    }
}