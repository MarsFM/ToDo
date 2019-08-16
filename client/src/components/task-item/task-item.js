import React from 'react'
import styles from './task-item.module.css';

const TaskItem = (props) => {

    const isChecked = props.isActive;

    return (
        <div className={`${styles.taskItem}`}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input checked={isChecked}
                            onChange={props.onChangeCheckBox} 
                            type="checkbox" />
                    </div>
                    <div className={`${styles.text}`}>
                        <span className={props.isActive ? `${styles.active}` : null}>
                            {props.name}
                        </span>
                    </div>
                    <div className={`input-group-text`}>
                        <button onClick={props.onDeleteTask} className={`btn btn-info`}>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;