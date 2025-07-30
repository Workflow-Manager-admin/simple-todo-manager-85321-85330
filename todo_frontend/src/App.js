import React, { useState, useEffect } from 'react';
import TodoMainPage from './pages/TodoMainPage';
import AddTodoPage from './pages/AddTodoPage';
import EditTodoPage from './pages/EditTodoPage';
import CompletedTasksPage from './pages/CompletedTasksPage';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main Todo Application Component
   * Manages global state and routing between different views
   */
  const [todos, setTodos] = useState([
    { id: 1, title: "Complete project proposal", detail: "Write and submit the quarterly project proposal", completed: false },
    { id: 2, title: "Buy groceries", detail: "Milk, eggs, bread, and vegetables", completed: false },
    { id: 3, title: "Schedule dentist appointment", detail: "Call Dr. Smith's office for cleaning", completed: false },
    { id: 4, title: "Review code changes", detail: "Check pull requests from team members", completed: false },
    { id: 5, title: "Plan weekend trip", detail: "Research hotels and activities", completed: false },
    { id: 6, title: "Update resume", detail: "Add recent projects and skills", completed: false }
  ]);

  const [completedTodos, setCompletedTodos] = useState([
    { id: 101, title: "Morning workout", detail: "30 minutes cardio and stretching", completed: true },
    { id: 102, title: "Read daily news", detail: "Catch up on current events", completed: true },
    { id: 103, title: "Water plants", detail: "Water all indoor and outdoor plants", completed: true }
  ]);

  const [currentView, setCurrentView] = useState('main');
  const [editingTodo, setEditingTodo] = useState(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    const savedCompletedTodos = localStorage.getItem('completedTodos');
    
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Error loading todos from localStorage:', error);
      }
    }
    
    if (savedCompletedTodos) {
      try {
        setCompletedTodos(JSON.parse(savedCompletedTodos));
      } catch (error) {
        console.error('Error loading completed todos from localStorage:', error);
      }
    }
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [completedTodos]);

  // PUBLIC_INTERFACE
  const addTodo = (title, detail) => {
    /**
     * Add a new todo item
     * @param {string} title - The todo title
     * @param {string} detail - The todo detail/description
     */
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      detail: detail.trim() || 'No additional details',
      completed: false
    };
    setTodos(prev => [newTodo, ...prev]);
    setCurrentView('main');
  };

  // PUBLIC_INTERFACE
  const updateTodo = (id, title, detail) => {
    /**
     * Update an existing todo item
     * @param {number} id - The todo ID
     * @param {string} title - The updated title
     * @param {string} detail - The updated detail
     */
    setTodos(prev => prev.map(todo => 
      todo.id === id 
        ? { ...todo, title: title.trim(), detail: detail.trim() || 'No additional details' }
        : todo
    ));
    setEditingTodo(null);
    setCurrentView('main');
  };

  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    /**
     * Delete a todo item
     * @param {number} id - The todo ID to delete
     */
    if (window.confirm('Are you sure you want to delete this todo?')) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  // PUBLIC_INTERFACE
  const toggleTodo = (id) => {
    /**
     * Mark a todo as completed and move it to completed list
     * @param {number} id - The todo ID to complete
     */
    const todo = todos.find(t => t.id === id);
    if (todo) {
      const completedTodo = { ...todo, completed: true };
      setCompletedTodos(prev => [completedTodo, ...prev]);
      setTodos(prev => prev.filter(t => t.id !== id));
    }
  };

  // PUBLIC_INTERFACE
  const editTodo = (id) => {
    /**
     * Start editing a todo item
     * @param {number} id - The todo ID to edit
     */
    const todo = todos.find(t => t.id === id);
    if (todo) {
      setEditingTodo(todo);
      setCurrentView('edit');
    }
  };

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'add':
        return (
          <AddTodoPage 
            onAdd={addTodo}
            onBack={() => setCurrentView('main')}
          />
        );
      case 'edit':
        return (
          <EditTodoPage 
            todo={editingTodo}
            onUpdate={updateTodo}
            onCancel={() => {
              setEditingTodo(null);
              setCurrentView('main');
            }}
          />
        );
      case 'completed':
        return (
          <CompletedTasksPage 
            completedTodos={completedTodos}
            onBack={() => setCurrentView('main')}
          />
        );
      default:
        return (
          <TodoMainPage 
            todos={todos}
            onAdd={() => setCurrentView('add')}
            onEdit={editTodo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            onShowCompleted={() => setCurrentView('completed')}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
    </div>
  );
}

export default App;
