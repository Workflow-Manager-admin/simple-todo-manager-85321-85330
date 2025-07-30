import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import AppBar from '../components/AppBar';
import NavigationBar from '../components/NavigationBar';
import TodoItem from '../components/TodoItem';

// PUBLIC_INTERFACE
const TodoMainPage = ({ todos, onAdd, onEdit, onDelete, onToggle, onShowCompleted }) => {
  /**
   * Main todo page displaying list of active todos with navigation at bottom
   * @param {array} todos - Array of todo objects
   * @param {function} onAdd - Callback to add new todo
   * @param {function} onEdit - Callback to edit todo
   * @param {function} onDelete - Callback to delete todo
   * @param {function} onToggle - Callback to toggle todo completion
   * @param {function} onShowCompleted - Callback to show completed todos
   */
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'completed') {
      onShowCompleted();
    }
  };

  const handleCalendar = () => {
    alert('Calendar feature coming soon!');
  };

  return (
    <div className="container">
      <StatusBar />
      <AppBar 
        title="TODO APP" 
        showCalendar={true}
        onCalendar={handleCalendar}
      />
      
      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="empty-state">
            <p>No todos yet. Add your first todo!</p>
          </div>
        ) : (
          todos.map(todo => (
            <TodoItem 
              key={todo.id}
              todo={todo}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))
        )}
      </div>

      <button className="add-button" onClick={onAdd} aria-label="Add new todo">
      </button>

      <NavigationBar 
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default TodoMainPage;
