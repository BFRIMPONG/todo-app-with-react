import React from 'react'
// import Users from "./Users"

const TodoItem = (props) => {
    return(
        <div className="todo-item">
            <div className="header">
                <h4>{props.tiName}</h4>
                <i onClick={props.deleteItem} title="Delete" className="zmdi zmdi-delete"></i>
            </div>
            <div className="content">
                {props.children}
            </div>
            {/* <div className="users-div">
                <Users colorStyle="blue" userInitial="JA"></Users>
                <Users colorStyle="blue" userInitial="JA"></Users>
                <Users colorStyle="blue" userInitial="JA"></Users>

               


                

            </div> */}
        </div>
    )
}

export default TodoItem