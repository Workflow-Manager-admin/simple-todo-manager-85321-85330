import React from 'react';

// PUBLIC_INTERFACE
const TodoItem = ({ todo, onEdit, onDelete, onToggle, showActions = true }) => {
  /**
   * Individual todo item component with proper SVG icons
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
          {/* Edit Icon */}
          <button 
            className="todo-action edit" 
            onClick={() => onEdit(todo.id)}
            aria-label={`Edit ${todo.title}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path 
                d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61z" 
                fill="currentColor"
              />
              <path 
                d="M11.75 3.25L12.75 4.25" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Delete Icon */}
          <button 
            className="todo-action delete" 
            onClick={() => onDelete(todo.id)}
            aria-label={`Delete ${todo.title}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path 
                d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75z" 
                fill="currentColor"
              />
              <path 
                d="M8 0a1.75 1.75 0 00-1.75 1.75V3H4.25a.75.75 0 000 1.5h.75v6.75A1.75 1.75 0 006.75 13h2.5A1.75 1.75 0 0011 11.25V4.5h.75a.75.75 0 000-1.5H9.75V1.75A1.75 1.75 0 008 0z" 
                fill="currentColor"
              />
            </svg>
          </button>

          {/* Complete Icon */}
          <button 
            className="todo-action check" 
            onClick={() => onToggle(todo.id)}
            aria-label={`Mark ${todo.title} as complete`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle 
                cx="10" 
                cy="10" 
                r="9" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                fill="none"
              />
              <path 
                d="M6 10l3 3 6-6" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
