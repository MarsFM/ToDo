import React, { Component } from 'react'
import { connect } from 'react-redux';
import TaskField from './task-field';
import { postTaskThunk } from '../../store/todo-reducer';

class TaskFieldContainer extends Component {
    
    state = {
        textTask: ''
    }

    onChangeText = (textTask) => {
        this.setState({
            textTask
        });
    }

    onAddTask = (task) => {
        this.props.postTaskToBD({
            name: task,
            isActive: false
        });
        this.setState({textTask: ''});
    }

    render() {
        return <TaskField text={this.state.textTask} onChangeText={this.onChangeText} onAddTask={this.onAddTask} />
    }

}

const mapStateToProps = (state) => {
    return { }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postTaskToBD: (body) => {
            dispatch(postTaskThunk(body));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskFieldContainer)