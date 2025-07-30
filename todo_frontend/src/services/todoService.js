// Todo Service - Handles data operations and potential backend integration

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// PUBLIC_INTERFACE
class TodoService {
  /**
   * Service class for managing todo operations
   * Can be easily extended to integrate with backend API
   */

  // PUBLIC_INTERFACE
  static async getAllTodos() {
    /**
     * Get all todos from storage or API
     * @returns {Promise<Array>} Array of todo objects
     */
    try {
      // For now, use localStorage - can be replaced with API call
      const todos = localStorage.getItem('todos');
      return todos ? JSON.parse(todos) : [];
    } catch (error) {
      console.error('Error fetching todos:', error);
      return [];
    }
  }

  // PUBLIC_INTERFACE
  static async getCompletedTodos() {
    /**
     * Get all completed todos from storage or API
     * @returns {Promise<Array>} Array of completed todo objects
     */
    try {
      const completedTodos = localStorage.getItem('completedTodos');
      return completedTodos ? JSON.parse(completedTodos) : [];
    } catch (error) {
      console.error('Error fetching completed todos:', error);
      return [];
    }
  }

  // PUBLIC_INTERFACE
  static async saveTodos(todos) {
    /**
     * Save todos to storage or API
     * @param {Array} todos - Array of todo objects
     * @returns {Promise<boolean>} Success status
     */
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
      return true;
    } catch (error) {
      console.error('Error saving todos:', error);
      return false;
    }
  }

  // PUBLIC_INTERFACE
  static async saveCompletedTodos(completedTodos) {
    /**
     * Save completed todos to storage or API
     * @param {Array} completedTodos - Array of completed todo objects
     * @returns {Promise<boolean>} Success status
     */
    try {
      localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
      return true;
    } catch (error) {
      console.error('Error saving completed todos:', error);
      return false;
    }
  }

  // PUBLIC_INTERFACE
  static async createTodo(todoData) {
    /**
     * Create a new todo
     * @param {Object} todoData - Todo data {title, detail}
     * @returns {Promise<Object>} Created todo object
     */
    const newTodo = {
      id: Date.now(),
      title: todoData.title.trim(),
      detail: todoData.detail?.trim() || 'No additional details',
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // In a real app, this would be an API call
    // const response = await fetch(`${API_BASE_URL}/todos`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newTodo)
    // });
    // return response.json();

    return newTodo;
  }

  // PUBLIC_INTERFACE
  static async updateTodo(id, todoData) {
    /**
     * Update an existing todo
     * @param {number} id - Todo ID
     * @param {Object} todoData - Updated todo data
     * @returns {Promise<Object>} Updated todo object
     */
    const updatedTodo = {
      ...todoData,
      id,
      updatedAt: new Date().toISOString()
    };

    // In a real app, this would be an API call
    // const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(updatedTodo)
    // });
    // return response.json();

    return updatedTodo;
  }

  // PUBLIC_INTERFACE
  static async deleteTodo(id) {
    /**
     * Delete a todo
     * @param {number} id - Todo ID
     * @returns {Promise<boolean>} Success status
     */
    // In a real app, this would be an API call
    // const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    //   method: 'DELETE'
    // });
    // return response.ok;

    return true;
  }

  // PUBLIC_INTERFACE
  static validateTodo(todoData) {
    /**
     * Validate todo data
     * @param {Object} todoData - Todo data to validate
     * @returns {Object} Validation result {isValid, errors}
     */
    const errors = [];

    if (!todoData.title || !todoData.title.trim()) {
      errors.push('Title is required');
    }

    if (todoData.title && todoData.title.trim().length > 100) {
      errors.push('Title must be less than 100 characters');
    }

    if (todoData.detail && todoData.detail.trim().length > 500) {
      errors.push('Detail must be less than 500 characters');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export default TodoService;
