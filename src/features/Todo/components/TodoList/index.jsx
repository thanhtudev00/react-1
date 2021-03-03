import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoList.propTypes = {
    todoList:PropTypes.array,
};

TodoList.defaultProps = {
    todoList: []
}

function TodoList({ todoList }) {
    // const {} = props;
    return (
        <ul>
            {todoList.map(todo =>(
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;