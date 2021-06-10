import React from 'react'

const TodoList = ({tlName,children}) => {
    return(
        <div className="todo-list">
            <h3>{tlName}</h3>
            
            <div className="todo-items">
                {children}
            </div>
            
            
        </div>
    )
}

export default TodoList