import { render } from '@testing-library/react';
import React from 'react';

function TodoItem() {
    return(
        <div className="todo-item">
            <input type="checkbox" className="mr-3" /><span className="bg-red">One </span> <br />
        </div>
    )
}

export default TodoItem;