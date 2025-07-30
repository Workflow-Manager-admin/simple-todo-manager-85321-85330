import React from 'react';

// PUBLIC_INTERFACE
class ErrorBoundary extends React.Component {
  /**
   * Error boundary component to catch and handle React errors
   */
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // PUBLIC_INTERFACE
  static getDerivedStateFromError(error) {
    /**
     * Update state so the next render will show the fallback UI
     * @param {Error} error - The error that was thrown
     * @returns {Object} New state
     */
    return { hasError: true };
  }

  // PUBLIC_INTERFACE
  componentDidCatch(error, errorInfo) {
    /**
     * Log error details
     * @param {Error} error - The error that was thrown
     * @param {Object} errorInfo - Error info object
     */
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  // PUBLIC_INTERFACE
  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <div className="error-boundary">
            <h2>Something went wrong</h2>
            <p>We're sorry, but something unexpected happened.</p>
            <button 
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5' }}>
                <summary>Error Details (Development Only)</summary>
                <pre style={{ fontSize: '12px', marginTop: '10px' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
