import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import AppBar from '../components/AppBar';

// PUBLIC_INTERFACE
const EditTodoPage = ({ todo, onUpdate, onCancel }) => {
  /**
   * Edit todo page with form for updating existing todos
   * @param {object} todo - Todo object to edit
   * @param {function} onUpdate - Callback to update todo
   * @param {function} onCancel - Callback to cancel editing
   */
  const [title, setTitle] = useState(todo?.title || '');
  const [detail, setDetail] = useState(todo?.detail || '');

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a title');
      return;
    }
    onUpdate(todo.id, title, detail);
  };

  if (!todo) {
    return (
      <div className="container">
        <StatusBar />
        <AppBar title="Edit Task" onBack={onCancel} />
        <div className="form-container">
          <p>Todo not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <StatusBar />
      <AppBar title="Edit Task" onBack={onCancel} />
      
      <form className="form-container" onSubmit={handleUpdate}>
        <div className="form-group">
          <label className="form-label" htmlFor="editTodoTitle">Title</label>
          <input 
            type="text" 
            id="editTodoTitle"
            className="form-input" 
            placeholder="Enter todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="editTodoDetail">Detail</label>
          <input 
            type="text" 
            id="editTodoDetail"
            className="form-input" 
            placeholder="Enter todo details"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-secondary">Update</button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditTodoPage;
