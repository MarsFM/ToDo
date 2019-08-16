import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskItem from './task-item';
import {  deleteTaskThunk, updateTaskThunk } from '../../store/todo-reducer';

class TaskItemContainer extends Component {
    
    onChangeCheckBox = () => {
        const idx = this.findTaskId();
        const tasks = this.props.tasks;
        const oldTask = tasks[idx];
        const newTask = {...oldTask, isActive: !oldTask.isActive};
        this.props.putTaskToBD(idx, newTask);
    }

    onDeleteTask = () => {
        const idx = this.findTaskId();
        this.props.deleteTaskToBD(this.props.id, idx);
    }

    findTaskId = () => {
        const tasks = this.props.tasks;
        const idx = tasks.findIndex((task) => task.id === this.props.id);
        return idx;
    }

    render() {
        return (
            <TaskItem 
                      onChangeCheckBox={this.onChangeCheckBox}
                      onDeleteTask={this.onDeleteTask}
                      {...this.props} />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        tasks: state.todo.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTaskToBD: (id, idx) => {
            dispatch(deleteTaskThunk(id, idx));
        },
        putTaskToBD: (idx, newTask) => {
            dispatch(updateTaskThunk(idx, newTask));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItemContainer);