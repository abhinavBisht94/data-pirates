
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

function getTodosSuccess(){
    return {
        type : obj.GET_TODOS_SUCESS
    }
}

function getTodosFailure(){
    return {
        type : obj.GET_TODOS_FAILURE
    }
}

