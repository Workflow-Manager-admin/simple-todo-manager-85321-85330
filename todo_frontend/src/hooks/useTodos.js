import { useState, useEffect, useCallback } from 'react';
import TodoService from '../services/todoService';

// PUBLIC_INTERFACE
const useTodos = () => {
  /**
   * Custom hook for managing todos state and operations
   * @returns {Object} Todos state and operations
   */
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load initial data
  useEffect(() => {
    const loadTodos = async () => {
      try {
        setLoading(true);
        const [todoData, completedData] = await Promise.all([
          TodoService.getAllTodos(),
          TodoService.getCompletedTodos()
        ]);
        
        // Set default data if empty
        if (todoData.length === 0) {
          const defaultTodos = [
            { id: 1, title: "Complete project proposal", detail: "Write and submit the quarterly project proposal", completed: false },
            { id: 2, title: "Buy groceries", detail: "Milk, eggs, bread, and vegetables", completed: false },
            { id: 3, title: "Schedule dentist appointment", detail: "Call Dr. Smith's office for cleaning", completed: false }
          ];
          setTodos(defaultTodos);
          await TodoService.saveTodos(defaultTodos);
        } else {
          setTodos(todoData);
        }

        if (completedData.length === 0) {
          const defaultCompleted = [
            { id: 101, title: "Morning workout", detail: "30 minutes cardio and stretching", completed: true },
            { id: 102, title: "Read daily news", detail: "Catch up on current events", completed: true }
          ];
          setCompletedTodos(defaultCompleted);
          await TodoService.saveCompletedTodos(defaultCompleted);
        } else {
          setCompletedTodos(completedData);
        }
      } catch (err) {
        setError('Failed to load todos');
        console.error('Error loading todos:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  // PUBLIC_INTERFACE
  const addTodo = useCallback(async (title, detail) => {
    /**
     * Add a new todo
     * @param {string} title - Todo title
     * @param {string} detail - Todo detail
     * @returns {Promise<boolean>} Success status
     */
    try {
      const validation = TodoService.validateTodo({ title, detail });
      if (!validation.isValid) {
        setError(validation.errors.join(', '));
        return false;
      }

      const newTodo = await TodoService.createTodo({ title, detail });
      const updatedTodos = [newTodo, ...todos];
      setTodos(updatedTodos);
      await TodoService.saveTodos(updatedTodos);
      setError(null);
      return true;
    } catch (err) {
      setError('Failed to add todo');
      console.error('Error adding todo:', err);
      return false;
    }
  }, [todos]);

  // PUBLIC_INTERFACE
  const updateTodo = useCallback(async (id, title, detail) => {
    /**
     * Update an existing todo
     * @param {number} id - Todo ID
     * @param {string} title - Updated title
     * @param {string} detail - Updated detail
     * @returns {Promise<boolean>} Success status
     */
    try {
      const validation = TodoService.validateTodo({ title, detail });
      if (!validation.isValid) {
        setError(validation.errors.join(', '));
        return false;
      }

      const updatedTodos = todos.map(todo => 
        todo.id === id 
          ? { ...todo, title: title.trim(), detail: detail.trim() || 'No additional details' }
          : todo
      );
      setTodos(updatedTodos);
      await TodoService.saveTodos(updatedTodos);
      setError(null);
      return true;
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
      return false;
    }
  }, [todos]);

  // PUBLIC_INTERFACE
  const deleteTodo = useCallback(async (id) => {
    /**
     * Delete a todo
     * @param {number} id - Todo ID
     * @returns {Promise<boolean>} Success status
     */
    try {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
      await TodoService.saveTodos(updatedTodos);
      await TodoService.deleteTodo(id);
      setError(null);
      return true;
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
      return false;
    }
  }, [todos]);

  // PUBLIC_INTERFACE
  const toggleTodo = useCallback(async (id) => {
    /**
     * Mark todo as completed
     * @param {number} id - Todo ID
     * @returns {Promise<boolean>} Success status
     */
    try {
      const todo = todos.find(t => t.id === id);
      if (!todo) return false;

      const completedTodo = { ...todo, completed: true };
      const updatedTodos = todos.filter(t => t.id !== id);
      const updatedCompleted = [completedTodo, ...completedTodos];

      setTodos(updatedTodos);
      setCompletedTodos(updatedCompleted);
      
      await Promise.all([
        TodoService.saveTodos(updatedTodos),
        TodoService.saveCompletedTodos(updatedCompleted)
      ]);
      
      setError(null);
      return true;
    } catch (err) {
      setError('Failed to complete todo');
      console.error('Error completing todo:', err);
      return false;
    }
  }, [todos, completedTodos]);

  // PUBLIC_INTERFACE
  const clearError = useCallback(() => {
    /**
     * Clear error state
     */
    setError(null);
  }, []);

  return {
    todos,
    completedTodos,
    loading,
    error,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    clearError
  };
};

export default useTodos;
