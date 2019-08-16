const ADD_TASK = 'ADD_TASK';
const CHANGE_ACTIVE_STATUS = 'CHANGE_ACTIVE_STATUS';
const DELETE_TASK = 'DELETE_TASK';
const SET_TASKS = 'SET_TASKS';

const initialState = {
  tasks: [],
};

export const todo_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [action.task, ...state.tasks],
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.idx),
          ...state.tasks.slice(action.idx + 1),
        ],
      };
    }
    case CHANGE_ACTIVE_STATUS: {
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.idx),
          action.changeTask,
          ...state.tasks.slice(action.idx + 1),
        ],
      };
    }
    case SET_TASKS: {
      return {
        ...state,
        tasks: action.tasks,
      };
    }
    default: {
      return state;
    }
  }
};

export const add_action = task => {
  return {
    type: ADD_TASK,
    task,
  };
};

export const delete_action = idx => {
  return {
    type: DELETE_TASK,
    idx,
  };
};

export const toggle_status_action = (idx, changeTask) => {
  return {
    type: CHANGE_ACTIVE_STATUS,
    idx,
    changeTask,
  };
};

export const set_tasks_action = tasks => {
  return {
    type: SET_TASKS,
    tasks,
  };
};

export const getTasksThunk = () => {
  return dispatch => {
    fetch('/tasks')
      .then(response => response.json())
      .then(tasks => {
        dispatch(set_tasks_action(tasks));
      });
  };
};

export const postTaskThunk = body => {
  return dispatch => {
    fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(res => {
      res.json().then(res => {
        const id = res.insertId;
        let newBody = { id, ...body };
        dispatch(add_action(newBody));
      });
    });
  };
};

export const deleteTaskThunk = (id, idx) => {
  return dispatch => {
    fetch(`/tasks/${id}`, { method: 'DELETE' })
      .then(() => {
        dispatch(delete_action(idx));
      })
      .catch(err => console.error(err));
  };
};

export const updateTaskThunk = (idx, newTask) => {
  const id = newTask.id;
  const isActive = newTask.isActive;
  return dispatch => {
    fetch(`/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, isActive }),
    })
      .then(() => {
        dispatch(toggle_status_action(idx, newTask));
      })
      .catch(err => console.error(err));
  };
};
