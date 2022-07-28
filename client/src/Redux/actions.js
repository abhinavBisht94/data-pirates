
import axios from "axios"

export const obj = {
    GET_TODOS_REQUEST : "GET_TODOS_REQUEST",
    GET_TODOS_SUCESS : "GET_TODOS_SUCESS",
    GET_TODOS_FAILURE : "GET_TODOS_FAILURE"
}


function getTodosRequest(){
     return {
        type : obj.GET_TODOS_REQUEST
     }
}

function getTodosSuccess(data){
    return {
        type : obj.GET_TODOS_SUCESS,
        payload : data
    }
}

function getTodosFailure(){
    return {
        type : obj.GET_TODOS_FAILURE
    }
}

export function mainTodosRequest(){
    return (dispatch) => {
         dispatch(getTodosRequest())
         axios.get('http://localhost:8080/todos')
        .then(res=>{
            // console.log(res.data)
            dispatch(getTodosSuccess(res.data))
        })
        .catch(err=>{
            dispatch(getTodosFailure())
            console.log(err)
      })
    }
}