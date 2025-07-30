import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import AppBar from '../components/AppBar';

// PUBLIC_INTERFACE
const AddTodoPage = ({ onAdd, onBack }) => {
  /**
   * Add todo page with form for creating new todos
   * @param {function} onAdd - Callback to add new todo
   * @param {function} onBack - Callback to go back to main page
   */
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a title');
      return;
    }
    onAdd(title, detail);
    setTitle('');
    setDetail('');
  };

  return (
    <div className="container">
      <StatusBar />
      <AppBar title="Add Task" onBack={onBack} />
      
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="todoTitle">Title</label>
          <input 
            type="text" 
            id="todoTitle"
            className="form-input" 
            placeholder="Enter todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="todoDetail">Detail</label>
          <input 
            type="text" 
            id="todoDetail"
            className="form-input" 
            placeholder="Enter todo details"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">ADD</button>
      </form>
    </div>
  );
};

export default AddTodoPage;
