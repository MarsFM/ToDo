import React from 'react';
import styles from './task-field.module.css';

const TaskField = (props) => {

    const addTask = () => {
        props.onAddTask(props.text);
    }
    
    const changeTextTask = (event) => {
        const textTask = event.target.value;
        props.onChangeText(textTask);
    }

    return (
        <div className={styles.taskField}>
            <h1 className={styles.taskField__title}>ToDoTask</h1>
            <div className={`row`}>
                <input type='text' 
                       onChange={changeTextTask} 
                       value={props.text} 
                       className={`${styles.taskField__input} form-control col-8`} 
                       placeholder='Новая задача'/>
                <button onClick={addTask} className={`${styles.taskField__button} btn btn-success col-4`}>Добавить</button>
            </div>
        </div>
    );
}


export default TaskField;