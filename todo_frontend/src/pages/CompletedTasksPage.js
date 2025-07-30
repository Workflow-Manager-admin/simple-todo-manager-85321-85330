import React from 'react';
import StatusBar from '../components/StatusBar';
import AppBar from '../components/AppBar';
import TodoItem from '../components/TodoItem';

// PUBLIC_INTERFACE
const CompletedTasksPage = ({ completedTodos, onBack }) => {
  /**
   * Completed tasks page displaying finished todos
   * @param {array} completedTodos - Array of completed todo objects
   * @param {function} onBack - Callback to go back to main page
   */
  return (
    <div className="container">
      <StatusBar />
      <AppBar title="Completed Task" onBack={onBack} />
      
      <div className="todo-list completed-todo">
        {completedTodos.length === 0 ? (
          <div className="empty-state">
            <p>No completed tasks yet.</p>
          </div>
        ) : (
          completedTodos.map(todo => (
            <TodoItem 
              key={todo.id}
              todo={todo}
              showActions={false}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CompletedTasksPage;
