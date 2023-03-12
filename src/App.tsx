import logo from './logo.svg';
import styles from './App.module.css';
import { Router } from '@solidjs/router'
import AppRoutes from './AppRoutes'


function App() {
  return (
    <div class="min-h-full">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
