import React from 'react';
import TodoList from './TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const list = [{
        id: 1,
        title: 'One'
    },
    {
        id: 2,
        title: 'Two'
    },
    {
        id: 3,
        title: 'Three'
    }, {
        id: 4,
        title: 'Four'
    }];

    return (
        <div>
            <h2>Todo list</h2>
            <TodoList ztodoList={list} />
        </div>
    );
}

export default TodoFeature;