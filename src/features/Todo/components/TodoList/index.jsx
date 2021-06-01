import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    ztodoList: PropTypes.array,
};
TodoList.defaultProps = {
    ztodoList: [],
}
function TodoList({ ztodoList }) {

    return (
        <ul>
            {ztodoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))
            }
        </ul>
    );
}

export default TodoList;