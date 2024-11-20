import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and later
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store
import App from './App'; // Import the main App component
import './styles.css'; // Optional: global styles

// Render the app with Redux store provider wrapping it
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  {/* Connect Redux store to your App */}
    <App />
  </Provider>
);