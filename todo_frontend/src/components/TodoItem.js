import React from 'react';

// PUBLIC_INTERFACE
const TodoItem = ({ todo, onEdit, onDelete, onToggle, showActions = true }) => {
  /**
   * Individual todo item component
   * @param {object} todo - Todo object with id, title, detail, completed
   * @param {function} onEdit - Callback for edit action
   * @param {function} onDelete - Callback for delete action
   * @param {function} onToggle - Callback for toggle completion
   * @param {boolean} showActions - Whether to show action buttons
   */
  return (
    <div className="todo-item">
      <div className="todo-content">
        <div className="todo-title">{todo.title}</div>
        <div className="todo-subtitle">{todo.detail}</div>
      </div>
      {showActions && (
        <div className="todo-actions">
          <button 
            className="todo-action edit" 
            onClick={() => onEdit(todo.id)}
            aria-label={`Edit ${todo.title}`}
          ></button>
          <button 
            className="todo-action delete" 
            onClick={() => onDelete(todo.id)}
            aria-label={`Delete ${todo.title}`}
          ></button>
          <button 
            className="todo-action check" 
            onClick={() => onToggle(todo.id)}
            aria-label={`Mark ${todo.title} as complete`}
          ></button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
