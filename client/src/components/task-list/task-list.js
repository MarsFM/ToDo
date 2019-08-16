import React from 'react';
import styles from './task-list.module.css';
import TaskItemContainer from '../task-item/task-item-container';

const TaskList = (props) => {
    
    const tasks = props.tasks.map((task) => {
        return <TaskItemContainer key={task.id} id={task.id} name={task.name} isActive={task.isActive} />
    });

    return (
        <div className={`${styles.taskList}`}>
            {tasks.length ? tasks : <h3 className={`${styles.taskList__title}`}>Список задач пуст</h3>}
        </div>
    );
}

export default TaskList;