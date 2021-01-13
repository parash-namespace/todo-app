import { render } from '@testing-library/react';
import React from 'react';

function TodoItem(props) {
    return(
        <div className="todo-item">
            <input type="checkbox" className="mr-3" />
            <span className="bg-red">{ props.todo.name }</span> <br />
        </div>
    )
}

export default TodoItem;