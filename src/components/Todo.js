import React from "react";

const Todo = ({todo,index,markTodo,deleteTodo}) => {
    return (
        <div className="col-4">
            <div className="card text-center">
                <div className="card-header">
                    <h3>Todo: {index + 1}</h3>
                </div>
                <div className="card-body">
                    <h4 className={todo.done ? 'complete':'incomplete'}>{todo.msg}</h4>
                </div>
                <div className="card-footer">
                    <button onClick={()=>{deleteTodo(index)}} className="btn btn-danger float-left">Delete</button>
                    <button onClick={()=>{markTodo(index)}} className="btn btn-info float-right">Mark</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;