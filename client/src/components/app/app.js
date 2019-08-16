import React from 'react';
import TaskListContainer from '../task-list/task-list-container';

import styles from './app.module.css';
import TaskFieldContainer from '../task-field/task-field-container';

class App extends React.Component {

  render() {
    return (
      <div className={styles.app}>
        <TaskFieldContainer />
        <TaskListContainer />
      </div>
    );
  }
  
}

export default App;
