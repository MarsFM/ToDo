import React, { Component } from 'react'
import TaskList from './task-list';
import { connect } from 'react-redux';
import { getTasksThunk } from '../../store/todo-reducer';

class TaskListContainer extends Component {

    componentDidMount() {
        this.props.getTasksThunk();
    }

    render() {
        return (
            <TaskList {...this.props} />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        tasks: state.todo.tasks
    }
}

export default connect(mapStateToProps, {getTasksThunk})(TaskListContainer);